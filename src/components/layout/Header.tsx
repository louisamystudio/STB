
import React from 'react';
import { CompanyLogo } from '../shared/CompanyLogo';

export const Header: React.FC = () => (
  <section className="bg-gradient-to-b from-brand-sage to-[#5e6a63] py-16">
    <div className="container mx-auto px-6 text-center">
      <CompanyLogo className="mx-auto mb-12 w-64 transform hover:scale-105 transition-transform duration-300" />
      <div className="h-px w-48 mx-auto bg-white opacity-20 mb-10" />
      
      <h1 className="font-italiana text-4xl text-white mb-4 tracking-wider">Scan to BIM Solutions</h1>
      <p className="font-montserrat text-white/90 font-light italic mb-16 tracking-wide">Precision. Innovation. Excellence.</p>

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
