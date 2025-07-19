import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Framer Motion', level: 70 },
  { name: 'AI/ML', level: 75 },
];

const barVariants = {
  initial: { width: 0 },
  animate: (level) => ({ width: `${level}%`, transition: { duration: 1, type: 'spring' } }),
};

const SkillsSection = ({ scrollDirection }) => (
  <section id="skills" className="py-20 bg-white text-center">
    <motion.h2
      className="text-3xl font-bold mb-8 text-accent"
      initial={{ opacity: 0, y: scrollDirection === 'down' ? 40 : -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0 }}
    >
      Skills
    </motion.h2>
    <div className="max-w-2xl mx-auto space-y-6">
      {skills.map((skill, i) => (
        <div key={skill.name} className="text-left">
          <div className="flex justify-between mb-1">
            <span className="font-medium text-silver">{skill.name}</span>
            <span className="text-sm text-accent font-semibold">{skill.level}%</span>
          </div>
          <div className="w-full h-3 bg-slate rounded-full overflow-hidden">
            <motion.div
              className="h-3 bg-accent rounded-full"
              custom={skill.level}
              initial="initial"
              animate="animate"
              variants={barVariants}
              viewport={{ once: false, amount: 0 }}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection; 