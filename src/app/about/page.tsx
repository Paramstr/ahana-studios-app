"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Team() {
  // Founders data
  const founders = [
    {
      name: "Param",
      role: "Creative Director & Co-Founder",
      bio: "Cross disciplinary engineer and designer. Previously built intelligent applications for some of New Zealand's largest engineering firms. As Creative Director at Ahana Studios, he bridges the gap between what's possible and what's beautiful.",
      image: "/Founders/param.JPG",
      expertise: "AI Engineering & Design"
    },
    {
      name: "Gurleen",
      role: "Co-Founder",
      bio: "A neuroscience researcher who codes and designs with equal fluency. Gurleen has led teams building health data platforms and advised major fitness chains on their mobile strategy. His unique perspective combines scientific rigor with product intuition, creating solutions that understand both technology and human behavior.",
      image: "/Founders/gurleen.JPG",
      expertise: "Product Strategy & Neuroscience"
    },
    {
      name: "Bilel",
      role: "Sales & Account Manager",
      bio: "The bridge between Ahana's innovative capabilities and client success. Bilel excels at understanding client needs and translating them into actionable solutions. His approach to sales is consultative and relationship-focused, ensuring every partnership creates lasting value for both sides.",
      image: "/Founders/bilel-2.png",
      expertise: "Sales & Client Relations"
    },
    {
      name: "Edgar",
      role: "Developer",
      bio: "A skilled developer who recently launched Blaze Running Companion as a solo project. Edgar builds applications that feel native and intuitive, with a particular focus on mobile experiences. His attention to detail ensures every interaction feels perfectly calibrated.",
      image: "/Faces/5.png",
      expertise: "Mobile & Web Development"
    },
    {
      name: "Reynolds",
      role: "Head of Strategy",
      bio: "A strategic thinker who identifies emerging opportunities and builds meaningful partnerships. Reynolds combines market insight with operational excellence, helping organizations navigate their transformation journey. His approach ensures strategic decisions align with both immediate needs and long-term vision.",
      image: "/Founders/rey.JPG",
      expertise: "Strategic Partnerships & Market Vision"
    }
  ];

  // Animation refs
  const heroRef = useRef(null);
  const foundersRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isFoundersInView = useInView(foundersRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-16 xl:px-20">
        
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          className="py-16 md:py-20 lg:py-24 xl:py-32"
        >
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12 md:space-y-16 lg:space-y-20">
              
              {/* Hero Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-center max-w-4xl mx-auto"
              >
                {/* Sanskrit Quote */}
                <div className="space-y-4 mb-8 md:mb-12">
                  <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight">
                    &quot;Ahana&quot;
                  </blockquote>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                    <span className="font-medium">आहान</span> — rising sun in Sanskrit
                  </p>
                </div>

                {/* Philosophy */}
                <div className="space-y-6 max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                    This new age of artificial intelligence requires more than just computational power — it demands empathy and human-centricity.
                  </p>
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                    At Ahana Studios, we&apos;re centered around this fundamental truth. We make products that don&apos;t just <em>look</em> good, they <strong>feel</strong> good.
                  </p>
                  
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Like the rising sun that brings warmth and clarity to the world, we illuminate the path forward where technology amplifies human potential rather than replacing it.
                  </p>
                </div>
              </motion.div>

              {/* Hero Video */}
              <motion.div 
                className="relative aspect-[3/2] max-w-5xl mx-auto overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  disableRemotePlayback
                  controls={false}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ 
                    filter: 'brightness(0.95) contrast(1.10)'
                  }}
                  onContextMenu={(e) => e.preventDefault()}
                  preload="metadata"
                  aria-label="Ahana Studios sunrise motion background"
                >
                  <source src="/sunrise-motion.webm" type="video/webm" />
                  <source src="/sunrise-motion.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Subtle overlay for elegance */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Founders Section */}
        <motion.section 
          ref={foundersRef}
          className="py-20 md:py-24 lg:py-32 xl:py-40 border-t border-gray-100"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFoundersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-20 md:mb-24 lg:mb-28 text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black leading-tight tracking-tight mb-8">
                Founders
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Five exceptional individuals united by a shared vision to build AI that feels as natural as the sunrise. <strong>inevitable</strong>, <strong>beautiful</strong>, and <strong>inherently human</strong>.
              </p>
            </motion.div>

            {/* Founders List */}
            <div className="space-y-20 md:space-y-24 lg:space-y-28">
              {founders.map((founder, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isFoundersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + (index * 0.15), 
                    ease: "easeOut" 
                  }}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    
                    {/* Founder Photo */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-black/10">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      </div>
                    </div>

                    {/* Founder Info */}
                    <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-2">
                            {founder.name}
                          </h3>
                          <p className="text-lg md:text-xl font-medium text-gray-500 leading-relaxed">
                            {founder.role}
                          </p>
                        </div>
                        
                        <div className="w-12 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                      </div>
                      
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                        {founder.bio}
                      </p>
                      
                      <div className="inline-block">
                        <span className="text-sm font-medium text-black tracking-wider uppercase bg-gray-50 px-4 py-2">
                          {founder.expertise}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer Spacing */}
      <div className="h-12 md:h-16 lg:h-20 xl:h-24"></div>
    </div>
  );
}