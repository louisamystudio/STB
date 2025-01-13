 import React from 'react';

export const ScopeOfWork: React.FC = () => (
  <section className="p-8 bg-gray-50">
    <h2 className="text-2xl font-bold mb-6">SCOPE</h2>
    <h3 className="text-xl mb-4">What We Offer</h3>
    
    <div className="space-y-6">
      <div>
        <h4 className="font-bold">1. 3D Laser Scanning</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>High-resolution scans of existing conditions.</li>
          <li>Millimeter-level accuracy with a range up to <strong>150 meters</strong>.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold">2. BIM Model Creation</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Development of <strong>LOD 200</strong> models in Revit.</li>
          <li>Exterior and interior elements such as walls, doors, windows, and structural components.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold">3. Deliverables</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Web-based access to virtual 3D models and 360 panoramas.</li>
          <li><strong>3D Point Cloud Data</strong> (.RCP files).</li>
          <li><strong>As-Measured Drawings</strong> (.DWG, .PDF).</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold">4. Collaboration and Certification</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Professionally certified deliverables by <strong>Wesley Louis López Rivera, PE, M.Arch, BSCE</strong>.</li>
        </ul>
      </div>
    </div>
  </section>
);