
import React from 'react';
import { CompanyLogo } from '../shared/CompanyLogo';

export const Header: React.FC = () => (
  <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
    <div className="container mx-auto px-4 py-6">
      <CompanyLogo className="mx-auto mb-6 w-48" />
      <div className="h-px w-24 mx-auto bg-brand-sage opacity-30 mb-6" />
      
      <div className="max-w-2xl mx-auto">
        <div className="text-left space-y-2 text-gray-700">
          <p className="font-semibold">To:</p>
          <p>Mr. Carlos A. Díaz Pizarro</p>
          <p>School Principal</p>
          <p>Escuela Intermedia Nueva 2024</p>
          <p>Department of Education</p>
          <p>Municipality of Caguas</p>
        </div>
      </div>
    </div>
  </header>
);
