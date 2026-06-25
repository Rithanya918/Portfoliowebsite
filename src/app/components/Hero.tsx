import { motion } from "motion/react";
import { ChevronDown, Mail, Linkedin } from "lucide-react";

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

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture - Using GitHub image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl mx-auto"
                whileHover={{ scale: 1.05, borderColor: "rgb(220, 38, 38)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://github.com/user-attachments/assets/94d118a3-8fb9-4d3b-97ff-ee1bb6634889" 
                  alt="Rithanya Sekar"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10" />
            </div>
          </motion.div>

          <motion.p
            className="text-primary mb-4 tracking-wider uppercase text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            AI & ANALYTICS PROFESSIONAL | SYSTEMS THINKER | TECH STRATEGIST
          </motion.p>
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Rithanya <span className="text-primary">Sekar</span>
          </motion.h1>
          
          <motion.p
            className="text-base md:text-lg lg:text-lg text-muted-foreground mb-12 max-w-7xl mx-auto leading-relaxed"
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="group relative px-8 py-4 bg-primary text-white rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </span>
              <motion.div
                className="absolute inset-0 bg-secondary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.a
              href="https://www.linkedin.com/in/rithanya-sekar-/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
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
