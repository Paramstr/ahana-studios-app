'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  title: string;
  description: string;
  visual: string;
}

interface ScrollProgressProps {
  processSteps: ProcessStep[];
}

export function ScrollProgress({ processSteps }: ScrollProgressProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Animate progress bar height based on scroll
      if (progressBarRef.current) {
        gsap.fromTo(progressBarRef.current, 
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
            },
          }
        );
      }

      // Animate each step
      stepsRefs.current.forEach((step, index) => {
        if (!step) return;

        const shape = step.querySelector('.shape');
        const content = step.querySelector('.content');
        const connector = step.querySelector('.connector-line');

        // Set initial states
        gsap.set([shape, content], { 
          opacity: 0, 
          scale: 0.9,
          y: 20
        });

        // Animate shape and content on scroll
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        });

        tl.to(shape, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out'
        })
        .to(content, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out'
        }, '-=0.3');

        // Animate connector line after shape appears
        if (connector) {
          gsap.set(connector, { scaleX: 0, transformOrigin: 'left center' });
          tl.to(connector, {
            scaleX: 1,
            duration: 0.5,
            ease: 'power2.inOut'
          }, '-=0.2');
        }

        // Active state highlighting
        ScrollTrigger.create({
          trigger: step,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            gsap.to(shape, { scale: 1.05, duration: 0.3 });
            step.classList.add('active');
          },
          onLeave: () => {
            gsap.to(shape, { scale: 1, duration: 0.3 });
            step.classList.remove('active');
          },
          onEnterBack: () => {
            gsap.to(shape, { scale: 1.05, duration: 0.3 });
            step.classList.add('active');
          },
          onLeaveBack: () => {
            gsap.to(shape, { scale: 1, duration: 0.3 });
            step.classList.remove('active');
          }
        });
      });
    }, container);

    return () => ctx.revert();
  }, [processSteps]);

  return (
    <div ref={containerRef} className="relative py-20 md:py-24 lg:py-32 px-8">
      {/* Progress Bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200">
        <div 
          ref={progressBarRef}
          className="absolute top-0 left-0 w-full bg-black"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight mb-8">
            Our Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Thoughtful transformation requires careful orchestration. Each step builds upon the last, creating systems that truly serve their purpose.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRefs.current[index] = el)}
                className="text-center relative process-step"
              >
                {/* Shape Container */}
                <div className="relative mb-8">
                  {/* Connector Line - positioned absolutely */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-[calc(50%+2rem)] w-[calc(100%-4rem)] -translate-y-1/2 z-0">
                      <div className="connector-line h-[2px] bg-gray-300 overflow-hidden">
                        <div className="h-full w-full bg-black transform -translate-x-full transition-transform duration-1000" />
                      </div>
                    </div>
                  )}
                  
                  {/* Geometric Shape */}
                  <div className="shape w-16 h-16 mx-auto relative z-10 bg-white overflow-hidden">
                    {index === 0 && (
                      <div className="w-full h-full bg-black transition-transform duration-300 hover:rotate-90" />
                    )}
                    {index === 1 && (
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <polygon 
                          points="32,2 50.5,13.5 62,32 50.5,50.5 32,62 13.5,50.5 2,32 13.5,13.5" 
                          fill="black"
                        />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <polygon points="32,8 56,56 8,56" fill="black" />
                      </svg>
                    )}
                    {index === 3 && (
                      <div className="w-full h-full border-4 border-black transition-all duration-300 hover:border-8" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="content">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .process-step.active .shape {
          filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
        }
        
        .process-step.active h3 {
          color: #000;
        }
        
        .process-step:not(.active) h3 {
          color: #666;
        }
        
        .process-step.active p {
          color: #333;
        }
        
        .process-step:not(.active) p {
          color: #999;
        }
      `}</style>
    </div>
  );
}