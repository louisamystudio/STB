
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Text } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function PointCloudModel() {
  const gltf = useLoader(GLTFLoader, '/models/tikal_guatemala_point_cloud.glb');
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene} 
      scale={0.015}
      position={[0, -2, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

export const PhysicalToDigital: React.FC = () => (
  <section className="py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-italiana text-4xl mb-6">
            From the Physical World to a Digital Reality
          </h2>
          <p className="text-lg mb-4">
            Louis Amy AE Studio is proud to present <span className="font-semibold">Scan to BIM Solutions</span> – a revolutionary service that combines <span className="text-brand-accent">terrestrial LiDAR scanning</span> with <span className="font-semibold">Building Information Modeling (BIM)</span>.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-xl mb-2">Precision:</h3>
              <p>Millimeter-level accuracy.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Efficiency:</h3>
              <p>Faster, detailed results than manual measurements.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Innovation:</h3>
              <p>Seamless integration with BIM tools like Revit, AutoCAD, and more.</p>
            </div>
          </div>
        </div>
        <div className="h-[500px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg overflow-hidden">
          <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
            <Environment preset="sunset" />
            <ambientLight intensity={0.5} />
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.15} 
              penumbra={1} 
              intensity={1} 
              castShadow 
            />
            <Suspense fallback={null}>
              <PointCloudModel />
              <ContactShadows
                position={[0, -2, 0]}
                opacity={0.4}
                scale={5}
                blur={2}
              />
            </Suspense>
            <OrbitControls 
              enableZoom={true} 
              enablePan={true}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.5}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>
      </div>
    </div>
  </section>
);
