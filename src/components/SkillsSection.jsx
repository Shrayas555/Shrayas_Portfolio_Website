import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';


// Skills organized by category with proper icon references
const skillCategories = [
  {
    name: "FRONTEND",
    skills: [
      { name: 'HTML', icon: '/icons/html-5.svg', color: 'from-orange-500 to-red-500' },
      { name: 'CSS', icon: '/icons/css.svg', color: 'from-blue-500 to-purple-500' },
      { name: 'JavaScript', icon: '/icons/javascript.svg', color: 'from-yellow-400 to-orange-500' },
      { name: 'ReactJS', icon: '/icons/react.svg', color: 'from-cyan-400 to-blue-500' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg', color: 'from-teal-400 to-cyan-500' },
      { name: 'Framer Motion', icon: '/icons/framer-motion.svg', color: 'from-purple-500 to-pink-500' },
    ]
  },
  {
    name: "BACKEND",
    skills: [
      { name: 'NodeJS', icon: '/icons/node-js.svg', color: 'from-green-500 to-emerald-500' },
      { name: 'ExpressJS', icon: '/icons/express-js.svg', color: 'from-gray-600 to-gray-800' },
      { name: 'Python Flask', icon: '/icons/flask.svg', color: 'from-yellow-500 to-orange-500' },
      { name: 'Streamlit', icon: '/icons/streamlit.svg', color: 'from-red-500 to-pink-500' },
    ]
  },
  {
    name: "DATABASE",
    skills: [
      { name: 'SQL', icon: '/icons/sql.svg', color: 'from-blue-600 to-indigo-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', color: 'from-blue-500 to-cyan-500' },
    ]
  },
  {
    name: "TOOLS",
    skills: [
      { name: 'Git', icon: '/icons/git.svg', color: 'from-orange-500 to-red-500' },
      { name: 'Postman', icon: '/icons/postman.svg', color: 'from-orange-400 to-orange-600' },
      { name: 'npm', icon: '/icons/npm.svg', color: 'from-red-500 to-red-700' },
    ]
  },
  {
    name: "LANGUAGES",
    skills: [
      { name: 'Python', icon: '/icons/python.svg', color: 'from-yellow-500 to-blue-500' },
      { name: 'C', icon: '/icons/c.svg', color: 'from-blue-600 to-blue-800' },
      { name: 'C++', icon: '/icons/c++.svg', color: 'from-blue-500 to-indigo-600' },
      
    ]
  },
  {
    name: "AI & ML",
    skills: [
      { name: 'PyTorch', icon: '/icons/pytorch.svg', color: 'from-orange-500 to-red-500' },
      { name: 'TensorFlow', icon: '/icons/tensorflow.svg', color: 'from-orange-400 to-orange-600' },
      { name: 'AI/ML', icon: '/icons/ai-ml.svg', color: 'from-purple-500 to-pink-500' },
      { name: 'Deep Learning', icon: null, color: 'from-indigo-500 to-purple-500' },
      { name: 'Computer Vision', icon: null, color: 'from-green-500 to-teal-500' },
      { name: 'Data Science', icon: null, color: 'from-blue-500 to-cyan-500' },
      { name: 'Data Visualization', icon: null, color: 'from-green-400 to-emerald-500' },
      { name: 'Scikit-learn', icon: '/icons/scikit-learn.svg', color: 'from-orange-500 to-yellow-500' },
      { name: 'NumPy', icon: '/icons/numpy.svg', color: 'from-blue-500 to-indigo-500' },
      { name: 'Pandas', icon: '/icons/pandas.svg', color: 'from-blue-400 to-blue-600' },
      { name: 'Matplotlib', icon: '/icons/matplotlib.svg', color: 'from-blue-500 to-purple-500' },
      { name: 'Tableau', icon: '/icons/tableau.svg', color: 'from-blue-600 to-indigo-600' },
    ]
  }
];

const SkillsSection = ({ scrollDirection }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

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

  const categoryVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      x: -50,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { 
        duration: 0.6, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }), []);

  const skillCardVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  }), []);

  return (
    <section id="skills" className="relative py-20 bg-black overflow-hidden">

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent via-slate to-silver">
            Tech Stack
          </h2>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-accent via-slate to-silver rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-xl text-silver/80 mt-6 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Technologies and tools I use to build amazing applications and projects
          </motion.p>
        </motion.div>

        {/* Skills Categories Layout */}
        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="flex flex-col md:flex-row items-start gap-8"
              variants={categoryVariants}
            >
              {/* Category Label - Simple text */}
              <motion.div
                className="md:w-32 flex-shrink-0"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-silver uppercase tracking-wider">
                  {category.name}
                </h3>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-accent to-slate rounded-full mt-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>

              {/* Skills Grid */}
              <motion.div
                className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative group"
                    variants={skillCardVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                    onHoverStart={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    {/* Skill Badge - Bigger and more prominent */}
                    <motion.div
                      className="bg-slate/20 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-accent/30 relative overflow-hidden"
                      whileHover={{ 
                        boxShadow: "0 10px 25px rgba(163, 163, 163, 0.2)",
                        borderColor: "#A3A3A3",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {/* Background gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-200`}
                      />

                      {/* Icon and Text Container */}
                      <div className="flex items-center space-x-2">
                        {/* SVG Icon or Text-only */}
                        {skill.icon ? (
                          <motion.div
                            className="w-5 h-5 flex items-center justify-center"
                            animate={{
                              scale: hoveredSkill === `${categoryIndex}-${skillIndex}` ? [1, 1.2, 1] : 1,
                              rotate: hoveredSkill === `${categoryIndex}-${skillIndex}` ? [0, 5, -5, 0] : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <img 
                              src={skill.icon} 
                              alt={`${skill.name} icon`}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                // Fallback to emoji if icon fails to load
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                            {/* Fallback emoji */}
                            <span className="text-lg hidden">
                              {skill.name === 'HTML' && '🌐'}
                              {skill.name === 'CSS' && '💎'}
                              {skill.name === 'JavaScript' && '⚡'}
                              {skill.name === 'ReactJS' && '⚛️'}
                              {skill.name === 'NodeJS' && '🟢'}
                              {skill.name === 'Python Flask' && '🐍'}
                              {skill.name === 'Git' && '📚'}
                              {skill.name === 'PostgreSQL' && '🐘'}
                              {skill.name === 'Tailwind CSS' && '🎯'}
                              {skill.name === 'Framer Motion' && '✨'}
                              {skill.name === 'Postman' && '📮'}
                              {skill.name === 'npm' && '📦'}
                              {skill.name === 'C' && '🔵'}
                              {skill.name === 'C++' && '🔷'}
                              {skill.name === 'PyTorch' && '🔥'}
                              {skill.name === 'TensorFlow' && '🧠'}
                              {skill.name === 'AI/ML' && '🤖'}
                              {skill.name === 'Data Visualization' && '📈'}
                              {skill.name === 'Scikit-learn' && '🔬'}
                              {skill.name === 'NumPy' && '🔢'}
                              {skill.name === 'Pandas' && '🐼'}
                              {skill.name === 'Matplotlib' && '📊'}
                              {skill.name === 'Tableau' && '📊'}
                              {skill.name === 'SQL' && '📋'}
                              {skill.name === 'ExpressJS' && '🚀'}
                              {skill.name === 'Streamlit' && '📊'}
                            </span>
                          </motion.div>
                        ) : (
                          // Text-only skill (no icon)
                          <motion.div
                            className="w-5 h-5 flex items-center justify-center"
                            animate={{
                              scale: hoveredSkill === `${categoryIndex}-${skillIndex}` ? [1, 1.1, 1] : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                          </motion.div>
                        )}

                        {/* Skill name */}
                        <span className="text-sm font-medium text-silver whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>

                      {/* Subtle hover effect */}
                      {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection; 