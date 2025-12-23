import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import slaaangImage from "@/assets/slaaang.jpeg";
import { useState } from "react";

const ExperienceSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-20">
          <h2 className="text-xl sm:text-2xl font-sans font-semibold uppercase tracking-wider whitespace-nowrap">Experience</h2>
          
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-0"
            onValueChange={(value) => setIsOpen(value === "item-1")}
          >
            <AccordionItem value="item-1" className="accordion-item border-none">
              <AccordionTrigger className="hover:no-underline py-0">
                <div className="flex items-start gap-3 sm:gap-4 w-full pr-2 sm:pr-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                    <img 
                      src={slaaangImage} 
                      alt="Slaaang"
                      className={`w-full h-full object-cover rounded-lg transition-transform duration-300 ease-out ${isOpen ? 'rotate-[-10deg]' : ''}`}
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-sm sm:text-base font-normal mb-1">
                      <span className="font-semibold">SLAAANG MEDIA</span> <span className="hidden sm:inline">|</span><span className="sm:hidden"><br /></span> flutter developer intern
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">May - July 2025</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8 pt-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built and maintained cross platform mobile applications, delivering end to end features for production use, including a social media app and an internal
management portal.
Designed and developed scalable, intuitive user interfaces from scratch, ensuring smooth navigation and consistent responsiveness across devices.
Integrated secure authentication, cloud storage, and real time databases, while optimizing performance through efficient state handling, faster loading,
and smooth user experience.
Experience shipping features with version control, reviews, and pre deployment validation, also followed clean code principles, modular architecture,
and documentation standards.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
