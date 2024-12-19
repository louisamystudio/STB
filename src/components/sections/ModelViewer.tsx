
import React, { Suspense, useRef } from 'react';
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
      <Suspense fallback={<div>Loading model...</div>}>
        <Canvas
          gl={{
            antialias: true,
            logarithmicDepthBuffer: true
          }}
          camera={{
            fov: 75,
            near: 0.1,
            far: 1000,
            position: [0, 5, 10]
          }}
          style={{ background: '#f0f0f0' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Model />
          <OrbitControls 
            enableDamping
            dampingFactor={0.05}
            minDistance={1}
            maxDistance={1000}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
