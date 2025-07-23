import './index.css';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import AnimatedCursor from './components/AnimatedCursor';
import EntranceAnimation from './components/EntranceAnimation';
import React, { useRef, useEffect, useState } from 'react';

function App() {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [showEntrance, setShowEntrance] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEntranceComplete = () => {
    setShowEntrance(false);
  };

  if (showEntrance) {
    return <EntranceAnimation onComplete={handleEntranceComplete} />;
  }

  return (
    <div className="flex h-screen font-sans">
      <AnimatedCursor />
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-72 h-full relative overflow-y-auto bg-gradient-to-br from-[#f4f4ff] to-[#e5e5fa]">
        {/* SVG tech/grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-0" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#bdbdfc" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="relative z-10">
          <section id="hero"><HeroSection /></section>
          <AboutSection scrollDirection={scrollDirection} />
          <ResumeSection scrollDirection={scrollDirection} />
          <SkillsSection scrollDirection={scrollDirection} />
          <ProjectsSection scrollDirection={scrollDirection} />
          <ContactSection scrollDirection={scrollDirection} />
        </div>
      </main>
    </div>
  );
}

export default App; 