import { useState, useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Brivo - AI Powered Full Stack Code Generation Platform",
    company: "for vibe coding :)",
    description: "An innovative AI-powered platform that generates full-stack code, streamlining development workflows and accelerating project delivery.",
    images: [],
    featured: false,
    externalLink: "https://brivo.duckdns.workers.dev",
    buttonText: "vibe code your first website",
    content: "Brivo is a cutting-edge AI-powered platform designed to revolutionize full-stack development. With advanced code generation capabilities, it helps developers build applications faster while maintaining code quality and best practices. The platform integrates seamlessly with modern development workflows, offering intelligent suggestions and automated code scaffolding for both frontend and backend components."
  },
  
  {
    title: "Collaborative Video Sharing Platform",
    company: "for youtubers and content creators",
    description: "A modern platform enabling seamless video collaboration and sharing among content creators worldwide.",
    images: [],
    featured: false,
    externalLink: "https://github.com/arushssingh/YTShare_project",
    buttonText: "GitHub",
    content: "Collaborative Video Sharing Platform lets YouTubers securely link channels and empower editors to upload videos using unique access keys. Designed for security, speed, and scale with encrypted workflows, seamless large file handling, real time uploads, and fault tolerant deployment."
  },
  {
    title: "Crypto Payment Gateway Integration",
    company: "for shops & e-commerce",
    description: "Real-time Ethereum payment system enabling secure cryptocurrency transactions for e-commerce platforms.",
    images: [],
    featured: true,
    externalLink: "https://github.com/arushssingh/Crypto-Payment-Gateway-RealTime-Ethereum-Payment-System",
    buttonText: "GitHub",
    content: "A robust cryptocurrency payment gateway that enables businesses to accept Ethereum payments and automatic INR conversionin real-time. The system provides secure transaction processing, automatic payment verification, and seamless integration with existing e-commerce platforms. Built with modern web3 technologies, it ensures fast and reliable payment processing while maintaining the highest security standards."
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  
  const xTo = useRef<any>();
  const yTo = useRef<any>();
  const buttonRef = useRef(null);
  const divRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    if (active?.externalLink) {
      xTo.current = gsap.quickTo(divRef.current, "x", {duration:0.8, ease: "power3"});
      yTo.current = gsap.quickTo(divRef.current, "y", {duration:0.8, ease: "power3"});
      
      gsap.to(divRef.current, {
        scale: 0,
        xPercent: -50,
        yPercent: -50,
        zIndex: -10,
      });
    }
  }, {scope: buttonRef, dependencies: [active?.externalLink]});

  const handleMouseEnter = contextSafe(() => {
    if (active?.externalLink) {
      gsap.to(divRef.current, { scale:1, duration:0.3 });
    }
  });

  const handleMouseLeave = contextSafe(() => {
    if (active?.externalLink) {
      gsap.to(divRef.current, { scale:0, duration:0.3 });
    }
  });

  const handleMouseMove = contextSafe((e: React.MouseEvent) => {
    if (active?.externalLink && buttonRef.current) {
      const rect = (buttonRef.current as any).getBoundingClientRect();
      const { top, left } = rect;
      xTo.current(e.clientX - left);
      yTo.current(e.clientY - top);
    }
  });

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-[100]"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[200] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-10 w-10 hover:scale-110 transition-transform"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[900px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="overflow-y-auto">
                <div className="p-8 md:p-12">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-2xl md:text-3xl text-neutral-700 dark:text-neutral-200 mb-4"
                  >
                    {active.title}
                  </motion.h3>
                  
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-lg mb-6"
                  >
                    {active.description}
                  </motion.p>

                  <div className="flex gap-4 mb-8">
                    <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
                      {active.company}
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-8"
                  >
                    {active.content}
                  </motion.div>

                  <a
                    ref={buttonRef}
                    href={active.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-mono text-xs overflow-hidden hover:text-background z-0"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={(e) => handleMouseMove(e)}
                  >
                    <div ref={divRef} className="absolute w-[200px] h-[150px] bg-blue-600 left-0 top-0 -z-10 pointer-events-none rounded-[50%]"></div>
                    <span className="z-10">{active.buttonText}</span>
                    <span className="z-10">↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div 
                key={index}
                layoutId={`card-${project.title}-${id}`}
                className="cursor-pointer"
                onClick={() => setActive(project)}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
          
          {/* Featured project - full width */}
          {projects[3] && (
            <motion.div 
              layoutId={`card-${projects[3].title}-${id}`}
              className="mt-6 cursor-pointer"
              onClick={() => setActive(projects[3])}
            >
              <ProjectCard {...projects[3]} />
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default ProjectsSection;