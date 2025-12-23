import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface ProjectCardProps {
  title: string;
  company: string;
  description?: string;
  images?: string[];
  isComingSoon?: boolean;
  className?: string;
  featured?: boolean;
  externalLink?: string;
  buttonText?: string;
}

const ProjectCard = ({ 
  title, 
  company, 
  description,
  images = [],
  isComingSoon = false,
  className = "",
  featured = false,
  externalLink,
  buttonText = "vibe code your first website"
}: ProjectCardProps) => {
  const xTo = useRef<any>();
  const yTo = useRef<any>();
  const buttonRef = useRef(null);
  const divRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    if (externalLink) {
      xTo.current = gsap.quickTo(divRef.current, "x", {duration:0.8, ease: "power3"});
      yTo.current = gsap.quickTo(divRef.current, "y", {duration:0.8, ease: "power3"});
      
      gsap.to(divRef.current, {
        scale: 0,
        xPercent: -50,
        yPercent: -50,
        zIndex: -10,
      });
    }
  }, {scope: buttonRef, dependencies: [externalLink]});

  const handleMouseEnter = contextSafe(() => {
    if (externalLink) {
      gsap.to(divRef.current, { scale:1, duration:0.3 });
    }
  });

  const handleMouseLeave = contextSafe(() => {
    if (externalLink) {
      gsap.to(divRef.current, { scale:0, duration:0.3 });
    }
  });

  const handleMouseMove = contextSafe((e: React.MouseEvent) => {
    if (externalLink && buttonRef.current) {
      const rect = (buttonRef.current as any).getBoundingClientRect();
      const { top, left } = rect;
      xTo.current(e.clientX - left);
      yTo.current(e.clientY - top);
    }
  });

  return (
    <div className={`group relative overflow-hidden rounded-sm bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
      {/* Featured card with large image */}
      {featured && images.length > 0 && (
        <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a2e]">
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Floating preview images */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex gap-2">
              {images.slice(1, 3).map((img, idx) => (
                <div 
                  key={idx} 
                  className="w-16 h-16 rounded-lg overflow-hidden shadow-xl border-2 border-background/20 group-hover:scale-110 transition-transform duration-300"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-sans font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-muted-foreground font-mono text-xs uppercase tracking-wider mb-1">
          {company}
        </p>
        
        {isComingSoon && (
          <span className="inline-block mt-3 px-3 py-1.5 bg-muted text-muted-foreground text-xs font-mono rounded-sm">
            Coming Soon
          </span>
        )}
        
        {externalLink && (
          <a
            ref={buttonRef}
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="relative inline-flex items-center gap-2 mt-4 px-6 py-3 border-2 border-foreground text-foreground font-mono text-xs overflow-hidden hover:text-background z-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(e) => handleMouseMove(e)}
          >
            <div ref={divRef} className="absolute w-[200px] h-[150px] bg-blue-600 left-0 top-0 -z-10 pointer-events-none rounded-[50%]"></div>
            <span className="z-10">{buttonText}</span>
            <span className="z-10">↗</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;