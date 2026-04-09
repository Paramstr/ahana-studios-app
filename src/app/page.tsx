"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {



  // Process visualization - inspired by methodology graphics
  const processSteps = [
    {
      title: "Discovery",
      description: "We map your current landscape—understanding not just what you do, but how you think.",
      visual: "lines-connecting"
    },
    {
      title: "Architecture",
      description: "Intelligence designed for your unique challenges, scaled for your ambitions.",
      visual: "network-nodes"
    },
    {
      title: "Integration",
      description: "Seamless weaving of AI capabilities into your existing operations.",
      visual: "flowing-data"
    },
    {
      title: "Evolution",
      description: "Systems that learn, adapt, and grow smarter with every interaction.",
      visual: "expanding-circles"
    }
  ];



  // Testimonial data
  const testimonial = {
    quote: "Working with Ahana Studios has been transformative. Their AI integration didn't just automate our processes, it reimagined how we serve our customers. The results exceeded every expectation.",
    client: {
      name: "Henry",
      title: "Co-Founder",
      company: "Omni",
      image: "/Founders/henry.png"
    }
  };

  // How We Work principles
  const principles = [
    {
      title: "Intelligence-first architecture",
      description: "Every system we build starts with AI at its core. We design architectures that can learn, adapt, and scale autonomously, ensuring your technology grows smarter with every interaction and data point."
    },
    {
      title: "Transparent collaboration", 
      description: "Clear communication and open processes define our partnerships. You'll have full visibility into development progress, strategic decisions, and performance metrics throughout our engagement."
    },
    {
      title: "Measurable impact",
      description: "We establish clear KPIs and success metrics from day one. Every integration delivers quantifiable results—whether that's efficiency gains, cost reduction, or revenue growth—with detailed reporting and analysis."
    }
  ];

  const principlesDescription = "We architect AI systems that learn and evolve with your business. Every integration is built for scale, every automation designed for growth. Our approach combines technical excellence with strategic insight, ensuring your AI investment delivers lasting competitive advantage.";

  // Portfolio projects - concise data for home page
  const portfolioProjects = [
    {
      id: 1,
      title: "Omni - Precision Nutrition Platform",
      description: "A complete ecosystem where nutritionists craft personalized meal plans with scientific precision. Every macro calculated, every preference considered, every meal purposeful.",
      challenge: "OMNI's nutritionists were spending hours manually calculating macros and coordinating meal plans. Members received generic nutrition guidance that didn't account for their specific health goals or dietary restrictions.",
      solution: "We built an integrated platform connecting meal planning, member customization, and seamless ordering. Each dish is crafted to exact specifications with macro precision and automated nutritionist workflows.",
      client: "OMNI Social Wellness Club",
      image: "/Products/NutritionOS-base.png",
      technologies: ["Next.js", "PostgreSQL", "Node.js", "Tailwind"],
      timeline: "4 months",
      metrics: { "Active Members": "2,000+", "Meal Plans": "5,000+", "Meal Plan Revenue": "$50k+", "Macro Precision": "±2%" },
    },
    {
      id: 2,
      title: "DONNA - AI Legal Research Assistant",
      description: "An AI agent paired with a novel neural search engine. DONNA researches precedence across thousands of cases simultaneously, delivering in moments what takes teams days.",
      challenge: "Legal research consumed entire days of attorney time. Junior associates spent 70% of their time on case research rather than analysis. Firms needed to surface relevant precedents across jurisdictions quickly and accurately.",
      solution: "We developed an intelligent system combining neural search with contextual understanding. DONNA reads case law like a senior partner, understanding precedent relationships and surfacing relevant cases in moments.",
      client: "San Francisco Law AI Startup",
      image: "/Products/Donna_AI.png",
      technologies: ["Python", "Transformers", "Vector Search", "FastAPI"],
      timeline: "6 months",
      metrics: { "Cases Indexed": "10,000+", "Research Time Reduction": "75%", "Jurisdictions": "3", "Pilot Firms": "2" },
    }
  ];

  // State management
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [expandedPrinciple, setExpandedPrinciple] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  

  // Animation refs
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const processRef = useRef(null);
  const testimonialRef = useRef(null);
  const principlesRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isPortfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });
  const isTestimonialInView = useInView(testimonialRef, { once: true, margin: "-100px" });
  const isPrinciplesInView = useInView(principlesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-white">


      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-16 xl:px-20">
        
        {/* Enhanced Hero Section */}
        <motion.section 
          ref={heroRef}
          className="relative py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-50 rounded-full opacity-60 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100 rounded-full opacity-40 blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="text-center mb-24"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-black leading-[0.85] tracking-tight mb-6">
                  AI. Built 
                  <span className="block font-medium italic">beautifully.</span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
              >
                An AI development studio for founders.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="inline-block"
              >
                <a href="https://calendar.notion.so/meet/paramstr/hello" target="_blank" rel="noopener noreferrer" className="group relative bg-black text-white px-12 py-4 text-base font-medium tracking-tight transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl overflow-hidden inline-block">
                  <span className="relative z-10">Book a 30‑minute call</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ x: [-100, 0] }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </a>
              </motion.div>
            </motion.div>

          </div>
        </motion.section>

        {/* Agency Statement */}
        <motion.section
          className="py-16 md:py-20 lg:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.0, ease: "easeOut" }}
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-[1.3] tracking-tight">
                We&apos;re a team of brand, product, and engineering experts building the{" "}
                <span className="italic font-medium">world&apos;s most valuable brands</span>.
                <br className="hidden md:block" />
                <span className="block mt-2 md:mt-0 md:inline"> All while being at the forefront in AI.</span>
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Portfolio Section */}
        <motion.section
          id="portfolio"
          ref={portfolioRef}
          className="py-16 md:py-20 lg:py-24 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPortfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-4">
                Recent Work
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                Platforms we&apos;ve built that augment human expertise rather than replace it.
              </p>
            </motion.div>

            <div className="space-y-6">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isPortfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.15), ease: "easeOut" }}
                  className="border-b border-gray-100 pb-6 cursor-pointer group"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  {/* Concise View */}
                  <div className="flex items-start gap-6">
                    {/* Thumbnail */}
                    <div className="flex-shrink-0 relative w-24 h-24 md:w-32 md:h-32 overflow-hidden bg-gray-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="128px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-medium text-black leading-tight mb-2 group-hover:text-gray-700 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <motion.div
                      className="flex-shrink-0 text-gray-400 group-hover:text-black transition-colors duration-200 mt-1"
                      animate={{ rotate: expandedProject === project.id ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 1.5a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                    </motion.div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeOut" } }}
                        exit={{ opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeIn" } }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 space-y-8">
                          {/* Project Image */}
                          <div
                            className="relative aspect-[16/9] overflow-hidden bg-gray-100 cursor-pointer"
                            onClick={(e) => { e.stopPropagation(); setModalImage(project.image); }}
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                          </div>

                          {/* Challenge & Solution */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-lg font-semibold text-black mb-3">Challenge</h4>
                              <p className="text-base text-gray-700 leading-relaxed">{project.challenge}</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-black mb-3">Solution</h4>
                              <p className="text-base text-gray-700 leading-relaxed">{project.solution}</p>
                            </div>
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="text-center p-4 bg-gray-50">
                                <div className="text-xl font-light text-black mb-1">{value}</div>
                                <div className="text-xs text-gray-600">{key}</div>
                              </div>
                            ))}
                          </div>

                          {/* Technologies & Timeline */}
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <span>Client: {project.client}</span>
                            <span>•</span>
                            <span>Timeline: {project.timeline}</span>
                            <span>•</span>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{tech}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section 
          ref={processRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-8 top-0 w-px h-full bg-gray-200"></div>

              {/* Steps */}
              <div className="space-y-12 md:space-y-16">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start gap-8 group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.2), ease: "easeOut" }}
                  >
                    {/* Phase Number */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center relative z-10 group-hover:bg-black transition-colors duration-300">
                      <span className="text-sm font-semibold text-black group-hover:text-white transition-colors duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                        {step.title}
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>





        {/* Testimonial Section */}
        <motion.section 
          ref={testimonialRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={isTestimonialInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTestimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-12 md:mb-16"
            >
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-black leading-relaxed tracking-tight mb-12">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <motion.div 
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isTestimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={testimonial.client.image}
                    alt={testimonial.client.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-base font-semibold text-black">{testimonial.client.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.client.title}, {testimonial.client.company}</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* How We Work Section */}
        <motion.section 
          ref={principlesRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28"
          initial={{ opacity: 0 }}
          animate={isPrinciplesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
              
              {/* Left Column - Section Title */}
              <motion.div 
                className="lg:col-span-4"
                initial={{ opacity: 0, x: -30 }}
                animate={isPrinciplesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-tight tracking-tight">
                  How We Work
                </h2>
              </motion.div>

              {/* Right Column - Principles and Description */}
              <div className="lg:col-span-8 space-y-12">
                
                {/* Principles List */}
                <div className="space-y-6">
                  {principles.map((principle, index) => (
                    <motion.div
                      key={index}
                      className="relative pb-4 cursor-pointer group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isPrinciplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3 + (index * 0.1), 
                        ease: "easeOut" 
                      }}
                      whileHover={{ y: -2 }}
                      onClick={() => setExpandedPrinciple(expandedPrinciple === index ? null : index)}
                    >
                      {/* Static Border */}
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200"></div>
                      
                      {/* Animated Hover Border */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-px bg-black"
                        initial={{ width: 0 }}
                        whileHover={{ 
                          width: "100%",
                          transition: { 
                            duration: 0.5, 
                            ease: "easeOut" 
                          }
                        }}
                      />
                      
                      <div className="flex items-center justify-between">
                        <motion.h3 
                          className="text-lg md:text-xl font-medium text-black leading-tight transition-colors duration-300 group-hover:text-gray-700"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          {principle.title}
                        </motion.h3>
                        
                        {/* Expand/Collapse Icon */}
                        <motion.div
                          className="text-gray-400 transition-colors duration-300 group-hover:text-black"
                          animate={{ 
                            rotate: expandedPrinciple === index ? 45 : 0 
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 1.5a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6a.5.5 0 0 1 .5-.5z"/>
                          </svg>
                        </motion.div>
                      </div>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {expandedPrinciple === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ 
                              opacity: 1, 
                              height: "auto", 
                              y: 0,
                              transition: {
                                duration: 0.4,
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
                            className="overflow-hidden"
                          >
                            <div className="pt-4 pr-6">
                              <p className="text-base text-gray-600 leading-relaxed">
                                {principle.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isPrinciplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {principlesDescription}
                  </p>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.section>




      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setModalImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setModalImage(null)}
                className="absolute -top-12 right-0 md:-top-4 md:-right-12 z-10 p-2 text-white hover:text-gray-300 transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={modalImage}
                  alt="Expanded view"
                  width={1920}
                  height={1080}
                  className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Creative Sun Ray Footer */}
      {/* <SunRayFooter /> */}
    </div>
  );
}
