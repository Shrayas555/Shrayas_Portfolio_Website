import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaFileAlt, FaTools, FaProjectDiagram, FaEnvelope, FaHome, FaTwitter, FaLinkedin, FaGithub, FaBars } from 'react-icons/fa';

const navLinks = [
  { id: 'hero', label: 'Home', icon: <FaHome /> },
  { id: 'about', label: 'About', icon: <FaUser /> },
  { id: 'resume', label: 'Resume', icon: <FaFileAlt /> },
  { id: 'skills', label: 'Skills', icon: <FaTools /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
];

const socialLinks = [
  { href: 'https://twitter.com/', icon: <FaTwitter /> },
  { href: 'https://linkedin.com/in/shrayas-srinivasan', icon: <FaLinkedin /> },
  { href: 'https://github.com/shrayas-srinivasan', icon: <FaGithub /> },
];

const Sidebar = () => {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

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
      setActive(id);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setOpen(!open)} className="p-2 rounded bg-white shadow-md">
          <FaBars className="text-2xl text-indigo-700" />
        </button>
      </div>
      {/* Sidebar */}
      <AnimatePresence>
        {(open || window.innerWidth >= 768) && (
          <motion.aside
            key="sidebar"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-40 flex flex-col items-center py-10 px-4 md:translate-x-0 md:opacity-100"
          >
            {/* Profile */}
            <div className="flex flex-col items-center mb-6">
              <img
                src="https://via.placeholder.com/120"
                alt="Shrayas Srinivasan"
                className="w-28 h-28 rounded-full object-cover border-4 border-violet-500 shadow-xl mb-3 bg-white"
              />
              <div className="text-xl font-bold text-violet-700 text-center tracking-tight">Shrayas Srinivasan</div>
            </div>
            {/* Nav Links */}
            <nav className="flex-1 w-full">
              <ul className="flex flex-col gap-2">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-all duration-200 font-medium text-base ${active === link.id ? 'bg-violet-100 text-violet-700 shadow' : 'text-gray-700 hover:bg-violet-50 hover:text-violet-600'} hover:scale-105 focus:outline-none`}
                      style={{ boxShadow: active === link.id ? '0 0 8px 2px #a78bfa55' : undefined }}
                    >
                      <span className="text-xl">{link.icon}</span> {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Socials */}
            <div className="flex gap-4 mt-8 mb-2">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-violet-600 transition-colors cursor-hover-target">
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="text-xs text-gray-400 mt-2">&copy; 2025 Shrayas Srinivasan</div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar; 