import { useState, useEffect, useCallback, useRef } from 'react';
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
  const scrollTimeout = useRef(null);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) return; // Throttle scroll events
    
    scrollTimeout.current = setTimeout(() => {
      const offsets = navLinks.map(link => {
        // Skip resume section since it's not in the DOM
        if (link.id === 'resume') return Infinity;
        const el = document.getElementById(link.id);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const activeIndex = offsets.findIndex((top, i) => top > 0 && (i === 0 || offsets[i - 1] <= 0));
      const activeId = navLinks[Math.max(0, activeIndex - 1)].id;
      // Don't set resume as active since it's not a scrollable section
      if (activeId !== 'resume') {
        setActive(activeId);
      }
      scrollTimeout.current = null;
    }, 100); // Less frequent updates for sidebar
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  const scrollToSection = (id) => {
    if (id === 'resume') {
      // Download resume instead of scrolling
      const link = document.createElement('a');
      link.href = '/Shrayas_resume.pdf';
      link.download = 'Shrayas_resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setOpen(false);
    } else {
      const el = document.getElementById(id);
      if (el) {
        setActive(id);
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(false);
      }
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
            className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-charcoal via-white to-charcoal shadow-2xl z-40 flex flex-col h-full justify-between items-center py-12 px-6 md:translate-x-0 md:opacity-100 border-r border-slate/30"
          >
            {/* Profile */}
            <div className="flex flex-col items-center mb-8 mt-2">
              <div className="relative w-36 h-36 mb-4 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/60 via-white/80 to-accent/60 blur-sm opacity-80 z-0"></span>
                <span className="absolute inset-0 rounded-full border-4 border-accent z-10"></span>
                <img
                  src="/profile_2.png"
                  alt="Shrayas Raju"
                  className="relative w-32 h-32 rounded-full object-cover object-top border-4 border-silver shadow-xl bg-slate z-20"
                  style={{ objectPosition: 'center 0' }}
                />
              </div>
              <div className="text-3xl font-extrabold text-charcoal text-center tracking-tight mb-2">Shrayas Raju</div>
            </div>
            {/* Nav Links */}
            <nav className="flex-1 w-full flex flex-col items-center min-h-0 overflow-y-auto">
              <ul className="flex flex-col gap-6 w-full mt-4 mb-4">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`flex items-center gap-3 max-w-[95%] mx-auto px-6 py-3 rounded-full transition-all duration-200 font-semibold text-base
                        ${active === link.id
                          ? 'bg-white/80 backdrop-blur-md text-accent shadow-lg scale-105 ring-2 ring-accent'
                          : 'text-charcoal hover:bg-white/70 hover:backdrop-blur-md hover:text-accent hover:shadow-lg hover:ring-2 hover:ring-accent/60'}
                        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 focus:bg-white/80 focus:text-accent focus:shadow-lg focus:backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 focus-visible:bg-white/80 focus-visible:text-accent focus-visible:shadow-lg focus-visible:backdrop-blur-md`}
                      style={{ boxShadow: active === link.id ? '0 0 12px 2px #A3A3A355' : undefined }}
                    >
                      <span className="text-xl">{link.icon}</span> <span className="pt-0.5">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Socials */}
            <div className="flex flex-col items-center gap-3 mb-2 w-full mt-8">
              <div className="flex gap-6 mb-2">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-xl text-silver hover:text-accent transition-colors cursor-hover-target">
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="text-xs text-silver mt-2 font-medium">&copy; 2025 Shrayas Raju</div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar; 