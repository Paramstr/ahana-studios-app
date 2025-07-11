"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Insights() {

  // Featured insights
  const featuredInsights = [
    {
      id: "ai-transformation-2024",
      category: "Strategy",
      title: "The AI Transformation Playbook: How Forward-Thinking Companies Are Reshaping Their Industries",
      excerpt: "A deep dive into the strategic frameworks and implementation methodologies that separate AI leaders from followers in today's competitive landscape.",
      author: "Sarah Chen",
      publishDate: "March 15, 2024",
      readTime: "12 min read",
      image: "/hero/image-1.png",
      featured: true
    },
    {
      id: "llm-enterprise-integration",
      category: "Technology", 
      title: "Enterprise LLM Integration: Beyond the Hype",
      excerpt: "Practical insights on successfully deploying large language models in enterprise environments, including security, compliance, and performance considerations.",
      author: "Marcus Rodriguez",
      publishDate: "March 8, 2024",
      readTime: "8 min read",
      image: "/hero/image-2.png"
    },
    {
      id: "ai-roi-measurement",
      category: "Business",
      title: "Measuring AI ROI: Metrics That Matter",
      excerpt: "How to establish meaningful KPIs and measurement frameworks for AI initiatives that align with business objectives and demonstrate clear value.",
      author: "Elena Petrov", 
      publishDate: "February 28, 2024",
      readTime: "10 min read",
      image: "/hero/image-3.png"
    }
  ];

  // Article categories
  const categories = [
    "All", "Strategy", "Technology", "Business", "Industry Reports", "Trends"
  ];

  // Recent articles
  const articles = [
    {
      id: "automation-manufacturing",
      category: "Industry Reports",
      title: "AI-Driven Manufacturing: The Next Industrial Revolution",
      excerpt: "How intelligent automation is transforming production lines, quality control, and supply chain management across the manufacturing sector.",
      author: "David Kim",
      publishDate: "March 12, 2024",
      readTime: "15 min read",
      tags: ["Manufacturing", "Automation", "Industry 4.0"]
    },
    {
      id: "healthcare-ai-ethics",
      category: "Technology", 
      title: "Ethical AI in Healthcare: Balancing Innovation with Responsibility",
      excerpt: "Navigating the complex ethical landscape of AI deployment in healthcare, from patient privacy to algorithmic bias.",
      author: "Dr. Rachel Morrison",
      publishDate: "March 5, 2024", 
      readTime: "11 min read",
      tags: ["Healthcare", "Ethics", "Regulation"]
    },
    {
      id: "financial-services-disruption",
      category: "Business",
      title: "Fintech's AI Revolution: How Startups Are Outmaneuvering Traditional Banks",
      excerpt: "Analysis of how AI-first fintech companies are leveraging intelligent systems to deliver superior customer experiences and operational efficiency.",
      author: "Alex Thompson",
      publishDate: "February 25, 2024",
      readTime: "9 min read", 
      tags: ["Fintech", "Banking", "Disruption"]
    },
    {
      id: "edge-ai-iot",
      category: "Technology",
      title: "Edge AI and IoT: Processing Intelligence Where It Matters Most",
      excerpt: "The convergence of edge computing and AI is enabling real-time decision making in everything from smart cities to autonomous vehicles.",
      author: "Sarah Chen",
      publishDate: "February 20, 2024",
      readTime: "13 min read",
      tags: ["Edge Computing", "IoT", "Real-time AI"]
    },
    {
      id: "ai-talent-shortage",
      category: "Strategy",
      title: "Solving the AI Talent Crisis: Build vs. Buy vs. Partner",
      excerpt: "Strategic approaches to addressing the growing shortage of AI talent, from internal development programs to strategic partnerships.",
      author: "Marcus Rodriguez", 
      publishDate: "February 15, 2024",
      readTime: "7 min read",
      tags: ["Talent", "Strategy", "Partnerships"]
    },
    {
      id: "generative-ai-creative",
      category: "Trends",
      title: "Generative AI in Creative Industries: Tool or Threat?",
      excerpt: "How generative AI is reshaping creative workflows in design, content creation, and media production, and what it means for creative professionals.",
      author: "Elena Petrov",
      publishDate: "February 10, 2024", 
      readTime: "12 min read",
      tags: ["Generative AI", "Creative", "Future of Work"]
    }
  ];

  // Industry reports with metrics
  const industryReports = [
    {
      title: "AI Adoption Across Industries",
      subtitle: "2024 State of AI Report", 
      metrics: [
        { label: "Manufacturing", percentage: 78, trend: "+15%" },
        { label: "Financial Services", percentage: 85, trend: "+22%" },
        { label: "Healthcare", percentage: 62, trend: "+18%" },
        { label: "Retail", percentage: 71, trend: "+25%" }
      ],
      description: "Comprehensive analysis of AI adoption rates, investment levels, and ROI metrics across major industries."
    },
    {
      title: "AI Investment Trends",
      subtitle: "Q1 2024 Analysis",
      metrics: [
        { label: "Total Investment", percentage: 100, trend: "$24.8B" },
        { label: "Enterprise AI", percentage: 68, trend: "+32%" },
        { label: "AI Infrastructure", percentage: 45, trend: "+28%" },
        { label: "AI Talent", percentage: 82, trend: "+41%" }
      ],
      description: "Deep dive into venture capital flows, enterprise spending, and talent acquisition in the AI ecosystem."
    }
  ];

  // AI trends with predictions
  const aiTrends = [
    {
      trend: "Multimodal AI Integration",
      prediction: "75% of enterprises will deploy multimodal AI systems by end of 2024",
      impact: "High",
      timeline: "6-12 months"
    },
    {
      trend: "AI Governance Frameworks", 
      prediction: "Regulatory compliance will drive 60% of AI architecture decisions",
      impact: "Medium",
      timeline: "12-18 months"
    },
    {
      trend: "Edge AI Proliferation",
      prediction: "Real-time AI processing will move to edge devices across IoT ecosystems",
      impact: "High", 
      timeline: "18-24 months"
    },
    {
      trend: "AI-Human Collaboration",
      prediction: "Augmented intelligence will replace pure automation in knowledge work",
      impact: "Medium",
      timeline: "24+ months"
    }
  ];

  // State management
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedReport, setExpandedReport] = useState<number | null>(null);

  // Animation refs
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const articlesRef = useRef(null);
  const reportsRef = useRef(null);
  const trendsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isFeaturedInView = useInView(featuredRef, { once: true, margin: "-100px" });
  const isArticlesInView = useInView(articlesRef, { once: true, margin: "-100px" });
  const isReportsInView = useInView(reportsRef, { once: true, margin: "-100px" });
  const isTrendsInView = useInView(trendsRef, { once: true, margin: "-100px" });

  // Filter articles by category
  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
                {/* Main Content */}
        <main className="px-6 md:px-12 lg:px-16 xl:px-20">
        
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          className="py-12 md:py-16 lg:py-20 xl:py-24"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-2 bg-gray-100 text-sm font-medium text-black mb-8 tracking-wide">
                THE INTELLIGENCE BRIEF
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black leading-tight tracking-tight mb-8">
                Where AI Strategy
                <br />
                <span className="font-medium">Meets Market Reality</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
                Deep insights, practical frameworks, and forward-looking analysis from the front lines of AI transformation.
              </p>
              
              {/* Newsletter Signup */}
              <motion.div 
                className="max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <div className="flex gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-black transition-colors duration-200"
                  />
                  <button className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-all duration-200">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Weekly insights delivered to 10,000+ AI leaders
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Insights */}
        <motion.section 
          ref={featuredRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-6">
                Featured Insights
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                Essential reading for leaders navigating the AI transformation landscape.
              </p>
            </motion.div>

            {/* Featured Article Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Main Featured Article */}
              <motion.article 
                className="lg:col-span-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <div className="group cursor-pointer">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-6">
                    <Image
                      src={featuredInsights[0].image}
                      alt={featuredInsights[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="px-3 py-1 bg-gray-100 text-black font-medium">
                        {featuredInsights[0].category}
                      </span>
                      <span>{featuredInsights[0].publishDate}</span>
                      <span>{featuredInsights[0].readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-semibold text-black leading-tight group-hover:text-gray-700 transition-colors duration-300">
                      {featuredInsights[0].title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {featuredInsights[0].excerpt}
                    </p>
                    
                    <div className="flex items-center gap-3 pt-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="text-sm font-medium text-black">{featuredInsights[0].author}</div>
                        <div className="text-xs text-gray-500">AI Strategy Director</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Secondary Featured Articles */}
              <div className="lg:col-span-4 space-y-8">
                {featuredInsights.slice(1).map((insight, index) => (
                  <motion.article
                    key={insight.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isFeaturedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-4">
                      <Image
                        src={insight.image}
                        alt={insight.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span className="px-2 py-1 bg-gray-100 text-black font-medium">
                          {insight.category}
                        </span>
                        <span>{insight.readTime}</span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-black leading-tight group-hover:text-gray-700 transition-colors duration-300">
                        {insight.title}
                      </h4>
                      
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {insight.excerpt}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Articles Section */}
        <motion.section 
          ref={articlesRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isArticlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-8">
                Latest Articles
              </h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isArticlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span className="px-3 py-1 bg-gray-100 text-black font-medium">
                        {article.category}
                      </span>
                      <span>{article.publishDate}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-black leading-tight group-hover:text-gray-700 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div>
                          <div className="text-xs font-medium text-black">{article.author}</div>
                          <div className="text-xs text-gray-500">{article.readTime}</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-50 text-xs text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Industry Reports */}
        <motion.section 
          ref={reportsRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isReportsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-6">
                Industry Reports
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                Data-driven analysis of AI adoption, investment trends, and market dynamics across industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {industryReports.map((report, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isReportsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                  onClick={() => setExpandedReport(expandedReport === index ? null : index)}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-black mb-2">
                        {report.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {report.subtitle}
                      </p>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: expandedReport === index ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-black group-hover:text-gray-600 transition-colors duration-200"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a.75.75 0 0 1 .75.75v6.5h6.5a.75.75 0 0 1 0 1.5h-6.5v6.5a.75.75 0 0 1-1.5 0v-6.5h-6.5a.75.75 0 0 1 0-1.5h6.5v-6.5A.75.75 0 0 1 10 2z"/>
                      </svg>
                    </motion.div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed mb-8">
                    {report.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {report.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{metric.label}</span>
                          <span className="text-sm font-semibold text-black">{metric.trend}</span>
                        </div>
                        <div className="h-2 bg-gray-200">
                          <motion.div 
                            className="h-full bg-black"
                            initial={{ width: 0 }}
                            animate={isReportsInView ? { width: `${metric.percentage}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: 0.5 + (metricIndex * 0.1), ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* AI Trends */}
        <motion.section 
          ref={trendsRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTrendsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-6">
                AI Trends & Predictions
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Forward-looking analysis of emerging trends and their potential impact on business and technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {aiTrends.map((trend, index) => (
                <motion.div
                  key={index}
                  className="relative p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTrendsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-black leading-tight">
                        {trend.trend}
                      </h3>
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 text-xs font-medium ${
                          trend.impact === 'High' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}>
                          {trend.impact}
                        </span>
                      </div>
                    </div>

                    <p className="text-base text-gray-700 leading-relaxed">
                      {trend.prediction}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-600">Timeline</span>
                      <span className="text-sm font-medium text-black">{trend.timeline}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div 
              className="text-center mt-16 md:mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={isTrendsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <p className="text-lg text-gray-600 mb-8">
                Want deeper insights tailored to your industry?
              </p>
              <button className="bg-black text-white px-12 py-4 text-base font-medium tracking-tight hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                Request Custom Analysis
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