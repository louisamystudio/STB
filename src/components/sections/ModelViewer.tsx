
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { MOUSE } from 'three';

function Model() {
  const gltf = useGLTF('/models/extSur/scene.gltf', true);
const { camera, gl } = useThree();

useEffect(() => {
  camera.position.set(5, 5, 5);
  camera.lookAt(0, 0, 0);
}, [camera]);
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Continuous rotation animation in opposite direction
    if (modelRef.current) {
      modelRef.current.rotation.y = -time * 0.05; // Slower, reversed rotation
    }
    
    // Camera animation
    if (time < 2) {
      state.camera.position.lerp(
        new THREE.Vector3(25, 15, 25),
        0.02
      );
      state.camera.lookAt(0, 0, 0);
    }

    // Smoother hover effect with scale and slight elevation
    if (modelRef.current) {
      const targetScale = hovered ? 1.25 : 1.2;
      const targetY = hovered ? 0.2 : 0;
      modelRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.03);
      modelRef.current.position.y = THREE.MathUtils.lerp(modelRef.current.position.y, targetY, 0.03);
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
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN
          }}
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
