import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued Apr 2025 · Expires Apr 2028",
      image: "/path-to-aws-cert.png", // Add certificate image
    },
    {
      title: "McKinsey.org Forward Program",
      issuer: "McKinsey & Company",
      date: "Issued Jul 2025",
      image: "/path-to-mckinsey-cert.png",
    },
    {
      title: "Professional Scrum Master™ I (PSM I)",
      issuer: "Scrum.org",
      date: "Issued Oct 2024",
      image: "/path-to-psm-cert.png",
    },
    {
      title: "Data Science for Engineers",
      issuer: "NPTEL",
      date: "Issued Mar 2021",
      image: "/path-to-nptel-cert.png",
    },
    {
      title: "Artificial Neural Networks (ANN) with Keras in Python and R",
      issuer: "Udemy",
      date: "Issued Sep 2020",
      image: "/path-to-ann-cert.png",
    },
    {
      title: "Machine Learning",
      issuer: "Internshala",
      date: "Issued June 2020",
      image: "/path-to-ml-cert.png",
    },
    {
      title: "IT Project Management",
      issuer: "Indian School of Business",
      date: "Issued May 2020",
      image: "/path-to-pm-cert.png",
    },
  ];

  return (
    <section id="certifications" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary transition-all duration-300 flex flex-col"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Certificate Image */}
                <div className="mb-4 overflow-hidden rounded-lg bg-white p-2">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-40 object-cover rounded"
                  />
                </div>

                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-2 flex-grow">
                  {cert.issuer}
                </p>
                <p className="text-muted-foreground text-xs">
                  {cert.date}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
