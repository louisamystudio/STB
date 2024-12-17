
import React from 'react';
import { CompanyLogo } from '../shared/CompanyLogo';

export const Header: React.FC = () => (
  <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
    <div className="container mx-auto px-4 py-6">
      <CompanyLogo className="mx-auto mb-6 w-48" />
      <div className="h-px w-24 mx-auto bg-brand-sage opacity-30 mb-6" />
      
      <div className="max-w-2xl mx-auto">
        <div className="text-left space-y-2 text-gray-700">
          <p className="font-semibold">Project Details:</p>
          <p>Historic Building Laser Scan to BIM Model</p>
          <div className="mt-4">
            <p className="font-semibold">Requested by:</p>
            <p>Ingeniero Eliseo Toledo</p>
            <p>ETR ENGENIERING, PSC</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Project:</p>
            <p>MOOG006 - Post Office - San Juan</p>
            <p>Fortaleza 63 San Juan Puerto Rico, 00902</p>
          </div>
        </div>
      </div>
    </div>
  </header>
);
