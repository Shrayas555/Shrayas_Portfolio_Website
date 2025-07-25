import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.3) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(direction);
      setLastScrollY(currentScrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && scrollDirection === 'down') {
          // Only trigger animation when scrolling down
          setIsInView(true);
          setHasAnimated(true);
        } else if (!entry.isIntersecting) {
          // Reset animation state when element is out of view
          setIsInView(false);
          setHasAnimated(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, scrollDirection, lastScrollY]);

  return { ref, isInView, hasAnimated };
}; 