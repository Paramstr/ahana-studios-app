"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import SunRayFooter from "./components/SunRayFooter";

export default function Home() {


  // Transformation stories - elegant narrative approach
  const transformationStories = [
    {
      id: "manufacturing-evolution",
      title: "From Manual to Autonomous",
      subtitle: "Manufacturing Renaissance",
      story: "A century-old manufacturing company discovered that their greatest asset wasn't their machinery—it was their data. We helped them transform decades of operational knowledge into intelligent systems that now predict, adapt, and optimize in real-time.",
      outcome: "Operations that once required constant human oversight now run with precision and foresight.",
      visual: "/hero/image-1.png",
      industry: "Manufacturing",
      transformation: "Manual processes became intelligent workflows"
    },
    {
      id: "customer-connection",
      title: "Understanding at Scale",
      subtitle: "Customer Intelligence Revolution",
      story: "What began as a simple question—'How do we truly understand our customers?'—evolved into a comprehensive intelligence platform that reads between the lines of every interaction, anticipating needs before they're expressed.",
      outcome: "Customer relationships transformed from reactive service to proactive partnership.",
      visual: "/hero/image-2.png",
      industry: "E-commerce",
      transformation: "Data points became deep customer understanding"
    },
    {
      id: "decision-architecture",
      title: "Intelligence in Every Decision",
      subtitle: "Strategic Foresight",
      story: "In a world of infinite data, the challenge isn't gathering information—it's knowing what matters. We architected systems that don't just report what happened, but illuminate what's possible.",
      outcome: "Strategic decisions now backed by predictive intelligence rather than historical guesswork.",
      visual: "/hero/image-3.png",
      industry: "Finance",
      transformation: "Reactive reports became predictive insights"
    }
  ];

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


  // Team members data
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder", 
      image: "/faces/1.png",
      alt: "Sarah Chen, CEO & Founder"
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Research Director",
      image: "/faces/2.png", 
      alt: "Marcus Rodriguez, AI Research Director"
    },
    {
      name: "Elena Petrov",
      role: "Head of Product",
      image: "/faces/3.png",
      alt: "Elena Petrov, Head of Product"
    },
    {
      name: "David Kim",
      role: "Lead Engineer",
      image: "/faces/4.png",
      alt: "David Kim, Lead Engineer"
    },
    {
      name: "Alex Thompson",
      role: "Business Development",
      image: "/faces/5.png",
      alt: "Alex Thompson, Business Development"
    }
  ];

  // Testimonial data
  const testimonial = {
    quote: "Working with Ahana Studios has been transformative. Their AI integration didn't just automate our processes—it reimagined how we serve our customers. The results exceeded every expectation.",
    client: {
      name: "Rachel Morrison",
      title: "CEO & Co-Founder",
      company: "TechFlow",
      image: "/faces/1.png"
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

  // State management
  const [selectedStory, setSelectedStory] = useState<string>("manufacturing-evolution");
  const [expandedPrinciple, setExpandedPrinciple] = useState<number | null>(null);

  // Animation refs
  const heroRef = useRef(null);
  const storiesRef = useRef(null);
  const processRef = useRef(null);
  const testimonialRef = useRef(null);
  const principlesRef = useRef(null);
  const teamRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isStoriesInView = useInView(storiesRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });
  const isTestimonialInView = useInView(testimonialRef, { once: true, margin: "-100px" });
  const isPrinciplesInView = useInView(principlesRef, { once: true, margin: "-100px" });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });

  // Get selected story data
  const selectedStoryData = transformationStories.find(story => story.id === selectedStory);

  return (
    <div className="min-h-screen bg-white">


      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-16 xl:px-20">
        
        {/* Refined Hero Section */}
        <motion.section 
          ref={heroRef}
          className="py-20 md:py-24 lg:py-32 xl:py-40"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black leading-[0.9] tracking-tight mb-8">
                Where your business meets AI
              </h1>
              <p className="text-xl md:text-2xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
                We&apos;re Ahana Studios. An AI development studio that transforms ambitious companies through intelligent systems that amplify human potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-black text-white px-8 py-3 text-sm font-medium tracking-tight hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                  Book a Strategy Call
                </button>
                <p className="text-sm text-gray-500">
                  Free 30-minute consultation
                </p>
              </div>
            </motion.div>

            {/* Subtle visual elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="w-px h-24 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            </motion.div>
          </div>
        </motion.section>

        {/* AI Transformation Stories */}
        <motion.section 
          ref={storiesRef}
          className="py-20 md:py-24 lg:py-32 border-t border-gray-100"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isStoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-8">
                Transformation Stories
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Every implementation tells a story. These are journeys of discovery, adaptation, and profound change.
              </p>
            </motion.div>

            {/* Story Navigation */}
            <div className="flex justify-center mb-16">
              <div className="flex flex-wrap justify-center gap-4">
                {transformationStories.map((story, index) => (
                  <motion.button
                    key={story.id}
                    className={`px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 ${
                      selectedStory === story.id
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedStory(story.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isStoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                  >
                    {story.subtitle}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Selected Story Display */}
            <AnimatePresence mode="wait">
              {selectedStoryData && (
                <motion.div
                  key={selectedStory}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Story Content */}
                  <div className="lg:col-span-7 space-y-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-black mb-4">
                        {selectedStoryData.title}
                      </h3>
                      <p className="text-base text-gray-500 mb-6">
                        {selectedStoryData.industry}
                      </p>
                    </div>

                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {selectedStoryData.story}
                    </p>

                    <div className="border-l-2 border-gray-200 pl-6">
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed italic">
                        {selectedStoryData.outcome}
                      </p>
                    </div>

                    <div className="pt-4">
                      <p className="text-sm font-medium text-gray-500 mb-2">Transformation</p>
                      <p className="text-base text-black">
                        {selectedStoryData.transformation}
                      </p>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <Image
                        src={selectedStoryData.visual}
                        alt={selectedStoryData.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                    </div>
                  </div>
                                 </motion.div>
               )}
             </AnimatePresence>

             {/* CTA After Stories */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={isStoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
               transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
               className="text-center mt-20 pt-16 border-t border-gray-100"
             >
               <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                 See how AI can transform your business operations and unlock new possibilities.
               </p>
               <button className="bg-black text-white px-8 py-3 text-sm font-medium tracking-tight hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                 Book Your AI Strategy Session
               </button>
             </motion.div>
          </div>
        </motion.section>

        {/* Process Visualization */}
        <motion.section 
          ref={processRef}
          className="py-20 md:py-24 lg:py-32 border-t border-gray-100"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-8">
                Our Process
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Thoughtful transformation requires careful orchestration. Each step builds upon the last, creating systems that truly serve their purpose.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.2), ease: "easeOut" }}
                >
                  {/* Visual Element */}
                  <div className="w-16 h-16 mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors duration-300"></div>
                    <div className="absolute inset-4 bg-black rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-16 w-full h-px bg-gray-200"></div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA After Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              className="text-center mt-20 pt-16 border-t border-gray-100"
            >
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Ready to start your AI transformation journey? Let&apos;s discuss your unique challenges and opportunities.
              </p>
              <button className="bg-black text-white px-8 py-3 text-sm font-medium tracking-tight hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                Schedule Your Discovery Call
              </button>
            </motion.div>
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

        {/* Team Section */}
        <motion.section 
          ref={teamRef}
          className="py-12 md:py-16 lg:py-20 xl:py-24 border-t border-gray-100"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + (index * 0.1), 
                  ease: "easeOut" 
                }}
              >
                {/* Team Member Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-4 transition-all duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/3 transition-all duration-500"></div>
                </div>

                {/* Team Member Info */}
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-black leading-tight tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm font-normal text-gray-600 leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 lg:py-24 xl:py-28 text-center border-t border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-8">
              Transform Your Business with AI
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Every transformation begins with a conversation. In 30 minutes, we&apos;ll explore your challenges, identify AI opportunities, and map out a strategic path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-black text-white px-10 py-4 text-base font-medium tracking-tight hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                Book Your Free Strategy Call
              </button>
              <div className="text-sm text-gray-500">
                <p>✓ No commitment required</p>
                <p>✓ Custom AI roadmap included</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Creative Sun Ray Footer */}
      <SunRayFooter />
    </div>
  );
}
