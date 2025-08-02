import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaTools, FaProjectDiagram, FaEnvelope, FaHome, FaLinkedin, FaGithub, FaRoute, FaCertificate } from 'react-icons/fa';

const navLinks = [
  { id: 'hero', label: 'Home', icon: <FaHome /> },
  { id: 'about', label: 'About', icon: <FaUser /> },
  { id: 'journey', label: 'Journey', icon: <FaRoute /> },
  { id: 'skills', label: 'Skills', icon: <FaTools /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'certifications', label: 'Certifications', icon: <FaCertificate /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/shrayas-raju/', icon: <FaLinkedin /> },
  { href: 'https://github.com/Shrayas555', icon: <FaGithub /> },
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
        const el = document.getElementById(link.id);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const activeIndex = offsets.findIndex((top, i) => top > 0 && (i === 0 || offsets[i - 1] <= 0));
      const activeId = navLinks[Math.max(0, activeIndex - 1)].id;
      if (activeId !== active) {
        setActive(activeId);
      }
      scrollTimeout.current = null;
    }, 100); // Less frequent updates for sidebar
  }, [active]);

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
    const el = document.getElementById(id);
    if (el) {
      setActive(id);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <>

      {/* Sidebar */}
      <AnimatePresence>
        {(open || window.innerWidth >= 768) && (
          <motion.aside
            key="sidebar"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-charcoal via-white to-charcoal shadow-2xl z-40 flex flex-col justify-between items-center py-8 xl:py-6 px-6 hidden xl:flex border-r border-slate/30"
          >
            {/* Profile - Larger and more spaced */}
            <div className="flex flex-col items-center mb-8 xl:mb-6 mt-4">
              <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/60 via-white/80 to-accent/60 blur-sm opacity-80 z-0"></span>
                <span className="absolute inset-0 rounded-full border-4 border-accent z-10"></span>
                <img
                  src="/profile_2.png"
                  alt="Shrayas Raju"
                  className="relative w-28 h-28 rounded-full object-cover object-top border-4 border-silver shadow-xl bg-slate z-20"
                  style={{ objectPosition: 'center 0' }}
                />
              </div>
              <div className="text-3xl font-extrabold text-charcoal text-center tracking-tight mb-4">Shrayas Raju</div>
            </div>
            
            {/* Nav Links - Better spaced */}
            <nav className="flex-1 w-full flex flex-col items-center justify-center xl:justify-start pt-4 lg:pt-6 xl:pt-8 xl:overflow-y-auto">
              <ul className="flex flex-col gap-5 xl:gap-3 w-full">
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
            
            {/* Socials - More spaced */}
            <div className="flex flex-col items-center gap-4 w-full mt-6 xl:mt-4 pb-4">
              <div className="flex gap-6 mb-3">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-xl text-silver hover:text-accent transition-colors cursor-hover-target">
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="text-sm text-silver font-medium">&copy; 2025 Shrayas Raju</div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar; 