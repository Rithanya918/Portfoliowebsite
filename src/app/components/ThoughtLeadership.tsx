import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen, Linkedin, ExternalLink } from "lucide-react";

export function ThoughtLeadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const writings = [
    {
      title: "My Journey into the AI World",
      description: "How Curiosity Became My Compass.",
      platform: "Medium",
      date: "Dec 2025",
      icon: BookOpen,
      url: "https://medium.com/@rithanyasekar918/my-journey-into-the-ai-world-03a11a85125c", // ADD YOUR MEDIUM LINK HERE
    },
    {
      title: "The Change in the travel industry",
      description: "The travel industry still makes users work too hard to find the right deal.",
      platform: "LinkedIn",
      date: "Nov 2025",
      icon: Linkedin,
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7392216361726349312/", // ADD YOUR LINKEDIN ARTICLE LINK HERE
    },
    {
      title: "My 5-step framework to approching datasets",
      description: "Discussing the importance of ethical considerations in AI development.",
      platform: "LinkedIn",
      date: "Oct 2025",
      icon: BookOpen,
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7416842775503163392/", // ADD YOUR MEDIUM LINK HERE
    },
  ];

  return (
    <section id="thought-leadership" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Recent <span className="text-primary">Writings</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring AI, analytics, and technology solutions
          </p>
        </motion.div>

        {/* Recent Writings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {writings.map((writing, index) => (
              <motion.a
                key={index}
                href={writing.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group cursor-pointer block"
              >
                <motion.div
                  className="border border-red-900/40 rounded-lg p-8 min-h-[15rem] h-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 relative"
                  style={{
                    background:
                      "linear-gradient(to bottom, #dc2626 0%, #7f1d1d 20%, #1a0d0d 45%, #0b0b0d 100%)",
                  }}
                  whileHover={{ y: -5 }}
                >
                  {/* External link icon - appears on hover */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 bg-black/30 rounded group-hover:bg-white/20 transition-colors">
                      <writing.icon className="w-5 h-5 text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-white">{writing.platform}</span>
                      <span className="text-sm text-white/70 ml-2">{writing.date}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white transition-colors">
                    {writing.title}
                  </h4>
                  <p className="text-muted-foreground text-base">{writing.description}</p>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
