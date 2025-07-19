import { motion } from 'framer-motion';

const ResumeSection = ({ scrollDirection }) => (
  <section id="resume" className="py-20 bg-charcoal text-center">
    <motion.h2
      className="text-3xl font-bold mb-8 text-accent"
      initial={{ opacity: 0, y: scrollDirection === 'down' ? 40 : -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0 }}
    >
      Resume
    </motion.h2>
    <div className="flex flex-col md:flex-row justify-center gap-12 max-w-4xl mx-auto">
      <motion.div
        className="bg-slate rounded-xl shadow-lg p-6 flex-1"
        initial={{ opacity: 0, x: scrollDirection === 'down' ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0 }}
      >
        <h3 className="text-xl font-semibold mb-2 text-accent">Education</h3>
        <ul className="text-silver text-left list-disc list-inside">
          <li>MS in Computer Science, Clemson University (2023–2025)</li>
          <li>Bachelor’s in Computer Science, [Your Undergrad], [Year]</li>
        </ul>
      </motion.div>
      <motion.div
        className="bg-slate rounded-xl shadow-lg p-6 flex-1"
        initial={{ opacity: 0, x: scrollDirection === 'down' ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false, amount: 0 }}
      >
        <h3 className="text-xl font-semibold mb-2 text-accent">Experience</h3>
        <ul className="text-silver text-left list-disc list-inside">
          <li>Software Engineering Intern, [Company], [Year]</li>
          <li>Research Assistant, [Lab/Group], [Year]</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection; 