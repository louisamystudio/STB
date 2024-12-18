
import React, { Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model() {
  const gltf = useLoader(GLTFLoader, '/models/extSur/scene.gltf');
  
  useFrame((state, delta) => {
    // Optional: Add smooth rotation animation
    if (gltf.scene) {
      gltf.scene.rotation.y += delta * 0.1;
    }
  });

  return <primitive object={gltf.scene} scale={0.5} />;
}

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-gray-600">Loading 3D Model...</div>
    </div>
  );
}

function ModelViewer() {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas
        camera={{
          position: [5, 2, 5],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        style={{ background: '#ffffff' }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          enableDamping={true}
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={20}
          makeDefault
        />
      </Canvas>
      <Suspense fallback={<LoadingSpinner />} />
    </div>
  );
}

export default ModelViewer;
