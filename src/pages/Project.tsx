import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const projectData: Record<string, {
  title: string;
  company: string;
  year: string;
  description: string;
  images: string[];
}> = {
  plazio: {
    title: "Scaling student housing with a cohesive design system",
    company: "PLAZIO (AKA HOUSING HAWK)",
    year: "2025",
    description: "A comprehensive design system for a student housing platform that helps students find and manage their housing needs efficiently.",
    images: [
      "https://framerusercontent.com/images/VZIelN0q5I5tw1aX8qInTwmY0As.png",
    ],
  },
  dentistry: {
    title: "Optimizing university dentistry workflow",
    company: "UNIVERSITY OF MONTREAL",
    year: "2025",
    description: "Streamlining the workflow for university dentistry departments to improve patient care and administrative efficiency.",
    images: [],
  },
  intact: {
    title: "Designing for insurance beyond clients",
    company: "INTACT",
    year: "2025",
    description: "Creating user-centered insurance experiences that extend beyond traditional client interactions.",
    images: [
      "https://framerusercontent.com/images/VZIelN0q5I5tw1aX8qInTwmY0As.png",
      "https://framerusercontent.com/images/k5DkbchTQEwvMMpP2xwlqJOMOE.png",
      "https://framerusercontent.com/images/rePLpEHVerAQ0dv73EZqiIwt4Ew.png",
    ],
  },
};

const Project = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <Layout>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-sans font-semibold mb-8">Project Not Found</h1>
            <Link 
              to="/"
              className="inline-block px-6 py-3 border border-foreground text-foreground font-mono text-sm hover:bg-foreground hover:text-background transition-all duration-200"
            >
              BACK TO HOME
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground font-mono text-sm mb-8 hover:text-foreground transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Work
          </Link>

          {/* Hero */}
          <div className="mb-12 animate-fade-in">
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-wider mb-2">
              {project.company}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-muted-foreground font-mono text-sm">
              {project.year}
            </p>
          </div>

          {/* Hero Image */}
          {project.images.length > 0 && (
            <div className="mb-12 rounded-sm overflow-hidden animate-fade-in-delay-1">
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Description */}
          <div className="max-w-3xl animate-fade-in-delay-2">
            <h2 className="text-2xl font-sans font-semibold mb-6">Overview</h2>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Additional Images */}
          {project.images.length > 1 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-delay-3">
              {project.images.slice(1).map((img, index) => (
                <div key={index} className="rounded-sm overflow-hidden">
                  <img src={img} alt="" className="w-full h-auto" />
                </div>
              ))}
            </div>
          )}

          {/* Coming Soon Notice */}
          <div className="mt-16 p-8 bg-card rounded-sm text-center">
            <h3 className="text-xl font-sans font-semibold mb-4">Full Case Study Coming Soon</h3>
            <p className="text-muted-foreground font-mono text-sm">
              This project details are being prepared. Check back soon for the complete case study.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Project;
