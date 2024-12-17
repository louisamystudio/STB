
import React from 'react';
import { CompanyLogo } from '../shared/CompanyLogo';

export const Header: React.FC = () => (
  <header className="header-background bg-gradient-to-b from-gray-50 to-gray-100 border-b border-gray-200 py-8">
    <div className="container mx-auto px-4 py-12 text-center">
      <CompanyLogo className="mx-auto mb-8 w-64" />
      <div className="h-px w-32 mx-auto bg-brand-sage opacity-40 mb-8" />
      <h1 className="luxury-title text-4xl font-semibold">Scan to BIM Solutions</h1>
      <p className="text-gray-600 mt-2 font-montserrat">Precision. Innovation. Excellence.</p>
      
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
