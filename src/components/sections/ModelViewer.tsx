
import React, { Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model() {
  const gltf = useLoader(GLTFLoader, '/models/extSur/scene.gltf');
  
  useFrame((state) => {
    gltf.scene.rotation.y += 0.001;
  });
  
  return <primitive object={gltf.scene} scale={0.5} position={[0, 0, 0]} />;
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
          position: [10, 5, 10],
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        style={{ background: '#f5f5f5' }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={<LoadingSpinner />}>
          <Model />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          dampingFactor={0.1}
          minDistance={5}
          maxDistance={100}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}

export default ModelViewer;
