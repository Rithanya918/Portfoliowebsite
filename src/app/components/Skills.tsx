import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Brain, Code, Cloud, Wrench, BarChart, Boxes, Settings } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      category: "Product Management & Strategy",
      icon: Settings,
      color: "from-primary to-secondary",
      skills: [
        "Product Roadmaps",
        "Feature Prioritization",
        "KPI Definition & Tracking",
        "Leadership Reviews",
        "Stakeholder Alignment",
        "Change Management",
        "Agile Scrum",
        "Experiment Design",
        "A/B Testing",
        "BRDs & Specs",
        "UAT Management",
        "Risk Management"
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      color: "from-secondary to-accent",
      skills: [
        "Generative AI",
        "LLMs",
        "Agentic AI",
        "Autonomous Workflows",
        "LangChain",
        "LangGraph",
        "CrewAI",
        "Microsoft AutoGen",
        "MCP",
        "Gemini",
        "OpenAI API/SDK",
        "Bedrock",
        "ElevenLabs",
        "Conversational AI",
        "RAG Systems",
        "Digital Twin Development",
        "LangSmith"
      ],
    },
    {
      category: "Programming & Prototyping",
      icon: Code,
      color: "from-accent to-primary",
      skills: [
        "Python",
        "JavaScript",
        "n8n (Automation)",
        "Gradio",
        "API Development",
        "API Integration",
        "Rapid Prototyping"
      ],
    },
    {
      category: "Cloud & Data Platforms",
      icon: Cloud,
      color: "from-primary to-accent",
      skills: [
        "AWS",
        "Bedrock",
        "Lambda",
        "S3",
        "GCP",
        "Vertex AI",
        "BigQuery",
        "Azure",
        "Snowflake",
        "Kubernetes",
        "Docker",
        "MongoDB",
        "SQL",
        "PySpark"
      ],
    },
    {
      category: "SDLC & Infrastructure",
      icon: Boxes,
      color: "from-secondary to-primary",
      skills: [
        "CI/CD",
        "Microservices",
        "API Integration",
        "Monitoring",
        "Observability",
        "Distributed Systems"
      ],
    },
    {
      category: "Analytics & Visualization",
      icon: BarChart,
      color: "from-accent to-secondary",
      skills: [
        "Power BI",
        "Tableau",
        "Looker",
        "KPI Dashboards",
        "Data-Driven Decision Making",
        "Experiment Analysis",
        "Data Visualization"
      ],
    },
    {
      category: "Tools & Delivery",
      icon: Wrench,
      color: "from-primary to-secondary",
      skills: [
        "Jira",
        "Confluence",
        "Figma",
        "Airflow",
        "Kafka",
        "Technical Documentation",
        "Cross-Functional Leadership"
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
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative"
            >
              <motion.div
                className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Category header */}
                <div className="flex flex-col items-start gap-3 mb-6">
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-primary">{category.category}</h3>
                </div>

                {/* Skills as tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-muted/50 rounded-full text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
