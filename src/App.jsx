import './index.css';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import JourneySection from './components/JourneySection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import CertificationsSection from './components/CertificationsSection';
import EntranceAnimation from './components/EntranceAnimation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [showEntrance, setShowEntrance] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState('waiting');
  const lastScrollY = useRef(window.scrollY);
  const scrollTimeout = useRef(null);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) return; // Throttle scroll events
    
    scrollTimeout.current = setTimeout(() => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentY;
      scrollTimeout.current = null;
    }, 16); // ~60fps throttling
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  const handleEntranceComplete = () => {
    setShowEntrance(false);
    setTransitionPhase('transitioning');
    
    // Staggered content reveal
    setTimeout(() => {
      setContentVisible(true);
      setTransitionPhase('complete');
    }, 800);
  };

  if (showEntrance) {
    return <EntranceAnimation onComplete={handleEntranceComplete} />;
  }

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* Transition overlay */}
      <AnimatePresence>
        {transitionPhase === 'transitioning' && (
          <motion.div
            className="fixed inset-0 bg-black z-40"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        )}
      </AnimatePresence>

      {/* Particle system for transition - reduced count */}
      <AnimatePresence>
        {transitionPhase === 'transitioning' && (
          <div className="fixed inset-0 z-30 pointer-events-none">
            {[...Array(50)].map((_, i) => ( // Reduced from 100 to 50
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100
                }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1, 0],
                  x: 0,
                  y: 0
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 1.5,
                  delay: Math.random() * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {contentVisible && (
          <motion.div 
            className="flex h-screen font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="relative z-20"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 50,
                damping: 20
              }}
            >
              <Sidebar />
            </motion.div>
            
            <motion.main 
              className="flex-1 ml-0 md:ml-72 h-full relative overflow-y-auto bg-black"
              initial={{ x: 200, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 40,
                damping: 25
              }}
            >
              {/* Enhanced SVG tech/grid overlay */}
              <motion.svg 
                className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-0" 
                width="100%" 
                height="100%" 
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeOut" }}
              >
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#bdbdfc" strokeWidth="1" />
                  </pattern>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" filter="url(#glow)" />
              </motion.svg>
              
              <motion.div 
                className="relative z-10"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 60,
                  damping: 20
                }}
              >
                <section id="hero"><HeroSection /></section>
                <div className="pl-4 md:pl-6 lg:pl-8">
                  <AboutSection scrollDirection={scrollDirection} />
                  <JourneySection />
                  <SkillsSection scrollDirection={scrollDirection} />
                  <ProjectsSection scrollDirection={scrollDirection} />
                  <CertificationsSection scrollDirection={scrollDirection} />
                  <ContactSection scrollDirection={scrollDirection} />
                </div>
              </motion.div>
            </motion.main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App; 