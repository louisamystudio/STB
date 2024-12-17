import React from 'react';
import { companyServices } from '@/config/company';

export const ScopeOfWork: React.FC = () => (
  <section className="p-8 bg-gray-50">
    <h2 className="text-2xl font-bold mb-6">SCOPE</h2>
    <h3 className="text-xl mb-4">What We Offer</h3>
    
    <div className="space-y-6">
      {companyServices.map((service, index) => (
        <div key={service.id}>
          <h4 className="font-bold">{`${index + 1}. ${service.name}`}</h4>
          <ul className="list-disc pl-6 mt-2">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}

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