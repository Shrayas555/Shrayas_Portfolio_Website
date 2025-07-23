import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EntranceAnimation = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState('loading');
  const [particles, setParticles] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [textRevealed, setTextRevealed] = useState(false);
  const [explosionActive, setExplosionActive] = useState(false);
  const animationRef = useRef(null);

  // Generate particles for the background effect
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 150; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.4 + 0.1,
          color: `hsl(${Math.random() * 60 + 200}, 80%, 70%)`,
          pulse: Math.random() * 2 + 1
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          opacity: particle.opacity + Math.sin(Date.now() * 0.001 * particle.pulse) * 0.05,
          vx: particle.vx + (Math.random() - 0.5) * 0.02,
          vy: particle.vy + (Math.random() - 0.5) * 0.02
        }))
      );
    };

    animationRef.current = setInterval(animateParticles, 50);
    return () => clearInterval(animationRef.current);
  }, []);

  // Animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Phase 1: Loading (3 seconds)
      await new Promise(resolve => {
        const timer = setInterval(() => {
          setLoadingProgress(prev => {
            if (prev >= 100) {
              clearInterval(timer);
              resolve();
              return 100;
            }
            return prev + Math.random() * 20 + 10;
          });
        }, 100);
      });

      // Phase 2: Text reveal (2 seconds)
      setCurrentPhase('revealing');
      setTextRevealed(true);
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Phase 3: Explosion effect (1 second)
      setCurrentPhase('exploding');
      setExplosionActive(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Phase 4: Transition to main site
      setCurrentPhase('transitioning');
      await new Promise(resolve => setTimeout(resolve, 1500));
      onComplete();
    };

    sequence();
  }, [onComplete]);

  const containerVariants = {
    loading: { opacity: 1 },
    revealing: { opacity: 1 },
    exploding: { opacity: 1 },
    transitioning: { 
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 0.8,
      filter: 'blur(20px)'
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        duration: 2, 
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1,
        delay: Math.random() * 0.5
      }
    }
  };

  const explosionVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      variants={containerVariants}
      animate={currentPhase}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              filter: 'blur(1px)',
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
            }}
            variants={particleVariants}
            initial="hidden"
            animate="visible"
          />
        ))}
      </div>

      {/* Central content */}
      <div className="relative z-10 text-center">
        {/* Glowing orb effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl" />
          <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 opacity-30 blur-2xl absolute" />
        </motion.div>

        {/* Main content */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={textRevealed ? "visible" : "hidden"}
          className="relative z-20"
        >
          <div className="text-8xl mb-6 opacity-60">
            👨‍💻
          </div>
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white mb-6 tracking-tight font-mono">
            SHRayas
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light font-mono mb-8">
            Software Engineer
          </p>
          <p className="text-lg md:text-xl text-gray-400 font-mono">
            Crafting Digital Experiences
          </p>
        </motion.div>

        {/* Loading bar - only show during loading phase */}
        {currentPhase === 'loading' && (
          <motion.div 
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-3 bg-gray-800 rounded-full overflow-hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-data-stream"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}

        {/* Status text */}
        {currentPhase === 'loading' && (
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-gray-400 font-mono text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {loadingProgress < 100 ? `Initializing... ${Math.round(loadingProgress)}%` : 'System Ready'}
          </motion.div>
        )}

        {/* Explosion effect */}
        {explosionActive && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={explosionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl" />
            <div className="absolute text-6xl text-white font-bold">
              WELCOME
            </div>
          </motion.div>
        )}

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 right-20 text-6xl opacity-30"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚡
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-6xl opacity-30"
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🚀
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-10 text-4xl opacity-30"
          animate={{ 
            x: [0, 15, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          💻
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-10 text-4xl opacity-30"
          animate={{ 
            x: [0, -15, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          🎯
        </motion.div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Scan lines effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scanline" />
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scanline" style={{ animationDelay: '1s' }} />
      </div>
    </motion.div>
  );
};

export default EntranceAnimation; 