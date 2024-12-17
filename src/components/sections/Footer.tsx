
import React, { useState } from 'react';
import { contactDetails } from '@/config/company';
import { TermsModal } from '../modals/TermsModal';

export const Footer: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="p-8 bg-gray-800 text-white">
      <h2 className="text-xl font-bold mb-4">What's Next?</h2>
      <p className="mb-6">
        We're ready to start scanning your project immediately. Simply sign below to confirm your approval.
      </p>
      
      <button
        onClick={() => setShowTerms(true)}
        className="bg-[#f04e3e] text-white px-8 py-4 rounded-lg hover:bg-[#e04232] transition-colors mb-8"
      >
        Approve & Start Project
      </button>
      
      <div className="mt-8">
        <p className="font-bold">Wesley Louis López Rivera, PE, M.Arch, BSCE</p>
        <p>President / Principal</p>
        <p>{contactDetails.companyName}</p>
      </div>

      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </footer>
  );
};
