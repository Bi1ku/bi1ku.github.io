# Codex handoff

## Portfolio work in progress

- Add a HUAC Rocketry Avionics · IREC 10K project entry. Current work: printing the PCB, running simulations, and stress testing. The avionics are specially designed for dual-deployment recovery.
- Add subtle, minimal transitions to the portfolio and respect `prefers-reduced-motion`.
- Review `app/page.tsx` and `app/globals.css` before editing; this session made changes to both files, but they were not committed.

## Git status and next steps

- The repo is on `main`, tracking `origin/main` (`git@github.com:Bi1ku/bi1ku.github.io.git`).
- A `git pull --rebase --autostash` was attempted, but failed because GitHub SSH authentication returned `Permission denied (publickey)`. Resolve GitHub SSH access or use an authenticated HTTPS remote, then pull and inspect the updated project before continuing.
- At handoff time, `app/page.tsx` and `app/globals.css` had local edits, and `rocket.mov` and `rocket.png` were untracked. Preserve and inspect those files before any cleanup or overwrite.
- A local Vite preview was started at `http://localhost:5173`; it may no longer be running in a later session.
