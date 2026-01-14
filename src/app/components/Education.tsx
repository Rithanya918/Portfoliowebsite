import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      degree: "Master's in Information Systems Management",
      institution: "University of Maryland – Robert H. Smith School of Business",
      year: "Aug 2023 – Dec 2024",
      gpa: "GPA: 3.7",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/University_of_Maryland_seal.svg/1200px-University_of_Maryland_seal.svg.png",
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "JNTUH College of Engineering Hyderabad",
      year: "2017 – 2021",
      gpa: "GPA: 3.53",
      logo: "https://jntuh.ac.in/wp-content/uploads/2023/03/logo-1.png",
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
            <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                className="bg-card border-2 border-primary rounded-lg p-8 h-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col items-center text-center"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* University Logo */}
                <motion.div
                  className="w-32 h-32 mb-6 bg-white rounded-full p-4 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src={edu.logo} 
                    alt={`${edu.institution} logo`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {edu.degree}
                </h3>

                <p className="text-lg text-foreground mb-3">
                  {edu.institution}
                </p>

                <p className="text-muted-foreground mb-2">
                  {edu.year} · {edu.gpa}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
