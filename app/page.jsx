"use client";

import { useEffect, useState } from "react";
import StackIcon from "tech-stack-icons";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import profilePic from "./assets/images/barong (1).jpeg";

const navItems = ["Profile", "Stack", "Experience", "Contact"];

const stack = [
  {
    title: "Frontend",
    items: [
      { id: "html5", label: "HTML5" },
      { id: "css3", label: "CSS3" },
      { id: "js", label: "JavaScript" },
      { id: "react", label: "React" },
      { id: "tailwindcss", label: "Tailwind" },
      { id: "nextjs2", label: "Next.js" },
    ],
  },
  {
    title: "Backend",
    items: [
      { id: "nodejs", label: "Node.js" },
      { id: "expressjs", label: "Express", invert: true },
      { id: "python", label: "Python" },
      { id: "postman", label: "Postman" },
      { id: "docker", label: "Docker" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { id: "android", label: "Android" },
      { id: "reactnative", label: "React Native" },
    ],
  },
  {
    title: "Tools",
    items: [
      { id: "git", label: "Git" },
      { id: "github", label: "GitHub", invert: true },
      { id: "vercel", label: "Vercel", invert: true },
      { id: "render", label: "Render", invert: true },
    ],
  },
  {
    title: "AI Workflow",
    items: [
      { id: "claude", label: "Claude" },
      { id: "openai", label: "OpenAI" },
      { id: "copilotgithub", label: "Copilot" },
      { id: "cursor", label: "Cursor" },
    ],
    wide: true,
  },
];

// Emil Kowalski easing
const easeOut = [0.23, 1, 0.32, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: easeOut }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function Button({ children, href, icon: Icon, primary = false }) {
  const baseClasses = "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-transform active:scale-95";
  const primaryClasses = "bg-primary text-background hover:bg-primary/90";
  const secondaryClasses = "bg-surface border border-border text-primary hover:bg-surfaceHover";

  const Comp = href ? "a" : "button";

  return (
    <Comp
      href={href}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
    >
      <span className="relative z-10">{children}</span>
      {Icon && <Icon size={16} className="relative z-10 transition-transform group-hover:translate-x-0.5" />}
    </Comp>
  );
}

const BackgroundAnimation = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden bg-background flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface via-background to-background opacity-80 z-10 pointer-events-none" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light z-20 pointer-events-none" />

    {/* Pulse Radius Rings */}
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="absolute h-[300px] w-[300px] rounded-full border border-accent/40 bg-accent/5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 3, 6],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeOut",
          delay: i * 3,
        }}
      />
    ))}
  </div>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <>
      <BackgroundAnimation />

      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/50 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="text-lg font-bold tracking-tighter text-primary">
            Rizz
          </a>
          <nav className="hidden sm:flex gap-8 text-sm font-medium text-muted">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative flex flex-col items-start pt-12 md:pt-24"
        >
          <motion.div variants={itemVariants} className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted mb-6">
            Available for new opportunities
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-start gap-12 w-full">
            <Image
              src={profilePic}
              alt="Rhys Jonathan Abalon"
              className="w-full max-w-sm rounded-3xl object-cover border border-border shadow-2xl lg:h-[400px] lg:w-[320px]"
              priority
            />
            <div className="flex flex-col items-start pt-4">
              <h1 className="text-5xl font-bold tracking-tight text-primary md:text-7xl lg:text-8xl">
                Rhys Jonathan <br className="hidden md:block" />
                <span className="text-muted">Abalon</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl leading-relaxed">
                Software engineer obsessed with design engineering, fluid interfaces, and building systems that feel incredibly fast.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="#contact" primary icon={ArrowRight}>Let's talk</Button>
                <Button href="/api/cv" icon={Download}>Resume</Button>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Profile Section */}
        <motion.section
          id="profile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="scroll-mt-32"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight mb-8">
            01. Background
          </motion.h2>
          <motion.div variants={itemVariants} className="rounded-3xl border border-border bg-surface/50 p-8 md:p-12 backdrop-blur-sm">
            <p className="text-lg leading-relaxed text-muted">
              I studied Computer Science at Laguna University specializing in Data Science.
              My expertise bridges the gap between deep technical systems and polished user interfaces.
              I build web applications that not only work flawlessly under the hood but feel alive in the user's hands.
            </p>
          </motion.div>
        </motion.section>

        {/* Stack Section */}
        <motion.section
          id="stack"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="scroll-mt-32"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight mb-8">
            02. Arsenal
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stack.map((group, i) => (
              <motion.div
                key={group.title}
                variants={itemVariants}
                className={`rounded-3xl border border-border bg-surface/50 p-6 backdrop-blur-sm transition-colors hover:bg-surface ${group.wide ? "lg:col-span-2" : ""
                  }`}
              >
                <h3 className="text-sm font-medium text-muted mb-6 uppercase tracking-wider">{group.title}</h3>
                <div className="flex flex-wrap gap-6">
                  {group.items.map((item) => (
                    <div key={item.id} className="flex flex-col items-center gap-2 transition-transform hover:-translate-y-1 hover:scale-105 active:scale-95 duration-200">
                      <div className={`h-10 w-10 ${item.invert ? "invert brightness-0" : ""}`}>
                        <StackIcon name={item.id} />
                      </div>
                      <span className="text-xs font-medium text-muted">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="scroll-mt-32"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight mb-8">
            03. Experience
          </motion.h2>
          <div className="space-y-4">
            {[
              {
                role: "Web Development Intern",
                company: "SP. Madrid & Associates",
                date: "Feb 2026 - Apr 2026",
                desc: "Engineered Python automations and web tools that eliminated repetitive manual tasks, accelerating internal workflows significantly."
              },
              {
                role: "Freelance Engineer",
                company: "Identity Studio",
                date: "Apr 2026 - Present",
                desc: "Architected a full-stack POS system combining a beautiful landing page, detailed analytics dashboard, and seamless sales tracking to replace legacy Excel workflows."
              }
            ].map((job, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group rounded-3xl border border-border bg-surface/50 p-8 backdrop-blur-sm transition-colors hover:bg-surface"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                    <p className="text-muted">{job.company}</p>
                  </div>
                  <span className="text-sm font-medium text-muted mt-2 md:mt-0 px-3 py-1 rounded-full border border-border/50 bg-background/50">
                    {job.date}
                  </span>
                </div>
                <p className="text-muted leading-relaxed max-w-3xl">
                  {job.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="scroll-mt-32"
        >
          <motion.div variants={itemVariants} className="rounded-3xl border border-border bg-gradient-to-b from-surface to-background p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-50" />
            <h2 className="relative text-3xl font-bold tracking-tight md:text-5xl mb-6">
              Let's build something.
            </h2>
            <p className="relative text-muted text-lg max-w-xl mx-auto mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="relative flex flex-wrap justify-center gap-4">
              <Button href="mailto:rhysabalon123@gmail.com" primary icon={Mail}>Email</Button>
              <Button href="https://github.com/Friedrhys25" icon={Github}>GitHub</Button>
              <Button href="https://www.linkedin.com/in/rhysabalon" icon={Linkedin}>LinkedIn</Button>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-border/50 bg-background py-8 text-center">
        <p className="text-sm text-muted flex items-center justify-center gap-2">
          Crafted with care <span className="text-accent">✦</span> 2026
        </p>
      </footer>
    </>
  );
}
