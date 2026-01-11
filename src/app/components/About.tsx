import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, FileText } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Profile Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-12">
            <span className="text-primary">Rithanya Sekar</span>
          </h2>
          
          <h3 className="text-2xl mb-8 text-muted-foreground">
            AI Software Engineer (Product) @ Secure Passage
          </h3>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl"
                whileHover={{ scale: 1.05, borderColor: "rgb(220, 38, 38)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/images/profile-picture.jpg" 
                  alt="Rithanya Sekar"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
          >
            I turn complicated problems into elegant AI solutions and explain to humans why the AI 
            did something completely different(LOL). Building GenAI systems, automating the boring 
            parts, and keeping products simple (even when the tech isn't).
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.button>

            <motion.a
              href="https://www.linkedin.com/in/rithanya-sekar-/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-card border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              View LinkedIn
            </motion.a>

            <motion.button
              className="px-8 py-3 bg-card border-2 border-border text-foreground rounded-lg hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              View Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: "Innovation", desc: "Pushing boundaries with AI" },
            { title: "Impact", desc: "Creating measurable value" },
            { title: "Integrity", desc: "Building trust through excellence" },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-2 text-primary">{value.title}</h4>
              <p className="text-muted-foreground">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
