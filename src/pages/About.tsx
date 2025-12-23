import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import friendsImage from "@/assets/friends.jpg";
import friends1Image from "@/assets/friends1.jpg";
import sceneImage from "@/assets/scene.jpg";
import bikeImage from "@/assets/bike.jpg";

const education = [
  {
    year: "2022-2026",
    institution: "AMITY UNIVERSITY, NOIDA",
    description: "BTech Information Technology",
  },
];

const skills = [
  { category: "Languages", items: "Java, C++, JavaScript, Ruby, Python, Dart" },
  { category: "Frontend", items: "React.js, Flutter, Tailwind CSS, Vite, Framer Motion" },
  { category: "Backend", items: "TypeScript, Node.js, Express.js, REST APIs, Socket.IO, RabbitMQ" },
  { category: "Databases", items: "MySQL, PostgreSQL, MongoDB, Firebase" },
  { category: "Auth & Security", items: "OAuth 2.0, JWT, bcrypt" },
  { category: "Web3", items: "MetaMask, Ethers.js" },
  { category: "Tools", items: "Git, Postman, Requestly, Gemini API" },
  { category: "Cloud", items: "AWS, GCP, Cloudflare" },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Text content */}
            <div className="animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-sans font-semibold mb-6 sm:mb-8 leading-tight">
                I'm Arush, it's really nice to meet you ┗(^o^　)┓
              </h1>

              <div className="space-y-4 sm:space-y-6 text-muted-foreground font-mono text-xs sm:text-sm leading-relaxed">
                <p>I started building things because curiosity refused to sit still.</p>
                
                <p>
                  Over time, that curiosity turned into a habit of slowing down breaking problems apart, questioning assumptions, and understanding systems before shaping them. I’ve learned that good products don’t emerge from copying patterns, but from intentional choices made with care and context.
                </p>
                
                <p>
                  When I mimic without questioning, I stop noticing. And when I stop noticing, the work loses meaning. That’s why my process leans on observation, intuition, and clarity-designing and building with the intent to understand, not just to ship.
                </p>
                
                <p>
                  I’m currently pursuing a bachelor’s in Information Technology, exploring full-stack development and scalable systems with the same mindset: listen closely, think deeply, and build deliberately.
                </p>
                
                <p>
                  I’m here to make useful things-carefully, thoughtfully, and for people who value clarity over noise.
                </p>
                
                <p>
                  Hit me up on{" "}
                  <a 
                    href="https://www.linkedin.com/in/arush-singh-4a17a1237/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    Linkedin
                  </a>{" "}
                  or my{" "}
                  <a 
                    href="mailto:arushkumar054@gmail.com"
                    className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    email
                  </a>{" "}
                  :)
                </p>
                
                <p className="font-medium text-foreground">
                  Cheers, clarity before craft, always.
                </p>
              </div>
            </div>

            {/* Character illustration */}
            <div className="hidden lg:flex justify-end items-start">
              <svg viewBox="0 0 400 500" className="w-80 h-auto opacity-70">
                <g fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/40">
                  <ellipse cx="200" cy="80" rx="50" ry="60" />
                  <path d="M180 60 Q190 50 200 55 Q210 50 220 60" />
                  <circle cx="185" cy="70" r="5" />
                  <circle cx="215" cy="70" r="5" />
                  <path d="M195 85 Q200 90 205 85" />
                  <path d="M150 50 Q200 20 250 50" />
                  <rect x="160" y="50" width="80" height="20" />
                  <path d="M160 140 Q200 160 240 140 L260 350 Q200 380 140 350 Z" />
                  <path d="M140 180 Q100 200 80 250 Q60 300 100 340" />
                  <path d="M260 180 Q300 200 320 250 Q340 300 300 340" />
                  <path d="M170 350 L150 480" />
                  <path d="M230 350 L250 480" />
                  <ellipse cx="200" cy="490" rx="80" ry="15" />
                  <circle cx="140" cy="500" r="12" />
                  <circle cx="260" cy="500" r="12" />
                </g>
              </svg>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mt-12 sm:mt-16 space-y-3 sm:space-y-4 animate-fade-in-delay-2 max-w-3xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              <div className="aspect-square rounded-sm overflow-hidden bg-muted">
                <img 
                  src={friends1Image} 
                  alt="Friends"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-sm overflow-hidden bg-muted">
                <img 
                  src={sceneImage} 
                  alt="Scene"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-sm overflow-hidden bg-muted">
                <img 
                  src={bikeImage} 
                  alt="Bike"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="aspect-[3/1] rounded-sm overflow-hidden bg-muted">
              <img 
                src={friendsImage} 
                alt="Friends"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-12 sm:mt-16 md:mt-24">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-40 lg:gap-60 items-start">
              <h2 className="text-xl sm:text-2xl font-sans font-semibold uppercase tracking-wider whitespace-nowrap">Education</h2>
              
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 md:gap-12">
                  <p className="font-mono text-xs sm:text-sm text-muted-foreground sm:w-32 flex-shrink-0">2022-2026</p>
                  <p className="font-mono text-xs sm:text-sm uppercase tracking-wide flex-1">AMITY UNIVERSITY, NOIDA</p>
                  <p className="font-mono text-xs sm:text-sm text-muted-foreground flex-1">BTech Information Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="mt-12 sm:mt-16">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-36 lg:gap-52 items-start">
              <h2 className="text-xl sm:text-2xl font-sans font-semibold uppercase tracking-wider whitespace-nowrap">Certificates</h2>
              
              <div className="flex-1 space-y-4 sm:space-y-3 w-full">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 md:gap-12">
                  <p className="font-mono text-xs sm:text-sm text-muted-foreground sm:w-32 flex-shrink-0">September 2025</p>
                  <p className="font-mono text-xs sm:text-sm flex-1">JPMorgan Chase & Co. Software Engineering Job Simulation - Forage</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 md:gap-12">
                  <p className="font-mono text-xs sm:text-sm text-muted-foreground sm:w-32 flex-shrink-0">September 2025</p>
                  <p className="font-mono text-xs sm:text-sm flex-1">AWS Solutions Architecture Job Simulation - Forage</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 md:gap-12">
                  <p className="font-mono text-xs sm:text-sm text-muted-foreground sm:w-32 flex-shrink-0">August 2025</p>
                  <p className="font-mono text-xs sm:text-sm flex-1">Oracle Cloud Infrastructure Certified DevOps Professional - Oracle University</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 md:gap-12">
                  <p className="font-mono text-xs sm:text-sm text-muted-foreground sm:w-32 flex-shrink-0">August 2025</p>
                  <p className="font-mono text-xs sm:text-sm flex-1">Oracle Cloud Infrastructure Certified AI Foundations Associate - Oracle University</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 md:gap-12">
                  <p className="font-mono text-xs sm:text-sm text-muted-foreground sm:w-32 flex-shrink-0">March 2025</p>
                  <p className="font-mono text-xs sm:text-sm flex-1">Fundamentals of Deep Learning - Nvidia</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 md:gap-12">
                  <p className="font-mono text-xs sm:text-sm text-muted-foreground sm:w-32 flex-shrink-0">June 2025</p>
                  <p className="font-mono text-xs sm:text-sm flex-1">Enterprise Networking, Security, and Automation - Cisco Networking Academy</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 md:gap-12">
                  <p className="font-mono text-xs sm:text-sm text-muted-foreground sm:w-32 flex-shrink-0">October 2024</p>
                  <p className="font-mono text-xs sm:text-sm flex-1">Switching Routing and Wireless Essentials - Cisco Networking Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
