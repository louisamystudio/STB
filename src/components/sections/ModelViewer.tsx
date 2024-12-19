
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader';
import * as THREE from 'three';

function PointCloudModel() {
  const groupRef = useRef();
  const { camera } = useThree();
  const gltf = useLoader(GLTFLoader, '/models/extSur/scene.gltf');
  
  useEffect(() => {
    if (gltf.scene) {
      // Center the camera on the point cloud
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const cameraDistance = maxDim / (2 * Math.tan(fov / 2));
      
      camera.position.set(center.x, center.y, center.z + cameraDistance);
      camera.lookAt(center);
      camera.updateProjectionMatrix();
    }
  }, [gltf, camera]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive 
        object={gltf.scene} 
        scale={0.5}
        position={[0, 0, 0]}
      />
    </group>
  );
}

function ModelViewer() {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas
        camera={{
          fov: 60,
          near: 0.1,
          far: 1000,
          position: [10, 5, 10]
        }}
        style={{ background: '#f5f5f5' }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={<LoadingSpinner />}>
          <PointCloudModel />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={100}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-gray-600">Loading Point Cloud...</div>
    </div>
  );
}

export default ModelViewer;
