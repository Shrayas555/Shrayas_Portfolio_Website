import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const journeyData = [
    {
      id: 1,
      title: "Software Developer",
      company: "DataVis Lab, Clemson University",
      period: "2024 - Present",
      description: "Working on the CDC-funded DMA‑PRIME project, developing large-scale public health dashboards for disease outbreak tracking across South Carolina. Contributing to data visualization and software development initiatives.",
      side: "left"
    },
    {
      id: 2,
      title: "MS in Computer Science",
      company: "Clemson University",
      period: "2024 - Present",
      description: "Pursuing advanced studies in Computer Science with focus on AI, Machine Learning, and Data Science. Working on cutting-edge research projects and developing innovative solutions.",
      side: "right"
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Previous Experience",
      period: "2022 - 2024",
      description: "Developed full-stack applications, worked with modern frameworks, and contributed to scalable software solutions. Gained expertise in React, Node.js, and cloud technologies.",
      side: "left"
    },
    {
      id: 4,
      title: "Bachelor's Degree",
      company: "Computer Science",
      period: "2018 - 2022",
      description: "Completed undergraduate studies in Computer Science, building strong foundation in programming, algorithms, and software development principles.",
      side: "right"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="journey" className="relative py-20 bg-black overflow-hidden">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent via-slate to-silver"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            My Journey
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

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />

          {/* Journey Items */}
          <div className="space-y-16">
            {journeyData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative flex items-center ${
                  item.side === 'left' ? 'justify-start' : 'justify-end'
                }`}
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-black shadow-lg z-10"
                  style={{ 
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginLeft: '-6px' // Adjust to center perfectly on the line
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                />

                {/* Content Card */}
                <motion.div
                  className={`w-full max-w-md ${
                    item.side === 'left' ? 'pr-2' : 'pl-2'
                  }`}
                  initial={{ 
                    opacity: 0, 
                    x: item.side === 'left' ? -50 : 50 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0 
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-slate/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-accent/30 hover:border-accent/50 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(163, 163, 163, 0.2)",
                      y: -5
                    }}
                  >
                    {/* Title */}
                    <h3 className="text-xl font-bold text-accent mb-2">
                      {item.title}
                    </h3>
                    
                    {/* Company */}
                    <p className="text-lg text-silver font-medium mb-1">
                      {item.company}
                    </p>
                    
                    {/* Period */}
                    <p className="text-sm text-slate mb-4 font-medium">
                      {item.period}
                    </p>
                    
                    {/* Description */}
                    <p className="text-silver leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>


        </div>
      </motion.div>
    </section>
  );
};

export default JourneySection; 