
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import ModelViewer from './ModelViewer';

export const PhysicalToDigital = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-italiana text-4xl mb-6">
              From the Physical World to a Digital Reality
            </h2>
            <p className="text-lg mb-4">
              Louis Amy AE Studio is proud to present <span className="font-semibold">Scan to BIM Solutions</span>.
            </p>
          </div>
          <div className="h-[500px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg overflow-hidden">
            <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
              <Environment preset="warehouse" />
              <ambientLight intensity={0.5} />
              <spotLight 
                position={[10, 10, 10]} 
                angle={0.15} 
                penumbra={1} 
                intensity={1} 
                castShadow 
              />
              <Suspense fallback={null}>
                <ModelViewer />
                <ContactShadows
                  position={[0, -1, 0]}
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
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysicalToDigital;
