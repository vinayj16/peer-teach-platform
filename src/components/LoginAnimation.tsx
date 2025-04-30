
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedShape = () => {
  const mesh = useRef<Mesh>(null!);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <torusKnotGeometry args={[1.5, 0.5, 128, 32]} />
      <MeshWobbleMaterial 
        color="#9b87f5" 
        factor={0.4} 
        speed={1} 
        metalness={0.1}
        roughness={0.5}
      />
    </mesh>
  );
};

const LoginAnimation = () => {
  return (
    <div className="absolute w-full h-full -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <AnimatedShape />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default LoginAnimation;
