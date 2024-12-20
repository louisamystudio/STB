
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const gltf = useGLTF('/models/extSur/scene.gltf');
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Continuous rotation animation
    if (modelRef.current) {
      modelRef.current.rotation.y = time * 0.1;
    }
    
    // Camera animation
    if (time < 2) {
      state.camera.position.lerp(
        new THREE.Vector3(25, 15, 25),
        0.02
      );
      state.camera.lookAt(0, 0, 0);
    }

    // Hover effect
    if (modelRef.current) {
      if (hovered) {
        modelRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        modelRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      }
    }
  });

  React.useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.size = 1.0;
        child.material.sizeAttenuation = true;
      }
    });
  }, [gltf]);

  return (
    <>
      <primitive 
        ref={modelRef} 
        object={gltf.scene} 
        scale={1.2}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
      <hemisphereLight intensity={1} groundColor="#000000" />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={1} />
    </>
  );
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
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [35, 20, 35]
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls 
          enableRotate={true}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.8}
          minDistance={5}
          maxDistance={200}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          enableZoom={true}
          enablePan={true}
          panSpeed={1.0}
          zoomSpeed={1.0}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/extSur/scene.gltf');
