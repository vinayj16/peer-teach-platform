
import React from 'react';

// A simpler, CSS-based animation as fallback for Three.js
const LoginAnimation = () => {
  return (
    <div className="absolute w-full h-full -z-10 overflow-hidden">
      <div className="login-animation-container">
        {/* Central animated shape */}
        <div 
          className="central-shape"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%',
            background: 'linear-gradient(45deg, #9b87f5, #7E69AB)',
            opacity: 0.3,
            animation: 'morph 8s linear infinite, spin 12s linear infinite',
            boxShadow: '0 0 50px rgba(155, 135, 245, 0.4)',
            filter: 'blur(3px)'
          }}
        />
        
        {/* Small orbiting particles */}
        {Array.from({ length: 5 }).map((_, i) => {
          const angle = (i / 5) * Math.PI * 2;
          const radius = 180;
          return (
            <div 
              key={i}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '20px',
                height: '20px',
                marginLeft: `-10px`,
                marginTop: `-10px`,
                borderRadius: '50%',
                background: '#9b87f5',
                opacity: 0.6,
                transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                animation: `orbit ${10 + i * 2}s linear infinite, pulse 3s ease-in-out infinite`
              }}
            />
          );
        })}
      </div>

      <style>
        {`
        @keyframes morph {
          0% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
          }
          25% {
            border-radius: 62% 38% 47% 53% / 45% 58% 42% 55%;
          }
          50% {
            border-radius: 43% 57% 51% 49% / 58% 43% 57% 42%;
          }
          75% {
            border-radius: 40% 60% 43% 57% / 52% 32% 68% 48%;
          }
          100% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
          }
        }
        
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(180px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(180px) rotate(-360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        `}
      </style>
    </div>
  );
};

export default LoginAnimation;
