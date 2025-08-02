import { motion } from 'framer-motion';
import { useRef } from 'react';

const JourneySection = () => {
  const ref = useRef(null);

  const journeyData = [
    {
      id: 1,
      title: "Graduate Research Assistant – Software Developer",
      company: "DataVis Lab, Clemson University, SC, USA",
      period: "2025 - Present",
      description: "Working on the CDC-funded DMA‑PRIME project, developing large-scale public health dashboards for disease outbreak tracking across South Carolina. Contributing to data visualization and software development initiatives.",
      side: "left"
    },
    {
      id: 2,
      title: "MS in Computer Science",
      company: "Clemson University, SC, USA",
      period: "2024 - 2026",
      description: "Pursuing advanced studies in Computer Science with focus on AI, Machine Learning, and Data Science. Working on cutting-edge research projects and developing innovative solutions.",
      grade: "Grade: 4.0",
      side: "right"
    },
    {
      id: 3,
      title: "B-Tech Information Technology",
      company: "Easwari Engineering College, Chennai, India",
      period: "2020 - 2024",
      description: "Completed undergraduate studies in Information Technology, building strong foundation in programming, algorithms, and software development principles.",
      grade: "Grade: 8.75 / 10",
      side: "left"
    },
    {
      id: 4,
      title: "Data Science Intern",
      company: "CodeClause, Pune, India",
      period: "2022 - 2022",
      description: "Led a customer segmentation project using data analysis to generate strategic insights and improve engagement. Gained hands-on experience in solving business problems through applied machine learning and data-driven thinking.",
      side: "right"
    },
    {
      id: 5,
      title: "12th Grade - CBSE - HSC",
      company: "National Public School, Chennai , India",
      period: "2019 - 2020",
      description: "Completed higher secondary education with Computer Science specialization, developing strong analytical and problem-solving skills.",
      grade: "Grade: 91.8%",
      side: "left"
    },
    {
      id: 6,
      title: "10th Grade - SSLC",
      company: "Lady Andal & Sir Mutha Schools (MSS), Chennai, India",
      period: "2017 - 2018",
      description: "Completed secondary school education, establishing strong academic foundation and developing critical thinking abilities.",
      grade: "Grade: 82%",
      side: "right"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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



  return (
    <section id="journey" className="relative py-20 bg-black overflow-hidden">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
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
          {/* Desktop Timeline Line - Hidden on mobile */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.1 }}
            style={{ 
              transformOrigin: 'top',
              transform: 'translateX(-50%)'
            }}
          />

          {/* Journey Items */}
          <div className="space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-16">
            {journeyData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative flex items-center ${
                  item.side === 'left' ? 'justify-center md:justify-start' : 'justify-center md:justify-end'
                }`}
                variants={itemVariants}
              >
                {/* Desktop Timeline Dot - Hidden on mobile */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-black shadow-lg z-10 hidden md:block"
                  style={{ 
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginLeft: '-6px'
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                />



                {/* Content Card */}
                <motion.div
                  className={`w-full max-w-xs md:max-w-sm lg:max-w-sm xl:max-w-md ${
                    item.side === 'left' ? 'md:pr-8 lg:pr-4' : 'md:pl-8 lg:pl-4'
                  } md:ml-0 ml-0`}
                  initial={{ 
                    opacity: 0, 
                    x: item.side === 'left' ? -50 : 50 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0 
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <motion.div
                    className="bg-slate/20 backdrop-blur-sm rounded-2xl p-3 md:p-5 lg:p-6 xl:p-7 shadow-xl border border-accent/30 hover:border-accent/50 transition-all duration-300 relative min-h-[200px] lg:min-h-[220px] xl:min-h-[240px]"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(163, 163, 163, 0.2)",
                      y: -5
                    }}
                  >


                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-accent mb-2">
                      {item.title}
                    </h3>
                    
                    {/* Company */}
                    <p className="text-base md:text-lg text-silver font-medium mb-1">
                      {item.company}
                    </p>
                    
                    {/* Period */}
                    <p className="text-sm text-silver mb-1 font-medium">
                      {item.period}
                    </p>
                    
                    {/* Grade */}
                    {item.grade && (
                      <p className="text-sm text-accent mb-4 font-semibold">
                        {item.grade}
                      </p>
                    )}
                    
                    {/* Description */}
                    <p className="text-sm md:text-base text-silver leading-relaxed">
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