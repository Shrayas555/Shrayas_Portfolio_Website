import { motion } from 'framer-motion';

const AnimatedButton = ({ onClick, children, className = '' }) => (
  <motion.button
    whileHover={{ scale: 1.08, boxShadow: '0 0 16px 4px rgba(99,102,241,0.4)' }}
    whileTap={{ scale: 0.96 }}
    transition={{ type: 'spring', stiffness: 300 }}
    onClick={onClick}
    className={`px-7 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 ${className}`}
  >
    {children}
  </motion.button>
);

export default AnimatedButton; 