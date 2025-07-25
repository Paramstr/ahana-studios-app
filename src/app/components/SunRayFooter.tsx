"use client";

import { useEffect, useRef, useState } from "react";

export default function SunRayFooter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Sophisticated ASCII character sets for different lighting intensities
  const asciiChars = {
    // High detail character gradient for 3D sphere lighting
    sphere: [' ', '·', '∙', '°', '∘', '○', '◦', '◯', '⊙', '●', '█'],
    // Flowing ray characters
    rays: [' ', '·', ':', '!', '|', '/', '\\', '~', '≈', '∿', '⌐', '¬', '█'],
    // Particle and detail characters  
    particles: ['·', '∙', '°', '*', '✧', '✦', '✱', '✲', '※', '⁎'],
    // Edge and flowing line characters
    flows: ['/', '\\', '|', '-', '~', '≈', '∿', '⌒', '⌓', '◠', '◡'],
    // Complex pattern characters
    complex: ['▲', '▼', '◀', '▶', '◆', '♦', '▪', '▫', '■', '□', '▨', '▩']
  };

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // ASCII rendering parameters
    const fontSize = Math.max(6, Math.min(12, dimensions.width / 200));
    const charWidth = fontSize * 0.6;
    const charHeight = fontSize * 1.2;
    const cols = Math.floor(dimensions.width / charWidth);
    const rows = Math.floor(dimensions.height / charHeight);

    // Set font and styling
    ctx.font = `${fontSize}px 'Courier New', monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // 3D Sun parameters
    const sunCenterX = cols / 2;
    const sunCenterY = rows - Math.floor(rows * 0.15); // Position at bottom like half-sun
    const sunRadius = Math.min(cols, rows) * 0.15;
    const lightSourceX = sunCenterX - sunRadius * 0.3;
    const lightSourceY = sunCenterY - sunRadius * 0.5;

    // Animation state for sophisticated effects
    let time = 0;
    let lightSourceTime = 0;
    let atmosphericTime = 0;

    // Advanced 3D sphere lighting with multiple light sources
    const calculateSphereLighting = (x: number, y: number, z: number) => {
      // Dynamic light source position based on time
      const dynamicLightX = lightSourceX + Math.sin(lightSourceTime * 0.001) * 5;
      const dynamicLightY = lightSourceY + Math.cos(lightSourceTime * 0.0008) * 3;
      const dynamicLightZ = 50 + Math.sin(lightSourceTime * 0.0012) * 10;
      
      // Primary light vector
      const lightVecX = dynamicLightX - x;
      const lightVecY = dynamicLightY - y;  
      const lightVecZ = dynamicLightZ - z;
      
      // Normal vector at sphere surface
      const normalX = x - sunCenterX;
      const normalY = y - sunCenterY;
      const normalZ = z;
      
      // Normalize vectors
      const lightMag = Math.sqrt(lightVecX * lightVecX + lightVecY * lightVecY + lightVecZ * lightVecZ);
      const normalMag = Math.sqrt(normalX * normalX + normalY * normalY + normalZ * normalZ);
      
      if (lightMag === 0 || normalMag === 0) return 0;
      
      // Primary lighting
      const dotProduct = (lightVecX * normalX + lightVecY * normalY + lightVecZ * normalZ) / (lightMag * normalMag);
      let lighting = Math.max(0, dotProduct);
      
      // Secondary rim lighting
      const rimIntensity = Math.pow(1 - Math.abs(dotProduct), 2);
      lighting += rimIntensity * 0.3;
      
      
      return Math.min(1, lighting);
    };

    // Super intricate flowing ray system with organic patterns
    const generateRayAt = (angle: number, distance: number, time: number, rayIndex: number) => {
      const angleRad = (angle * Math.PI) / 180;
      
      // Multiple wave layers for complex organic movement
      const wave1 = Math.sin(time * 0.002 + rayIndex * 0.3 + distance * 0.01) * 4;
      const wave2 = Math.cos(time * 0.003 + rayIndex * 0.2 + distance * 0.008) * 2.5;
      const wave3 = Math.sin(time * 0.0025 + rayIndex * 0.15 + angle * 0.1) * 3;
      const turbulence = Math.sin(time * 0.005 + rayIndex + distance * 0.02) * 1.5;
      
      const totalWave = wave1 + wave2 + wave3 + turbulence;
      
      // Dynamic ray width variation
      const widthVariation = Math.sin(time * 0.001 + rayIndex * 0.4) * 2;
      
      // Intensity with multiple frequency components
      const intensity1 = (Math.sin(time * 0.002 + rayIndex * 0.25) + 1) / 2;
      const intensity2 = (Math.cos(time * 0.0015 + rayIndex * 0.35 + distance * 0.01) + 1) / 2;
      const intensity3 = (Math.sin(time * 0.003 + angle * 0.05) + 1) / 2;
      
      const combinedIntensity = (intensity1 + intensity2 + intensity3) / 3;
      
      // Final ray position with perspective flattening
      const rayX = sunCenterX + Math.cos(angleRad) * (distance + totalWave);
      const rayY = sunCenterY + Math.sin(angleRad) * (distance + totalWave) * 0.25; // Strong perspective
      
      // Direct intensity without atmospheric falloff
      const finalIntensity = combinedIntensity;
      
      return { 
        x: rayX, 
        y: rayY, 
        intensity: finalIntensity,
        width: 1 + widthVariation,
        flow: totalWave
      };
    };

    // ASCII rendering function
    const renderFrame = () => {
      time += 1;
      
      // Clear canvas with solid background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render ASCII grid
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * charWidth;
          const y = row * charHeight;
          
          let char = ' ';
          let color = '#FFFFFF';
          let opacity = 0.1;

          // Calculate distance from sun center
          const distanceFromSun = Math.sqrt(
            Math.pow(col - sunCenterX, 2) + Math.pow(row - sunCenterY, 2)
          );

          // 3D Sun sphere rendering
          if (distanceFromSun <= sunRadius) {
            // Calculate 3D coordinates on sphere
            const sphereX = col - sunCenterX;
            const sphereY = row - sunCenterY;
            const sphereZSq = sunRadius * sunRadius - sphereX * sphereX - sphereY * sphereY;
            
            if (sphereZSq >= 0) {
              const sphereZ = Math.sqrt(sphereZSq);
              const lighting = calculateSphereLighting(col, row, sphereZ);
              
              // Map lighting to ASCII character
              const charIndex = Math.floor(lighting * (asciiChars.sphere.length - 1));
              char = asciiChars.sphere[charIndex];
              
              // Simple color based on lighting - orange to white
              if (lighting > 0.7) {
                color = '#FFFFFF'; // White for bright areas
              } else if (lighting > 0.3) {
                color = '#FB3D01'; // Orange for medium lighting
              } else {
                color = '#CC3300'; // Darker orange for shadows
              }
              opacity = 1;
            }
          }
          // Ray rendering - only in upper hemisphere
          else if (row < sunCenterY) {
            // Calculate ray angle from sun center
            const rayAngle = Math.atan2(row - sunCenterY, col - sunCenterX) * 180 / Math.PI;
            
            // Only render rays in upper hemisphere (180-360 degrees -> -90 to 90)
            if (rayAngle >= -90 && rayAngle <= 90) {
              const normalizedAngle = rayAngle + 90; // Convert to 0-180
              const rayIndex = Math.floor((normalizedAngle / 180) * 24);
              
              if (rayIndex >= 0 && rayIndex < 24) {
                const rayData = generateRayAt(normalizedAngle, distanceFromSun - sunRadius, time, rayIndex);
                
                if (rayData.intensity > 0.1) {
                  const wave1 = Math.sin(time * 0.001 + col * 0.1 + row * 0.05) * 0.3;
                  const wave2 = Math.cos(time * 0.0015 + rayIndex * 0.2) * 0.2;
                  const totalIntensity = rayData.intensity + wave1 + wave2;
                  
                  if (totalIntensity > 0.15) {
                    // Select character based on intensity and flow
                    let charSet = asciiChars.rays;
                    if (totalIntensity > 0.7) charSet = asciiChars.complex;
                    else if (totalIntensity > 0.4) charSet = asciiChars.flows;
                    
                    const charIndex = Math.floor(totalIntensity * (charSet.length - 1));
                    char = charSet[Math.min(charIndex, charSet.length - 1)];
                    
                    // Simple color scheme for rays - orange to white
                    if (totalIntensity > 0.6) {
                      color = '#FFFFFF'; // White for bright rays
                    } else if (totalIntensity > 0.3) {
                      color = '#FB3D01'; // Orange for medium rays
                    } else {
                      color = '#CC3300'; // Darker orange for dim rays
                    }
                    opacity = 1;
                  }
                }
              }
            }
          }

          // Particle effects with solid colors
          if (char === ' ' && Math.random() < 0.001) {
            const particleIntensity = Math.random();
            if (particleIntensity > 0.7) {
              char = asciiChars.particles[Math.floor(Math.random() * asciiChars.particles.length)];
              color = '#FB3D01'; // Solid orange particles
              opacity = 1;
            }
          }

          // Render character if visible
          if (char !== ' ' && opacity > 0.05) {
            ctx.fillStyle = color;
            ctx.globalAlpha = opacity;
            ctx.fillText(char, x + charWidth / 2, y + charHeight / 2);
          }
        }
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(renderFrame);
    };

    // Start animation
    renderFrame();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          imageRendering: 'pixelated',
          fontFamily: '"Courier New", monospace'
        }}
      />
    </div>
  );
} 