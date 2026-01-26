import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const certifications = [
        {
      title: "AWS Certified AI Practitioner",
      issuer: "AWS",
      date: "Issued Jan 2026",
      image: "https://github.com/user-attachments/assets/406f825c-9286-4130-aec4-ddb4fee11535",
      url: "https://www.credly.com/earner/earned/badge/1c86c430-b1fa-4e09-b636-047d4e0cf9df", // ADD YOUR MICROSOFT CREDENTIAL LINK
    },
    {
      title: "Microsoft Azure AI 900",
      issuer: "Microsoft Azure",
      date: "Issued Dec 2025",
      image: "https://github.com/user-attachments/assets/713f8be7-db93-44d1-948c-596494e95328",
      url: "https://learn.microsoft.com/en-us/users/your-profile/credentials", // ADD YOUR MICROSOFT CREDENTIAL LINK
    },
    {
      title: "Oracle APEX Cloud Developer Professional",
      issuer: "Oracle",
      date: "Issued July 2025",
      image: "https://github.com/user-attachments/assets/729aae1e-7349-40e9-9f81-e93536548fff",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=316F56963AC206F52BDA1FAAD8F787DE9C86A003647A34BF33E23C7FAD8CCBA3",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Data Science Professional",
      issuer: "Oracle",
      date: "Issued Sept 2025",
      image: "https://github.com/user-attachments/assets/4b29bc60-14bb-435b-9eac-216e8532ac76",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DF0FE707B56962BE66C40D00A9D1FC49CC80A20DF11163E0CF6EFB838C6CCE02",
    },
    {
      title: "Lean Six Sigma Black Belt Certification – Level III",
      issuer: "Lean Six Sigma",
      date: "Issued Aug 2025",
      image: "https://github.com/user-attachments/assets/d15b67a1-b283-425e-a9a8-55e91ec0e9b2",
      url: "https://the.glss.app/public/certificates/91296",
    },
    {
      title: "Microsoft Business Analyst Professional",
      issuer: "Coursera",
      date: "Issued Aug 2024",
      image: "https://github.com/user-attachments/assets/2cacfe0f-7194-4f0f-9fa5-50c541f30bd4",
      url: "https://www.coursera.org/account/accomplishments/specialization/BX178V1LL5MD",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block"
            >
              <motion.div
                className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary transition-all duration-300 flex flex-col relative"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* External link icon - appears on hover */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <ExternalLink className="w-5 h-5 text-primary" />
                </motion.div>

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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
