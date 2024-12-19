
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Potree, PointCloudOctree } from '@pnext/three-loader';

function PointCloud() {
  const { camera, scene } = useThree();
  const potreeRef = useRef(new Potree());

  useEffect(() => {
    if (!potreeRef.current) return;

    potreeRef.current.pointBudget = 2_000_000;
    const modelPath = '/models/extSur/scene.gltf';
    
    potreeRef.current.loadPointCloud(
      modelPath,
      (url) => `${window.location.origin}${url}`
    ).then(pco => {
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
      
      camera.position.set(center.x + cameraDistance, center.y, center.z + cameraDistance);
      camera.lookAt(center);
      camera.updateProjectionMatrix();
    });

    return () => {
      scene.traverse((object) => {
        if (object instanceof PointCloudOctree) {
          scene.remove(object);
        }
      });
    };
  }, [camera, scene]);

  return null;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[600px] relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas
          gl={{
            antialias: true,
            preserveDrawingBuffer: true,
            logarithmicDepthBuffer: true
          }}
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
          <PointCloud />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            dampingFactor={0.05}
            minDistance={0.1}
            maxDistance={50}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
