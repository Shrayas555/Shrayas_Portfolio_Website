import AnimatedText from './AnimatedText';
import AnimatedButton from './AnimatedButton';
import BackgroundParticles from './BackgroundParticles';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const scrollToWork = () => {
  const el = document.getElementById('projects');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } },
};

const HeroSection = () => {
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [hoveredLetter, setHoveredLetter] = useState(null);

  // Random glitch effect for the name
  useEffect(() => {
    const glitchTimer = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every 3 seconds
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 150);
      }
    }, 3000);

    return () => clearInterval(glitchTimer);
  }, []);

  const nameVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        duration: 1.5, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0,
      rotateX: -90
    },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    })
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
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

  const name = "Shrayas Raju";

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center h-screen px-4 md:px-8 lg:px-12 bg-charcoal text-silver select-none overflow-hidden">
      {/* Background gradients (subtle, professional) */}
      <div className="absolute -z-10 left-1/2 top-1/3 -translate-x-1/2 blur-3xl opacity-40 pointer-events-none">
        <div className="w-[32rem] h-[16rem] bg-gradient-to-r from-accent via-slate to-transparent rounded-full" />
      </div>
      <div className="absolute -z-10 left-1/3 top-1/2 -translate-x-1/2 blur-2xl opacity-20 pointer-events-none">
        <div className="w-96 h-40 bg-gradient-to-br from-silver via-accent to-transparent rounded-full" />
      </div>
      <BackgroundParticles />
      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-8 lg:gap-12">
        {/* Profile Image */}
        <motion.div
          className="relative flex-shrink-0 flex justify-center items-center w-full lg:w-2/5 order-2 lg:order-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          {/* Animated glowing border directly on the square frame around the image */}
          <div className="relative p-[6px] rounded-2xl overflow-hidden animate-glow-border-gradient" style={{ boxSizing: 'border-box', zIndex: 10 }}>
            <img
              src="/profile.png"
              alt="Shrayas Raju"
              className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto max-h-[500px] md:max-h-[550px] lg:max-h-[600px] object-cover rounded-2xl shadow-2xl bg-slate"
              style={{ boxShadow: '0 8px 32px 0 rgba(35,39,42,0.25)' }}
            />
          </div>
        </motion.div>
        
        {/* Hero Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center lg:items-start lg:w-3/5 text-center lg:text-left order-1 lg:order-2"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Glowing background for name */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center -z-10"
            variants={glowVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-[600px] h-[200px] rounded-full bg-gradient-to-r from-accent via-purple-500 to-pink-500 opacity-20 blur-3xl" />
          </motion.div>

          {/* Animated Name */}
          <motion.div
            className="relative mb-4 lg:mb-6"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setNameAnimationComplete(true)}
          >
                         <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-accent tracking-tight font-sans drop-shadow-xl">
               {name.split('').map((letter, index) => (
                 <motion.span
                   key={index}
                   custom={index}
                   variants={letterVariants}
                   initial="hidden"
                   animate="visible"
                   className={`inline-block cursor-pointer transition-all duration-300 ${
                     glitchActive ? 'animate-glitch-letter' : ''
                   } ${
                     letter === ' ' ? 'mx-2' : ''
                   } ${
                     hoveredLetter === index ? 'animate-letter-float scale-110' : ''
                   }`}
                   style={{
                     textShadow: glitchActive 
                       ? '2px 0 #ff0000, -2px 0 #00ffff' 
                       : hoveredLetter === index
                       ? '0 0 30px rgba(173, 216, 230, 0.8), 0 0 50px rgba(147, 51, 234, 0.6)'
                       : '0 0 20px rgba(173, 216, 230, 0.5)',
                     transform: glitchActive 
                       ? 'translate(2px, 0)' 
                       : hoveredLetter === index
                       ? 'translateY(-5px) scale(1.1)'
                       : 'translate(0, 0)',
                     color: hoveredLetter === index ? '#8b5cf6' : '#add8e6'
                   }}
                   onMouseEnter={() => setHoveredLetter(index)}
                   onMouseLeave={() => setHoveredLetter(null)}
                   whileHover={{
                     scale: 1.2,
                     y: -10,
                     transition: { duration: 0.2 }
                   }}
                 >
                   {letter}
                 </motion.span>
               ))}
             </h1>
            
            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full mt-2"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ 
                duration: 1.5, 
                delay: 1.2,
                ease: "easeOut"
              }}
            />
          </motion.div>
          
          <motion.div 
            className="mb-4 lg:mb-6 text-base sm:text-lg md:text-xl lg:text-2xl text-accent font-semibold min-h-[1.5em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                'Aspiring Software Engineer',
                1800,
                'Passionate about AI',
                1800,
                'Creative Developer',
                1800,
                'Data Enthusiast',
                1800,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <AnimatedText
              text="MS in Computer Science @ Clemson University"
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-accent mb-3 lg:mb-4"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8 }}
          >
            <AnimatedText
              text="Aspiring Software Engineer | Passionate about AI, Data, and Creative Development"
              className="text-sm sm:text-base md:text-lg lg:text-xl text-silver mb-6 lg:mb-8 max-w-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.4, duration: 0.8, type: "spring" }}
          >
            <AnimatedButton 
              className="bg-accent hover:bg-slate text-white font-bold shadow-lg text-sm sm:text-base md:text-lg px-6 py-3 lg:px-8 lg:py-4 animate-pulse-glow" 
              onClick={scrollToWork}
            >
              View My Work
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Micro-interaction: subtle scroll indicator */}
      <motion.div 
        className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-accent flex items-start justify-center p-1 animate-bounce">
          <div className="w-2 h-2 bg-accent rounded-full" />
        </div>
      </motion.div>

      {/* Floating particles around the name */}
      {nameAnimationComplete && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection; 