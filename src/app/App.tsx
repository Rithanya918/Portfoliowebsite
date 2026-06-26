import { useEffect, lazy, Suspense } from "react";
import { Navigation } from "./components/Navigation";
import { RedGlowField } from "./components/RedGlowField";
import { ParticlesField } from "./components/ParticlesField";
import { Hero } from "./components/Hero";

// Below-the-fold sections are code-split so the initial load is just the hero.
const Projects = lazy(() => import("./components/Projects").then((m) => ({ default: m.Projects })));
const Certifications = lazy(() => import("./components/Certifications").then((m) => ({ default: m.Certifications })));
const Skills = lazy(() => import("./components/Skills").then((m) => ({ default: m.Skills })));
const Experience = lazy(() => import("./components/Experience").then((m) => ({ default: m.Experience })));
const ThoughtLeadership = lazy(() => import("./components/ThoughtLeadership").then((m) => ({ default: m.ThoughtLeadership })));
const Contact = lazy(() => import("./components/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then((m) => ({ default: m.Footer })));

export default function App() {
  useEffect(() => {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <RedGlowField />
      <ParticlesField />
      <Navigation />

      <main>
        <Hero />
        <Suspense fallback={null}>
          <Projects />
          <Certifications />
          <Skills />
          <Experience />
          <ThoughtLeadership />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
