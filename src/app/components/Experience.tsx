import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Graduate Assistant – Academic Space Management (Analytics)",
      company: "Florida International University",
      period: "Aug 2025 - Apr 2026",
      description: "Miami / Orlando, FL — Drove SQL-based analytics and reporting for academic space utilization across the university.",
      achievements: [
        "Designed automated SQL-based reporting across 60+ academic units, replacing manual prep with reproducible queries and reducing turnaround on ad-hoc data requests.",
        "Performed data validation and reconciliation across decentralized source systems, surfacing inconsistencies that previously skewed utilization metrics.",
        "Translated stakeholder questions into analytical specifications, partnering with platform teams to convert ambiguous business asks into structured, query-backed answers.",
        "Presented utilization trends and forecasts to university management, framing model outputs in business terms decision-makers could act on.",
      ],
      color: "border-secondary",
    },
    {
      title: "Associate Product Owner – Analytics & AI Systems",
      company: "Jungroo Learning",
      period: "Oct 2022 - Nov 2024",
      description: "Remote — Owned analytics requirements and model evaluation for AI-driven product features across multiple release cycles.",
      achievements: [
        "Partnered directly with data scientists and ML engineers to scope, validate, and deploy AI-driven product features — owning the analytics requirements, success metrics, and model evaluation criteria across 5 multi-phase release cycles.",
        "Built a product analytics framework tracking behavioral cohort metrics, conversion funnels, and feature-level engagement — instrumenting events that fed downstream forecasting and prioritization models.",
        "Conducted statistical root-cause analysis on platform reliability issues, driving a 21% improvement through structured hypothesis testing and impact quantification.",
        "Translated model performance and experimental results into executive briefings — bridging the gap between data science output and business decisions.",
        "Drove a 37-40% increase in platform adoption across release cycles through analytics-informed prioritization and disciplined delivery.",
        "Mentored junior analysts on backlog hygiene, requirements traceability, and structured stakeholder engagement.",
      ],
      color: "border-accent",
    },
    {
      title: "Business Analyst – Data & Reporting",
      company: "Jungroo Learning",
      period: "Nov 2021 - Sep 2022",
      description: "Remote — Built ETL automation and BI dashboards serving 200,000+ users across operational and behavioral datasets.",
      achievements: [
        "Built Python ETL automation (Pandas / NumPy) that reduced manual data preparation workload by 40% and standardized cross-system data consistency.",
        "Delivered Power BI and Tableau dashboards serving 200,000+ users — translated raw operational telemetry into leadership KPIs, trend reports, and self-serve drill-downs.",
        "Wrote complex SQL across PostgreSQL and MySQL — joining operational, behavioral, and HR-system datasets to support performance-driver analysis.",
        "Applied Lean Six Sigma DMAIC to quantify process inefficiencies, run before/after impact analyses, and recommend automation interventions to leadership.",
        "Documented business requirements, RTM coverage, and UAT plans — ensuring analytical deliverables tied back to measurable business outcomes.",
      ],
      color: "border-secondary",
    },
    {
      title: "Project Architect",
      company: "Claypot Architecture",
      period: "Aug 2017 - Aug 2019",
      description: "India — Coordinated multi-disciplinary engineering and site teams across simultaneous projects.",
      achievements: [
        "Coordinated multi-disciplinary engineering & site teams across simultaneous projects — early grounding in industrial workflow modeling, scheduling, and resource optimization.",
        "Maintained schedules, WBS, and Gantt-based progress tracking; presented status and risks to clients and senior leadership.",
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
        <div className="space-y-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              <motion.div
                className="border border-red-900/40 rounded-lg p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
                style={{
                  background:
                    "linear-gradient(to bottom, #dc2626 0%, #7f1d1d 20%, #1a0d0d 45%, #0b0b0d 100%)",
                }}
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
                    <h3 className="text-xl font-semibold mb-2 text-white transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-base text-white/80 mb-2">{exp.company}</p>
                  </div>
                  <span className="px-4 py-2 bg-black/30 text-white rounded-full text-sm whitespace-nowrap h-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-5">{exp.description}</p>

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
