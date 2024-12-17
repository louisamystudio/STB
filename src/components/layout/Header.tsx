
import React from 'react';
import { CompanyLogo } from '../shared/CompanyLogo';

export const Header: React.FC = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-6">
      <CompanyLogo className="mb-12 w-64" />
      
      <div className="max-w-2xl space-y-8">
        <div>
          <h2 className="font-italiana text-3xl text-gray-900 mb-6">Historic Building Laser Scan to BIM Model</h2>
        </div>

        <div className="space-y-6">
          <div className="remittent-item">
            <h3 className="text-[#737D74] text-sm uppercase tracking-wider mb-1">Requested By</h3>
            <p className="text-gray-900 font-montserrat">Ingeniero Eliseo Toledo</p>
          </div>

          <div className="remittent-item">
            <h3 className="text-[#737D74] text-sm uppercase tracking-wider mb-1">Company Name</h3>
            <p className="text-gray-900 font-montserrat">ETR ENGINEERING, PSC</p>
          </div>

          <div className="remittent-item">
            <h3 className="text-[#737D74] text-sm uppercase tracking-wider mb-1">Project Name</h3>
            <p className="text-gray-900 font-montserrat">MOOG006 - Post Office - San Juan</p>
          </div>

          <div className="remittent-item">
            <h3 className="text-[#737D74] text-sm uppercase tracking-wider mb-1">Project Address</h3>
            <p className="text-gray-900 font-montserrat">Fortaleza 63, San Juan, Puerto Rico, 00902</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
