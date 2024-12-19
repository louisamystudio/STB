
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function PointCloud() {
  const pointsRef = useRef();
  const { camera } = useThree();
  const gltf = useLoader(GLTFLoader, '/models/tikal_guatemala_point_cloud.glb');
  
  useEffect(() => {
    if (gltf.scene) {
      let points = [];
      let colors = [];
      
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Points) {
          const geometry = child.geometry;
          const position = geometry.attributes.position;
          const color = geometry.attributes.color;
          
          for (let i = 0; i < position.count; i++) {
            points.push(
              position.getX(i),
              position.getY(i),
              position.getZ(i)
            );
            if (color) {
              colors.push(
                color.getX(i),
                color.getY(i),
                color.getZ(i)
              );
            }
          }
        }
      });

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
      
      if (colors.length > 0) {
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      }

      const material = new THREE.PointsMaterial({
        size: 0.005,
        vertexColors: colors.length > 0,
        sizeAttenuation: true
      });

      pointsRef.current.geometry = geometry;
      pointsRef.current.material = material;

      // Center camera on point cloud
      const box = new THREE.Box3().setFromObject(pointsRef.current);
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

  return <points ref={pointsRef} />;
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

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-gray-600">Loading Point Cloud...</div>
    </div>
  );
}

export default ModelViewer;
