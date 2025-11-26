'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

function Shape({ position, type }: { position: [number, number, number]; type: 'sphere' | 'box' | 'torus' }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() + position[0]) * 0.3;
    }
  });

  const material = (
    <meshStandardMaterial
      color="#ffffff"
      transparent
      opacity={0.15}
      metalness={0.8}
      roughness={0.2}
      wireframe
    />
  );

  return (
    <mesh ref={ref} position={position}>
      {type === 'sphere' && <Sphere args={[0.5, 16, 16]}>{material}</Sphere>}
      {type === 'box' && <Box args={[0.6, 0.6, 0.6]}>{material}</Box>}
      {type === 'torus' && <Torus args={[0.4, 0.15, 16, 32]}>{material}</Torus>}
    </mesh>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <Shape position={[-2, 1, 0]} type="sphere" />
        <Shape position={[2, -1, -1]} type="box" />
        <Shape position={[0, 2, -2]} type="torus" />
      </Canvas>
    </div>
  );
}
