import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const Resume = () => {
  useEffect(() => {
    // Redirect to external resume link
    window.open("https://drive.google.com/file/d/1fkbkQdYH3Rwksjz68oETRTvYxBZnpZBA/view?usp=sharing", "_blank");
  }, []);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-sans font-semibold mb-8">Resume</h1>
          <p className="text-muted-foreground font-mono text-sm mb-8">
            Opening resume in a new tab...
          </p>
          <a 
            href="https://drive.google.com/file/d/1fkbkQdYH3Rwksjz68oETRTvYxBZnpZBA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-foreground text-foreground font-mono text-sm hover:bg-foreground hover:text-background transition-all duration-200"
          >
            VIEW RESUME
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
