"""Render a paced GIF of real Requiem commands. Requires Pillow and a built repo.
Usage: python3 scripts/generate-requiem-demo.py /path/to/requiem
"""
from pathlib import Path
import json
import subprocess
import sys
import tempfile
from PIL import Image, ImageDraw, ImageFont

repo = Path(sys.argv[1]).resolve()
output = Path(__file__).resolve().parents[1] / 'public/projects/requiem'
output.mkdir(parents=True, exist_ok=True)
source = '''class Counter {
    init(start) {
        this.value = start;
    }
    increment() {
        this.value = this.value + 1;
    }
    get() {
        return this.value;
    }
}

var counter = Counter(40);
counter.increment();
counter.increment();
println(counter.get());'''
with tempfile.TemporaryDirectory() as work:
    Path(work, 'counter.rq').write_text(source + '\n')
    def execute(*args):
        return subprocess.run([str(repo / 'bin/requiem'), *args], cwd=work,
                              capture_output=True, text=True, check=True).stdout
    compiled = execute('compile', 'counter.rq', '-o', 'counter.rqb')
    result = execute('exec', 'counter.rqb')
    disassembly = execute('disasm', 'counter.rqb')
assert result.strip() == '42', result
commit = subprocess.check_output(['git', '-C', str(repo), 'rev-parse', 'HEAD'], text=True).strip()
(output / 'capture.json').write_text(json.dumps({'commit': commit, 'source': source,
    'compile_stdout': compiled, 'exec_stdout': result, 'disassembly': disassembly,
    'note': 'Actual command output; animation timing is paced for readability, not a performance measurement.'}, indent=2) + '\n')
fontpath = '/System/Library/Fonts/Menlo.ttc'
mono = ImageFont.truetype(fontpath, 18)
small = ImageFont.truetype(fontpath, 15)
heading = ImageFont.truetype(fontpath, 31)
label = ImageFont.truetype(fontpath, 17)
frames, durations = [], []

def frame(stage, lines, duration):
    im = Image.new('RGB', (1280, 760), '#faf9f6')
    d = ImageDraw.Draw(im)
    d.text((42, 30), 'Requiem', font=heading, fill='#252a2e')
    d.text((42, 78), 'Source code → portable bytecode → virtual machine', font=label, fill='#646970')
    d.line((42, 120, 1238, 120), fill='#dcdedb', width=2)
    d.text((60, 146), 'counter.rq', font=label, fill='#285b75')
    d.text((692, 146), stage, font=label, fill='#285b75')
    d.rounded_rectangle((42, 185, 656, 681), radius=5, fill='#f0f1ee')
    d.rounded_rectangle((674, 185, 1238, 681), radius=5, fill='#f0f1ee')
    for i, line in enumerate(source.splitlines()):
        d.text((57, 205 + i * 27), f'{i+1:2}', font=small, fill='#949a9e')
        d.text((94, 203 + i * 27), line, font=mono, fill='#34556c')
    for i, (line, color) in enumerate(lines):
        d.text((692, 205 + i * 29), line, font=mono, fill=color)
    d.text((42, 711), 'Actual compiler output · playback paced for readability', font=small, fill='#646970')
    frames.append(im)
    durations.append(duration)

ink, accent = '#252a2e', '#285b75'
frame('1 / Compile', [], 1000)
command = '$ requiem compile counter.rq -o counter.rqb'
for n in range(4, len(command), 4):
    frame('1 / Compile', [(command[:n], accent)], 70)
# Wrap at a shell continuation to preserve readable font size.
compile_lines = [('$ requiem compile counter.rq', accent), ('    -o counter.rqb', accent)]
frame('1 / Compile', compile_lines, 1600)
exec_lines = compile_lines + [('', ink), ('$ requiem exec counter.rqb', accent)]
frame('2 / Execute', exec_lines, 500)
frame('2 / Execute', exec_lines + [(result.strip(), ink)], 2600)
listing = [('$ requiem disasm counter.rqb', accent), ('', ink)]
for line in disassembly.splitlines()[:11]:
    listing.append((line, ink))
    frame('3 / Inspect bytecode', listing[:], 140)
frame('3 / Inspect bytecode', listing + [('', ink), ('… excerpt of disassembly', '#646970')], 3000)
frames[-1].save(output / 'demo-poster.png')
frames[0].save(output / 'demo.gif', save_all=True, append_images=frames[1:],
               duration=durations, loop=0, optimize=True)
print(f'{output / "demo.gif"}: {sum(durations)/1000:.1f}s, {len(frames)} frames')
