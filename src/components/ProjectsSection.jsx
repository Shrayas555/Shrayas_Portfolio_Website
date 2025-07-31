import { motion } from 'framer-motion';
import { useState } from 'react';
import StarfieldBackground from './StarfieldBackground';

const projects = [
  { 
    title: 'Portfolio Website', 
    description: 'This personal website built to showcase my projects, experience, and skills. Features smooth animations, modular components, and a clean user interface.',
    technologies: ['React', 'Node.js', 'Framer Motion','HTML', 'Tailwind CSS', 'JavaScript'],
    icon: '📊',
    color: 'from-accent to-slate',
    link: '#',
    image: '/icons/portfolio.png', // Using existing icon as placeholder
  },
  { 
    title: 'Movie Recommendation System', 
    description: 'Built an AI-powered movie recommendation system using Streamlit, Python, and the TMDB API. Implemented content-based filtering to suggest movies based on user preferences, delivering personalized recommendations through an interactive web UI.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'Pandas', 'Streamlit','Scikit-learn'],
    icon: '🎬',
    color: 'from-slate to-silver',
    link: 'https://shrayas555-cinematch-app-jfapod.streamlit.app/',
    image: '/icons/cinematch2.png', // Using existing icon as placeholder
  },
  { 
    title: 'Dog breed prediction using Deep Learning', 
    description: 'Developed a deep learning model to classify dog breeds from images with high accuracy. Utilized CNNs (Convolutional Neural Networks) with TensorFlow and Keras, showcasing the capability of AI in image recognition and classification.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV','Pandas','Matplotlib','Seaborn','Scikit-learn','Numpy'],
    icon: '✨',
    color: 'from-accent to-slate',
    link: 'https://github.com/Shrayas555/DogVision/blob/main/DogVision.ipynb',
    image: '/icons/dog.jpg', // Using existing icon as placeholder
  },
  { 
    title: 'Gender Classification using Deep Learning', 
    description: 'Designed and trained a deep learning model to predict gender from facial images. Used convolutional architectures and image preprocessing techniques to improve model precision and inference speed.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV','Pandas','Matplotlib','Seaborn','Scikit-learn','Numpy'],
    icon: '🤖',
    color: 'from-slate to-silver',
    link: 'https://github.com/Shrayas555/Gender-Classification/blob/main/Gender_classification.ipynb',
    image: '/icons/gender.png', // Using AI/ML icon
  },
  { 
    title: 'Heart Disease Prediction using Machine Learning', 
    description: 'Built a predictive model using RandomForestClassifier to identify individuals at risk of heart disease. The project aims to support early diagnosis and preventive healthcare decisions by analyzing clinical data.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV','Pandas','Matplotlib','Seaborn','Scikit-learn','Numpy'],
    icon: '🛒',
    color: 'from-accent to-slate',
    link: 'https://github.com/Shrayas555/Predicting-heart-disease-using-machine-learning/blob/main/Heart_disease_classification.ipynb',
    image: '/icons/heart.jpeg', // Using existing icon as placeholder
  },
  
];

const ProjectsSection = ({ scrollDirection }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
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

  return (
    <section id="projects" className="relative py-20 bg-black overflow-hidden">
      {/* Starfield background with moving particles */}
      <StarfieldBackground className="section-background" particleCount={30} />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent via-slate to-silver leading-none pb-2">
            Projects
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
            className="text-xl text-silver mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Explore my latest work and creative solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                className="bg-slate/20 backdrop-blur-sm rounded-2xl shadow-2xl border border-accent/30 relative overflow-hidden h-full"
                whileHover={{ 
                  boxShadow: "0 25px 50px rgba(163, 163, 163, 0.2)",
                  borderColor: "rgba(163, 163, 163, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Project content */}
                <div className="p-4 md:p-5">
                  {/* Project title */}
                  <h3 className="text-lg font-bold text-accent mb-2 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project description */}
                  <p className="text-silver mb-4 leading-relaxed text-xs md:text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium border border-accent/30"
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
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-slate text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-sm"
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
                </div>

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
          className="text-center mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700">
            <h3 className="text-xl font-bold text-accent mb-3">
              Want to see more? 
            </h3>
            <p className="text-gray-300 text-base mb-4">
              Check out my GitHub for more projects and contributions
            </p>
            <motion.a
              href="https://github.com/Shrayas555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-slate text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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