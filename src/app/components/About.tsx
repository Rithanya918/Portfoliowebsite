import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Brain, TrendingUp, Network, Target } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const milestones = [
    {
      year: "2018",
      title: "Started AI Journey",
      description: "Began exploring machine learning and data science",
      icon: Brain,
    },
    {
      year: "2020",
      title: "Analytics Leadership",
      description: "Led analytics transformation for Fortune 500 companies",
      icon: TrendingUp,
    },
    {
      year: "2022",
      title: "Systems Architect",
      description: "Designed enterprise-scale AI systems",
      icon: Network,
    },
    {
      year: "2024",
      title: "Strategic Innovation",
      description: "Driving business strategy through AI and analytics",
      icon: Target,
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a technology professional passionate about leveraging AI, analytics, and systems thinking 
            to solve complex business challenges. With a focus on turning data into actionable insights, 
            I bridge the gap between technical innovation and strategic business outcomes.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <motion.div
                  className="flex-1 bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`flex items-start gap-4 ${index % 2 === 0 ? "" : "flex-row-reverse text-right"}`}>
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <milestone.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-primary text-sm mb-1">{milestone.year}</p>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                  className="w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                />

                {/* Empty space for alignment */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

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
