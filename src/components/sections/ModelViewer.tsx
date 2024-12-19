
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Potree, PointCloudOctree, IPointCloudData } from '@pnext/three-loader';

function PointCloud() {
  const { camera, scene } = useThree();
  const potreeRef = useRef<Potree>();
  const cloudRef = useRef<PointCloudOctree>();

  useEffect(() => {
    if (!potreeRef.current) {
      potreeRef.current = new Potree();
      potreeRef.current.pointBudget = 1_000_000;
    }

    const loadPointCloud = async () => {
      try {
        const pointCloud = await potreeRef.current?.loadPointCloud(
          '/models/extSur/scene.gltf',
          url => `${window.location.origin}${url}`
        );

        if (pointCloud) {
          cloudRef.current = pointCloud;
          scene.add(pointCloud);
          
          pointCloud.material.size = 1;
          pointCloud.material.pointSizeType = 0;
          pointCloud.material.shape = 1;
          pointCloud.material.opacity = 1.0;

          const box = new THREE.Box3().setFromObject(pointCloud);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());

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
        }
      } catch (error) {
        console.error('Error loading point cloud:', error);
      }
    };

    loadPointCloud();

    return () => {
      if (cloudRef.current) {
        scene.remove(cloudRef.current);
      }
    };
  }, [camera, scene]);

  return null;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[600px] relative">
      <Suspense fallback={<div>Loading model...</div>}>
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
            position: [10, 10, 10]
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
            minDistance={1}
            maxDistance={1000}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
