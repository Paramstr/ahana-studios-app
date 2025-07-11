"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function About() {

  // Extended team members with detailed stories
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former Head of AI Strategy at McKinsey, Sarah founded Ahana Studios to bridge the gap between AI potential and business reality. She holds a PhD in Computer Science from Stanford and has advised Fortune 500 companies on AI transformation strategies.",
      expertise: ["AI Strategy", "Digital Transformation", "Enterprise Architecture"],
      image: "/faces/1.png",
      background: "15 years in strategic consulting and AI research",
      quote: "Intelligence without intention is just sophisticated automation. We build AI with purpose.",
      experience: [
        "McKinsey & Company - Head of AI Strategy (2019-2023)",
        "Stanford AI Lab - Senior Research Scientist (2016-2019)",
        "Google DeepMind - Research Engineer (2014-2016)"
      ]
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Research Director",
      bio: "A pioneer in applied machine learning, Marcus leads our technical vision and ensures our AI solutions push the boundaries of what's possible. His work on large language models has been published in top-tier conferences.",
      expertise: ["Machine Learning", "LLM Architecture", "Research & Development"],
      image: "/faces/2.png",
      background: "PhD in Machine Learning from MIT",
      quote: "The most powerful AI is the one that amplifies human creativity, not replaces it.",
      experience: [
        "OpenAI - Senior Research Scientist (2020-2023)",
        "MIT CSAIL - Postdoctoral Researcher (2018-2020)",
        "Facebook AI Research - Research Scientist (2016-2018)"
      ]
    },
    {
      name: "Elena Petrov",
      role: "Head of Product",
      bio: "Elena transforms complex AI capabilities into intuitive products that users love. Her design-thinking approach ensures that every AI feature we build solves real human problems with elegance and precision.",
      expertise: ["Product Strategy", "UX Design", "Human-AI Interaction"],
      image: "/faces/3.png",
      background: "Former Principal Designer at Apple",
      quote: "Great AI products feel like magic, but they're built on deep empathy for user needs.",
      experience: [
        "Apple - Principal Product Designer (2018-2023)",
        "IDEO - Design Director (2015-2018)",
        "Airbnb - Senior Product Designer (2013-2015)"
      ]
    },
    {
      name: "David Kim",
      role: "Lead Engineer",
      bio: "David architected the systems that power our most ambitious AI deployments. His expertise in distributed systems and cloud architecture ensures our solutions scale seamlessly from prototype to production.",
      expertise: ["System Architecture", "Cloud Infrastructure", "MLOps"],
      image: "/faces/4.png",
      background: "Former Principal Engineer at Netflix",
      quote: "Scalable AI isn't just about bigger models—it's about smarter architectures.",
      experience: [
        "Netflix - Principal Engineer (2019-2023)",
        "Uber - Senior Staff Engineer (2017-2019)",
        "Amazon Web Services - Senior Engineer (2014-2017)"
      ]
    },
    {
      name: "Alex Thompson",
      role: "Business Development",
      bio: "Alex builds the partnerships that amplify our impact. With deep relationships across industries, he helps visionary leaders discover how AI can transform their businesses and create new market opportunities.",
      expertise: ["Strategic Partnerships", "Business Strategy", "Market Development"],
      image: "/faces/5.png",
      background: "Former VP at Salesforce Ventures",
      quote: "The best AI partnerships are built on shared vision, not just technology.",
      experience: [
        "Salesforce Ventures - Vice President (2020-2023)",
        "Accel Partners - Principal (2017-2020)",
        "Bain & Company - Senior Manager (2014-2017)"
      ]
    }
  ];

  // Company values with interactive principles
  const values = [
    {
      title: "Intelligence with Purpose",
      description: "We don't build AI for AI's sake. Every system we create serves a clear human need and delivers measurable business value.",
      principle: "Technology should amplify human potential, not replace human judgment.",
      examples: [
        "Designing AI that enhances decision-making rather than automating it away",
        "Building systems that learn from human expertise and collaboration",
        "Ensuring AI recommendations are explainable and actionable"
      ]
    },
    {
      title: "Relentless Excellence",
      description: "We hold ourselves to the highest standards of technical and ethical excellence, never compromising on quality or integrity.",
      principle: "Excellence is not an act, but a habit embedded in every line of code.",
      examples: [
        "Rigorous testing and validation of all AI models before deployment",
        "Continuous monitoring and improvement of system performance",
        "Transparent communication about capabilities and limitations"
      ]
    },
    {
      title: "Collaborative Innovation",
      description: "The best solutions emerge from diverse perspectives and deep collaboration between human expertise and artificial intelligence.",
      principle: "Innovation happens at the intersection of human creativity and machine capability.",
      examples: [
        "Co-creating solutions with clients rather than delivering black boxes",
        "Building diverse teams that bring different perspectives to problem-solving",
        "Fostering open dialogue between technical and business stakeholders"
      ]
    },
    {
      title: "Future-First Thinking",
      description: "We architect solutions that are not just built for today's challenges but designed to evolve and scale with tomorrow's opportunities.",
      principle: "Today's AI decisions shape tomorrow's competitive landscape.",
      examples: [
        "Designing modular architectures that can incorporate new AI advances",
        "Building learning systems that improve performance over time",
        "Anticipating regulatory and ethical frameworks in our designs"
      ]
    }
  ];

  // Company journey timeline
  const timeline = [
    {
      year: "2021",
      quarter: "Q3",
      milestone: "Foundation",
      title: "Ahana Studios Founded",
      description: "Sarah Chen and Marcus Rodriguez founded Ahana Studios with a vision to make enterprise AI both powerful and practical.",
      achievement: "Secured $2M seed funding from Andreessen Horowitz"
    },
    {
      year: "2021",
      quarter: "Q4",
      milestone: "First Client",
      title: "Fortune 500 Partnership",
      description: "Delivered our first major AI automation project, reducing operational costs by 40% for a global manufacturing client.",
      achievement: "Achieved $1M ARR in first 6 months"
    },
    {
      year: "2022",
      quarter: "Q2",
      milestone: "Team Growth",
      title: "World-Class Team",
      description: "Recruited top talent from Apple, Netflix, and OpenAI to build our core team of AI experts and product innovators.",
      achievement: "Grew team to 15 specialized professionals"
    },
    {
      year: "2022",
      quarter: "Q4",
      milestone: "Product Launch",
      title: "AI Platform Launch",
      description: "Launched our proprietary AI development platform, enabling 10x faster deployment of custom AI solutions.",
      achievement: "Deployed 25+ AI systems across 8 industries"
    },
    {
      year: "2023",
      quarter: "Q2",
      milestone: "Series A",
      title: "Scale Funding",
      description: "Raised $15M Series A led by Sequoia Capital to accelerate our AI-first product development and market expansion.",
      achievement: "Reached $10M ARR with 95% client retention"
    },
    {
      year: "2023",
      quarter: "Q4",
      milestone: "Market Leadership",
      title: "Industry Recognition",
      description: "Named 'AI Company of the Year' by TechCrunch, recognized for transformative impact on enterprise AI adoption.",
      achievement: "Deployed 150+ AI systems, $50M+ value generated"
    },
    {
      year: "2024",
      quarter: "Q1",
      milestone: "Global Expansion",
      title: "International Growth",
      description: "Expanded operations to Europe and Asia, establishing partnerships with leading consulting firms and technology integrators.",
      achievement: "Serving clients across 3 continents"
    }
  ];

  // Culture showcase
  const cultureValues = [
    {
      title: "Continuous Learning",
      description: "We invest 20% of our time in learning, research, and experimentation with emerging AI technologies.",
      metric: "20% research time",
      icon: "📚"
    },
    {
      title: "Remote-First Collaboration",
      description: "Our distributed team spans 3 continents, bringing diverse perspectives to every project.",
      metric: "3 continents",
      icon: "🌍"
    },
    {
      title: "Client Success Focus",
      description: "We measure our success by our clients' outcomes, not just our technical achievements.",
      metric: "95% retention rate",
      icon: "🎯"
    },
    {
      title: "Open Source Contribution",
      description: "We contribute to the AI community through open source projects and research publications.",
      metric: "12 OSS projects",
      icon: "💻"
    }
  ];

  // State management
  const [selectedTeamMember, setSelectedTeamMember] = useState<number | null>(null);
  const [expandedValue, setExpandedValue] = useState<number | null>(null);
  const [activeTimelineItem, setActiveTimelineItem] = useState<number>(0);

  // Animation refs
  const heroRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const cultureRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const isCultureInView = useInView(cultureRef, { once: true, margin: "-100px" });

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
              <div className="inline-block px-4 py-2 bg-gray-100 text-sm font-medium text-black mb-8 tracking-wide">
                MINDS BEHIND THE INTELLIGENCE
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black leading-tight tracking-tight mb-8">
                Where Visionary Thinking
                <br />
                <span className="font-medium">Meets Technical Mastery</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                We are builders, dreamers, and problem-solvers united by a shared belief: that artificial intelligence should amplify human potential, not replace it.
              </p>
            </motion.div>

            {/* Mission Statement */}
            <motion.div 
              className="bg-gray-50 p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-black leading-tight mb-6">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                To bridge the gap between AI's extraordinary potential and business reality—creating intelligent systems that don't just automate tasks, but transform how organizations think, learn, and compete.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          ref={teamRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-6">
                Leadership Team
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                Industry veterans and visionary thinkers who've shaped the AI landscape at the world's most innovative companies.
              </p>
            </motion.div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + (index * 0.1), 
                    ease: "easeOut" 
                  }}
                  onClick={() => setSelectedTeamMember(selectedTeamMember === index ? null : index)}
                >
                  {/* Team Member Photo */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-6 transition-all duration-500 group-hover:scale-[1.02]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                  </div>

                  {/* Team Member Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-black leading-tight tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-sm font-normal text-gray-600 leading-relaxed">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {member.background}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 text-xs text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expanded Team Member Details */}
            <AnimatePresence>
              {selectedTeamMember !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden border-t border-gray-100 pt-12"
                >
                  <div className="bg-gray-50 p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                      
                      {/* Member Details */}
                      <div className="lg:col-span-8">
                        <div className="flex items-start gap-6 mb-8">
                          <div className="w-20 h-20 relative overflow-hidden bg-gray-200 rounded-full flex-shrink-0">
                            <Image
                              src={teamMembers[selectedTeamMember].image}
                              alt={teamMembers[selectedTeamMember].name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-black mb-2">
                              {teamMembers[selectedTeamMember].name}
                            </h3>
                            <p className="text-lg text-gray-600 mb-4">
                              {teamMembers[selectedTeamMember].role}
                            </p>
                            <blockquote className="text-base italic text-gray-700 border-l-2 border-black pl-4">
                              "{teamMembers[selectedTeamMember].quote}"
                            </blockquote>
                          </div>
                        </div>
                        
                        <p className="text-base text-gray-700 leading-relaxed mb-8">
                          {teamMembers[selectedTeamMember].bio}
                        </p>

                        <div>
                          <h4 className="text-lg font-semibold text-black mb-4">Experience</h4>
                          <div className="space-y-3">
                            {teamMembers[selectedTeamMember].experience.map((exp, expIndex) => (
                              <div key={expIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700">{exp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Expertise */}
                      <div className="lg:col-span-4">
                        <h4 className="text-lg font-semibold text-black mb-6">Core Expertise</h4>
                        <div className="space-y-4">
                          {teamMembers[selectedTeamMember].expertise.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center">
                              <div className="w-3 h-3 bg-black rounded-full mr-3"></div>
                              <span className="text-sm text-gray-700">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          ref={valuesRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-6">
                Our Values
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                The principles that guide how we build, partner, and innovate in the age of artificial intelligence.
              </p>
            </motion.div>

            <div className="space-y-8 md:space-y-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-100 hover:border-gray-200 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                >
                  <div 
                    className="p-8 md:p-12 cursor-pointer"
                    onClick={() => setExpandedValue(expandedValue === index ? null : index)}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl md:text-3xl font-semibold text-black">
                        {value.title}
                      </h3>
                      <motion.div
                        animate={{ rotate: expandedValue === index ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-black hover:text-gray-600 transition-colors duration-200"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2a.75.75 0 0 1 .75.75v8.5h8.5a.75.75 0 0 1 0 1.5h-8.5v8.5a.75.75 0 0 1-1.5 0v-8.5h-8.5a.75.75 0 0 1 0-1.5h8.5v-8.5A.75.75 0 0 1 12 2z"/>
                        </svg>
                      </motion.div>
                    </div>
                    
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                      {value.description}
                    </p>
                    
                    <blockquote className="text-base italic text-gray-600 border-l-2 border-gray-300 pl-6">
                      {value.principle}
                    </blockquote>

                    {/* Expandable Examples */}
                    <AnimatePresence>
                      {expandedValue === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -10 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -10 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-8 pt-6 border-t border-gray-200">
                            <h4 className="text-lg font-semibold text-black mb-4">In Practice</h4>
                            <div className="space-y-3">
                              {value.examples.map((example, exampleIndex) => (
                                <div key={exampleIndex} className="flex items-start">
                                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-700 leading-relaxed">{example}</span>
                                </div>
                              ))}
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

        {/* Timeline Section */}
        <motion.section 
          ref={timelineRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-6">
                Our Journey
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                From startup to industry leader—the milestones that shaped our vision and capabilities.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-8 top-0 w-px h-full bg-gray-200"></div>
              <motion.div 
                className="absolute left-8 top-0 w-px bg-black"
                initial={{ height: 0 }}
                animate={isTimelineInView ? { 
                  height: `${((activeTimelineItem + 1) / timeline.length) * 100}%` 
                } : { height: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              {/* Timeline Items */}
              <div className="space-y-12 md:space-y-16">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start gap-8 cursor-pointer group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isTimelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.2), ease: "easeOut" }}
                    onMouseEnter={() => setActiveTimelineItem(index)}
                  >
                    {/* Year Badge */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-black rounded-full flex flex-col items-center justify-center relative z-10 group-hover:bg-black transition-colors duration-300">
                      <span className="text-xs font-semibold text-black group-hover:text-white transition-colors duration-300">
                        {item.year}
                      </span>
                      <span className="text-xs text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                        {item.quarter}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                        <div className="lg:col-span-8">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-gray-100 text-xs font-medium text-black">
                              {item.milestone}
                            </span>
                          </div>
                          
                          <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                            {item.title}
                          </h3>
                          
                          <p className="text-base text-gray-700 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        
                        <div className="lg:col-span-4">
                          <div className="bg-gray-50 p-6">
                            <h4 className="text-sm font-semibold text-black mb-3">Key Achievement</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {item.achievement}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Culture Section */}
        <motion.section 
          ref={cultureRef}
          className="py-16 md:py-20 lg:py-24 xl:py-28 border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isCultureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-6">
                Culture & Values
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                How we work, learn, and grow together as we shape the future of artificial intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {cultureValues.map((culture, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isCultureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {culture.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-black mb-4">
                    {culture.title}
                  </h3>
                  
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    {culture.description}
                  </p>
                  
                  <div className="inline-block px-4 py-2 bg-black text-white text-sm font-medium">
                    {culture.metric}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div 
              className="text-center mt-16 md:mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={isCultureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <p className="text-lg text-gray-600 mb-8">
                Ready to join the minds behind the intelligence?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-black text-white px-8 py-3 text-base font-medium tracking-tight hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                  View Open Positions
                </button>
                <button className="border border-black text-black px-8 py-3 text-base font-medium tracking-tight hover:bg-black hover:text-white transition-all duration-200">
                  Start a Project
                </button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer Spacing */}
      <div className="h-12 md:h-16 lg:h-20 xl:h-24"></div>
    </div>
  );
} 