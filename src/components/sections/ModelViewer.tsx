
import React, { Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model() {
  const gltf = useLoader(GLTFLoader, '/models/extSur/scene.gltf');
  
  useFrame((state) => {
    gltf.scene.rotation.y += 0.01;
  });
  
  return <primitive object={gltf.scene} scale={1} />;
}

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-gray-600">Loading Point Cloud...</div>
    </div>
  );
}

function ModelViewer() {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas
        camera={{
          position: [8, 5, 8],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        style={{ background: '#ffffff' }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={<LoadingSpinner />}>
          <Model />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
}

export default ModelViewer;
