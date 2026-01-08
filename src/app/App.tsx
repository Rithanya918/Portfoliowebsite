import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { ThoughtLeadership } from "./components/ThoughtLeadership";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <ThoughtLeadership />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
