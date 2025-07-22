"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

export default function SunRayFooter() {
  const [isMobile, setIsMobile] = useState(false);
  const [time, setTime] = useState(0);
  const [rayPattern, setRayPattern] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Advanced ASCII character sets for flowing organic design
  const charSets = {
    core: ['█', '▉', '▊', '▋', '▌', '▍', '▎', '▏'],
    rays: ['█', '▓', '▒', '░', '▱', '▫', '▪', '∙', '·', ' '],
    flowing: ['╱', '╲', '╳', '╴', '╵', '╶', '╷', '│', '─', '┌', '┐', '└', '┘'],
    curves: ['╭', '╮', '╯', '╰', '◜', '◝', '◞', '◟', '◠', '◡', '⌒', '⌓', '⌜', '⌝', '⌞', '⌟'],
    organic: ['∿', '≈', '∼', '～', '〜', '⁓', '◦', '∘', '○', '●', '◯', '◉'],
    particles: ['✧', '✦', '✱', '✲', '✳', '✴', '✵', '✶', '✷', '✸', '✹', '✺', '※', '⁎', '⁕', '⁜'],
    energy: ['⚡', '✨', '⭐', '🌟', '💫', '⭆', '⭈', '⭊', '⟐', '⟡', '◊', '◈', '⬟', '⬢', '⬣']
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const animate = () => {
      setTime(prev => prev + 0.02);
      animationRef.current = requestAnimationFrame(animate);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    animate();
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Generate simple, visible flowing sun pattern
  const generateAdvancedAsciiRays = useCallback(() => {
    const patterns = [];
    const width = isMobile ? 80 : 120; // Reasonable size for visibility
    const height = isMobile ? 40 : 60; 
    const centerX = width / 2;
    const centerY = height / 2; // Center the sun
    const maxRadius = Math.min(width, height) * 0.4;
    
    for (let row = 0; row < height; row++) {
      let line = '';
      for (let col = 0; col < width; col++) {
        const dx = col - centerX;
        const dy = row - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        
        // Convert to degrees for ray calculations
        let degrees = (angle * 180 / Math.PI + 360) % 360;
        
        // Create flowing rays like the logo (12 organic rays)
        const rayCount = 12;
        const baseRayWidth = 360 / rayCount;
        
        // Organic flow with time animation
        const wave1 = Math.sin(time * 0.8 + distance * 0.1 + angle * 2) * 6;
        const wave2 = Math.cos(time * 1.2 + angle * 3) * 4;
        const organicOffset = wave1 + wave2;
        
        // Find which ray we're in
        const organicAngle = degrees + organicOffset;
        const rayIndex = Math.floor(organicAngle / baseRayWidth);
        const rayCenter = (rayIndex * baseRayWidth) % 360;
        const angleFromRayCenter = Math.abs(((organicAngle - rayCenter + 180) % 360) - 180);
        
        // Ray width varies by distance (wider at base)
        const rayWidthMultiplier = Math.max(0.4, 1.2 - distance / maxRadius);
        const currentRayWidth = baseRayWidth * rayWidthMultiplier * (0.8 + Math.sin(time * 0.5 + rayIndex) * 0.2);
        
        // Animation pulse
        const pulseIntensity = (Math.sin(time * 1.5 + rayIndex * 0.3) + 1) / 2;
        
        // Core sun (bright center)
        const coreRadius = 6 + Math.sin(time * 1.2) * 1;
        if (distance <= coreRadius) {
          const coreIntensity = Math.max(0, 1 - (distance / coreRadius));
          if (coreIntensity > 0.7) line += '█';
          else if (coreIntensity > 0.5) line += '▓';
          else if (coreIntensity > 0.3) line += '▒';
          else line += '░';
        }
        // Ray area
        else if (distance <= maxRadius && angleFromRayCenter <= currentRayWidth) {
          const rayIntensity = (1 - (distance / maxRadius)) * pulseIntensity;
          const rayDepth = 1 - (angleFromRayCenter / currentRayWidth);
          const finalIntensity = rayIntensity * rayDepth;
          
          if (finalIntensity > 0.8) line += '█';
          else if (finalIntensity > 0.6) line += '▓';
          else if (finalIntensity > 0.4) line += '▒';
          else if (finalIntensity > 0.25) line += '░';
          else if (finalIntensity > 0.15) line += '∙';
          else line += '·';
        }
        // Background space
        else {
          line += ' ';
        }
      }
      patterns.push(line);
    }
    return patterns;
  }, [isMobile, time]);

  useEffect(() => {
    setRayPattern(generateAdvancedAsciiRays());
  }, [generateAdvancedAsciiRays]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-orange-600"
      style={{
        fontFamily: 'monospace'
      }}
    >
      {/* Static background - bright red/orange like logo */}
      <div className="absolute inset-0 bg-gradient-radial from-red-400/40 via-red-500/60 to-red-700/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      
      {/* Main ASCII Canvas - Much larger and visible */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative font-mono leading-none select-none w-full text-center"
          style={{
            fontSize: isMobile ? '8px' : '12px', // Much larger for visibility
            letterSpacing: isMobile ? '2px' : '3px', // More spacing
            lineHeight: isMobile ? '8px' : '12px',
          }}
          animate={{
            filter: `brightness(${1.1 + Math.sin(time * 1.5) * 0.1})`
          }}
          transition={{ duration: 0.1 }}
        >
          {/* Single clear, visible layer - white on red background */}
          <motion.pre
            className="relative z-10 text-white font-bold"
            style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3)',
              filter: `drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))`
            }}
          >
            {rayPattern.map((line, index) => (
              <motion.div
                key={`main-${index}`}
                animate={{
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 2 + Math.sin(index * 0.1) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.02
                }}
              >
                {line}
              </motion.div>
            ))}
          </motion.pre>
        </motion.div>
      </div>

      {/* Simple floating particles */}
      {[...Array(isMobile ? 15 : 25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-white/20 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 8 + 4}px`
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          {['✦', '✧', '∙', '·', '*'][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}

      {/* Simple edge gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
} 