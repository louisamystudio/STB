
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/extSur/scene.gltf');
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return <primitive object={scene} scale={1} />;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[600px] relative">
      <Suspense fallback={<div>Loading model...</div>}>
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 1000,
            position: [5, 5, 5]
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1} 
            castShadow
          />
          <Model />
          <OrbitControls 
            enableDamping
            dampingFactor={0.05}
            minDistance={2}
            maxDistance={10}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}

useGLTF.preload('/models/extSur/scene.gltf');
