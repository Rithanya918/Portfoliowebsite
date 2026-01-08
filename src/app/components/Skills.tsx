import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Brain, Database, Cloud, Code, BarChart, Cpu } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "AI & Machine Learning",
      icon: Brain,
      color: "from-primary to-secondary",
      skills: [
        { name: "Deep Learning", level: 90 },
        { name: "NLP", level: 85 },
        { name: "Computer Vision", level: 80 },
        { name: "MLOps", level: 85 },
      ],
    },
    {
      category: "Analytics & Data Science",
      icon: BarChart,
      color: "from-secondary to-accent",
      skills: [
        { name: "Statistical Analysis", level: 95 },
        { name: "Data Visualization", level: 90 },
        { name: "Predictive Modeling", level: 88 },
        { name: "A/B Testing", level: 85 },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-accent to-primary",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Azure", level: 80 },
        { name: "GCP", level: 75 },
        { name: "Docker/Kubernetes", level: 82 },
      ],
    },
    {
      category: "Programming Languages",
      icon: Code,
      color: "from-primary to-accent",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 85 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 80 },
      ],
    },
    {
      category: "Databases",
      icon: Database,
      color: "from-secondary to-primary",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Redis", level: 78 },
        { name: "Snowflake", level: 85 },
      ],
    },
    {
      category: "Tools & Frameworks",
      icon: Cpu,
      color: "from-accent to-secondary",
      skills: [
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 92 },
        { name: "Spark", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for delivering AI-powered solutions and data-driven strategies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              onMouseEnter={() => setHoveredCategory(category.category)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="relative"
            >
              <motion.div
                className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>

                {/* Skills with animated bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <motion.span
                          className="text-sm text-primary"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Hover glow effect */}
              {hoveredCategory === category.category && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 rounded-lg blur-xl`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Tech stack tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Tableau", "Power BI", "Git", "CI/CD", "Airflow", "Kafka",
              "Elasticsearch", "Jenkins", "Terraform", "FastAPI", "Django",
              "React", "GraphQL", "REST APIs", "Agile", "Scrum"
            ].map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
