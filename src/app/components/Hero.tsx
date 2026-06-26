import { motion } from "motion/react";
import { ChevronDown, Mail, Linkedin } from "lucide-react";
import { ChatPanel } from "./ChatAssistant";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Dark base */}
      <div className="absolute inset-0 bg-background" />

      {/* Flowing animated gradient layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 18% 22%, rgba(220,38,38,0.40), transparent 60%), radial-gradient(55% 55% at 82% 28%, rgba(127,29,29,0.55), transparent 60%), radial-gradient(60% 60% at 50% 85%, rgba(153,27,27,0.40), transparent 60%)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft drifting color blobs */}
      <motion.div
        className="absolute -top-40 -left-32 w-[42rem] h-[42rem] rounded-full bg-primary/25 blur-3xl"
        animate={{ x: [0, 90, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-44 w-[38rem] h-[38rem] rounded-full bg-red-700/20 blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, 80, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 left-1/4 w-[36rem] h-[36rem] rounded-full bg-red-900/30 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      {/* Main content — two columns: text left, chat right */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left column */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Rithanya <span className="text-primary">Sekar</span>
          </motion.h1>

          <motion.p
            className="text-primary mb-6 tracking-wider uppercase text-xs md:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            AI & ANALYTICS PROFESSIONAL | SYSTEMS THINKER | TECH STRATEGIST
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Results-driven Business Analyst and Product Owner with expertise in analytics, AI systems, and digital transformation.
            Skilled in translating complex data into actionable insights, optimizing workflows, and driving measurable business impact
            through data-driven decision-making and stakeholder collaboration. <span className="text-primary">AI-powered insights</span> and
            <span className="text-primary"> systems thinking</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-4 rounded-2xl border border-white/10 bg-background/30 backdrop-blur-xl shadow-lg shadow-black/20 text-foreground hover:border-primary hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </span>
            </motion.button>

            <motion.a
              href="https://www.linkedin.com/in/rithanya-sekar-/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-2xl border border-white/10 bg-background/30 backdrop-blur-xl shadow-lg shadow-black/20 text-foreground hover:border-primary hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                View LinkedIn
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right column — always-open chat */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <ChatPanel className="w-full h-[32rem] lg:h-[34rem] max-h-[80vh]" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("certifications")}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
}
