"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Portfolio() {
  // Filter state
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter options
  const filterOptions = ["All", "Automation", "Products", "Ventures"];

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "TechFlow Operations AI",
      category: "Automation",
      client: "TechFlow",
      description: "Transformed customer service operations with intelligent automation, reducing response times by 85% while improving satisfaction scores.",
      challenge: "Manual customer support processes were creating bottlenecks, with average response times of 24 hours and decreasing satisfaction scores.",
      solution: "Implemented AI-powered ticket routing, automated response generation, and intelligent escalation systems with human oversight.",
      metrics: {
        responseTime: "85%",
        satisfaction: "94%",
        costReduction: "60%",
        volume: "300%"
      },
      image: "/hero/image-1.png",
      testimonial: {
        quote: "The AI system didn't just automate our processes—it reimagined how we serve our customers.",
        author: "Rachel Morrison",
        title: "CEO, TechFlow"
      },
      technologies: ["GPT-4", "LangChain", "Python", "React"],
      timeline: "3 months",
      featured: true
    },
    {
      id: 2,
      title: "Legal Document Analyzer",
      category: "Products",
      client: "Sterling Legal Partners",
      description: "Built AI-powered legal document analysis platform that processes contracts 40x faster than traditional methods.",
      challenge: "Legal document review was taking weeks, creating client delays and reducing firm profitability due to manual processes.",
      solution: "Developed custom NLP models for legal text analysis, automated clause detection, and risk assessment with lawyer oversight.",
      metrics: {
        speed: "4000%",
        accuracy: "97%",
        billableHours: "35%",
        clientSatisfaction: "92%"
      },
      image: "/hero/image-2.png",
      testimonial: {
        quote: "This platform transformed our practice, allowing us to serve more clients with higher quality analysis.",
        author: "David Sterling",
        title: "Managing Partner, Sterling Legal"
      },
      technologies: ["Transformers", "spaCy", "FastAPI", "TypeScript"],
      timeline: "4 months",
      featured: true
    },
    {
      id: 3,
      title: "FinTech Startup MVP",
      category: "Ventures",
      client: "Nexus Financial",
      description: "Zero-to-one AI-powered investment analysis platform that secured $2M seed funding within 6 months of launch.",
      challenge: "Traditional investment analysis tools were too complex and expensive for emerging market traders and small investment firms.",
      solution: "Created intuitive AI assistant that provides real-time market analysis, risk assessment, and personalized investment recommendations.",
      metrics: {
        funding: "$2M",
        users: "10K",
        retention: "78%",
        timeToMarket: "6 months"
      },
      image: "/hero/image-3.png",
      testimonial: {
        quote: "Ahana Studios didn't just build our product—they helped us validate and scale our entire business model.",
        author: "Sarah Kim",
        title: "Founder, Nexus Financial"
      },
      technologies: ["Python", "TensorFlow", "Next.js", "PostgreSQL"],
      timeline: "6 months",
      featured: false
    },
    {
      id: 4,
      title: "Supply Chain Optimizer",
      category: "Automation",
      client: "GlobalTrade Corp",
      description: "Intelligent supply chain management system that reduced costs by 30% while improving delivery reliability.",
      challenge: "Complex global supply chain with multiple vendors was causing delays, cost overruns, and inventory inefficiencies.",
      solution: "Built predictive analytics system with demand forecasting, route optimization, and automated vendor selection algorithms.",
      metrics: {
        costReduction: "30%",
        onTimeDelivery: "96%",
        inventoryTurnover: "45%",
        carbonFootprint: "25%"
      },
      image: "/hero/image-1.png",
      testimonial: {
        quote: "The AI system optimizes our entire supply chain in real-time, something we never thought possible.",
        author: "Michael Chen",
        title: "COO, GlobalTrade Corp"
      },
      technologies: ["PyTorch", "Apache Kafka", "Docker", "AWS"],
      timeline: "5 months",
      featured: false
    },
    {
      id: 5,
      title: "Healthcare Analytics Platform",
      category: "Products",
      client: "MedTech Solutions",
      description: "AI-driven patient outcome prediction system helping hospitals reduce readmission rates by 40%.",
      challenge: "High patient readmission rates were affecting hospital quality scores and increasing costs significantly.",
      solution: "Developed predictive models analyzing patient data, treatment patterns, and social determinants to identify at-risk patients.",
      metrics: {
        readmissionReduction: "40%",
        costSavings: "$1.2M",
        patientSatisfaction: "88%",
        clinicianAdoption: "95%"
      },
      image: "/hero/image-2.png",
      testimonial: {
        quote: "This platform has revolutionized how we approach patient care and resource allocation.",
        author: "Dr. Lisa Rodriguez",
        title: "Chief Medical Officer, MedTech Solutions"
      },
      technologies: ["scikit-learn", "FHIR", "React", "PostgreSQL"],
      timeline: "7 months",
      featured: false
    },
    {
      id: 6,
      title: "Retail AI Assistant",
      category: "Ventures",
      client: "Smart Retail Ventures",
      description: "Conversational AI shopping assistant that increased online conversion rates by 180% for e-commerce clients.",
      challenge: "E-commerce platforms struggled with low conversion rates and high cart abandonment due to complex product discovery.",
      solution: "Created intelligent shopping assistant with natural language processing, personalized recommendations, and seamless checkout integration.",
      metrics: {
        conversionIncrease: "180%",
        cartAbandonment: "65%",
        averageOrderValue: "25%",
        customerLifetimeValue: "40%"
      },
      image: "/hero/image-3.png",
      testimonial: {
        quote: "The AI assistant feels like having a knowledgeable sales associate available 24/7 for every customer.",
        author: "Jennifer Wu",
        title: "CEO, Smart Retail Ventures"
      },
      technologies: ["OpenAI API", "Pinecone", "Next.js", "Stripe"],
      timeline: "4 months",
      featured: false
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Animation refs
  const heroRef = useRef(null);
  const filterRef = useRef(null);
  const projectsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isFilterInView = useInView(filterRef, { once: true, margin: "-100px" });
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" });

  // Expandable project state
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  // Animated counter component
  const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: string, suffix?: string, duration?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        const numericValue = parseInt(value.replace(/[^\d]/g, ''));
        let start = 0;
        const increment = numericValue / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= numericValue) {
            setCount(numericValue);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);
        return () => clearInterval(timer);
      }
    }, [isInView, value, duration]);

    return (
      <span ref={ref}>
        {count}{suffix}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Portfolio Hero Section */}
        <motion.section 
          ref={heroRef}
          className="py-12 md:py-16 lg:py-20 xl:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-black leading-tight tracking-tight mb-6">
                AI Transformations in Action
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
                Real stories of businesses that leveraged AI to unlock new possibilities, 
                drive growth, and redefine their industries.
              </p>
            </motion.div>

            {/* Portfolio Metrics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-black mb-2">
                  <AnimatedCounter value="50" suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-black mb-2">
                  <AnimatedCounter value="25" suffix="M" />
                </div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-black mb-2">
                  <AnimatedCounter value="15" suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-black mb-2">
                  <AnimatedCounter value="95" suffix="%" />
                </div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Filter Navigation */}
        <motion.section 
          ref={filterRef}
          className="py-8 border-t border-gray-100"
        >
          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isFilterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 text-sm font-medium transition-all duration-300 relative ${
                  activeFilter === filter 
                    ? 'text-black' 
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-px bg-black"
                    layoutId="activeFilter"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section 
          ref={projectsRef}
          className="py-12 md:py-16 lg:py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${activeFilter}-${project.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1, 
                    ease: "easeOut" 
                  }}
                  className="group cursor-pointer"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6 transition-all duration-500 group-hover:scale-[1.02]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <motion.div
                        className="text-gray-400 transition-colors duration-300 group-hover:text-black"
                        animate={{ 
                          rotate: expandedProject === project.id ? 45 : 0 
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 1.5a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                      </motion.div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-light text-black leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-base text-gray-700 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Metrics Preview */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-light text-black mb-1">
                            {value}
                          </div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ 
                          opacity: 1, 
                          height: "auto", 
                          y: 0,
                          transition: {
                            duration: 0.5,
                            ease: "easeOut"
                          }
                        }}
                        exit={{ 
                          opacity: 0, 
                          height: 0, 
                          y: -10,
                          transition: {
                            duration: 0.3,
                            ease: "easeIn"
                          }
                        }}
                        className="overflow-hidden border-t border-gray-100 mt-8"
                      >
                        <div className="pt-8 space-y-8">
                          {/* Challenge & Solution */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-lg font-semibold text-black mb-3">Challenge</h4>
                              <p className="text-base text-gray-700 leading-relaxed">
                                {project.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-black mb-3">Solution</h4>
                              <p className="text-base text-gray-700 leading-relaxed">
                                {project.solution}
                              </p>
                            </div>
                          </div>

                          {/* All Metrics */}
                          <div>
                            <h4 className="text-lg font-semibold text-black mb-4">Impact Metrics</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {Object.entries(project.metrics).map(([key, value]) => (
                                <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                                  <div className="text-xl font-light text-black mb-1">
                                    {value}
                                  </div>
                                  <div className="text-xs text-gray-600 capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-lg font-semibold text-black mb-4">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Testimonial */}
                          <div className="border-l-4 border-gray-200 pl-6">
                            <blockquote className="text-lg text-gray-800 leading-relaxed mb-4">
                              "{project.testimonial.quote}"
                            </blockquote>
                            <div className="text-sm">
                              <div className="font-semibold text-black">{project.testimonial.author}</div>
                              <div className="text-gray-600">{project.testimonial.title}</div>
                            </div>
                          </div>

                          {/* Timeline */}
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>Timeline: {project.timeline}</span>
                            <span>•</span>
                            <span>Client: {project.client}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 lg:py-24 border-t border-gray-100 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-black leading-tight mb-6">
              Ready to Write Your AI Success Story?
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              Join the growing number of businesses transforming their operations with intelligent automation.
            </p>
            <button className="bg-black text-white px-8 py-3 text-sm font-medium tracking-tight hover:bg-gray-800 transition-all duration-200 hover:scale-105">
              Start Your Project
            </button>
          </div>
        </section>
      </main>

      {/* Footer Spacing */}
      <div className="h-12 md:h-16 lg:h-20 xl:h-24"></div>
    </div>
  );
} 