import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const projects = [
  { 
    title: 'DMA-PRIME Dashboard', 
    description: 'A comprehensive data visualization dashboard for DMA research with real-time analytics and interactive charts.',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    icon: '📊',
    color: 'from-blue-500 to-cyan-500',
    link: '#',
    image: '/project1.jpg'
  },
  { 
    title: 'Movie Recommender', 
    description: 'An intelligent movie recommendation system using machine learning algorithms and collaborative filtering.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'PostgreSQL'],
    icon: '🎬',
    color: 'from-purple-500 to-pink-500',
    link: '#',
    image: '/project2.jpg'
  },
  { 
    title: 'Portfolio Website', 
    description: 'This stunning portfolio website built with modern technologies and beautiful animations.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    icon: '✨',
    color: 'from-green-500 to-emerald-500',
    link: '#',
    image: '/project3.jpg'
  },
  { 
    title: 'AI Chat Assistant', 
    description: 'A conversational AI assistant powered by natural language processing and machine learning.',
    technologies: ['Python', 'OpenAI', 'FastAPI', 'Redis'],
    icon: '🤖',
    color: 'from-orange-500 to-red-500',
    link: '#',
    image: '/project4.jpg'
  },
  { 
    title: 'E-Commerce Platform', 
    description: 'A full-stack e-commerce platform with payment integration and inventory management.',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    icon: '🛒',
    color: 'from-indigo-500 to-purple-500',
    link: '#',
    image: '/project5.jpg'
  },
  { 
    title: 'Task Management App', 
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
    icon: '📋',
    color: 'from-teal-500 to-blue-500',
    link: '#',
    image: '/project6.jpg'
  },
];

const ProjectsSection = ({ scrollDirection }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Generate floating elements
    const elements = [];
    for (let i = 0; i < 25; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2
      });
    }
    setFloatingElements(elements);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const projectCardVariants = {
    hidden: { 
      opacity: 0, 
      y: scrollDirection === 'down' ? 80 : -80,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingVariants = {
    animate: (custom) => ({
      y: [0, -25, 0],
      x: [0, 10, 0],
      rotate: [0, 5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        delay: custom.delay,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-charcoal via-gray-900 to-black overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-accent to-purple-400 opacity-10"
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

      {/* Glowing background */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] rounded-full bg-gradient-to-r from-accent via-purple-500 to-pink-500 opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4"
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-pink-400">
            Featured Projects
          </h2>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: '400px' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Explore my latest work and creative solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
          key={project.title}
              className="relative group"
              variants={projectCardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <motion.div
                className="bg-slate/20 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700 relative overflow-hidden h-full"
                whileHover={{ 
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                  borderColor: "rgba(173, 216, 230, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4 text-center"
                  animate={{
                    scale: hoveredProject === index ? [1, 1.3, 1] : 1,
                    rotate: hoveredProject === index ? [0, 15, -15, 0] : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {project.icon}
                </motion.div>

                {/* Project title */}
                <h3 className="text-xl font-bold text-accent mb-3 text-center group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project description */}
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/30"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + techIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(173, 216, 230, 0.3)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  >
                    View Project
                    <motion.span
                      animate={{
                        x: hoveredProject === index ? [0, 5, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.div>

                {/* Floating particles on hover */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-accent rounded-full"
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
                          duration: 1.5,
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

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Want to see more? 🚀
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Check out my GitHub for more projects and contributions
            </p>
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-purple-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit GitHub
              <span>→</span>
        </motion.a>
    </div>
        </motion.div>
      </motion.div>
  </section>
);
};

export default ProjectsSection; 