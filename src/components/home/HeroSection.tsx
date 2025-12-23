import characterIllustration from "@/assets/character-illustration.jpeg";

const HeroSection = () => {
  return (
    <section className="py-1 md:py-24">
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Character Illustration - Desktop only (absolute positioned) */}
          <div className="hidden md:block absolute right-0 top-0 w-64 md:w-80 lg:w-[500px] opacity-80 pointer-events-none -translate-y-8">
            <img 
              src={characterIllustration} 
              alt="arush"
              className="w-full h-auto rounded-3xl"
            />
          </div>

          {/* Cursor icon */}
          <div className="mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M4 4L10 20L13 13L20 10L4 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Hero Card */}
          <div className="bg-card rounded-sm p-6 md:p-8 max-w-3xl animate-fade-in">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold leading-tight mb-4 text-balance">
              I'm Arush, a software developer
            </h1>
            <p className="text-muted-foreground font-mono text-sm">
              Every line of code has a purpose
            </p>
          </div>

          {/* Character Illustration - Mobile only (below hero card) */}
          <div className="md:hidden mt-8 flex justify-center">
            <img 
              src={characterIllustration} 
              alt="arush"
              className="w-64 h-auto rounded-3xl opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
