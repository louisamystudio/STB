import React from 'react';
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
          <div className="h-[500px] bg-gray-800 rounded-lg overflow-hidden"> {/* Changed background color here */}
            <ModelViewer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysicalToDigital;