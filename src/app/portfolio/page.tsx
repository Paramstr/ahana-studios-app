"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Portfolio() {
  // Filter state
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter options
  const filterOptions = ["All", "Products"];

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Omni - Precision Nutrition Platform",
      category: "Products",
      client: "OMNI Social Wellness Club",
      description: "A complete ecosystem where nutritionists craft personalized meal plans with scientific precision. Every macro calculated, every preference considered, every meal purposeful. Built for a social wellness club bridging longevity and daily health.",
      challenge: "OMNI's nutritionists were spending hours manually calculating macros and coordinating meal plans. Members received generic nutrition guidance that didn't account for their specific health goals or dietary restrictions. The disconnect between meal planning and ordering created inefficiencies.",
      solution: "We built an integrated platform connecting meal planning, member customization, and seamless ordering. Each dish is crafted to exact specifications with macro precision, automated nutritionist workflows, and real-time member feedback integration.",
      metrics: {
        mealPlansCreated: "500+",
        macroPrecision: "±2%",
        timeSavedDaily: "3 hours",
        activeMembers: "200"
      },
      image: "/Products/NutritionOS-base.png",
      testimonial: {
        quote: "This platform transformed how we deliver precision nutrition. Our members receive exactly what their bodies need, calculated to the gram, without any of the previous manual complexity.",
        author: "Henry Chen",
        title: "Co-Founder, OMNI"
      },
      technologies: ["Next.js", "PostgreSQL", "Node.js", "Tailwind"],
      timeline: "4 months",
      featured: true
    },
    {
      id: 2,
      title: "DONNA - AI Legal Research Assistant",
      category: "Products",
      client: "San Francisco Law AI Startup",
      description: "An AI agent paired with a novel neural search engine. DONNA researches precedence across thousands of cases simultaneously, indexing with precision that scales seamlessly as case libraries grow. Currently in pilot phase.",
      challenge: "Legal research was consuming entire days of attorney time. Junior associates spent 70% of their time on case research rather than analysis. Law firms needed to surface relevant precedents across multiple jurisdictions quickly and accurately without compromising thoroughness.",
      solution: "We developed an intelligent system that combines neural search with contextual understanding. DONNA reads case law like a senior partner, understanding precedent relationships and surfacing relevant cases across jurisdictions in moments rather than hours.",
      metrics: {
        casesIndexed: "10,000+",
        researchTimeReduction: "75%",
        jurisdictionsCovered: "3",
        pilotFirms: "2"
      },
      image: "/Products/Donna_AI.png",
      testimonial: {
        quote: "DONNA doesn't replace our legal expertise, it amplifies it. What used to take days of research now happens in minutes, letting us focus on the strategic thinking that matters most.",
        author: "Sarah Martinez",
        title: "Senior Partner, Pilot Law Firm"
      },
      technologies: ["Python", "Transformers", "Vector Search", "FastAPI"],
      timeline: "6 months",
      featured: true
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
                Recent Work
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
                Two platforms we&apos;ve built that demonstrate our approach to intelligent systems.
                Each designed to augment human expertise rather than replace it.
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
                  <AnimatedCounter value="2" suffix="" />
                </div>
                <div className="text-sm text-gray-600">Featured Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-black mb-2">
                  <AnimatedCounter value="700" suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-black mb-2">
                  <AnimatedCounter value="2" suffix="" />
                </div>
                <div className="text-sm text-gray-600">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-black mb-2">
                  <AnimatedCounter value="10" suffix="K+" />
                </div>
                <div className="text-sm text-gray-600">Cases Processed</div>
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
                              &ldquo;{project.testimonial.quote}&rdquo;
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
            <a href="https://calendar.notion.so/meet/paramstr/hello" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-3 text-sm font-medium tracking-tight hover:bg-gray-800 transition-all duration-200 hover:scale-105 inline-block">
              Start Your Project
            </a>
          </div>
        </section>
      </main>

      {/* Footer Spacing */}
      <div className="h-12 md:h-16 lg:h-20 xl:h-24"></div>
    </div>
  );
} 