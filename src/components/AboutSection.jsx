import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import StarfieldBackground from './StarfieldBackground';

const AboutSection = ({ scrollDirection }) => {
  const [floatingElements] = useState(() => {
    // Generate floating elements once - reduced for performance
    const elements = [];
    for (let i = 0; i < 8; i++) { // Reduced from 15 to 8
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1, // Smaller elements
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 2 // Slower animation
      });
    }
    return elements;
  });

  // Memoize expensive calculations
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: scrollDirection === 'down' ? 60 : -60,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }), [scrollDirection]);

  const floatingVariants = useMemo(() => ({
    animate: (custom) => ({
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        delay: custom.delay,
        ease: "easeInOut"
      }
    })
  }), []);

  const glowVariants = useMemo(() => ({
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
  }), []);

  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      {/* Starfield background for consistency */}
      <StarfieldBackground className="section-background" particleCount={30} />
      
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-accent to-slate opacity-20"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size
            }}
            custom={element}
            variants={floatingVariants}
            animate="animate"
          />
        ))}
      </div>

      {/* Glowing background orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-accent/20 via-slate/20 to-silver/20 opacity-30 blur-3xl"
        variants={glowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Title */}
        <motion.div
          className="mb-12"
          variants={itemVariants}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent via-slate to-silver"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-accent via-slate to-silver rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Main content */}
        <motion.div
          className="max-w-5xl mx-auto"
          variants={itemVariants}
        >
          {/* Text content - now full width */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            {/* Main About Card */}
            <motion.div
              className="bg-slate/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-accent/30"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(163, 163, 163, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.p
                className="text-base md:text-xl text-silver leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm <span className="font-bold text-accent">Shrayas Raju</span>, a passionate software developer, machine learning enthusiast, and Computer Science Master's student at Clemson University.
              </motion.p>
              
              <motion.p
                className="text-base md:text-xl text-silver leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I specialize in building reliable, scalable, and user-focused systems — with experience spanning full-stack development, data science, data visualization, and applied machine learning. I enjoy taking ideas from concept to deployment, turning complex problems into clean, thoughtful solutions.
              </motion.p>

              <motion.p
                className="text-base md:text-xl text-silver leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Currently, I work as a <span className="font-bold text-accent">Graduate Research Assistant</span> in the <span className="font-bold text-accent">DataVis Lab</span>, where I contribute to real-world research through impactful software. One of my core projects is the <span className="font-bold text-accent">CDC-funded DMA‑PRIME dashboard</span>, a public health tool used across South Carolina to support outbreak detection and decision-making.
              </motion.p>

              <motion.p
                className="text-base md:text-xl text-silver leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                I'm driven by curiosity, creativity, and a love for learning. I'm also someone who enjoys being adventurous — whether it's exploring nature, dancing, traveling, or diving into the latest in tech and AI. I'm always looking to grow — as a developer, a teammate, and a problem-solver.
              </motion.p>
            </motion.div>

            {/* Lab Affiliation Showcase */}
            <motion.div
              className="bg-gradient-to-r from-accent/10 to-slate/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-accent/30"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(163, 163, 163, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-accent mb-3">Research Lab Affiliation</h3>
                  <p className="text-silver mb-4">
                    I'm proud to be part of the <span className="font-semibold text-accent">DataVis Lab</span> at Clemson University, 
                    where I contribute to cutting-edge research in data visualization and public health technology.
                  </p>
                  <div className="text-sm text-silver">
                    <div>
                      <span className="font-semibold text-accent">Lab:</span> DataVis Lab, Clemson University
                    </div>
                    <div>
                      <span className="font-semibold text-accent">Role:</span> Graduate Research Assistant – Software Developer
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <a 
                    href="https://davislab.github.io/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-slate text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-200 shadow-lg font-medium"
                  >
                    <span>Visit Lab Website</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>


          </motion.div>
        </motion.div>
      </motion.div>
  </section>
);
};

export default AboutSection; 