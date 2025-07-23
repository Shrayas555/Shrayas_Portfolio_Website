import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaGlobe } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ContactSection = ({ scrollDirection }) => {
  const [hoveredContact, setHoveredContact] = useState(null);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Generate floating elements
    const elements = [];
    for (let i = 0; i < 20; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2
      });
    }
    setFloatingElements(elements);
  }, []);

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'shraya2@g.clemson.edu',
      link: 'mailto:shraya2@g.clemson.edu',
      color: 'from-blue-500 to-cyan-500',
      emoji: '📧'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'shrayas-srinivasan',
      link: 'https://linkedin.com/in/shrayas-srinivasan',
      color: 'from-blue-600 to-indigo-600',
      emoji: '💼'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'shrayas-srinivasan',
      link: 'https://github.com/shrayas-srinivasan',
      color: 'from-gray-700 to-black',
      emoji: '🐙'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Clemson, SC',
      link: null,
      color: 'from-green-500 to-emerald-500',
      emoji: '📍'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const contactCardVariants = {
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
  };

  const floatingVariants = {
    animate: (custom) => ({
      y: [0, -20, 0],
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
    <section id="contact" className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-accent to-purple-400 opacity-20"
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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-30 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 5,
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-600 to-pink-600">
            Get In Touch
          </h2>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: '300px' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Let's connect and build something amazing together
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.title}
              className="relative group"
              variants={contactCardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredContact(index)}
              onHoverEnd={() => setHoveredContact(null)}
            >
              {/* Contact Card */}
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 relative overflow-hidden h-full"
                whileHover={{ 
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                  borderColor: "rgba(173, 216, 230, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4 text-center"
                  animate={{
                    scale: hoveredContact === index ? [1, 1.3, 1] : 1,
                    rotate: hoveredContact === index ? [0, 10, -10, 0] : 0,
                  }}
      transition={{ duration: 0.5 }}
                >
                  {contact.emoji}
                </motion.div>

                {/* Contact title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  {contact.title}
                </h3>

                {/* Contact value */}
                {contact.link ? (
                  <motion.a
                    href={contact.link}
                    target={contact.link.startsWith('mailto:') ? undefined : '_blank'}
                    rel={contact.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="block text-center text-accent hover:text-purple-600 transition-colors duration-300 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {contact.value}
                  </motion.a>
                ) : (
                  <p className="text-center text-gray-600 font-medium">
                    {contact.value}
                  </p>
                )}

                {/* Floating particles on hover */}
                {hoveredContact === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
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
                          duration: 1.2,
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

        {/* Contact Form */}
    <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Send me a message 💬
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
      </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-accent to-purple-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message 🚀
                </motion.button>
              </motion.div>
            </form>
      </div>
        </motion.div>

        {/* Footer message */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg">
            Looking forward to hearing from you! ✨
          </p>
        </motion.div>
    </motion.div>
  </section>
);
};

export default ContactSection; 