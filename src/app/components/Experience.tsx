import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Associate Product Manager – Analytics & AI Systems ",
      company: "Jungroo Learning",
      period: "2021 - 2024",
      description: "Provided strategic data science consulting to Fortune 500 companies, focusing on AI adoption and analytics transformation.",
      achievements: [
        "Owned the analytics and experimentation roadmap, driving 15–20% raise in engagement and conversion through data-driven optimization. ",
        "Established product vision, KPIs, and experimentation strategy, accelerating prioritization cycles by ~25% and boosting execution speed. ",
        "Led end-to-end delivery of analytics products, translating business problems into scalable insights and dashboards, reducing decision latency by ~30%. ",
        "Drove cross-functional execution and data governance, improving reporting accuracy by ~35% and informing executive roadmap decisions. ",
      ],
      color: "border-secondary",
    },
    {
      title: "Business Analyst",
      company: "Jungroo Learning",
      period: "2019 - 2021",
      description: "Business Analyst embedded within cross-functional product teams, responsible for problem discovery, data-driven decision support, experimentation, and stakeholder alignment across digital learning platforms. Acted as a bridge between business, product, and technical teams, contributing directly to product definition and prioritisation for data- and AI-enabled initiatives.",
      achievements: [
        "Analyzed learner and educator behavior across platform workflows, identifying friction points that led to ~18% improvement in feature adoption through targeted product recommendations. ",
        "Partnered with 6+ product and engineering teams to refine user stories and acceptance criteria, streamlining requirement rework by ~30% and elevating sprint predictability. ",
        "Built cohort-based performance analyses and insight reports, enabling leadership to identify high-impact learning patterns and influencing quarterly roadmap prioritization decisions. ",
        "Streamlined reporting and data-collection processes, cutting manual analysis effort by ~40% and driving faster turnaround for stakeholder and client requests. ",
      ],
      color: "border-accent",
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Experience & <span className="text-primary">Impact</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering measurable value through data-driven solutions and strategic leadership
          </p>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              <motion.div
                className={`bg-card border-2 ${exp.color} rounded-lg p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.2 }}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-2">{exp.company}</p>
                  </div>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm whitespace-nowrap h-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">{exp.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.2 + achIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Connecting line */}
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute -left-1 top-full h-8 w-1 bg-gradient-to-b from-primary/50 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
