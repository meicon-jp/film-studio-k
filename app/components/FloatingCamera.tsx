'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Camera3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* カメラボディ */}
      <Box args={[0.8, 0.5, 0.6]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </Box>

      {/* レンズ */}
      <Sphere args={[0.25, 32, 32]} position={[0, 0, 0.45]}>
        <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.1} />
      </Sphere>

      {/* レンズリング */}
      <Sphere args={[0.3, 32, 32]} position={[0, 0, 0.4]} scale={[1, 1, 0.1]}>
        <meshStandardMaterial color="#666666" metalness={0.7} roughness={0.3} />
      </Sphere>

      {/* ファインダー */}
      <Box args={[0.2, 0.15, 0.15]} position={[0, 0.35, -0.1]}>
        <meshStandardMaterial color="#222222" metalness={0.6} roughness={0.4} />
      </Box>

      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
    </group>
  );
}

export default function FloatingCamera() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <Camera3D />
      </Canvas>
    </div>
  );
}
