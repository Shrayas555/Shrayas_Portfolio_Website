import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import StarfieldBackground from './StarfieldBackground';

const skills = [
  { name: 'JavaScript', level: 90, icon: '⚡', color: 'from-accent to-slate' },
  { name: 'React', level: 85, icon: '⚛️', color: 'from-slate to-silver' },
  { name: 'Python', level: 80, icon: '🐍', color: 'from-accent to-slate' },
  { name: 'Tailwind CSS', level: 80, icon: '🎨', color: 'from-slate to-silver' },
  { name: 'Framer Motion', level: 70, icon: '✨', color: 'from-accent to-slate' },
  { name: 'AI/ML', level: 75, icon: '🤖', color: 'from-slate to-silver' },
  { name: 'Node.js', level: 85, icon: '🟢', color: 'from-accent to-slate' },
  { name: 'MongoDB', level: 75, icon: '🍃', color: 'from-slate to-silver' },
];

const SkillsSection = ({ scrollDirection }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [floatingIcons] = useState(() => {
    // Generate floating icons once - reduced for performance
    const icons = ['⚡', '⚛️', '🐍', '🎨', '✨', '🤖', '🟢', '🍃'];
    const floating = [];
    for (let i = 0; i < 10; i++) { // Reduced from 20 to 10
      floating.push({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 5 + Math.random() * 3 // Slower animation
      });
    }
    return floating;
  });

  // Memoize expensive calculations
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }), []);

  const skillCardVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: scrollDirection === 'down' ? 60 : -60,
      scale: 0.8,
      rotateY: -90
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
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
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 10, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        delay: custom.delay,
        ease: "easeInOut"
      }
    })
  }), []);

  const progressVariants = useMemo(() => ({
    hidden: { width: 0 },
    visible: (level) => ({ 
      width: `${level}%`,
      transition: { 
        duration: 1.5, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    })
  }), []);

  return (
    <section id="skills" className="relative py-20 bg-black overflow-hidden">
      {/* Starfield background for consistency */}
      <StarfieldBackground className="section-background" particleCount={30} />
      
      {/* Background floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
            custom={item}
            variants={floatingVariants}
            animate="animate"
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Glowing background */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-r from-accent/20 via-slate/20 to-silver/20 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent via-slate to-silver">
            Skills & Expertise
          </h2>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-accent via-slate to-silver rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: '300px' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group"
              variants={skillCardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              {/* Skill Card */}
              <motion.div
                className="bg-slate/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-accent/30 relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 25px 50px rgba(163, 163, 163, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4 text-center"
                  animate={{
                    scale: hoveredSkill === index ? [1, 1.2, 1] : 1,
                    rotate: hoveredSkill === index ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>

                {/* Skill name */}
                <h3 className="text-xl font-bold text-silver mb-4 text-center">
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-silver/70">Proficiency</span>
                    <span className="text-sm font-bold text-accent">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full h-3 bg-slate/30 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={progressVariants}
                    >
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1,
                        }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredSkill === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-accent rounded-full"
                        initial={{ 
                          x: '50%', 
                          y: '50%', 
                          scale: 0,
                          opacity: 1 
                        }}
                        animate={{
                          x: `${Math.random() * 100}%`,
                          y: `${Math.random() * 100}%`,
                          scale: [0, 1, 0],
                          opacity: [1, 0.8, 0],
                        }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-accent/30">
            <h3 className="text-2xl font-bold text-silver mb-4">
              Always Learning & Growing 🚀
            </h3>
            <p className="text-silver/80 text-lg">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices in software development.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection; 