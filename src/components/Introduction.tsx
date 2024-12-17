import React from 'react';

export const Introduction: React.FC = () => (
  <section className="p-8 bg-white">
    <h2 className="text-2xl font-bold mb-6">LET'S CREATE SOMETHING SPECIAL TOGETHER</h2>
    <div className="prose max-w-none">
      <p>
        Louis Amy AE Studio is excited to present <strong>Scan to BIM Solutions</strong>
        —a revolutionary service blending terrestrial LiDAR scanning with Building Information 
        Modeling (BIM). With over a decade of expertise and state-of-the-art equipment, we deliver:
      </p>
      <ul className="list-disc pl-6 mt-4">
        <li><strong>Precision:</strong> Millimeter-level accuracy.</li>
        <li><strong>Efficiency:</strong> Faster, detailed results than manual measurements.</li>
        <li><strong>Innovation:</strong> Seamless integration with BIM tools like Revit, AutoCAD, and more.</li>
      </ul>
    </div>
  </section>
);