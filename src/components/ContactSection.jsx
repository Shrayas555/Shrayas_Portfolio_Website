import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => (
  <section id="contact" className="py-20 bg-white text-center">
    <motion.h2
      className="text-3xl font-bold mb-8 text-indigo-700"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Contact
    </motion.h2>
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Placeholder for map */}
      <div className="w-full md:w-1/2 h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-6 md:mb-0">
        <span className="text-gray-500">[Map Placeholder]</span>
      </div>
      <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
        <a href="mailto:shraya2@g.clemson.edu" className="flex items-center gap-2 text-indigo-600 hover:underline">
          <FaEnvelope className="text-xl" /> shraya2@g.clemson.edu
        </a>
        <a href="https://linkedin.com/in/shrayas-srinivasan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-600 hover:underline cursor-hover-target">
          <FaLinkedin className="text-xl" /> LinkedIn
        </a>
        <a href="https://github.com/shrayas-srinivasan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-600 hover:underline cursor-hover-target">
          <FaGithub className="text-xl" /> GitHub
        </a>
      </div>
    </motion.div>
  </section>
);

export default ContactSection; 