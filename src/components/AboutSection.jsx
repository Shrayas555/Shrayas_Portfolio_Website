import { motion } from 'framer-motion';

const AboutSection = () => (
  <section id="about" className="py-20 bg-white flex flex-col items-center justify-center text-center">
    <motion.img
      src="https://via.placeholder.com/150"
      alt="Shrayas Srinivasan"
      className="w-36 h-36 rounded-full mx-auto mb-6 object-cover shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      viewport={{ once: false, amount: 0.3 }}
    />
    <motion.h2
      className="text-3xl font-bold mb-4 text-indigo-700"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      About Me
    </motion.h2>
    <motion.p
      className="max-w-xl text-gray-700 text-lg mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      Hi! I’m Shrayas Srinivasan, currently pursuing my MS in Computer Science at Clemson University. I’m passionate about AI, Data, and Creative Software Engineering. (Replace this with your own bio! )
    </motion.p>
  </section>
);

export default AboutSection; 