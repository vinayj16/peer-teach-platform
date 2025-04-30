
import React from 'react';

// A simpler, pure CSS-based animation as fallback for Three.js
const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="animation-container">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="bubble"
            style={{
              position: 'absolute',
              borderRadius: '50%',
              opacity: 0.7,
              width: `${30 + Math.random() * 60}px`,
              height: `${30 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: [
                '#9b87f5', '#7E69AB', '#E5DEFF', '#1EAEDB', 
                'rgba(155, 135, 245, 0.5)', 'rgba(229, 222, 255, 0.6)'
              ][Math.floor(Math.random() * 6)],
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>

      {/* Add a gradient background for additional visual effect */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-indigo-100/20 to-transparent" 
        style={{ mixBlendMode: 'overlay' }}
      />
    </div>
  );
};

export default HeroAnimation;
