
import React from 'react';
import { CompanyLogo } from '../shared/CompanyLogo';

export const Header: React.FC = () => (
  <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
    <div className="container mx-auto px-4 py-6 text-center">
      <CompanyLogo className="mx-auto mb-4 w-48" />
      <div className="h-px w-24 mx-auto bg-brand-sage opacity-30" />
    </div>
  </header>
);
