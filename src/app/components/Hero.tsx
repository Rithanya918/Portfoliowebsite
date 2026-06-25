import { motion } from "motion/react";
import { ChevronDown, Mail, Linkedin } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Near-black base */}
      <div className="absolute inset-0 bg-black" />

      {/* Blue light pool where the beams land (right side) */}
      <div className="absolute -right-32 top-1/4 w-[55rem] h-[55rem] rounded-full bg-blue-600/25 blur-3xl" />
      <div className="absolute right-10 bottom-0 w-[40rem] h-[40rem] rounded-full bg-blue-500/15 blur-3xl" />

      {/* Diagonal electric-blue light beams sweeping from the top-right */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/3 right-[-10%] h-[180%] w-[70%] origin-top-right rotate-[28deg]"
          animate={{ x: [0, 24, 0], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          {[
            { left: "10%", w: "2px", color: "bg-blue-300", glow: "bg-blue-400/40", o: 0.9 },
            { left: "24%", w: "6px", color: "bg-blue-400", glow: "bg-blue-500/35", o: 0.7 },
            { left: "40%", w: "3px", color: "bg-sky-300", glow: "bg-sky-400/30", o: 0.85 },
            { left: "58%", w: "10px", color: "bg-blue-500", glow: "bg-blue-600/30", o: 0.6 },
            { left: "74%", w: "2px", color: "bg-amber-400", glow: "bg-amber-500/30", o: 0.55 },
            { left: "88%", w: "5px", color: "bg-blue-400", glow: "bg-blue-500/25", o: 0.5 },
          ].map((b, i) => (
            <div
              key={i}
              className="absolute top-0 h-full"
              style={{ left: b.left, opacity: b.o }}
            >
              {/* glow halo */}
              <div
                className={`absolute inset-y-0 -left-6 w-16 ${b.glow} blur-2xl`}
              />
              {/* bright core */}
              <div
                className={`h-full ${b.color} blur-[1px]`}
                style={{ width: b.w }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Warm orange glow in the bottom-left corner */}
      <div className="absolute -bottom-24 -left-24 w-[34rem] h-[34rem] rounded-full bg-orange-600/25 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[22rem] h-[22rem] rounded-full bg-amber-500/15 blur-3xl" />


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
