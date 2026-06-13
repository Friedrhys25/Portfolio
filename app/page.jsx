"use client";

import { useEffect, useRef, useState } from "react";
import StackIcon from "tech-stack-icons";

const navItems = ["Profile", "Stack", "Experience", "Contact"];

const stack = [
  {
    title: "Frontend",
    icons: ["html5", "css3", "js", "react", "tailwindcss", "nextjs2"],
  },
  {
    title: "Backend",
    icons: ["nodejs", "expressjs", "python", "postman", "docker"],
  },
  {
    title: "Mobile",
    icons: ["android", "reactnative"],
  },
  {
    title: "Tools",
    icons: ["git", "github", "vercel", "render"],
  },
  {
    title: "AI Workflow",
    icons: ["claude", "openai", "antigravity", "copilotgithub", "cursor", "qwen"],
    wide: true,
  },
];

function Reveal({ children, className = "", delay = 0, as: Tag = "div", ...props }) {
  const nodeRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.16, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={nodeRef}
      className={`${className} ${
        visible ? "animate-reveal" : "opacity-0 translate-y-10"
      }`}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default function Home() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-20 opacity-[0.18] mix-blend-multiply [background-image:repeating-radial-gradient(circle_at_0_0,rgba(17,17,15,0.5)_0_1px,transparent_1px_4px)]"
      />

      <header className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-line bg-paper/85 px-5 py-4 backdrop-blur-xl md:px-14">
        <a
          href="#top"
          aria-label="Rhys Jonathan Abalon home"
          className="grid h-[52px] w-[52px] place-items-center border-2 border-ink bg-ink font-display text-lg font-black tracking-[-0.08em] text-paper [transform:skew(-8deg)]"
        >
          RJA
        </a>
        <nav
          aria-label="Primary navigation"
          className="grid grid-cols-2 gap-x-5 gap-y-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-muted sm:flex sm:gap-8 sm:text-xs"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:origin-right after:scale-x-0 after:bg-brass after:transition-transform hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main id="top" className="overflow-hidden">
        <section className="grid min-h-[calc(100vh-90px)] grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-[minmax(140px,0.34fr)_minmax(0,1fr)] md:px-14 md:py-32">
          <Reveal className="md:col-start-1">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brass">
              Computer Science · Data Science · Web Engineering
            </p>
            <h1 className="mt-5 font-display text-[clamp(4.4rem,15vw,14rem)] font-black leading-[0.9] tracking-[-0.075em] md:w-min">
              Rhys Jonathan Abalon
            </h1>
            <p className="mt-7 max-w-2xl text-[clamp(1.1rem,2vw,1.45rem)] leading-relaxed text-muted">
              Aspiring web developer and software engineer building sharp
              digital products, practical automations, and full-stack web
              experiences.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center border-2 border-ink bg-ink px-5 font-black uppercase tracking-[0.08em] text-paper transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-sm"
              >
                Work With Me
              </a>
              <a
                href="#stack"
                className="inline-flex min-h-12 items-center border-2 border-ink px-5 font-black uppercase tracking-[0.08em] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-sm"
              >
                View Stack
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            as="aside"
            className="grid min-h-0 rotate-[1.2deg] border-2 border-ink bg-panel shadow-hard md:col-start-2 md:min-h-[520px]"
          >
            {[
              ["23", "Years old"],
              ["BSCS", "Laguna University"],
              ["3 mo.", "Web development internship"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`flex flex-col gap-6 p-7 sm:flex-row sm:items-end sm:justify-between md:p-10 ${
                  index !== 2 ? "border-b-2 border-ink" : ""
                }`}
              >
                <span className="font-display text-[clamp(2.6rem,7vw,7rem)] font-black leading-[0.85] tracking-[-0.08em]">
                  {value}
                </span>
                <p className="m-0 max-w-40 font-black uppercase text-muted sm:text-right">
                  {label}
                </p>
              </div>
            ))}
          </Reveal>
        </section>

        <section
          id="profile"
          className="grid grid-cols-1 gap-8 px-5 py-20 md:grid-cols-[minmax(140px,0.34fr)_minmax(0,1fr)] md:gap-20 md:px-14 md:py-36"
        >
          <Reveal className="flex items-start gap-3 font-black uppercase tracking-[0.16em] text-muted">
            <span className="text-brass">01</span>
            <p className="m-0">Profile</p>
          </Reveal>
          <Reveal className="max-w-5xl border-2 border-ink bg-panel/75 p-8 md:p-16">
            <h2 className="font-display text-[clamp(2.7rem,8vw,7.6rem)] font-black leading-[0.9] tracking-[-0.075em]">
              Builder focused on web systems and automation.
            </h2>

            <div className="mt-6 flex items-center gap-4">
              <StackIcon name="nextjs" />
              <StackIcon name="reactnative" />
              <a
                href="/api/cv"
                className="inline-flex items-center ml-4 rounded border-2 border-ink bg-ink px-4 py-2 font-black uppercase text-paper"
              >
                Download CV
              </a>
            </div>

            <p className="mt-7 text-[clamp(1rem,1.7vw,1.24rem)] leading-loose text-muted">
              I studied Bachelor of Science in Computer Science at Laguna
              University with a specialization in Data Science. My current path
              is focused on becoming a web developer or software engineer, with
              hands-on practice across front-end interfaces, back-end services,
              mobile development, deployment, and Python automation.
            </p>
          </Reveal>
        </section>

        <section id="stack" className="bg-panel/80 px-5 py-20 text-ink md:px-14 md:py-36">
          <Reveal className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brass">
              Technical Range
            </p>
            <h2 className="font-display text-[clamp(2.7rem,8vw,7.6rem)] font-black leading-[0.9] tracking-[-0.075em]">
              Stack built for shipping complete products.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
            {stack.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 80}
                as="article"
                className={`min-h-64 border-2 border-paper/70 bg-[#171713] p-7 transition hover:-translate-y-2 hover:bg-[#201d17] ${
                  item.wide ? "xl:col-span-2" : ""
                }`}
              >
                <h3 className="mb-5 font-display text-[clamp(1.7rem,3vw,3.2rem)] font-black leading-none tracking-[-0.06em]">
                  {item.title}
                </h3>
                <div className="m-0 flex flex-wrap gap-3 items-center">
                  {(item.icons || []).map((icon) => (
                    <div key={icon} className="flex items-center justify-center w-12 h-12">
                      <StackIcon name={icon} />
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="grid grid-cols-1 gap-8 px-5 py-20 md:grid-cols-[minmax(140px,0.34fr)_minmax(0,1fr)] md:gap-20 md:px-14 md:py-36"
        >
          <Reveal className="flex items-start gap-3 font-black uppercase tracking-[0.16em] text-muted">
            <span className="text-brass">02</span>
            <p className="m-0">Experience</p>
          </Reveal>
          <Reveal className="grid gap-4">
            {[
              {
                date: "3 months",
                title: "Web Development Intern · SP Madrid",
                logo: "/assets/images/spmadrid.png",
                body: "Worked on web development tasks and created Python automations to reduce repetitive work and support internal workflows.",
              },
              {
                date: "Freelance",
                title: "Freelance Developer · Identity studio",
                logo: "/assets/images/identityLogo.png",
                body: "Created a centralized POS for the barbershop including a landing page, analytics dashboard, and an integrated POS — replacing manual pen-and-paper sales tracking and Excel imports.",
              },
              {
                date: "Current focus",
                title: "Software Engineering Path",
                body: "Expanding production skills through modern web stacks, deployment platforms, AI-assisted development tools, and practical automation.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="grid gap-6 border-2 border-ink bg-panel/75 p-7 md:grid-cols-[minmax(220px,0.44fr)_minmax(0,1fr)] md:p-10"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-brass">
                    {item.date}
                  </span>
                    {item.logo && (
                      <img
                        src={`/api/images/${item.logo.split("/").pop()}`}
                        alt={item.title}
                        className="mt-3 mb-2 h-12 w-12 object-contain"
                      />
                    )}
                  <h3 className="mt-3 font-display text-[clamp(1.7rem,3vw,3.2rem)] font-black leading-none tracking-[-0.06em]">
                    {item.title}
                  </h3>
                </div>
                <p className="m-0 text-[clamp(1rem,1.7vw,1.24rem)] leading-loose text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </Reveal>
        </section>

        <Reveal
          id="contact"
          as="section"
          className="m-5 border-2 border-ink bg-panel p-8 shadow-hard-sm md:m-14 md:p-20 md:shadow-hard"
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brass">
            Open to Opportunities
          </p>
          <h2 className="font-display text-[clamp(2.7rem,8vw,7.6rem)] font-black leading-[0.9] tracking-[-0.075em]">
            Available for web development, software engineering, and automation work.
          </h2>
          <a
            href="mailto:rhysabalon123@gmail.com"
            className="ml-7 mt-8 inline-flex min-h-12 items-center border-2 border-ink bg-ink px-5 font-black uppercase tracking-[0.08em] text-paper transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-sm"
          >
            Email: rhysabalon123@gmail.com
          </a>
          <a
            href="https://github.com/Friedrhys25"
            className="ml-7 mt-8 inline-flex min-h-12 items-center border-2 border-ink bg-ink px-5 font-black uppercase tracking-[0.08em] text-paper transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-sm"
          >
            Github: Friedrhys25
          </a>
          <a
            href="https://www.linkedin.com/in/rhysabalon"
            className="ml-7 mt-8 inline-flex min-h-12 items-center border-2 border-ink bg-ink px-5 font-black uppercase tracking-[0.08em] text-paper transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-sm"
          >
            LinkedIn: rhysabalon
          </a>
        </Reveal>
      </main>
    </>
  );
}
