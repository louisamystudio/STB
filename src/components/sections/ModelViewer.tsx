
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function PointCloud() {
  const pointsRef = useRef();
  const { camera } = useThree();
  const gltf = useLoader(GLTFLoader, '/models/extSur/scene.gltf');
  
  useEffect(() => {
    if (gltf.scene) {
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];
      
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          const position = child.geometry.attributes.position;
          const color = child.geometry.attributes.color;
          
          for (let i = 0; i < position.count; i++) {
            positions.push(position.getX(i), position.getY(i), position.getZ(i));
            if (color) {
              colors.push(color.getX(i), color.getY(i), color.getZ(i));
            } else {
              colors.push(1, 1, 1); // Default white if no colors
            }
          }
        }
      });

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.01,
        vertexColors: true,
        sizeAttenuation: true
      });

      if (pointsRef.current) {
        pointsRef.current.geometry = geometry;
        pointsRef.current.material = material;
      }

      // Center and zoom camera
      const box = new THREE.Box3().setFromBufferAttribute(geometry.attributes.position);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const cameraDistance = maxDim / (2 * Math.tan(fov / 2));

      camera.position.set(center.x + cameraDistance, center.y, center.z);
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
          position: [5, 5, 5]
        }}
        style={{ background: '#f5f5f5' }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={<div>Loading...</div>}>
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
