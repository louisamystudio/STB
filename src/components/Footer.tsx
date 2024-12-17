
import React from 'react';
import { CompanyLogo } from './shared/CompanyLogo';
import { contactDetails } from '@/config/company';

export const Footer: React.FC = () => (
  <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <CompanyLogo className="mx-auto mb-6 w-32 opacity-90" />
        <h2 className="luxury-title text-2xl mb-8">What's Next?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          We're ready to start scanning your project immediately. Simply sign below to confirm your approval.
        </p>
        
        <div className="mt-12">
          <p className="font-semibold text-lg">Wesley Louis López Rivera, PE, M.Arch, BSCE</p>
          <p className="text-gray-300">President / Principal</p>
          <p className="mt-4 text-brand-accent">
            <a href={`mailto:${contactDetails.email}`} className="hover:text-white transition-colors">
              {contactDetails.email}
            </a>
            <span className="mx-3">|</span>
            <a href={`tel:${contactDetails.phone}`} className="hover:text-white transition-colors">
              {contactDetails.phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);
