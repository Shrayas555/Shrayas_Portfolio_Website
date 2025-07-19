import { motion } from 'framer-motion';

const projects = [
  { title: 'DMA-PRIME Dashboard', description: 'A data visualization dashboard for DMA research.', link: '#' },
  { title: 'Movie Recommender', description: 'A personalized movie recommendation system.', link: '#' },
  { title: 'Portfolio Website', description: 'This portfolio, built with React, Tailwind, and Framer Motion.', link: '#' },
];

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
};

const ProjectsSection = ({ scrollDirection }) => (
  <section id="projects" className="py-20 bg-charcoal text-center">
    <motion.h2
      className="text-3xl font-bold mb-8 text-accent"
      initial={{ opacity: 0, y: scrollDirection === 'down' ? 40 : -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0 }}
    >
      Projects
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {projects.map((project, i) => (
        <motion.a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-slate rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 group"
          initial={{ opacity: 0, y: scrollDirection === 'down' ? 40 : -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: 'spring', stiffness: 200 }}
          viewport={{ once: false, amount: 0 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-accent group-hover:text-silver transition-colors">{project.title}</h3>
          <p className="text-silver mb-2">{project.description}</p>
          <span className="text-accent text-sm group-hover:underline">View Project →</span>
        </motion.a>
      ))}
    </div>
  </section>
);

export default ProjectsSection; 