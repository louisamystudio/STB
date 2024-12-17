import React from 'react';
import { contactDetails } from '@/config/company';

export const Footer: React.FC = () => (
  <footer className="p-8 bg-gray-800 text-white">
    <h2 className="text-xl font-bold mb-4">What's Next?</h2>
    <p className="mb-6">
      We're ready to start scanning your project immediately. Simply sign below to confirm your approval.
    </p>
    
    <div className="mt-8">
      <p className="font-bold">Wesley Louis López Rivera, PE, M.Arch, BSCE</p>
      <p>President / Principal</p>
      <p>{contactDetails.companyName}</p>
    </div>
  </footer>
);