import { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  // No button highlighted at start
  const [active, setActive] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActive(id);
  };

  return (
    <motion.nav
      className="hidden md:block fixed top-0 left-0 w-full bg-charcoal/90 backdrop-blur z-50 shadow-sm"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <span className="font-bold text-accent text-xl tracking-tight flex-shrink-0">Shrayas</span>
        <ul className="flex flex-1 justify-end gap-6">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`px-2 py-1 rounded transition-colors duration-200 font-medium text-sm md:text-base ${active === link.id ? 'text-accent underline' : 'text-silver hover:text-accent'}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar; 