
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="grey" />
    </mesh>
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
        <div className="h-[500px] bg-gray-100 rounded-lg overflow-hidden">
          <Canvas camera={{ position: [3, 3, 3] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Box />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  </section>
);
