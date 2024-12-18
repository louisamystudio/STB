
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className="w-full bg-[#f5f5f5] text-[#333333] px-5 py-4 text-left text-lg font-bold cursor-pointer rounded-lg flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="bg-[#fafafa] p-4 rounded-lg mt-1">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const TermsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSendVerification = async () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    setVerificationSent(true);
    console.log(`Sending verification to ${email}`);
  };

  const handleAcceptTerms = async () => {
    if (!email || !confirmationCode) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await sendFormattedProposal(email, confirmationCode);
      onClose();
    } catch (error) {
      alert("Error processing your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendFormattedProposal = async (email: string, code: string) => {
    console.log(`Sending proposal to ${email} with code ${code}`);
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#333333]">Terms of Agreement</h2>
            <button onClick={onClose} className="text-2xl text-[#333333]">&times;</button>
          </div>
          
          <div className="space-y-4">
            <AccordionItem 
              id="ip-rights"
              title="1. Intellectual Property & Ownership"
              isOpen={openAccordionId === 'ip-rights'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'ip-rights' ? null : 'ip-rights')}
            >
              <div className="text-[#737D74] leading-relaxed">
                All copyrights, patents, and intellectual property rights remain with the consultant.
              </div>
            </AccordionItem>

            <AccordionItem 
              id="confidentiality"
              title="2. Confidentiality"
              isOpen={openAccordionId === 'confidentiality'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'confidentiality' ? null : 'confidentiality')}
            >
              <div className="text-[#737D74] leading-relaxed">
                All information shared during the project will be kept strictly confidential and used solely for project purposes.
              </div>
            </AccordionItem>

            <AccordionItem 
              id="delivery"
              title="3. Delivery & Timeline"
              isOpen={openAccordionId === 'delivery'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'delivery' ? null : 'delivery')}
            >
              <div className="text-[#737D74] leading-relaxed">
                Project timelines and deliverables will be as specified in the proposal document. Any modifications require written agreement.
              </div>
            </AccordionItem>

            <AccordionItem 
              id="payment"
              title="4. Payment Terms"
              isOpen={openAccordionId === 'payment'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'payment' ? null : 'payment')}
            >
              <div className="text-[#737D74] leading-relaxed">
                Payment schedule and terms are as outlined in the proposal. Late payments may result in project delays.
              </div>
            </AccordionItem>
          </div>

          <div className="mt-6 p-4 border-t border-gray-200">
            <label className="flex items-center space-x-2 mb-4">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 text-[#F04E3E]" 
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <span className="text-[#737D74]">I accept the terms and conditions</span>
            </label>

            {accepted && (
              <div className="space-y-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={verificationSent}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-[#F04E3E] text-[#333333] bg-white"
                  />
                  {!verificationSent && (
                    <button 
                      onClick={handleSendVerification}
                      className="mt-2 bg-[#F04E3E] text-white px-4 py-2 rounded hover:bg-opacity-90"
                    >
                      Send Verification Code
                    </button>
                  )}
                </div>

                {verificationSent && (
                  <>
                    <input 
                      type="text" 
                      placeholder="Enter verification code" 
                      value={confirmationCode} 
                      onChange={(e) => setConfirmationCode(e.target.value)}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-[#F04E3E] text-[#333333] bg-white"
                    />
                    <button 
                      onClick={handleAcceptTerms}
                      disabled={isSubmitting}
                      className="w-full bg-[#F04E3E] text-white p-2 rounded hover:bg-opacity-90 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Processing...' : 'Confirm & Submit'}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
