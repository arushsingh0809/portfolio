import { Link } from "react-router-dom";
import portrait from "@/assets/portrait.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const AboutMeSection = () => {
  const xTo = useRef<any>();
  const yTo = useRef<any>();
  const buttonRef = useRef(null);
  const divRef = useRef(null);

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

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="bg-card rounded-sm p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-sans font-semibold mb-4">
            Get to know the developer :)
          </h2>
          <p className="text-muted-foreground font-mono text-sm mb-8">
            Or not, TLDR: I'm somewhat passionate.
          </p>

          {/* Code symbols */}
          <div className="flex items-center gap-2 mb-8">
            <span className="keyboard-key hover:rotate-[-6deg] transition-transform duration-200">{"</"}</span>
            <span className="text-muted-foreground">code</span>
            <span className="keyboard-key hover:rotate-[12deg] transition-transform duration-200">{">"}</span>
          </div>

          <Link 
            ref={buttonRef}
            to="/about"
            className="relative inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-mono text-sm overflow-hidden hover:text-background z-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(e) => handleMouseMove(e)}
          >
            <div ref={divRef} className="absolute w-[200px] h-[150px] bg-blue-600 left-0 top-0 -z-10 pointer-events-none rounded-[50%]"></div>
            <span className="z-10">ABOUT ME</span>
            <span className="z-10">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;