"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SunRayFooter() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Enhanced sun ray paths - scaled and positioned for massive effect
  const sunRays = [
    {
      id: 1,
      path: "M120 200C120 220 140 240 170 250C200 260 240 240 280 220C320 200 340 160 360 120C380 80 370 40 350 20C330 0 290 10 250 30C210 50 180 80 150 120C130 150 120 180 120 200Z",
      delay: 0,
      scale: 1.2,
      origin: "center bottom"
    },
    {
      id: 2,
      path: "M200 180C220 180 240 160 260 140C280 120 300 90 320 60C340 30 330 0 310 -20C290 -40 250 -30 210 -10C170 10 140 40 120 80C100 120 110 150 130 170C150 190 180 180 200 180Z",
      delay: 0.2,
      scale: 1.5,
      origin: "center center"
    },
    {
      id: 3,
      path: "M80 160C80 180 60 200 40 220C20 240 0 260 -20 280C-40 300 -30 320 -10 340C10 360 50 350 90 330C130 310 160 280 180 240C200 200 190 170 170 150C150 130 120 140 100 150C90 155 80 160 80 160Z",
      delay: 0.4,
      scale: 1.8,
      origin: "center top"
    },
    {
      id: 4,
      path: "M300 100C320 100 340 80 360 60C380 40 400 20 420 0C440 -20 430 -40 410 -60C390 -80 350 -70 310 -50C270 -30 240 0 220 40C200 80 210 110 230 130C250 150 280 140 300 120C300 110 300 100 300 100Z",
      delay: 0.6,
      scale: 1.3,
      origin: "center bottom"
    },
    {
      id: 5,
      path: "M160 300C160 320 140 340 120 360C100 380 80 400 60 420C40 440 50 460 70 480C90 500 130 490 170 470C210 450 240 420 260 380C280 340 270 310 250 290C230 270 200 280 180 290C170 295 160 300 160 300Z",
      delay: 0.8,
      scale: 1.6,
      origin: "center center"
    },
    {
      id: 6,
      path: "M400 180C420 180 440 160 460 140C480 120 500 90 520 60C540 30 530 0 510 -20C490 -40 450 -30 410 -10C370 10 340 40 320 80C300 120 310 150 330 170C350 190 380 180 400 180Z",
      delay: 1.0,
      scale: 1.4,
      origin: "center top"
    },
    {
      id: 7,
      path: "M50 250C50 270 30 290 10 310C-10 330 -30 350 -50 370C-70 390 -60 410 -40 430C-20 450 20 440 60 420C100 400 130 370 150 330C170 290 160 260 140 240C120 220 90 230 70 240C60 245 50 250 50 250Z",
      delay: 1.2,
      scale: 1.7,
      origin: "center bottom"
    },
    {
      id: 8,
      path: "M350 280C370 280 390 260 410 240C430 220 450 190 470 160C490 130 480 100 460 80C440 60 400 70 360 90C320 110 290 140 270 180C250 220 260 250 280 270C300 290 330 280 350 280Z",
      delay: 1.4,
      scale: 1.9,
      origin: "center center"
    }
  ];

  return (
    <div className="relative w-full h-screen sm:h-[80vh] md:h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-orange-100">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-orange-100/30 to-orange-200/50"></div>
      
      {/* Main SVG Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="200%"
          height="200%"
          viewBox="-500 -500 1000 1000"
          className="absolute scale-75 sm:scale-90 md:scale-100 lg:scale-110"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: "transform 0.3s ease-out"
          }}
        >
          {/* Radial gradient definitions */}
          <defs>
            <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FB3D01" stopOpacity="1" />
              <stop offset="30%" stopColor="#FB3D01" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#FB3D01" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FB3D01" stopOpacity="0.2" />
            </radialGradient>
            
            <radialGradient id="rayGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FB3D01" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FB3D01" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FB3D01" stopOpacity="0.1" />
            </radialGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="shadow">
              <feDropShadow dx="2" dy="2" stdDeviation="4" floodColor="#FB3D01" floodOpacity="0.3"/>
            </filter>
          </defs>

          {/* Animated sun rays */}
          {sunRays.map((ray) => (
            <motion.path
              key={ray.id}
              d={ray.path}
              fill="url(#rayGradient)"
              filter="url(#glow)"
              initial={{ 
                opacity: 0, 
                scale: 0.5,
                rotate: 0
              }}
              animate={{ 
                opacity: [0.6, 0.8, 0.6], 
                scale: [ray.scale * 0.9, ray.scale * 1.1, ray.scale * 0.9],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 8,
                delay: ray.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                transformOrigin: ray.origin
              }}
            />
          ))}

          {/* Central sun */}
          <motion.circle
            cx="0"
            cy="0"
            r="80"
            fill="url(#sunGradient)"
            filter="url(#shadow)"
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Additional decorative elements */}
          <motion.circle
            cx="0"
            cy="0"
            r="60"
            fill="none"
            stroke="#FB3D01"
            strokeWidth="2"
            strokeOpacity="0.3"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.circle
            cx="0"
            cy="0"
            r="40"
            fill="none"
            stroke="#FB3D01"
            strokeWidth="1"
            strokeOpacity="0.2"
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 8 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${isMobile ? 'w-1 h-1' : 'w-2 h-2'} bg-orange-300 rounded-full opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, isMobile ? -10 : -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 pointer-events-none"></div>
    </div>
  );
} 