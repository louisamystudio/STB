
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Potree } from '@pnext/three-loader';

function PointCloud() {
  const { scene, camera } = useThree();
  const potreeRef = useRef<Potree>();

  useEffect(() => {
    const initPointCloud = async () => {
      if (!potreeRef.current) {
        potreeRef.current = new Potree();
        potreeRef.current.pointBudget = 1_000_000;
      }

      try {
        const pointCloudPath = '/models/tikal_guatemala_point_cloud.glb';
        const pointCloud = await potreeRef.current.loadPointCloud(
          pointCloudPath,
          url => `${window.location.origin}${url}`
        );

        if (pointCloud) {
          scene.add(pointCloud);
          pointCloud.material.size = 1.0;
          pointCloud.material.pointSizeType = 0;
          pointCloud.material.shape = 1;
          
          const box = new THREE.Box3().setFromObject(pointCloud);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          
          const maxDim = Math.max(size.x, size.y, size.z);
          const fov = camera.fov * (Math.PI / 180);
          const cameraZ = Math.abs(maxDim / Math.sin(fov / 2) / 2);
          
          camera.position.set(center.x, center.y, center.z + cameraZ);
          camera.lookAt(center);
          camera.updateProjectionMatrix();
        }
      } catch (error) {
        console.error('Failed to load point cloud:', error);
      }
    };

    initPointCloud();

    return () => {
      if (potreeRef.current) {
        scene.traverse((object) => {
          if (object.type === 'Points') {
            scene.remove(object);
          }
        });
      }
    };
  }, [scene, camera]);

  return null;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[600px] relative">
      <Suspense fallback={<div>Loading point cloud...</div>}>
        <Canvas
          gl={{
            antialias: true,
            logarithmicDepthBuffer: true
          }}
          camera={{
            fov: 75,
            near: 0.1,
            far: 1000,
            position: [0, 0, 5]
          }}
          style={{ background: '#f0f0f0' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <PointCloud />
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
