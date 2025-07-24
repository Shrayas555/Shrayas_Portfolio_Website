import { useMemo } from 'react';

const StarfieldBackground = ({ className = "", zIndex = -10, particleCount = 50 }) => {
  const stars = useMemo(() => {
    // Generate stars - significantly reduced for better performance
    const generatedStars = [];
    for (let i = 0; i < particleCount; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.2 + 0.4, // Smaller particles
        delay: Math.random() * 4,
        duration: 10 + Math.random() * 6, // Slower animation
        opacity: Math.random() * 0.6 + 0.2 // Lower opacity
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