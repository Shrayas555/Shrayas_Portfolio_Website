import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EntranceAnimation = ({ onComplete }) => {
  const [animationPhase, setAnimationPhase] = useState('entrance');
  const [nameVisible, setNameVisible] = useState(false);
  const [exitStarted, setExitStarted] = useState(false);
  const [flickerStarted, setFlickerStarted] = useState(false);
  const [flickerIndex, setFlickerIndex] = useState(0);
  const [particlesVisible, setParticlesVisible] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const sequence = async () => {
      // Initial pause for dramatic effect
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Start particle system - keep visible throughout entire animation
      setParticlesVisible(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Begin name animation
      setNameVisible(true);
      await new Promise(resolve => setTimeout(resolve, 400));

      // Start flickering when S appears
      await new Promise(resolve => setTimeout(resolve, 0 * 80 + 400));
      setFlickerStarted(true);

      // Progress flickering through each letter
      const nameLength = 12;
      for (let i = 0; i < nameLength; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setFlickerIndex(i);
      }

      // Intensify glow effect
      setGlowIntensity(1);
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Start sequential letter fade-out with enhanced effects
      setExitStarted(true);
      for (let i = 0; i < nameLength; i++) {
        await new Promise(resolve => setTimeout(resolve, 60)); // Faster sequential exit
        setFlickerIndex(nameLength - 1 - i); // Reverse for exit
      }
      
      // Dramatic final moment
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Smooth transition to main content
      document.body.style.overflow = 'unset';
      onComplete();
    };

    sequence();
    return () => { document.body.style.overflow = 'unset'; };
  }, [onComplete]);

  const containerVariants = {
    entrance: { 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.8,
      rotateX: -90,
      filter: 'blur(10px)'
    },
    visible: (i) => ({
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, 
        delay: i * 0.08, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    exit: (i) => ({
      opacity: 0,
      y: -50,
      scale: 1.2,
      rotateX: 90,
      filter: 'blur(15px)',
      transition: { 
        duration: 0.6, 
        delay: i * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const flickerVariants = {
    hidden: { opacity: 0 },
    flickering: {
      opacity: [1, 0.3, 1, 0.7, 1, 0.4, 1, 0.8, 1, 0.5, 1, 0.9, 1],
      scale: [1, 1.05, 1, 0.98, 1, 1.02, 1, 0.99, 1, 1.01, 1, 0.995, 1],
      filter: [
        'blur(0px)',
        'blur(1px)',
        'blur(0px)',
        'blur(0.5px)',
        'blur(0px)',
        'blur(0.8px)',
        'blur(0px)',
        'blur(0.3px)',
        'blur(0px)',
        'blur(0.6px)',
        'blur(0px)',
        'blur(0.2px)',
        'blur(0px)'
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    settled: { 
      opacity: 1, 
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const particleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const name = "SHRAYAS RAJU";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="entrance"
        className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-50 flex items-center justify-center overflow-hidden"
        variants={containerVariants}
        initial="entrance"
        animate="entrance"
        style={{
          background: `radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%), 
                       linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)`
        }}
      >
        {/* Animated background particles - always visible during entrance */}
        {particlesVisible && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={particleVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: Math.random() * 2,
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Dynamic glow effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: `radial-gradient(circle at center, 
                         rgba(255,255,255,${0.1 + glowIntensity * 0.2}) 0%, 
                         transparent 60%)`
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        <div className="relative z-10 text-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-[0.2em] font-mono relative"
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
                letterSpacing: '0.2em',
                textShadow: `
                  0 0 20px rgba(255,255,255,0.5),
                  0 0 40px rgba(255,255,255,0.3),
                  0 0 60px rgba(255,255,255,0.2),
                  0 0 80px rgba(255,255,255,0.1)
                `
              }}
            >
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate={
                    exitStarted 
                      ? "exit" 
                      : nameVisible 
                        ? "visible" 
                        : "hidden"
                  }
                  className={`inline-block relative ${
                    letter === ' ' ? 'mx-6 md:mx-8 lg:mx-10' : ''
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <motion.span
                    variants={flickerVariants}
                    initial="hidden"
                    animate={
                      nameVisible && flickerStarted && index <= flickerIndex && !exitStarted
                        ? "flickering"
                        : nameVisible && !exitStarted
                          ? "settled" 
                          : "hidden"
                    }
                    className="inline-block relative"
                    style={{
                      textShadow: `
                        0 0 10px rgba(255,255,255,0.8),
                        0 0 20px rgba(255,255,255,0.6),
                        0 0 30px rgba(255,255,255,0.4)
                      `
                    }}
                  >
                    {letter}
                  </motion.span>
                  
                  {/* Letter glow effect */}
                  <motion.div
                    className="absolute inset-0 -z-10"
                    animate={{
                      opacity: [0, 0.5, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1,
                      ease: "easeInOut"
                    }}
                    style={{
                      background: `radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)`,
                      filter: 'blur(20px)'
                    }}
                  />
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EntranceAnimation; 