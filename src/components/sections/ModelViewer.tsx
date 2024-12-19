
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Potree, PointCloudOctree } from '@pnext/three-loader';

function PointCloud() {
  const pointsRef = useRef();
  const { camera, scene } = useThree();
  const potree = new Potree();
  potree.pointBudget = 2_000_000;

  useEffect(() => {
    const pointClouds: PointCloudOctree[] = [];
    const modelPath = '/models/extSur/scene.gltf';
    
    potree.loadPointCloud(
      modelPath,
      (url) => `${window.location.origin}${url}`
    ).then(pco => {
      pointClouds.push(pco);
      scene.add(pco);
      pco.material.size = 0.01;
      pco.material.pointSizeType = 0;
      pco.material.shape = 1;
      
      const box = new THREE.Box3().setFromObject(pco);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const cameraDistance = maxDim / (2 * Math.tan(fov / 2));
      
      camera.position.set(
        center.x + cameraDistance,
        center.y,
        center.z + cameraDistance
      );
      camera.lookAt(center);
      camera.updateProjectionMatrix();
    });

    return () => {
      pointClouds.forEach(pc => scene.remove(pc));
    };
  }, []);

  return null;
}

function ModelViewer() {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas
        camera={{
          fov: 60,
          near: 0.1,
          far: 1000,
          position: [5, 5, 5]
        }}
        style={{ background: '#f5f5f5' }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={null}>
          <PointCloud />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            dampingFactor={0.05}
            minDistance={0.1}
            maxDistance={50}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ModelViewer;
