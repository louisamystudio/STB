
import React from 'react';
import { CompanyLogo } from '../shared/CompanyLogo';

export const Header: React.FC = () => (
  <section className="project-details-section bg-gradient-to-b from-gray-50 to-gray-100 py-12">
    <div className="container mx-auto px-6 text-center">
      <CompanyLogo className="mx-auto mb-8 w-64" />
      <div className="h-px w-32 mx-auto bg-brand-sage opacity-40 mb-8" />
      
      <h1 className="luxury-title text-3xl text-gray-900 mb-2">Scan to BIM Solutions</h1>
      <p className="tagline text-gray-600 font-light italic mb-12">Precision. Innovation. Excellence.</p>

      <div className="project-details text-left max-w-3xl mx-auto">
        <div className="mb-8">
          <h3 className="section-title text-lg font-semibold text-gray-700 mb-2">Project Details:</h3>
          <p className="description text-gray-600">Historic Building Laser Scan to BIM Model</p>
        </div>
        
        <hr className="divider border-t border-gray-200 my-6" />
        
        <div className="mb-8">
          <h3 className="section-title text-lg font-semibold text-gray-700 mb-2">Requested by:</h3>
          <p className="description text-gray-600">
            Ingeniero Eliseo Toledo<br />
            ETR ENGENIERING, PSC
          </p>
        </div>
        
        <hr className="divider border-t border-gray-200 my-6" />
        
        <div>
          <h3 className="section-title text-lg font-semibold text-gray-700 mb-2">Project:</h3>
          <p className="description text-gray-600">
            MOOG006 - Post Office - San Juan<br />
            Fortaleza 63 San Juan Puerto Rico, 00902
          </p>
        </div>
      </div>
    </div>
  </section>
);
