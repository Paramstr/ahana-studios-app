"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function Services() {

  // Service offerings with expandable case studies
  const services = [
    {
      id: "intelligent-automation",
      title: "Intelligent Automation",
      subtitle: "Transform Operations with AI",
      description: "We architect autonomous systems that learn, adapt, and scale. From workflow orchestration to predictive decision-making, we transform operational bottlenecks into competitive advantages.",
      metrics: {
        efficiency: "85%",
        cost_reduction: "60%",
        processing_speed: "10x"
      },
      capabilities: [
        "Workflow orchestration & decision trees",
        "Document processing & data extraction", 
        "Customer service automation",
        "Supply chain optimization",
        "Predictive maintenance systems",
        "Real-time analytics dashboards"
      ],
      caseStudy: {
        client: "Global Manufacturing Corp",
        challenge: "Manual quality control processes causing 40% production delays",
        solution: "AI-powered computer vision system with predictive analytics",
        results: "Reduced defect rates by 85%, increased production speed by 60%"
      }
    },
    {
      id: "ai-products",
      title: "AI-First Products",
      subtitle: "Launch Market-Defining Platforms",
      description: "We craft AI-powered platforms that redefine markets. From niche SaaS tools to industry-specific solutions, we build products customers can't imagine living without.",
      metrics: {
        user_engagement: "300%",
        revenue_growth: "150%",
        market_adoption: "90%"
      },
      capabilities: [
        "Custom LLM applications",
        "Predictive analytics platforms",
        "Industry-specific AI tools",
        "API-first AI services",
        "Multi-modal AI interfaces",
        "Real-time AI recommendations"
      ],
      caseStudy: {
        client: "FinTech Startup",
        challenge: "Need for intelligent investment recommendation platform",
        solution: "Custom LLM with real-time market analysis and risk assessment",
        results: "Achieved 90% user adoption, 300% increase in portfolio performance"
      }
    },
    {
      id: "zero-to-one",
      title: "Zero-to-One Ventures", 
      subtitle: "Build the Future from Concept",
      description: "Partner with us to architect the next generation of AI businesses. We take visionary concepts from whiteboard to market, developing MVPs that validate ideas and attract investment.",
      metrics: {
        mvp_speed: "12 weeks",
        funding_success: "80%",
        market_validation: "95%"
      },
      capabilities: [
        "Rapid MVP development",
        "Market validation & testing",
        "Technical due diligence", 
        "Go-to-market strategy",
        "Investor pitch preparation",
        "Scalable architecture design"
      ],
      caseStudy: {
        client: "Healthcare AI Venture",
        challenge: "Concept for AI diagnostic tool needed market validation",
        solution: "12-week MVP with clinical trial integration and regulatory compliance",
        results: "Secured $5M Series A, FDA approval pathway established"
      }
    }
  ];

  // Methodology steps
  const methodology = [
    {
      phase: "01",
      title: "Intelligence Strategy",
      duration: "Week 1-2",
      description: "We analyze your business architecture to identify AI integration opportunities that deliver maximum impact.",
      deliverables: ["AI Readiness Assessment", "Strategic Roadmap", "ROI Projections"]
    },
    {
      phase: "02", 
      title: "Architecture Design",
      duration: "Week 3-4",
      description: "We design scalable AI architectures that integrate seamlessly with your existing systems and future growth plans.",
      deliverables: ["Technical Architecture", "Data Strategy", "Integration Plan"]
    },
    {
      phase: "03",
      title: "Intelligent Development",
      duration: "Week 5-12",
      description: "We build and train AI systems using cutting-edge techniques, ensuring reliability, performance, and ethical compliance.",
      deliverables: ["Custom AI Models", "Integration APIs", "Performance Monitoring"]
    },
    {
      phase: "04",
      title: "Launch & Evolution", 
      duration: "Week 13+",
      description: "We deploy your AI systems and provide ongoing optimization, ensuring continuous learning and improvement.",
      deliverables: ["Production Deployment", "Performance Analytics", "Continuous Optimization"]
    }
  ];

  // Technology stack
  const technologies = [
    {
      category: "AI & Machine Learning",
      tools: ["OpenAI GPT-4", "Anthropic Claude", "PyTorch", "TensorFlow", "Hugging Face", "LangChain"]
    },
    {
      category: "Data & Analytics",
      tools: ["Snowflake", "Databricks", "Apache Spark", "Elasticsearch", "PostgreSQL", "Redis"]
    },
    {
      category: "Cloud & Infrastructure",
      tools: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Docker", "Terraform"]
    },
    {
      category: "Development & Integration",
      tools: ["Next.js", "FastAPI", "Node.js", "Python", "TypeScript", "GraphQL"]
    }
  ];

  // Pricing tiers
  const pricingTiers = [
    {
      name: "AI Strategy",
      description: "Perfect for organizations beginning their AI journey",
      price: "Starting at $25K",
      duration: "4-6 weeks",
      includes: [
        "AI readiness assessment",
        "Strategic roadmap development", 
        "ROI analysis & projections",
        "Technology recommendations",
        "Implementation planning"
      ],
      ideal: "Companies exploring AI adoption"
    },
    {
      name: "AI Implementation",
      description: "Complete AI solution development and deployment",
      price: "Starting at $100K",
      duration: "12-16 weeks", 
      includes: [
        "Everything in AI Strategy",
        "Custom AI development",
        "System integration", 
        "Testing & optimization",
        "Deployment & training",
        "3 months support"
      ],
      ideal: "Businesses ready to deploy AI",
      featured: true
    },
    {
      name: "AI Partnership",
      description: "Long-term partnership for continuous AI innovation",
      price: "Custom pricing",
      duration: "Ongoing",
      includes: [
        "Everything in AI Implementation",
        "Continuous optimization",
        "New feature development",
        "Performance monitoring",
        "Strategic consulting", 
        "Priority support"
      ],
      ideal: "AI-first organizations"
    }
  ];

  // State management
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [activeMethodologyStep, setActiveMethodologyStep] = useState<number>(0);

  // Animation refs
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const methodologyRef = useRef(null);
  const techRef = useRef(null);
  const pricingRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isMethodologyInView = useInView(methodologyRef, { once: true, margin: "-100px" });
  const isTechInView = useInView(techRef, { once: true, margin: "-100px" });
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-16 xl:px-20">
        
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          className="py-12 md:py-16 lg:py-20 xl:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-center mb-16 md:mb-20"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black leading-tight tracking-tight mb-8">
                We Don&apos;t Just Build AI—
                <br />
                <span className="font-medium">We Architect Intelligence</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                From strategic vision to production deployment, we craft AI systems that transform how businesses operate, compete, and grow.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-black mb-2">150+</div>
                <div className="text-sm text-gray-600">AI Systems Deployed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-black mb-2">85%</div>
                <div className="text-sm text-gray-600">Average Efficiency Gain</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-black mb-2">$50M+</div>
                <div className="text-sm text-gray-600">Value Generated</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-black mb-2">12 weeks</div>
                <div className="text-sm text-gray-600">Average MVP Timeline</div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        

        {/* Services Deep Dive */}
        <motion.section 
          ref={servicesRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-6">
                Intelligence Architectures
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                Every business is unique. Every AI solution should be too. We craft bespoke intelligence architectures that align with your vision and amplify your competitive advantage.
              </p>
            </motion.div>

            {/* Service Cards */}
            <div className="space-y-8 md:space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="border border-gray-100 hover:border-gray-200 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                >
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                      
                      {/* Service Overview */}
                      <div className="lg:col-span-8">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-2">
                              {service.title}
                            </h3>
                            <p className="text-lg text-gray-600">
                              {service.subtitle}
                            </p>
                          </div>
                          <button
                            onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                            className="text-black hover:text-gray-600 transition-colors duration-200"
                          >
                            <motion.div
                              animate={{ rotate: expandedService === service.id ? 45 : 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2a.75.75 0 0 1 .75.75v8.5h8.5a.75.75 0 0 1 0 1.5h-8.5v8.5a.75.75 0 0 1-1.5 0v-8.5h-8.5a.75.75 0 0 1 0-1.5h8.5v-8.5A.75.75 0 0 1 12 2z"/>
                              </svg>
                            </motion.div>
                          </button>
                        </div>
                        
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                          {service.description}
                        </p>

                        {/* Capabilities Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.capabilities.map((capability, capIndex) => (
                            <div key={capIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                              {capability}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="lg:col-span-4">
                        <div className="bg-gray-50 p-6 space-y-6">
                          <h4 className="text-lg font-semibold text-black">Impact Metrics</h4>
                          <div className="space-y-4">
                            {Object.entries(service.metrics).map(([key, value]) => (
                              <div key={key}>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm text-gray-600 capitalize">
                                    {key.replace('_', ' ')}
                                  </span>
                                  <span className="text-xl font-semibold text-black">{value}</span>
                                </div>
                                <div className="h-2 bg-gray-200">
                                  <div 
                                    className="h-full bg-black transition-all duration-1000"
                                    style={{ width: value }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Case Study */}
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -20 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -20 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-12 pt-8 border-t border-gray-100">
                            <h4 className="text-xl font-semibold text-black mb-6">Case Study: {service.caseStudy.client}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              <div>
                                <h5 className="text-sm font-semibold text-black mb-3">Challenge</h5>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {service.caseStudy.challenge}
                                </p>
                              </div>
                              <div>
                                <h5 className="text-sm font-semibold text-black mb-3">Solution</h5>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {service.caseStudy.solution}
                                </p>
                              </div>
                              <div>
                                <h5 className="text-sm font-semibold text-black mb-3">Results</h5>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {service.caseStudy.results}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Methodology Section */}
        <motion.section 
          ref={methodologyRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isMethodologyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-6">
                Our Methodology
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                A proven framework for delivering AI systems that scale, perform, and evolve with your business.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-8 top-0 w-px h-full bg-gray-200"></div>
              <motion.div 
                className="absolute left-8 top-0 w-px bg-black"
                initial={{ height: 0 }}
                animate={isMethodologyInView ? { 
                  height: `${((activeMethodologyStep + 1) / methodology.length) * 100}%` 
                } : { height: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Steps */}
              <div className="space-y-12 md:space-y-16">
                {methodology.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start gap-8 cursor-pointer group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isMethodologyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.2), ease: "easeOut" }}
                    onClick={() => setActiveMethodologyStep(index)}
                    onMouseEnter={() => setActiveMethodologyStep(index)}
                  >
                    {/* Phase Number */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center relative z-10 group-hover:bg-black transition-colors duration-300">
                      <span className="text-sm font-semibold text-black group-hover:text-white transition-colors duration-300">
                        {step.phase}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-black">
                          {step.title}
                        </h3>
                        <span className="text-sm text-gray-600 mt-1 md:mt-0">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-base text-gray-700 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, delIndex) => (
                          <span 
                            key={delIndex}
                            className="px-3 py-1 bg-gray-100 text-sm text-gray-700 text-xs"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section 
          ref={techRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTechInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-6">
                Technology Excellence
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                We leverage cutting-edge technologies and proven architectures to build AI systems that are reliable, scalable, and future-ready.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTechInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                >
                  <h3 className="text-xl font-semibold text-black mb-6">
                    {tech.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {tech.tools.map((tool, toolIndex) => (
                      <div 
                        key={toolIndex}
                        className="text-sm text-gray-700 flex items-center"
                      >
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        {tool}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section 
          ref={pricingRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-6">
                Investment in Intelligence
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We believe in value-based partnerships. Our pricing reflects the transformational impact of intelligence architectures on your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className={`relative p-8 border ${
                    tier.featured 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  } transition-all duration-300`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-white text-black px-4 py-2 text-xs font-semibold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className={`text-2xl font-semibold mb-2 ${
                      tier.featured ? 'text-white' : 'text-black'
                    }`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 ${
                      tier.featured ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {tier.description}
                    </p>
                    <div className={`text-3xl font-bold mb-2 ${
                      tier.featured ? 'text-white' : 'text-black'
                    }`}>
                      {tier.price}
                    </div>
                    <p className={`text-sm ${
                      tier.featured ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {tier.duration}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.includes.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                          tier.featured ? 'bg-white' : 'bg-black'
                        }`}></div>
                        <span className={`text-sm ${
                          tier.featured ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <button className={`w-full py-3 px-6 text-sm font-medium transition-all duration-200 ${
                      tier.featured 
                        ? 'bg-white text-black hover:bg-gray-100' 
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}>
                      Get Started
                    </button>
                    <p className={`text-xs text-center ${
                      tier.featured ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {tier.ideal}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div 
              className="text-center mt-16 md:mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <p className="text-lg text-gray-600 mb-8">
                Ready to architect your intelligent future?
              </p>
              <button className="bg-black text-white px-12 py-4 text-base font-medium tracking-tight hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                Schedule Strategy Call
              </button>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer Spacing */}
      <div className="h-12 md:h-16 lg:h-20 xl:h-24"></div>
    </div>
  );
} 