import React, { useEffect, useRef, useState } from 'react';

const TRAIL_COLORS = [
  '#A3A3A3', // platinum/silver (accent)
  '#CED4DA', // silver
  '#fff',    // white for extra pop
];
const TRAIL_LENGTH = 14;

const AnimatedCursor = () => {
  const cursorRef = useRef(null);
  const [coords, setCoords] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [clicked, setClicked] = useState(false);
  const [particles, setParticles] = useState([]);
  const clearTrailTimeout = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
      setParticles((prev) => [
        ...prev,
        {
          x: e.clientX,
          y: e.clientY,
          color: TRAIL_COLORS[Math.floor(Math.random() * TRAIL_COLORS.length)],
          id: Math.random(),
        },
      ].slice(-TRAIL_LENGTH));
      if (clearTrailTimeout.current) clearTimeout(clearTrailTimeout.current);
      clearTrailTimeout.current = setTimeout(() => setParticles([]), 80);
    };
    const handleDown = () => setClicked(true);
    const handleUp = () => setClicked(false);
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      if (clearTrailTimeout.current) clearTimeout(clearTrailTimeout.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => { document.body.style.cursor = ''; };
  }, []);

  return (
    <>
      {/* Main cursor dot with white outline */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: coords.x - 10,
          top: coords.y - 10,
          width: clicked ? 22 : 18,
          height: clicked ? 22 : 18,
          borderRadius: '50%',
          background: '#A3A3A3', // platinum/silver accent
          border: '2px solid #fff',
          boxShadow: '0 0 8px 2px #A3A3A3, 0 0 0 2px #fff',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.11s, height 0.11s, background 0.13s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* White inner dot for contrast */}
        <div style={{
          width: clicked ? 7 : 5,
          height: clicked ? 7 : 5,
          borderRadius: '50%',
          background: '#fff',
        }} />
      </div>
      {/* Short, fast, tight trail that disappears when not moving */}
      {particles.map((p, i) => (
        <div
          key={p.id}
          style={{
            position: 'fixed',
            left: p.x - 4,
            top: p.y - 4,
            width: 8 - i * 0.5,
            height: 8 - i * 0.5,
            borderRadius: '50%',
            background: p.color,
            border: '1px solid #fff',
            opacity: 0.7 - i * 0.07,
            pointerEvents: 'none',
            zIndex: 9998,
            boxShadow: '0 0 3px 1px #A3A3A3',
            transition: 'all 0.03s',
          }}
        />
      ))}
    </>
  );
};

export default AnimatedCursor; 