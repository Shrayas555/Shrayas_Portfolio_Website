import React, { useEffect, useRef, useState } from 'react';

const AnimatedCursor = () => {
  const cursorRef = useRef(null);
  const [coords, setCoords] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [clicked, setClicked] = useState(false);
  const [trail, setTrail] = useState([]);
  const animationRef = useRef(null);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => {
        const newTrail = [
          { 
            x: e.clientX, 
            y: e.clientY, 
            id: Date.now() + Math.random(),
            timestamp: Date.now() 
          },
          ...prev
        ].slice(0, 40); // Keep last 40 points for a much longer trail
        
        return newTrail;
      });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Animation loop for smooth trail updates
  useEffect(() => {
    const animate = () => {
      // Clean up old trail points (older than 200ms for much longer trail)
      setTrail(prev => prev.filter(point => Date.now() - point.timestamp < 200));
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => { document.body.style.cursor = ''; };
  }, []);

  return (
    <>
      {/* Professional trail particles */}
             {trail.map((point, index) => {
         const size = clicked ? 18 - index * 0.4 : 14 - index * 0.3;
         const opacity = 1 - index * 0.025;
         const scale = 1 - index * 0.02;
        
        return (
          <div
            key={point.id}
            style={{
              position: 'fixed',
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: Math.max(size, 3),
              height: Math.max(size, 3),
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #A3A3A3 0%, #B8B8B8 50%, #A3A3A3 100%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              opacity: Math.max(opacity, 0.1),
              transform: `scale(${Math.max(scale, 0.3)})`,
              pointerEvents: 'none',
              zIndex: 9998 - index,
              boxShadow: `
                0 0 ${size * 0.8}px ${size * 0.3}px rgba(163, 163, 163, 0.4),
                0 0 ${size * 0.4}px ${size * 0.2}px rgba(255, 255, 255, 0.3),
                inset 0 0 ${size * 0.2}px rgba(255, 255, 255, 0.2)
              `,
              transition: 'all 0.05s ease-out',
              filter: 'blur(0.3px)',
            }}
          />
        );
      })}
      
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: coords.x - 10,
          top: coords.y - 10,
          width: clicked ? 24 : 20,
          height: clicked ? 24 : 20,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #A3A3A3 0%, #B8B8B8 50%, #A3A3A3 100%)',
          border: '2px solid rgba(255, 255, 255, 0.9)',
          boxShadow: `
            0 0 20px 6px rgba(163, 163, 163, 0.5),
            0 0 8px 2px rgba(255, 255, 255, 0.4),
            inset 0 0 4px rgba(255, 255, 255, 0.3)
          `,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.15s ease-out, height 0.15s ease-out, box-shadow 0.15s ease-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'blur(0.2px)',
        }}
      >
        {/* Inner dot with enhanced glow */}
        <div style={{
          width: clicked ? 8 : 6,
          height: clicked ? 8 : 6,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fff 0%, #f0f0f0 100%)',
          boxShadow: `
            0 0 8px 2px rgba(255, 255, 255, 0.8),
            inset 0 0 2px rgba(255, 255, 255, 0.9)
          `,
        }} />
      </div>
    </>
  );
};

export default AnimatedCursor; 