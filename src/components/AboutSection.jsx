import { motion } from 'framer-motion';

const AboutSection = ({ scrollDirection }) => (
  <section id="about" className="py-20 bg-white flex flex-col items-center justify-center text-center">
    <motion.h2
      className="text-3xl font-bold mb-4 text-accent"
      initial={{ opacity: 0, y: scrollDirection === 'down' ? 40 : -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0 }}
    >
      About Me
    </motion.h2>
    <motion.p
      className="max-w-xl text-charcoal text-lg mx-auto bg-slate/10 rounded-xl py-8 px-6 shadow-sm"
      initial={{ opacity: 0, y: scrollDirection === 'down' ? 40 : -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: false, amount: 0 }}
    >
      Hi! I’m Shrayas Srinivasan, currently pursuing my MS in Computer Science at Clemson University. I’m passionate about AI, Data, and Creative Software Engineering. (Replace this with your own bio! )
    </motion.p>
  </section>
);

export default AboutSection; 