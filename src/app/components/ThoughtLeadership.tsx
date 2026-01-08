import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Lightbulb, BookOpen, Linkedin } from "lucide-react";

export function ThoughtLeadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const quotes = [
    {
      text: "AI is not about replacing human intelligence—it's about augmenting it. The future belongs to those who can blend machine learning with strategic thinking.",
      context: "On AI Strategy",
    },
    {
      text: "Data without context is just noise. The real value comes from asking the right questions and understanding the story behind the numbers.",
      context: "On Data Analytics",
    },
    {
      text: "Systems thinking allows us to see patterns where others see chaos. It's the bridge between technical solutions and business impact.",
      context: "On Systems Thinking",
    },
    {
      text: "Innovation isn't just about adopting new technology—it's about reimagining how we solve problems and create value for stakeholders.",
      context: "On Innovation",
    },
  ];

  const writings = [
    {
      title: "The Future of AI in Business Strategy",
      description: "Exploring how AI is reshaping strategic decision-making in modern enterprises.",
      platform: "Medium",
      date: "Dec 2025",
      icon: BookOpen,
    },
    {
      title: "From Data to Decisions: A Framework",
      description: "A comprehensive guide to building data-driven decision systems.",
      platform: "LinkedIn",
      date: "Nov 2025",
      icon: Linkedin,
    },
    {
      title: "Ethics in AI: Building Responsible Systems",
      description: "Discussing the importance of ethical considerations in AI development.",
      platform: "Medium",
      date: "Oct 2025",
      icon: BookOpen,
    },
  ];

  const beliefs = [
    {
      title: "Continuous Learning",
      description: "The tech landscape evolves rapidly. Staying curious and adaptable is not optional—it's essential.",
      icon: Lightbulb,
    },
    {
      title: "Human-Centered AI",
      description: "Technology should serve people, not the other way around. Every solution must prioritize human needs.",
      icon: Lightbulb,
    },
    {
      title: "Measurable Impact",
      description: "Great ideas mean nothing without execution. Focus on delivering tangible, measurable value.",
      icon: Lightbulb,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % quotes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section id="thought-leadership" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Thought <span className="text-primary">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing insights on AI, analytics, and the future of technology
          </p>
        </motion.div>

        {/* Quote Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-border rounded-2xl p-12 overflow-hidden">
              {/* Quote icon */}
              <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/20" />
              
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <p className="text-2xl md:text-3xl leading-relaxed mb-6 italic">
                  "{quotes[currentSlide].text}"
                </p>
                <p className="text-primary font-semibold">— {quotes[currentSlide].context}</p>
              </motion.div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <motion.button
                  onClick={prevSlide}
                  className="p-3 bg-card border border-border rounded-full hover:border-primary hover:bg-primary hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <div className="flex gap-2">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide ? "bg-primary w-8" : "bg-muted hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextSlide}
                  className="p-3 bg-card border border-border rounded-full hover:border-primary hover:bg-primary hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Beliefs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-center mb-12">Core Beliefs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="bg-card border border-border rounded-lg p-8 h-full hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    className="inline-block p-4 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary transition-colors"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <belief.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {belief.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{belief.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Writings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-center mb-12">Recent Writings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {writings.map((writing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <motion.div
                  className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded group-hover:bg-primary transition-colors">
                      <writing.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-primary">{writing.platform}</span>
                      <span className="text-sm text-muted-foreground ml-2">{writing.date}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {writing.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{writing.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
