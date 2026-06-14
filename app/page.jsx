"use client";

import { useEffect, useState } from "react";
import StackIcon from "tech-stack-icons";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import profilePic from "./assets/images/barong (1).jpeg";
import profilePicLight from "./assets/images/toga (1).jpeg";
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
    title: "Database",
    items: [
      { id: "firebase", label: "Firebase" },
      { id: "supabase", label: "Supabase" },
      { id: "mysql", label: "MySQL" },
      { id: "postgresql", label: "PostgreSQL" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { id: "android", label: "Android Studio" },
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
  },
  {
    title: "Smartlearn",
    desc: "A completely free, AI-driven educational platform built on a custom fine-tuned dataset to enhance student learning.",
    images: [sl1, sl2, sl3, sl4],
  },
  {
    title: "Syncspace",
    desc: "An experimental virtual office environment designed to explore remote collaboration and digital workspace interactions.",
    images: [ss1, ss2, ss3],
  },
  {
    title: "Talk2Kap",
    desc: "A comprehensive administrative dashboard for efficiently managing, tracking, and resolving civic complaints.",
    images: [tk1, tk2, tk3, tk4, tk5],
  },
  {
    title: "Talk2Us",
    desc: "A mobile application that provides citizens with a streamlined interface for submitting and tracking local community reports.",
    images: [tu1, tu2, tu3, tu4, tu5, tu6],
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
  const secondaryClasses = "bg-surface border border-border text-primary hover:bg-surfaceHover";

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

const BackgroundAnimation = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden bg-background flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface via-background to-background opacity-80 z-10 pointer-events-none" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light z-20 pointer-events-none" />

    {/* Pulse Radius Rings */}
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="absolute h-[300px] w-[300px] rounded-full border border-accent/40 bg-accent/5"
        initial={{ transform: "scale(0.8)", opacity: 0 }}
        animate={{
          transform: ["scale(0.8)", "scale(3)", "scale(6)"],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeOut",
          delay: i * 3,
        }}
        style={{ willChange: "transform, opacity" }}
      />
    ))}
  </div>
);

function ExperienceCard({ job, itemVariants }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="group rounded-3xl border border-border bg-surface/50 p-8 backdrop-blur-sm transition-colors hover:bg-surface cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-col md:flex-row justify-between mb-2 gap-4">
        <div>
          {job.logo && (
            <Image
              src={job.logo}
              alt={job.company}
              className="h-12 w-auto object-contain mb-4"
            />
          )}
          <h3 className="text-xl font-bold text-primary">{job.role}</h3>
          <p className="text-muted">{job.company}</p>
        </div>
        <span className="text-sm font-medium text-muted px-3 py-1 rounded-full border border-border/50 bg-background/50 self-start whitespace-nowrap">
          {job.date}
        </span>
      </div>
      
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2">
              {Array.isArray(job.desc) ? (
                <ul className="list-disc list-outside ml-5 text-muted leading-relaxed max-w-3xl space-y-2">
                  {job.desc.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted leading-relaxed max-w-3xl">
                  {job.desc}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
        <span className="transition-transform duration-300" style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}>
          <ArrowRight size={16} className="rotate-90" />
        </span>
        {isExpanded ? "Show less" : "See more"}
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
              className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border p-4 px-6">
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full p-2 transition-colors hover:bg-surfaceHover active:scale-95"
                >
                  <X size={20} />
                </button>
              </div>
              <div className={`flex-1 overflow-y-auto p-4 md:p-8 ${selectedProject.isMobile ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start' : 'space-y-8'}`}>
                {selectedProject.images.map((img, idx) => (
                  <div key={idx} className="relative w-full rounded-2xl border border-border/50 bg-background/50 flex p-2">
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

      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/50 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tighter text-primary">
            <Image src={rizzLogo} alt="Logo" className={`h-8 w-auto transition-all duration-300 ${isDarkMode ? 'invert brightness-200' : ''}`} />
            Rizz
          </a>
          <div className="flex items-center gap-6">
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
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border/50 bg-surface/50 text-muted transition-colors hover:bg-surface hover:text-primary active:scale-95"
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
          <motion.div variants={itemVariants} className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted mb-6">
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
                      src={profilePic}
                      alt="Rhys Jonathan Abalon"
                      fill
                      className="rounded-3xl object-cover border border-border shadow-2xl"
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
                      src={profilePicLight}
                      alt="Rhys Jonathan Abalon"
                      fill
                      className="rounded-3xl object-cover border border-border shadow-2xl"
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
              <h1 className="text-5xl font-bold tracking-tight text-primary md:text-7xl lg:text-8xl">
                Rhys Jonathan <br className="hidden md:block" />
                <span className="text-muted">Abalon</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl leading-relaxed">
                Aspiring Software engineer building fast web and mobile apps. No gimmicks just clean interfaces, practical automation, and solid code.
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
              I am a 23-year-old Computer Science graduate from Laguna University, specializing in Data Science. As an aspiring software engineer and web developer, I am passionate about building robust and scalable applications. My professional experience includes a dedicated internship at SP. Madrid & Associates, where I focused on web development and engineered Python automations to streamline complex workflows. I leverage a comprehensive modern tech stack including React, Next.js, Node.js, and Python alongside advanced AI tools to deliver efficient, well-architected, and user-centric solutions.
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
                      <div className={`h-10 w-10 transition-all duration-300 ${item.invert ? (isDarkMode ? "invert brightness-0" : "brightness-0") : ""}`}>
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

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="scroll-mt-32"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight mb-8">
            03. Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                onClick={() => setSelectedProject(proj)}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-4 backdrop-blur-sm transition-colors hover:bg-surface flex flex-col gap-4 cursor-pointer"
              >
                <div className={`relative aspect-video w-full overflow-hidden rounded-2xl border border-border/50 bg-background/50 ${proj.isMobile ? 'p-2' : ''}`}>
                  <Image
                    src={proj.images[0]}
                    alt={proj.title}
                    fill
                    className={`${proj.isMobile ? 'object-contain' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                  />
                </div>
                <div className="px-2 pb-2">
                  <h3 className="text-xl font-bold text-primary">{proj.title}</h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">{proj.desc}</p>
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
