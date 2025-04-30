
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

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
        const randomSize = Math.random() * (scale[1] - scale[0]) + scale[0];
        const randomSpeed = Math.random() * (1.5 - 0.5) + 0.5 * speed;

        return (
          <Float
            key={i}
            speed={randomSpeed}
            rotationIntensity={0.5}
            floatIntensity={2}
            position={[
              THREE.MathUtils.randFloatSpread(10),
              THREE.MathUtils.randFloatSpread(10),
              THREE.MathUtils.randFloatSpread(10)
            ]}
          >
            <Sphere args={[randomSize, 16, 16]}>
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
          <FloatingBubbles count={15} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroAnimation;
