
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  const [agreed, setAgreed] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      // Here you would typically handle the email submission
      alert(`Thank you! An email confirmation has been sent to: ${email}`);
      onClose();
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white max-w-[600px] rounded-lg p-10 m-4"
          >
            {!showEmailForm ? (
              <>
                <h2 className="font-italiana text-[28px] text-center text-[#333333] mb-6">
                  Terms of Agreement
                </h2>
                <div className="text-[#737D74] mb-6 leading-relaxed">
                  <p className="mb-4">By proceeding, you agree to the following terms:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>On-site laser scanning of specified areas.</li>
                    <li>Delivery of high-resolution point cloud and BIM models.</li>
                    <li>Quality control, validation, and two rounds of revisions.</li>
                    <li>Intellectual property ownership transfers to the client upon final payment.</li>
                  </ul>
                </div>
                <label className="flex items-center gap-3 mb-6 text-[#333333]">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <span>I have read and agree to the terms and conditions.</span>
                </label>
                <button
                  onClick={() => setShowEmailForm(true)}
                  disabled={!agreed}
                  className={`w-full bg-[#f04e3e] text-white py-3 rounded-lg font-montserrat ${
                    !agreed ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#e04232]'
                  }`}
                >
                  Proceed to Sign Agreement
                </button>
              </>
            ) : (
              <>
                <h3 className="font-italiana text-[24px] text-center text-[#333333] mb-6">
                  Verify Your Email
                </h3>
                <p className="text-[#737D74] mb-6 text-center">
                  Enter your email address to confirm and sign the agreement.
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#f04e3e] text-white py-3 rounded-lg font-montserrat hover:bg-[#e04232]"
                >
                  Confirm & Sign
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
