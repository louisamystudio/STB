
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const gltf = useGLTF('/models/extSur/scene.gltf');
  
  React.useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.size = 1.0; // Set point size to 1.0
        child.material.sizeAttenuation = true;
      }
    });
  }, [gltf]);

  return (
    <>
      <primitive object={gltf.scene} scale={1.2} />
      <hemisphereLight intensity={1} groundColor="#000000" />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={1} />
    </>
  );
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
          position: [-10, -10, -10]
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls 
          enableRotate={true}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={1.0}
          minDistance={5}
          maxDistance={200}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          enableZoom={true}
          enablePan={true}
          panSpeed={1.0}
          zoomSpeed={1.0}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/extSur/scene.gltf');
