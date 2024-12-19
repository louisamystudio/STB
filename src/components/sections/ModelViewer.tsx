
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const gltf = useGLTF('/models/extSur/scene.gltf');
  return <primitive object={gltf.scene} />;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas
        gl={{ 
          antialias: true,
          preserveDrawingBuffer: true
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [5, 5, 5]
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls 
          enableDamping
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/extSur/scene.gltf');
