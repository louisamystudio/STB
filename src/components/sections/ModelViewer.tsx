
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function PointCloud() {
  const { scene, camera } = useThree();
  const modelRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/models/extSur/scene.gltf',
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.material.size = 0.005;
            child.material.sizeAttenuation = true;
          }
        });

        scene.add(gltf.scene);

        // Center camera on model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        
        camera.position.set(center.x, center.y + maxDim * 0.5, center.z + maxDim);
        camera.lookAt(center);
        camera.updateProjectionMatrix();

        modelRef.current = gltf.scene;
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    return () => {
      if (modelRef.current) {
        scene.remove(modelRef.current);
      }
    };
  }, [scene, camera]);

  return null;
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
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 10]
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#f0f0f0'));
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <PointCloud />
        </Suspense>
        <OrbitControls 
          enableDamping
          dampingFactor={0.05}
          minDistance={1}
          maxDistance={100}
        />
      </Canvas>
    </div>
  );
}
