import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink, Filter } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "AI-Powered Travel Agent",
      description: "An intelligent travel booking assistant powered by GPT-3.5-turbo and LangGraph that helps users search for flights, hotels, and complete travel packages through both a form-based interface and an AI chat assistant.",
      category: "AI",
      tech: ["Python", "TensorFlow", "AWS", "Docker"],
      github: "https://github.com/Rithanya918/Payanam",
      demo: "", // Add live demo link if available
      image: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
    },
    {
      title: "Customer Booking Predictive Model",
      description: "A machine learning solution that predicts customer flight booking completion for British Airways. The model identifies 78% of customers who will complete bookings, enabling proactive marketing strategies and improved customer acquisition.",
      category: "Analytics",
      tech: ["React", "PostgreSQL", "Kafka", "Redis"],
      github: "https://github.com/Rithanya918/British-Airways_Predictive-Modeling-of-Customer-Bookings",
      demo: "",
      image: "linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)",
    },
    {
      title: "Automated ML Pipeline",
      description: "Created an end-to-end MLOps pipeline reducing model deployment time from weeks to hours.",
      category: "Automation",
      tech: ["Python", "Airflow", "Kubernetes", "MLflow"],
      github: "https://github.com/username/ml-pipeline",
      demo: "",
      image: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)",
    },
    {
      title: "AI-Driven Dynamic Pricing Engine",
      description: "An intelligent pricing optimization system powered by machine learning algorithms and real-time analytics that helps businesses maximize revenue and maintain market competitiveness through automated price recommendations, competitor monitoring, and executive insights.",
      category: "AI",
      tech: ["PyTorch", "Transformers", "FastAPI", "Docker"],
      github: "https://github.com/Rithanya918/CGPricing/tree/master",
      demo: "",
      image: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
    },
    {
      title: "Predictive Maintenance Model",
      description: "Developed predictive models for industrial equipment, reducing downtime by 40%.",
      category: "Analytics",
      tech: ["Python", "Scikit-learn", "Azure", "SQL"],
      github: "https://github.com/username/predictive-maintenance",
      demo: "",
      image: "linear-gradient(135deg, #991b1b 0%, #dc2626 100%)",
    },
    {
      title: "Data Warehouse Modernization",
      description: "Led the migration of legacy data warehouse to cloud, improving query performance by 10x.",
      category: "Infrastructure",
      tech: ["Snowflake", "dbt", "Python", "Terraform"],
      github: "https://github.com/username/data-warehouse",
      demo: "",
      image: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)",
    },
  ];

  const categories = ["All", "AI", "Analytics", "Automation", "Infrastructure"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing impactful solutions that blend AI, analytics, and strategic thinking
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Filter className="w-5 h-5 text-primary mr-2 mt-2" />
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? "bg-primary text-white"
                  : "bg-card border border-border hover:border-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                className="bg-card border border-border rounded-lg overflow-hidden h-full hover:border-primary transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                {/* Project image/gradient */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <motion.div
                      className="flex gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-6 h-6 text-white" />
                        </a>
                      )}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View more on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Rithanya918"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
