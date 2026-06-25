import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink, Filter, X } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "AROS - AI Reliability Overlay System",
      description: "An AI reliability overlay that detects and prevents AI hallucinations through real-time verification of responses across platforms like ChatGPT, Claude, and Gemini. Provides confidence scoring (0-100) with detailed breakdowns and color-coded risk insights.",
      category: "AI",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      github: "https://github.com/Rithanya918/AROS",
      demo: "https://aros-1.lovable.app/",
      image: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
    },
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
      title: "AI-Driven Dynamic Pricing Engine",
      description: "An intelligent pricing optimization system powered by machine learning algorithms and real-time analytics that helps businesses maximize revenue and maintain market competitiveness through automated price recommendations, competitor monitoring, and executive insights.",
      category: "AI",
      tech: ["PyTorch", "Transformers", "FastAPI", "Docker"],
      github: "https://github.com/Rithanya918/CGPricing/tree/master",
      demo: "",
      image: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
    },

    {
      title: "Pizza Sales Report",
      description: "Analysis and displays sales trends, top and least performers of a Pizza store, helping to make business descisions",
      category: "Analytics",
      tech: ["MySQL- Workbench", "Tableau", "Snowflake", "SQL queires"],
      github: "https://github.com/Rithanya918/Sales_analysis_Dashboard_1/tree/main",
      demo: "",
      image: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
    },
   {
      title: "Customer-Shopping-Behavior-Analysis",
      description: "Analyzing retail transactions to uncover spending patterns, customer segments, and product preferences using Python, SQL, and Power BI.",
      category: "Analytics",
      tech: ["PostgreSQL", "PowerBI", "SQL queires", "Python"],
      github: "hhttps://github.com/Rithanya918/Customer-Shopping-Analysis/tree/main",
      demo: "",
      image: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
    },
    {
      title: "NYC Restaurant Inspection Dashboard",
      description: "An interactive Tableau dashboard analyzing NYC restaurant inspection drivers across cuisine risk, operations, borough, and spatial patterns. Surfaces high-risk cuisines, persistent violators, borough deviations, Grade A compliance trends (2020–2023), and spatially clustered low-compliance ZIP codes using LISA clustering and Moran's I.",
      category: "Analytics",
      tech: ["Tableau", "Spatial Analysis", "LISA / Moran's I", "Data Visualization"],
      github: "",
      demo: "https://public.tableau.com/views/NYCRESTAURANTINSPECTION/NYCRestaurantInspectionDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      image: "linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)",
      imageUrl: "https://github.com/user-attachments/assets/4b26d159-3bcf-44a1-be05-427c8e30f78f",
    },
  ];

  const categories = ["All", "AI", "Analytics"];

  // Scattered "card wall" layout — irregular position, depth and tilt per tile
  const scatter = [
    { left: "6%", top: "26%", rotate: -5, z: 10 },
    { left: "19%", top: "6%", rotate: 3, z: 70 },
    { left: "37%", top: "12%", rotate: -2, z: 40 },
    { left: "27%", top: "48%", rotate: 2, z: 140 },
    { left: "61%", top: "20%", rotate: -4, z: 50 },
    { left: "79%", top: "32%", rotate: 4, z: 0 },
    { left: "52%", top: "56%", rotate: -2, z: 100 },
    { left: "76%", top: "58%", rotate: 3, z: 60 },
  ];

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

        {/* Projects — scattered 3D rotating card wall */}
        <div
          className="[perspective:1800px]"
          style={{ perspectiveOrigin: "50% 40%" }}
        >
          <motion.div
            className="relative h-[460px] sm:h-[520px] md:h-[600px] [transform-style:preserve-3d]"
            animate={{ rotateY: [-18, 18, -18], rotateX: [9, 5, 9] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          >
            {filteredProjects.map((project, index) => {
              const pos = scatter[index % scatter.length];
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1, z: pos.z }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  whileHover={{ z: pos.z + 180, scale: 1.06 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  style={{
                    left: pos.left,
                    top: pos.top,
                    rotate: pos.rotate,
                    transformStyle: "preserve-3d",
                  }}
                  className="group absolute w-32 h-36 sm:w-36 sm:h-44 md:w-44 md:h-52 cursor-pointer"
                >
                  {/* Tile */}
                  <div
                    className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group-hover:ring-primary/60 transition-all duration-300"
                    style={{ background: project.image }}
                  >
                    {project.imageUrl && (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    {/* Title scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <span className="text-[10px] uppercase tracking-wider text-primary">
                        {project.category}
                      </span>
                      <h3 className="text-white text-xs sm:text-sm font-semibold leading-tight line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

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

      {/* Project detail popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Card */}
            <motion.div
              className="relative z-10 w-full max-w-2xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image / gradient header */}
              <div
                className="h-56 md:h-64 relative overflow-hidden"
                style={{ background: selectedProject.image }}
              >
                {selectedProject.imageUrl && (
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
