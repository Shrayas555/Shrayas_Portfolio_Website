import { useMemo } from 'react';

const StarfieldBackground = ({ className = "", zIndex = -10, particleCount = 25 }) => {
  const stars = useMemo(() => {
    // Generate stars - significantly reduced for better performance
    const generatedStars = [];
    for (let i = 0; i < particleCount; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1 + 0.3, // Even smaller particles
        delay: Math.random() * 2,
        duration: 8 + Math.random() * 4, // Faster animation
        opacity: Math.random() * 0.4 + 0.1 // Lower opacity
      });
    }
    return generatedStars;
  }, [particleCount]); // Include particleCount in dependencies

  return (
    <div 
      className={`starfield-container ${className}`}
      style={{ zIndex: zIndex }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="starfield-particle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default StarfieldBackground; 