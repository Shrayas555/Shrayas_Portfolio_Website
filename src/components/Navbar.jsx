import { useState, useEffect } from 'react';
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
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.id);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const activeIndex = offsets.findIndex((top, i) => top > 0 && (i === 0 || offsets[i - 1] <= 0));
      setActive(navLinks[Math.max(0, activeIndex - 1)].id);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 shadow-sm"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <span className="font-bold text-indigo-700 text-xl tracking-tight flex-shrink-0">Shrayas</span>
        <ul className="flex flex-1 justify-end gap-6">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`px-2 py-1 rounded transition-colors duration-200 font-medium text-sm md:text-base ${active === link.id ? 'text-indigo-600 underline' : 'text-gray-700 hover:text-indigo-500'}`}
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