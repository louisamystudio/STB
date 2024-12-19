
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function PointCloud() {
  const modelRef = useRef();
  const { camera } = useThree();
  const gltf = useLoader(GLTFLoader, '/models/extSur/scene.gltf');
  
  useEffect(() => {
    if (gltf.scene) {
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const cameraDistance = maxDim / (2 * Math.tan(fov / 2));
      
      camera.position.set(
        center.x + cameraDistance,
        center.y + cameraDistance / 2,
        center.z + cameraDistance
      );
      camera.lookAt(center);
      camera.updateProjectionMatrix();
      
      if (modelRef.current) {
        modelRef.current.position.copy(center.multiplyScalar(-1));
      }
    }
  }, [gltf, camera]);

  return <primitive object={gltf.scene} ref={modelRef} />;
}

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-gray-600">Loading Model...</div>
    </div>
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
          position: [0, 0, 5]
        }}
        style={{ background: '#f5f5f5' }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={<LoadingSpinner />}>
          <PointCloud />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={100}
        />
      </Canvas>
    </div>
  );
}

export default ModelViewer;
