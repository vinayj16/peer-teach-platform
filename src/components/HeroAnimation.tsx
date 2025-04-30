
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

interface FloatingBubblesProps {
  count?: number;
  colors?: string[];
  speed?: number;
  scale?: [number, number];
}

const FloatingBubbles = ({ 
  count = 10, 
  colors = ['#9b87f5', '#7E69AB', '#E5DEFF', '#1EAEDB'], 
  speed = 1,
  scale = [0.5, 1]
}: FloatingBubblesProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomSize = scale[0] + Math.random() * (scale[1] - scale[0]);
        const randomSpeed = 0.5 + Math.random() * speed;
        
        // Create positions using simple math instead of THREE.MathUtils
        const posX = (Math.random() - 0.5) * 10;
        const posY = (Math.random() - 0.5) * 10;
        const posZ = (Math.random() - 0.5) * 10;

        return (
          <Float
            key={i}
            speed={randomSpeed}
            rotationIntensity={0.5}
            floatIntensity={2}
            position={[posX, posY, posZ]}
          >
            <Sphere args={[randomSize, 8, 8]}>
              <MeshDistortMaterial
                color={randomColor}
                speed={0.4}
                distort={0.3}
                opacity={0.7}
                transparent
              />
            </Sphere>
          </Float>
        );
      })}
    </>
  );
};

const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <FloatingBubbles count={8} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroAnimation;
