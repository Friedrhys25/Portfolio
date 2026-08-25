"use client";

import { useEffect, useState } from "react";
import StackIcon from "tech-stack-icons";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, X, Sun, Moon, Code2, Server, Database, Smartphone, Wrench, Bot, ExternalLink, CalendarDays } from "lucide-react";
import Image from "next/image";
import profilePic from "./assets/images/RhysDay.jpg";
import profilePicLight from "./assets/images/RhysNight.jpg";
import spMadridLogo from "./assets/images/spmadrid.png";
import identityLogo from "./assets/images/identityLogo.png";
import gmailLogo from "./assets/logos/gmail.png";
import linkedinLogo from "./assets/logos/linkedin.png";
import rizzLogo from "./assets/images/rizzlogoSvg.svg";

// Certificates
import certCodeKada from "./assets/certificates/Copy of Copy of Rhys Jonathan Abalon.png";
import certPython from "./assets/certificates/Screenshot 2026-06-14 015812.png";
import certJava from "./assets/certificates/Screenshot 2026-06-14 015744.png";

// Identity
import idDash from "./assets/portfolio/identity/dash.png";
import idExpen from "./assets/portfolio/identity/expen.png";
import idLanding from "./assets/portfolio/identity/landing.png";
import idLog from "./assets/portfolio/identity/log.png";

// Smartlearn
import sl1 from "./assets/portfolio/smartlearn/smartlearn1.png";
import sl2 from "./assets/portfolio/smartlearn/smartlearn2.png";
import sl3 from "./assets/portfolio/smartlearn/smartlearn3.png";
import sl4 from "./assets/portfolio/smartlearn/smartlearn4.png";

// Syncspace
import ss1 from "./assets/portfolio/syncspace/sycnspace1.png";
import ss2 from "./assets/portfolio/syncspace/sycnspace2.png";
import ss3 from "./assets/portfolio/syncspace/syncspace3.png";

// Talk2Kap
import tk1 from "./assets/portfolio/talk2kap/1st.png";
import tk2 from "./assets/portfolio/talk2kap/2nd.png";
import tk3 from "./assets/portfolio/talk2kap/3rd.png";
import tk4 from "./assets/portfolio/talk2kap/4th.png";
import tk5 from "./assets/portfolio/talk2kap/5th.png";

// Talk2us
import tu1 from "./assets/portfolio/talk2us/1.jpeg";
import tu2 from "./assets/portfolio/talk2us/2.jpeg";
import tu3 from "./assets/portfolio/talk2us/3.jpeg";
import tu4 from "./assets/portfolio/talk2us/4.jpeg";
import tu5 from "./assets/portfolio/talk2us/5.jpeg";
import tu6 from "./assets/portfolio/talk2us/6.jpeg";

const navItems = ["Profile", "Stack", "Projects", "Experience", "Certificates", "Contact"];

const stack = [
  {
    title: "Frontend",
    role: "Interfaces",
    summary: "Responsive product surfaces with clean interaction patterns.",
    icon: Code2,
    tone: "from-sky-500/15 to-cyan-400/5",
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
    role: "Services",
    summary: "APIs, automations, and deployment-ready server foundations.",
    icon: Server,
    tone: "from-emerald-500/15 to-lime-400/5",
    items: [
      { id: "nodejs", label: "Node.js" },
      { id: "expressjs", label: "Express", invert: true },
      { id: "python", label: "Python" },
      { id: "postman", label: "Postman" },
      { id: "docker", label: "Docker" },
    ],
  },
  {
    title: "Database",
    role: "Data",
    summary: "Structured storage for reporting, operations, and app state.",
    icon: Database,
    tone: "from-teal-500/15 to-green-400/5",
    items: [
      { id: "firebase", label: "Firebase" },
      { id: "supabase", label: "Supabase" },
      { id: "mysql", label: "MySQL" },
      { id: "postgresql", label: "PostgreSQL" },
    ],
  },
  {
    title: "Mobile",
    role: "Devices",
    summary: "Cross-platform mobile workflows and Android build experience.",
    icon: Smartphone,
    tone: "from-amber-500/15 to-orange-400/5",
    items: [
      { id: "android", label: "Android Studio" },
      { id: "reactnative", label: "React Native" },
    ],
  },
  {
    title: "Tools",
    role: "Delivery",
    summary: "Version control, hosting, testing, and release workflows.",
    icon: Wrench,
    tone: "from-rose-500/15 to-red-400/5",
    items: [
      { id: "git", label: "Git" },
      { id: "github", label: "GitHub", invert: true },
      { id: "vercel", label: "Vercel", invert: true },
      { id: "render", label: "Render", invert: true },
    ],
  },
  {
    title: "AI Workflow",
    role: "Acceleration",
    summary: "AI-assisted development for research, prototyping, and review.",
    icon: Bot,
    tone: "from-stone-500/15 to-zinc-300/5",
    items: [
      { id: "claude", label: "Claude" },
      { id: "openai", label: "OpenAI" },
      { id: "copilotgithub", label: "Copilot", invert: true },
      { id: "cursor", label: "Cursor", invert: true },
    ],
    wide: true,
  },
];

const projects = [
  {
    title: "Identity",
    desc: "A centralized Point-of-Sale architecture empowering multi-branch businesses to seamlessly track sales and analytics in real-time.",
    images: [idLanding, idDash, idExpen, idLog],
    href: "https://identity-khaki.vercel.app/",
    linkLabel: "Live site",
    date: "Apr - Jun 2026",
    role: "Developer",
    development: "From scratch",
    techStack: ["Next.js", "React", "Tailwind", "HTML", "CSS", "JavaScript", "TypeScript", "PostgreSQL", "Supabase"],
  },
  {
    title: "Smartlearn",
    desc: "A completely free, AI-driven educational platform built on a custom fine-tuned dataset to enhance student learning.",
    images: [sl1, sl2, sl3, sl4],
    href: "https://github.com/thebadsektor/tc3202-3b-1.git",
    linkLabel: "GitHub repo",
    date: "Dec 2024 - Feb 2025",
    role: "Developer",
    development: "From scratch",
    techStack: ["React", "Vite", "HTML", "CSS", "JavaScript", "Tailwind"],
  },
  {
    title: "Syncspace",
    desc: "An experimental virtual office environment designed to explore remote collaboration and digital workspace interactions.",
    images: [ss1, ss2, ss3],
    href: "https://github.com/shankencedric/SyncSpace.git",
    linkLabel: "GitHub repo",
    date: "May 2026",
    role: "Developer",
    development: "From scratch",
    techStack: ["Next.js", "React", "Tailwind", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Talk2Kap",
    desc: "A comprehensive administrative dashboard for efficiently managing, tracking, and resolving civic complaints.",
    images: [tk1, tk2, tk3, tk4, tk5],
    href: "https://talk2kap.online/",
    linkLabel: "Live site",
    date: "Nov 2025 - Mar 2026",
    role: "Developer",
    development: "From scratch",
    techStack: ["React", "Vite", "Tailwind", "JavaScript", "Firebase"],
  },
  {
    title: "Talk2Us",
    desc: "A mobile application that provides citizens with a streamlined interface for submitting and tracking local community reports.",
    images: [tu1, tu2, tu3, tu4, tu5, tu6],
    href: "https://github.com/Friedrhys25/thesisDevelopment.git",
    linkLabel: "GitHub repo",
    date: "Nov 2025 - Mar 2026",
    role: "Developer",
    development: "From scratch",
    techStack: ["React Native", "Python", "CSS", "JavaScript", "Firebase"],
    isMobile: true,
  }
];

const certificates = [
  { title: "CodeKada: The Online Hackathon", image: certCodeKada },
  { title: "Introduction to Python", image: certPython },
  { title: "Java Fundamentals", image: certJava },
];

// Emil Kowalski easing
const easeOut = [0.23, 1, 0.32, 1];

const itemVariants = {
  hidden: { opacity: 0, transform: "translateY(20px) scale(0.95)" },
  visible: {
    opacity: 1,
    transform: "translateY(0px) scale(1)",
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

function Button({ children, href, icon: Icon, customIcon, primary = false }) {
  const baseClasses = "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-transform active:scale-95";
  const primaryClasses = "bg-primary text-background hover:bg-primary/90";
  const secondaryClasses = "bg-surface text-primary shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:bg-surfaceHover dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)]";

  const Comp = href ? "a" : "button";

  return (
    <Comp
      href={href}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
    >
      {customIcon && <span className="relative z-10 flex items-center justify-center transition-transform group-hover:-translate-x-0.5">{customIcon}</span>}
      {Icon && !customIcon && <Icon size={16} className="relative z-10 transition-transform group-hover:-translate-x-0.5" />}
      <span className="relative z-10">{children}</span>
    </Comp>
  );
}

function ProjectAction({ project }) {
  const isGithub = project.href.includes("github.com");

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => event.stopPropagation()}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-background shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent/40 active:scale-95 dark:shadow-[0_18px_44px_rgba(0,0,0,0.42)]"
      aria-label={`${project.linkLabel} for ${project.title}`}
    >
      {isGithub ? (
        <span className="h-4 w-4 invert dark:invert-0">
          <StackIcon name="github" />
        </span>
      ) : (
        <ExternalLink size={16} />
      )}
      <span>{project.linkLabel}</span>
    </a>
  );
}

const BackgroundAnimation = () => {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const logoX = useSpring(useTransform(pointerX, [-1, 1], [-34, 34]), { stiffness: 80, damping: 22 });
  const logoY = useSpring(useTransform(pointerY, [-1, 1], [-24, 24]), { stiffness: 80, damping: 22 });
  const glowX = useSpring(useTransform(pointerX, [-1, 1], [-90, 90]), { stiffness: 70, damping: 24 });
  const glowY = useSpring(useTransform(pointerY, [-1, 1], [-70, 70]), { stiffness: 70, damping: 24 });
  const rotateX = useSpring(useTransform(pointerY, [-1, 1], [7, -7]), { stiffness: 90, damping: 24 });
  const rotateY = useSpring(useTransform(pointerX, [-1, 1], [-9, 9]), { stiffness: 90, damping: 24 });
  const logoTransform = useMotionTemplate`translate3d(${logoX}px, ${logoY}px, 0) perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  const glowTransform = useMotionTemplate`translate3d(${glowX}px, ${glowY}px, 0)`;

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 2);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface via-background to-background opacity-80" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />

      <motion.div
        className="absolute h-[min(78vw,720px)] w-[min(78vw,720px)] rounded-[42%] bg-accent/10 blur-3xl"
        animate={{ opacity: [0.14, 0.28, 0.14] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: glowTransform, willChange: "transform, opacity" }}
      />

      <motion.div
        className="relative flex h-[min(62vw,580px)] w-[min(62vw,580px)] items-center justify-center"
        animate={{ opacity: [0.78, 1, 0.78] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: logoTransform, transformStyle: "preserve-3d", willChange: "transform, opacity" }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute h-[86%] w-[86%] rounded-full border border-accent/20 bg-accent/[0.025]"
            initial={{ transform: "scale(0.78)", opacity: 0 }}
            animate={{
              transform: ["scale(0.78)", "scale(1.62)", "scale(2.55)"],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: [0.23, 1, 0.32, 1],
              delay: index * 3,
            }}
            style={{ willChange: "transform, opacity" }}
          />
        ))}
        <Image
          src={rizzLogo}
          alt=""
          priority
          className="absolute h-[94%] w-auto object-contain opacity-[0.08] blur-[14px] dark:invert dark:brightness-200"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ transform: ["translateY(0px) scale(1)", "translateY(-10px) scale(1.025)", "translateY(0px) scale(1)"] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
        >
          <Image
            src={rizzLogo}
            alt=""
            priority
            className="h-[90%] w-auto object-contain opacity-[0.22] drop-shadow-[0_0_36px_rgba(59,130,246,0.42)] dark:invert dark:brightness-200 dark:opacity-[0.28]"
          />
        </motion.div>
        <div className="absolute inset-4 bg-[linear-gradient(110deg,transparent_20%,rgba(59,130,246,0.18)_48%,transparent_74%)] opacity-45 mix-blend-screen blur-lg" />
      </motion.div>
    </div>
  );
};

function ExperienceCard({ job, itemVariants }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-3xl bg-surface/65 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:shadow-[0_22px_80px_rgba(0,0,0,0.30)]"
    >
      <div className="relative rounded-2xl bg-background/60 p-5 md:p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            {job.logo && (
              <Image
                src={job.logo}
                alt={job.company}
                className="mb-5 h-12 w-auto object-contain"
              />
            )}
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{job.type}</p>
            <h3 className="text-xl font-bold tracking-tight text-primary">{job.role}</h3>
            <p className="mt-1 text-muted">{job.company}</p>
          </div>
          <span className="inline-flex self-start whitespace-nowrap rounded-full bg-surface/85 px-3 py-1.5 text-sm font-medium text-muted shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.26)]">
            {job.date}
          </span>
        </div>

        <div className="mt-6">
          <ul className="ml-5 max-w-3xl list-disc space-y-2 text-muted leading-relaxed">
            {job.desc.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {job.techStack.map((tech) => (
            <span key={tech} className="rounded-full bg-surface/80 px-2.5 py-1 text-xs font-medium text-muted shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_28px_rgba(0,0,0,0.22)]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showSplash, setShowSplash] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setShowSplash(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transform: "scale(1.02)" }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, transform: "scale(0.9)" }}
              animate={{ opacity: 1, transform: "scale(1)" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="mb-12"
            >
              <Image
                src={rizzLogo}
                alt="Rizz Logo"
                className={`h-24 w-auto md:h-32 transition-all duration-300 ${isDarkMode ? 'invert brightness-200' : ''}`}
                priority
              />
            </motion.div>

            {/* Brand text */}
            <motion.p
              initial={{ opacity: 0, transform: "translateY(8px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
              className="text-sm font-medium tracking-[0.3em] uppercase text-muted mb-10"
            >
              Portfolio
            </motion.p>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="w-48 h-[2px] bg-border rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ transform: "translateX(-100%)" }}
                animate={{ transform: "translateX(0%)" }}
                transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], delay: 0.6 }}
                style={{ willChange: "transform" }}
                className="h-full w-full bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, transform: "scale(0.95) translateY(20px)" }}
              animate={{ opacity: 1, transform: "scale(1) translateY(0px)" }}
              exit={{ opacity: 0, transform: "scale(0.95) translateY(20px)" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              style={{ willChange: "transform, opacity" }}
              className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-surface shadow-2xl"
            >
              <div className="flex items-center justify-between bg-background/40 p-4 px-6">
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-primary">{selectedProject.title}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      {selectedProject.date}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{selectedProject.role}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{selectedProject.development}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full p-2 transition-colors hover:bg-surfaceHover focus:outline-none focus:ring-2 focus:ring-accent/40 active:scale-95"
                  aria-label="Close project gallery"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="bg-background/25 px-6 py-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="max-w-3xl text-sm leading-relaxed text-muted">{selectedProject.desc}</p>
                  <ProjectAction project={selectedProject} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`flex-1 overflow-y-auto p-4 md:p-8 ${selectedProject.isMobile ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start' : 'space-y-8'}`}>
                {selectedProject.images.map((img, idx) => (
                  <div key={idx} className="relative flex w-full rounded-2xl bg-background/55 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.10)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.30)]">
                    <Image
                      src={img}
                      alt={`${selectedProject.title} screenshot ${idx + 1}`}
                      className="w-full h-auto rounded-xl"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BackgroundAnimation />

      <header className="fixed top-4 z-50 w-full px-4">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full bg-surface/80 px-4 shadow-[0_18px_60px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-colors duration-300 dark:shadow-[0_18px_80px_rgba(0,0,0,0.40)]">
          <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tighter text-primary">
            <Image src={rizzLogo} alt="Logo" className={`h-8 w-auto transition-all duration-300 ${isDarkMode ? 'invert brightness-200' : ''}`} />
            Rizz
          </a>
          <div className="flex items-center gap-3">
            <nav className="hidden sm:flex gap-1 rounded-full bg-background/60 p-1 text-sm font-medium text-muted">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-full px-3 py-1.5 transition-colors hover:bg-surface hover:text-primary"
                >
                  {item}
                </a>
              ))}
            </nav>
            <button
              onClick={toggleTheme}
              className="rounded-full bg-background/70 p-2 text-muted transition-colors hover:bg-surfaceHover hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 active:scale-95"
              aria-label="Toggle color theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
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
          <motion.div variants={itemVariants} className="mb-6 rounded-full bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
            Available for new opportunities
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-start gap-12 w-full">
            <div className="relative w-full max-w-sm shrink-0 lg:h-[400px] lg:w-[320px]">
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="dark-pic"
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={profilePicLight}
                      alt="Rhys Jonathan Abalon"
                      fill
                      className="rounded-3xl object-cover shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
                      priority
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="light-pic"
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={profilePic}
                      alt="Rhys Jonathan Abalon"
                      fill
                      className="rounded-3xl object-cover shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
                      priority
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Maintain layout spacing since position absolute is used */}
              <div className="pointer-events-none opacity-0">
                <Image src={profilePic} alt="spacer" className="w-full max-w-sm rounded-3xl object-cover lg:h-[400px] lg:w-[320px]" />
              </div>
            </div>
            <div className="flex flex-col items-start pt-4">
              <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-primary md:text-7xl lg:text-8xl">
                Software <br className="hidden md:block" />
                <span className="text-primary/55 dark:text-primary/50">Engineer</span>
              </h1>
              <p className="mt-6 max-w-2xl rounded-3xl bg-surface/70 p-5 text-lg leading-relaxed text-muted shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm md:text-xl dark:shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
                Software engineer building fast web and mobile apps. Clean interfaces, practical automation, and reliable code for real workflows.
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
          <motion.div variants={itemVariants} className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                01. Background
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                Focused on practical engineering work across product interfaces, workflow automation, and data-backed systems.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Laguna University
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl bg-surface/70 p-[1px] shadow-[0_22px_70px_rgba(0,0,0,0.08)] backdrop-blur-sm dark:shadow-[0_24px_80px_rgba(0,0,0,0.30)]">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/15 via-transparent to-emerald-400/10 opacity-90 transition-opacity group-hover:opacity-100" />
            <div className="relative rounded-3xl bg-background/75 p-8 md:p-12">
              <p className="text-lg leading-relaxed text-muted">
                I am a Computer Science graduate from Laguna University with a specialization in Data Science, focused on building robust, scalable web applications and workflow automations. My experience includes an internship at SP. Madrid & Associates, where I contributed to web development projects and engineered Python automations for complex operational tasks. I work across React, Next.js, Node.js, Python, databases, and modern AI tools to deliver efficient, well-architected, user-centered solutions.
              </p>
            </div>
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
          <motion.div variants={itemVariants} className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                02. Arsenal
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                A practical toolkit for shipping full-stack products, automation systems, and AI-assisted development work.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {stack.reduce((total, group) => total + group.items.length, 0)} tools
            </div>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {stack.map((group) => (
              <motion.div
                key={group.title}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-3xl bg-surface/65 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:shadow-[0_22px_80px_rgba(0,0,0,0.30)] ${group.wide ? "md:col-span-2" : ""}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${group.tone} opacity-70 transition-opacity duration-200 group-hover:opacity-95`} />
                <div className="relative h-full rounded-2xl bg-background/60 p-5">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface/80 text-accent shadow-[0_10px_26px_rgba(0,0,0,0.12)] dark:shadow-[0_14px_34px_rgba(0,0,0,0.30)]">
                          <group.icon size={17} />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{group.role}</span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-primary">{group.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{group.summary}</p>
                    </div>
                    <span className="rounded-full bg-surface/85 px-3 py-1 text-xs font-semibold text-muted shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.26)]">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {group.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex min-h-12 items-center gap-3 rounded-xl bg-surface/80 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-surface active:scale-[0.98] dark:shadow-[0_10px_28px_rgba(0,0,0,0.22)]"
                      >
                        <div className={`h-7 w-7 shrink-0 transition-all duration-300 ${item.invert ? (isDarkMode ? "invert brightness-0" : "brightness-0") : ""}`}>
                          <StackIcon name={item.id} />
                        </div>
                        <span className="min-w-0 text-sm font-medium leading-tight text-primary">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="scroll-mt-32"
        >
          <motion.div variants={itemVariants} className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                03. Projects
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                Selected web and mobile builds with direct links, stack details, and product screenshots.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {projects.length} builds
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                onClick={() => setSelectedProject(proj)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(proj);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${proj.title} project gallery`}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl bg-surface/65 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-surface focus:outline-none focus:ring-2 focus:ring-accent/40 dark:shadow-[0_22px_80px_rgba(0,0,0,0.30)]"
              >
                <div className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-background/55 ${proj.isMobile ? 'p-2' : ''}`}>
                  <Image
                    src={proj.images[0]}
                    alt={proj.title}
                    fill
                    className={`${proj.isMobile ? 'object-contain' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                  />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-muted shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-md">
                    <CalendarDays size={13} />
                    {proj.date}
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-primary">{proj.title}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{proj.role} / {proj.development}</p>
                    </div>
                    <ArrowRight size={18} className="mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                  <p className="text-muted mt-2 text-sm leading-relaxed">{proj.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {proj.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-full bg-background/70 px-2.5 py-1 text-xs font-medium text-muted">
                        {tech}
                      </span>
                    ))}
                    {proj.techStack.length > 4 && (
                      <span className="rounded-full bg-background/70 px-2.5 py-1 text-xs font-medium text-muted">
                        +{proj.techStack.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-muted">{proj.images.length} screenshots</span>
                    <ProjectAction project={proj} />
                  </div>
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
            04. Experience
          </motion.h2>
          <div className="space-y-4">
            {[
              {
                role: "Freelance Developer",
                company: "Identity Studio",
                date: "Apr 2026 - Present",
                type: "Client project",
                techStack: ["Next.js", "React", "Tailwind", "HTML", "CSS", "JavaScript", "TypeScript", "PostgreSQL", "Supabase"],
                desc: [
                  "Engineered a centralized point of sales system for a barbershop client, enhancing client revenue monitoring across multiple branches and providing critical business insights using Nextjs, Expressjs, Tailwind, and Supabase.",
                  "Collaborated with clients to customize solutions that align with the specific operational needs, achieving high levels of client satisfaction.",
                  "Developed technical documentation to facilitate system maintenance and future updates, ensuring long term client support.",
                  "Solicited feedback from end-users to continuously improve application functionality and design."
                ],
                logo: identityLogo,
              },
              {
                role: "A.I Prompt Engineer Intern",
                company: "SP. Madrid & Associates",
                date: "Feb 2026 - Apr 2026",
                type: "Internship",
                techStack: ["Next.js", "React", "Tailwind", "HTML", "CSS", "JavaScript", "TypeScript", "Python", "Script Automation"],
                desc: [
                  "Assisted in creating an inventory tracking system using Nextjs, Express, Tailwind, and Supabase, allowing for real-time monitoring of stock levels and sales data.",
                  "Automated data extraction from web sources to ERP-ready Excel files, significantly improving the efficiency of the inventory management system.",
                  "Engaged in collaborative development efforts to ensure the system was user-centric and client specifications.",
                  "Supported project implementation by performing system testing and troubleshooting, ensuring a seamless rollout and user experience.",
                  "Documented code and development user manuals for non-technical clients, facilitating easier use of the inventory management software."
                ],
                logo: spMadridLogo,
              }
            ].map((job, i) => (
              <ExperienceCard key={i} job={job} itemVariants={itemVariants} />
            ))}
          </div>
        </motion.section>

        {/* Certificates Section */}
        <motion.section
          id="certificates"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="scroll-mt-32"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight mb-8">
            05. Certificates
          </motion.h2>

          <motion.div variants={itemVariants} className="relative w-full overflow-hidden flex whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div
              animate={{ transform: ["translateX(0%)", "translateX(-50%)"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 w-max"
              style={{ willChange: "transform" }}
            >
              {/* Duplicate the array to create a seamless loop */}
              {[...certificates, ...certificates, ...certificates, ...certificates].map((cert, i) => (
                <div
                  key={i}
                  className="relative w-[300px] sm:w-[400px] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-3xl border border-border bg-surface/50 p-2 backdrop-blur-sm transition-transform hover:scale-[1.02]"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/50 bg-background/50">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
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
              <Button
                href="mailto:rhysabalon123@gmail.com"
                primary
                customIcon={<Image src={gmailLogo} alt="Gmail" className="h-4 w-auto object-contain" />}
              >
                Email
              </Button>
              <Button
                href="https://github.com/Friedrhys25"
                customIcon={<div className={`h-4 w-4 transition-all duration-300 ${isDarkMode ? "invert brightness-0" : "brightness-0"}`}><StackIcon name="github" /></div>}
              >
                GitHub
              </Button>
              <Button
                href="https://www.linkedin.com/in/rhysabalon"
                customIcon={<Image src={linkedinLogo} alt="LinkedIn" className="h-4 w-auto object-contain" />}
              >
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-border/50 bg-background py-8 text-center">
        <p className="text-sm text-muted flex items-center justify-center gap-2">
          Rhys Jonathan Abalon <span className="text-accent">✦</span> 2026
        </p>
      </footer>
    </>
  );
}
