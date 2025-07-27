import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
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
              className="bg-slate/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-accent/30"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(163, 163, 163, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.p
                className="text-lg md:text-xl text-silver leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Hi! I'm <span className="font-bold text-accent">Shrayas Srinivasan</span>, a passionate Computer Science graduate student at Clemson University. I'm deeply fascinated by the intersection of artificial intelligence, data science, and creative software engineering.
              </motion.p>
              
              <motion.p
                className="text-lg md:text-xl text-silver leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I love transforming complex problems into elegant, user-friendly solutions. My approach combines technical expertise with creative thinking, always focusing on building applications that not only work flawlessly but also provide an exceptional user experience.
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-silver leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                When I'm not immersed in code, you'll find me exploring the latest technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and pushing the boundaries of what's possible in software development.
              </motion.p>
            </motion.div>

            {/* What I Do Section */}
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Technical Focus */}
              <motion.div
                className="bg-slate/15 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-accent/20"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(163, 163, 163, 0.5)',
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-xl font-bold text-accent mb-4">Technical Focus</h3>
                <ul className="text-silver space-y-2 text-left">
                  <li>• Full-Stack Web Development</li>
                  <li>• AI & Machine Learning Applications</li>
                  <li>• Data Science & Analytics</li>
                  <li>• Cloud Computing & DevOps</li>
                  <li>• Mobile App Development</li>
                </ul>
              </motion.div>

              {/* What Drives Me */}
              <motion.div
                className="bg-slate/15 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-accent/20"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(163, 163, 163, 0.5)',
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-xl font-bold text-accent mb-4">What Drives Me</h3>
                <ul className="text-silver space-y-2 text-left">
                  <li>• Innovation & Problem Solving</li>
                  <li>• User-Centered Design</li>
                  <li>• Performance & Scalability</li>
                  <li>• Clean, Maintainable Code</li>
                  <li>• Continuous Learning</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Skills preview */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              {['React', 'Node.js', 'Python', 'AI/ML', 'Data Science', 'TypeScript', 'AWS', 'Docker'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="bg-gradient-to-r from-accent to-slate text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
  </section>
);
};

export default AboutSection; 