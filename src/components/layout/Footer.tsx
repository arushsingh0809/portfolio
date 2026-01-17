import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Footer = () => {
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    if (location.pathname === "/play") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Resume button refs
  const xTo = useRef<any>();
  const yTo = useRef<any>();
  const buttonRef = useRef(null);
  const divRef = useRef(null);

  // Email button refs
  const xToEmail = useRef<any>();
  const yToEmail = useRef<any>();
  const buttonRefEmail = useRef(null);
  const divRefEmail = useRef(null);

  // LinkedIn button refs
  const xToLinkedin = useRef<any>();
  const yToLinkedin = useRef<any>();
  const buttonRefLinkedin = useRef(null);
  const divRefLinkedin = useRef(null);

  // Resume button
  const { contextSafe } = useGSAP(() => {
    xTo.current = gsap.quickTo(divRef.current, "x", {duration:0.8, ease: "power3"});
    yTo.current = gsap.quickTo(divRef.current, "y", {duration:0.8, ease: "power3"});
    
    gsap.to(divRef.current, {
      scale: 0,
      xPercent: -50,
      yPercent: -50,
      zIndex: -10,
    });
  }, {scope: buttonRef});

  const handleMouseEnter = contextSafe(() => {
    gsap.to(divRef.current, { scale:1, duration:0.3 });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(divRef.current, { scale:0, duration:0.3 });
  });

  const handleMouseMove = contextSafe((e: React.MouseEvent) => {
    const rect = (buttonRef.current as any).getBoundingClientRect();
    const { top, left } = rect;
    xTo.current(e.clientX - left);
    yTo.current(e.clientY - top);
  });

  // Email button
  const { contextSafe: contextSafeEmail } = useGSAP(() => {
    xToEmail.current = gsap.quickTo(divRefEmail.current, "x", {duration:0.8, ease: "power3"});
    yToEmail.current = gsap.quickTo(divRefEmail.current, "y", {duration:0.8, ease: "power3"});
    
    gsap.to(divRefEmail.current, {
      scale: 0,
      xPercent: -50,
      yPercent: -50,
      zIndex: -10,
    });
  }, {scope: buttonRefEmail});

  const handleMouseEnterEmail = contextSafeEmail(() => {
    gsap.to(divRefEmail.current, { scale:1, duration:0.3 });
  });

  const handleMouseLeaveEmail = contextSafeEmail(() => {
    gsap.to(divRefEmail.current, { scale:0, duration:0.3 });
  });

  const handleMouseMoveEmail = contextSafeEmail((e: React.MouseEvent) => {
    const rect = (buttonRefEmail.current as any).getBoundingClientRect();
    const { top, left } = rect;
    xToEmail.current(e.clientX - left);
    yToEmail.current(e.clientY - top);
  });

  // LinkedIn button
  const { contextSafe: contextSafeLinkedin } = useGSAP(() => {
    xToLinkedin.current = gsap.quickTo(divRefLinkedin.current, "x", {duration:0.8, ease: "power3"});
    yToLinkedin.current = gsap.quickTo(divRefLinkedin.current, "y", {duration:0.8, ease: "power3"});
    
    gsap.to(divRefLinkedin.current, {
      scale: 0,
      xPercent: -50,
      yPercent: -50,
      zIndex: -10,
    });
  }, {scope: buttonRefLinkedin});

  const handleMouseEnterLinkedin = contextSafeLinkedin(() => {
    gsap.to(divRefLinkedin.current, { scale:1, duration:0.3 });
  });

  const handleMouseLeaveLinkedin = contextSafeLinkedin(() => {
    gsap.to(divRefLinkedin.current, { scale:0, duration:0.3 });
  });

  const handleMouseMoveLinkedin = contextSafeLinkedin((e: React.MouseEvent) => {
    const rect = (buttonRefLinkedin.current as any).getBoundingClientRect();
    const { top, left } = rect;
    xToLinkedin.current(e.clientX - left);
    yToLinkedin.current(e.clientY - top);
  });

  return (
    <footer className="py-12 border-t border-border relative">
      {/* Left vertical line from top border to bottom */}
      <div className="absolute left-14 top-0 bottom-0 w-px bg-border"></div>
      
      <div className="container mx-auto px-6">
        {/* Contact Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-semibold mb-8">Contact</h2>
          <div className="flex flex-wrap gap-4">
            <a
              ref={buttonRef}
              href="https://www.dropbox.com/scl/fi/4n9hv8eycsgoo3ukoa55f/Resume_Arush_2026.pdf?rlkey=5m41wvxz002o1ti0mzijjvv9r&st=2ozpcqh4&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-mono text-xs overflow-hidden hover:text-background z-0"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => handleMouseMove(e)}
            >
              <div ref={divRef} className="absolute w-[200px] h-[150px] bg-blue-600 left-0 top-0 -z-10 pointer-events-none rounded-[50%]"></div>
              <span className="z-10">RESUME</span>
              <span className="z-10">↗</span>
            </a>
            <a
              ref={buttonRefEmail}
              href="mailto:arushkumar054@gmail.com"
              className="relative inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-mono text-xs overflow-hidden hover:text-background z-0"
              onMouseEnter={handleMouseEnterEmail}
              onMouseLeave={handleMouseLeaveEmail}
              onMouseMove={(e) => handleMouseMoveEmail(e)}
            >
              <div ref={divRefEmail} className="absolute w-[200px] h-[150px] bg-blue-600 left-0 top-0 -z-10 pointer-events-none rounded-[50%]"></div>
              <span className="z-10">EMAIL</span>
              <span className="z-10">↗</span>
            </a>
            <a
              ref={buttonRefLinkedin}
              href="https://www.linkedin.com/in/arush-singh-4a17a1237/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-mono text-xs overflow-hidden hover:text-background z-0"
              onMouseEnter={handleMouseEnterLinkedin}
              onMouseLeave={handleMouseLeaveLinkedin}
              onMouseMove={(e) => handleMouseMoveLinkedin(e)}
            >
              <div ref={divRefLinkedin} className="absolute w-[200px] h-[150px] bg-blue-600 left-0 top-0 -z-10 pointer-events-none rounded-[50%]"></div>
              <span className="z-10">LINKEDIN</span>
              <span className="z-10">↗</span>
            </a>
          </div>
        </div>

        {/* Quote */}
        <div className="mb-12">
          <p className="text-muted-foreground font-mono text-sm italic mb-2">
            " If there were a place that shone brighter than the place you're at, would you want to go see it? "
          </p>
          <p className="text-muted-foreground font-mono text-sm">- Hope</p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-muted-foreground font-mono text-xs mb-1">
              Made with whatever my mom cooks ♥️.
            </p>
            <p className="text-muted-foreground font-mono text-xs">
              © 2026 Arush Singh. All Rights Reserved.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <Link to="/" className="logo-badge font-mono text-xs" onClick={handleHomeClick}>
              Arush Singh
            </Link>
            <Link to="/" className="nav-link text-xs" onClick={handleHomeClick}>WORK</Link>
            <a 
              href="https://www.dropbox.com/scl/fi/4n9hv8eycsgoo3ukoa55f/Resume_Arush_2026.pdf?rlkey=5m41wvxz002o1ti0mzijjvv9r&st=2ozpcqh4&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-xs"
            >
              RESUME
            </a>
            <Link to="/about" className="nav-link text-xs">ABOUT</Link>
            <Link to="/play" className="nav-link text-xs" onClick={handlePlayClick}>PLAY</Link>
          </nav>
          
          {/* Right vertical line from top border to bottom */}
          <div className="absolute right-14 top-0 bottom-0 w-px bg-border"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
