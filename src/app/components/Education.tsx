import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Stanford University",
      year: "2017-2019",
      description: "Specialized in Machine Learning and Statistical Analysis",
      achievements: ["GPA: 3.9/4.0", "Dean's List", "Research Assistant"],
      icon: GraduationCap,
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "MIT",
      year: "2013-2017",
      description: "Focus on Artificial Intelligence and Algorithms",
      achievements: ["Summa Cum Laude", "Thesis on Neural Networks", "Honors Program"],
      icon: GraduationCap,
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: Award,
    },
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2023",
      icon: Award,
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2022",
      icon: Award,
    },
    {
      title: "Deep Learning Specialization",
      issuer: "deeplearning.ai",
      year: "2021",
      icon: BookOpen,
    },
    {
      title: "Microsoft Certified: Azure AI Engineer",
      issuer: "Microsoft",
      year: "2022",
      icon: Award,
    },
    {
      title: "Stanford Machine Learning",
      issuer: "Coursera",
      year: "2020",
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-semibold mb-8 flex items-center gap-3"
          >
            <GraduationCap className="w-8 h-8 text-primary" />
            Academic Background
          </motion.h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <edu.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-2xl font-semibold mb-1 group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h4>
                          <p className="text-lg text-muted-foreground">{edu.institution}</p>
                        </div>
                        <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {edu.year}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4">{edu.description}</p>

                      <div className="flex flex-wrap gap-3">
                        {edu.achievements.map((achievement, achIndex) => (
                          <motion.span
                            key={achIndex}
                            className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-sm"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.2 + achIndex * 0.1 }}
                          >
                            <Star className="w-4 h-4 text-primary" />
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Connecting line */}
                {index < education.length - 1 && (
                  <motion.div
                    className="absolute left-10 top-full h-8 w-1 bg-gradient-to-b from-primary to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-semibold mb-8 flex items-center gap-3"
          >
            <Award className="w-8 h-8 text-primary" />
            Professional Certifications
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="p-3 bg-primary/10 rounded-lg inline-block mb-4 group-hover:bg-primary transition-colors"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <cert.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </motion.div>

                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                  <p className="text-primary text-sm">{cert.year}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
