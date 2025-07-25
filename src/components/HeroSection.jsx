import AnimatedText from './AnimatedText';
import AnimatedButton from './AnimatedButton';
import StarfieldBackground from './StarfieldBackground';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
      x: -150,
      y: 100,
      scale: 0,
      rotateY: -180,
      rotateX: -90,
      filter: 'blur(10px)'
    },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0,
      y: 0,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 1.2,
        delay: i * 0.12,
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

  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: '100%', 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        delay: 2.5,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 1,
        delay: 3.2,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.3, type: "spring" }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const name = "Shrayas Raju";

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 md:px-8 lg:px-12 text-charcoal select-none overflow-hidden bg-black">
      {/* Starfield background with moving particles */}
      <StarfieldBackground className="section-background" particleCount={30} />
      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-12 lg:gap-16 lg:pl-8">
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
          className="relative z-10 flex flex-col items-center lg:items-start lg:w-3/5 text-center lg:text-left order-1 lg:order-2 min-w-0 lg:pl-0 lg:-ml-4"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Stunning glowing background for name */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center -z-10"
            variants={glowVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-[800px] h-[300px] rounded-full bg-gradient-to-r from-accent/30 via-slate/20 to-silver/30 opacity-60 blur-3xl animate-pulse pointer-events-none" />
          </motion.div>

          {/* Animated Name */}
          <motion.div
            className="relative mb-8 lg:mb-10 py-2 w-full overflow-hidden"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setNameAnimationComplete(true)}
          >
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight font-sans relative leading-[1.6] whitespace-nowrap" style={{ lineHeight: '1.6', paddingBottom: '0.3rem' }}>
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block transition-all duration-500 ${
                    letter === ' ' ? 'mx-3' : 'px-1'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, #A3A3A3 0%, #CED4DA 50%, #A3A3A3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 20px rgba(163, 163, 163, 0.5), 0 0 40px rgba(206, 212, 218, 0.3)',
                    filter: 'brightness(1)',
                  }}

                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            
            {/* Animated underline with glow */}
            <motion.div
              className="h-2 bg-gradient-to-r from-accent via-slate to-silver rounded-full mt-2 relative overflow-hidden"
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
              style={{
                boxShadow: '0 0 20px rgba(163, 163, 163, 0.6), 0 0 40px rgba(206, 212, 218, 0.4)'
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Type Animation with enhanced styling */}
          <motion.div 
            className="mb-6 lg:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold min-h-[1.5em] relative w-full"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/20 via-slate/10 to-silver/20 rounded-lg blur-sm"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative z-10 flex items-center">
                <TypeAnimation
                  sequence={[
                    'Aspiring Software Engineer',
                    2000,
                    'Passionate about AI',
                    2000,
                    'Creative Developer',
                    2000,
                    'Data Enthusiast',
                    2000,
                  ]}
                  wrapper="span"
                  speed={90}
                  repeat={Infinity}
                  className="text-accent"
                  style={{
                    textShadow: '0 0 15px rgba(163, 163, 163, 0.4)',
                    background: 'linear-gradient(135deg, #A3A3A3 0%, #CED4DA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                />
                <motion.span
                  className="text-accent ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{
                    textShadow: '0 0 15px rgba(163, 163, 163, 0.4)',
                    background: 'linear-gradient(135deg, #A3A3A3 0%, #CED4DA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  |
                </motion.span>
              </div>
            </div>
          </motion.div>
          
          {/* University text with enhanced styling */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 3.0, duration: 1 }}
            className="mb-6 lg:mb-8 relative w-full"
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent/10 via-slate/8 to-silver/10 rounded-xl blur-lg"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Floating particles around the text */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-accent rounded-full opacity-70"
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${30 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.random() * 10 - 5, 0],
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 flex items-center justify-center">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white">
                MS in Computer Science @ Clemson University
              </h2>
            </div>
          </motion.div>
          
          {/* Description with enhanced styling */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 3.1, duration: 1 }}
            className="mb-8 lg:mb-10 relative w-full"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-silver/5 to-accent/5 rounded-lg"
              animate={{
                x: [0, 5, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative z-10">
              <AnimatedText
                text="Aspiring Software Engineer | Passionate about AI, Data, and Creative Development"
                className="text-sm sm:text-base md:text-lg lg:text-xl text-silver max-w-2xl leading-relaxed"
                style={{
                  textShadow: '0 0 8px rgba(206, 212, 218, 0.2)',
                }}
              />
            </div>
          </motion.div>
          
          {/* Superb Button Animation */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-slate rounded-full blur-lg opacity-50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-slate rounded-full"
              animate={{
                background: [
                  'linear-gradient(45deg, #A3A3A3, #495057)',
                  'linear-gradient(45deg, #495057, #CED4DA)',
                  'linear-gradient(45deg, #CED4DA, #A3A3A3)',
                  'linear-gradient(45deg, #A3A3A3, #495057)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
                          <AnimatedButton 
                className="relative z-10 bg-gradient-to-r from-accent to-slate hover:from-slate hover:to-accent text-white font-bold shadow-lg text-sm sm:text-base md:text-lg px-8 py-4 lg:px-10 lg:py-5 rounded-full transition-all duration-300 hover:shadow-2xl" 
                onClick={scrollToWork}
                style={{
                  boxShadow: '0 0 20px rgba(163, 163, 163, 0.4), 0 0 40px rgba(206, 212, 218, 0.2)',
                }}
              >
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                View My Work
              </motion.span>
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Micro-interaction: subtle scroll indicator */}
      <motion.div 
        className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.8 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-accent flex items-start justify-center p-1 animate-bounce" style={{ boxShadow: '0 0 15px rgba(163, 163, 163, 0.5)' }}>
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
                x: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection; 