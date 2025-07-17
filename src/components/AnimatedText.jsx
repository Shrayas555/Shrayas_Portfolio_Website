import { motion } from 'framer-motion';

/**
 * AnimatedText - Animates each word or character in a staggered fashion.
 * @param {string} text - The text to animate.
 * @param {string} className - Additional Tailwind classes.
 * @param {boolean} [byChar=false] - Animate by character if true, else by word.
 */
const AnimatedText = ({ text, className = '', byChar = false }) => {
  const items = byChar ? text.split('') : text.split(' ');
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
  };
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={child}
          className={byChar ? '' : 'inline-block'}
        >
          {item}{byChar ? '' : ' '}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText; 