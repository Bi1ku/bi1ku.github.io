import type { ReactNode } from "react";

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

const otherProjects = [
  {
    name: "Slipstream",
    category: "Multiplayer racing game",
    tech: "Java · Processing · Networking",
    description:
      "Built a client-server racing game with synchronized player state, momentum-based driving, drifting, nitro, and terrain-dependent speed limits.",
  },
  {
    name: "SimplyGrades",
    category: "Gradebook prototype",
    tech: "TypeScript · Next.js · Prisma · PostgreSQL",
    description:
      "Built class rosters, assignment and grade entry, configurable grading categories, and dashboard charts around a relational model of teachers, students, and classes. A prototype with unfinished statistics endpoints.",
  },
  {
    name: "FutureVoice",
    category: "Congressional App Challenge",
    tech: "React · TypeScript · Congress.gov API",
    description:
      "Built with Leo Ling for New York’s 10th district. Lets young voters look up congressional representatives and browse bills using filters, pagination, and detail views.",
  },
  {
    name: "bik",
    category: "Compiler · In progress",
    tech: "C · MIPS Assembly · CMake",
    description:
      "Implemented a lexer, AST parser, variable environments, and constant folding for a compiler targeting MIPS assembly. Code generation is incomplete.",
  },
  {
    name: "ascii",
    category: "Video conversion",
    tech: "Python",
    description:
      "Converts video frames into ASCII characters and plays the result in a terminal.",
  },
];
const experience = [
  {
    dates: "Sep 2026 — Present",
    organization: "Harvard Undergraduate Aerospace Collective",
    role: "Engineer · Rocketry",
  },
  {
    dates: "Sep 2026 — Present",
    organization: "Harvard Undergraduate Robotics Club",
    role: "Electrical / Software Engineer",
  },
  {
    dates: "Sep 2023 — Jul 2026",
    organization: "Stuy Fusion · FTC 479",
    role: "Vice President",
    description:
      "Developed AprilTag localization and autonomous alignment, multithreaded controls, and a reusable command-based architecture. Built the team website and taught workshops for a team of about 32 members.",
  },
  {
    dates: "Feb 2022 — Sep 2025",
    organization: "BCTCio",
    role: "Full-Stack Web Developer Intern",
    description:
      "Maintained a UI library with 30+ components and helped develop Future Sphere Education’s portal for 4,000+ active students, 300+ classes, and 12+ teachers.",
  },
  {
    dates: "Jun — Sep 2024",
    organization: "NYC Department of Health and Mental Hygiene",
    role: "Information Technology Specialist Intern",
    description:
      "Supported recovery across 3,000+ computers after the CrowdStrike outage, imaged 62 PCs, and audited hardware inventory.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#">
          Owen Shi
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="mailto:2008owenshi@gmail.com">
            Contact <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">
            Electrical Engineering &amp; Computer Science · Harvard College
          </p>
          <h1 id="intro-title">Owen Shi</h1>
          <p className="intro-description">
            I build compilers, robotics software, and web applications. I’m a
            freshman at Harvard, working with the undergraduate rocketry and
            robotics teams.
          </p>
          <div className="links">
            <External href="https://github.com/Bi1ku">GitHub</External>
            <a href="mailto:2008owenshi@gmail.com">
              Email <span aria-hidden="true">↗</span>
            </a>
            <a href="/Owen_Shi_Resume.pdf" target="_blank" rel="noreferrer">
              Résumé <span className="link-note">PDF ↗</span>
            </a>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 id="projects-title">Projects</h2>
            <span>Software &amp; engineering</span>
          </div>
          <article className="featured-project" id="requiem">
            <div className="project-copy">
              <p className="eyebrow">Language design</p>
              <h3>Requiem</h3>
              <p className="project-summary">
                An object-oriented language, compiler, and virtual machine
                written in C11.
              </p>
              <p>
                The compiler turns source code into portable bytecode through a
                lexer, Pratt parser, AST optimizer, and bytecode compiler. A
                stack-based virtual machine executes the result.
              </p>
              <ul>
                <li>
                  Classes, inheritance, lexical scopes, and first-class
                  functions.
                </li>
                <li>
                  Constant folding, dead-code elimination, and bounded loop
                  unrolling.
                </li>
                <li>Disassembler, embeddable C API, and regression tests.</li>
              </ul>
              <p className="tech">C11 · Bytecode · Virtual machines</p>
              <div className="links">
                <External href="https://github.com/Bi1ku/requiem">
                  Source code
                </External>
                <External href="https://github.com/Bi1ku/requiem/blob/main/docs/architecture.md">
                  Architecture
                </External>
              </div>
            </div>
            <figure className="code-figure">
              <div className="figure-label">Requiem · example program</div>
              <pre>
                <code>{`class Counter {
    init(start) {
        this.value = start;
    }
    increment() {
        this.value = this.value + 1;
    }
    get() { return this.value; }
}

var counter = Counter(40);
counter.increment();
counter.increment();
println(counter.get());`}</code>
              </pre>
              <figcaption>
                <span>Output</span>
                <strong>42</strong>
              </figcaption>
            </figure>
          </article>

          <article className="rocket-project" id="model-rocket">
            <div className="project-copy">
              <p className="eyebrow">Design &amp; fabrication</p>
              <h3>Model rocket</h3>
              <p className="project-summary">
                Designed, manufactured, and flight-tested a C6-5 model rocket.
              </p>
              <p>
                I used OpenRocket for the rocket design and Onshape for CAD,
                then made components with laser cutting and 3D printing. The
                flight test captured both launch and parachute deployment.
              </p>
              <p className="tech">
                OpenRocket · Onshape · Laser cutting · 3D printing
              </p>
            </div>
            <div className="rocket-media">
              <figure>
                <a
                  className="cad-link"
                  href="/projects/rocket/cad.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/projects/rocket/cad.png"
                    width="1253"
                    height="450"
                    loading="lazy"
                    alt="Onshape CAD assembly of the rocket, showing the nose cone, body, internal components, and fins."
                  />
                </a>
                <figcaption>
                  Onshape assembly and internal components ·{" "}
                  <a
                    href="/projects/rocket/cad.png"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View full size ↗
                  </a>
                </figcaption>
              </figure>
              <figure>
                <video
                  controls
                  playsInline
                  preload="none"
                  aria-label="Model rocket launch and parachute deployment"
                >
                  <source src="/projects/rocket/launch.mp4" type="video/mp4" />
                  Your browser does not support video.{" "}
                  <a href="/projects/rocket/launch.mp4">
                    Download the launch video
                  </a>
                  .
                </video>
                <figcaption>
                  Flight test · Launch and parachute deployment
                </figcaption>
              </figure>
            </div>
          </article>

          <article className="featured-project" id="springforge">
            <div className="project-copy">
              <p className="eyebrow">Physics simulation</p>
              <h3>SpringForge</h3>
              <p className="project-summary">
                An interactive simulator for the rotational motion of
                spring-wheel systems.
              </p>
              <p>
                Configure up to three springs and adjust mass, radius,
                attachment points, and spring constants. Compare the small-angle
                approximation with a nonlinear model, with live plots of angular
                position, velocity, and acceleration.
              </p>
              <p>
                A polygon editor calculates the center of mass and moment of
                inertia of custom shapes using the shoelace formula and
                parallel-axis theorem.
              </p>
              <p className="tech">Python · VPython · Numerical integration</p>
              <div className="links">
                <External href="https://github.com/Bi1ku/SpringForge">
                  Source code &amp; setup
                </External>
              </div>
            </div>
            <div className="project-notes">
              <h4>What you can explore</h4>
              <dl>
                <div>
                  <dt>System</dt>
                  <dd>
                    One to three springs attached to a rotating wheel or custom
                    polygon.
                  </dd>
                </div>
                <div>
                  <dt>Model</dt>
                  <dd>
                    Small-angle approximation or nonlinear rotational motion.
                  </dd>
                </div>
                <div>
                  <dt>Measurements</dt>
                  <dd>
                    Angular position, velocity, and acceleration over time.
                  </dd>
                </div>
              </dl>
            </div>
          </article>

          <div className="more-projects">
            <h3>Other projects</h3>
            <div className="project-grid">
              {otherProjects.map((project) => (
                <article key={project.name}>
                  <p className="eyebrow">{project.category}</p>
                  <h4>
                    <External href={`https://github.com/Bi1ku/${project.name}`}>
                      {project.name}
                    </External>
                  </h4>
                  <p>{project.description}</p>
                  <p className="tech">{project.tech}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <h2 id="experience-title">Experience</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.organization}>
                <p className="dates">{item.dates}</p>
                <div>
                  <h3>{item.organization}</h3>
                  <p className="role">{item.role}</p>
                  {item.description && <p>{item.description}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="about" aria-labelledby="about-title">
          <div className="section-heading">
            <h2 id="about-title">About</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                I’m from Queens, New York, and graduated from Stuyvesant High
                School. I’m now studying Electrical Engineering and Computer
                Science at Harvard College in Cambridge, Massachusetts.
              </p>
              <a href="/Owen_Shi_Resume.pdf" target="_blank" rel="noreferrer">
                View résumé <span className="link-note">PDF ↗</span>
              </a>
            </div>
            <div>
              <h3>Tools I use</h3>
              <p>
                C, C++, Java, Python, TypeScript, React, Next.js, PostgreSQL,
                Prisma, CMake, and Neovim.
              </p>
              <h3>Contact</h3>
              <a href="mailto:2008owenshi@gmail.com">2008owenshi@gmail.com</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>Owen Shi</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}
