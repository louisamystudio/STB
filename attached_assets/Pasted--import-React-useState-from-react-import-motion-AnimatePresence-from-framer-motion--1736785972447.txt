
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
      // Verify the test code
      if (confirmationCode === "123456") {
        await sendFormattedProposal(email, confirmationCode);
        onClose();
      } else {
        alert("Invalid verification code. Please try again.");
      }
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
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <p>All copyrights, patents, and intellectual property rights in the <strong>Instruments of Service</strong> are irrevocably retained by the CONSULTANT.</p>
                <p>The CLIENT may utilize deliverables solely for their <strong>intended purpose</strong> as outlined in this proposal.</p>
                <p>Ownership of Work Product, Proprietary Information, and Deliverables remains the exclusive property of the CONSULTANT.</p>
                <p>Reuse, reproduction, or repurposing of deliverables without the CONSULTANT's <strong>explicit written consent</strong> is strictly prohibited.</p>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="scope"
              title="2. Scope of Work, Changes & Additional Fees"
              isOpen={openAccordionId === 'scope'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'scope' ? null : 'scope')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <p>The CONSULTANT will deliver the agreed-upon services, which include on-site scanning, processing, and model creation.</p>
                <p>Any alterations to the <strong>design or scope of work</strong> post-completion of initial services will incur additional fees.</p>
                <p>Changes require the CLIENT's <strong>written approval</strong>, and an estimate for the additional fees will be provided beforehand.</p>
                <p>Costs associated with changes or modifications made after project approval are the CLIENT's responsibility.</p>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="payment"
              title="3. Payment Obligations & Fee Compensation"
              isOpen={openAccordionId === 'payment'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'payment' ? null : 'payment')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <p>The CLIENT agrees to pay all fees within <strong>seven (7) days</strong> of invoice presentation.</p>
                <p>Failure to comply grants the CONSULTANT the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Impose a <strong>10% monthly service charge</strong> on the outstanding balance</li>
                  <li>Suspend all work until payment is received</li>
                  <li>Terminate any unperformed portion of this Agreement</li>
                </ul>
                <p>The CLIENT may not apply reductions, discounts, or set-offs to payments.</p>
                <p>The CLIENT is responsible for reimbursing the CONSULTANT for all costs related to arbitration, collections, or legal action to recover outstanding amounts.</p>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="client-responsibilities"
              title="4. Client Responsibilities & Information Review"
              isOpen={openAccordionId === 'client-responsibilities'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'client-responsibilities' ? null : 'client-responsibilities')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <p>The CLIENT shall provide timely decisions, approvals, and necessary documentation to prevent delays.</p>
                <p>Requests for Information submitted to the CONSULTANT must allow a minimum <strong>review period of two (2) weeks</strong>.</p>
                <p>The CONSULTANT is entitled to rely on the <strong>accuracy and completeness</strong> of all information provided by the CLIENT. The CONSULTANT shall not be held liable for inaccuracies or discrepancies.</p>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="limitations"
              title="5. Limitations of Responsibility"
              isOpen={openAccordionId === 'limitations'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'limitations' ? null : 'limitations')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <p>The CONSULTANT is not responsible for the <strong>actions or omissions</strong> of contractors, subcontractors, suppliers, or any other entities executing the work.</p>
                <p>The CONSULTANT is not liable for failure on their part to adhere to construction contract documents.</p>
                <p>Areas that are inaccessible or restricted will <strong>not be scanned</strong> or included in the final deliverables unless mutually agreed upon and documented prior to the start of work.</p>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="indemnification"
              title="6. Indemnification & Waiver of Damages"
              isOpen={openAccordionId === 'indemnification'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'indemnification' ? null : 'indemnification')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <p>The CLIENT agrees to <strong>indemnify and hold harmless</strong> the CONSULTANT from any claims, damages, losses, or expenses (including attorney's fees) arising from the use of the CONSULTANT's deliverables when the CONSULTANT is not actively rendering services.</p>
                <p>Both CLIENT and CONSULTANT waive any claims for <strong>consequential damages</strong> arising from disputes, claims, or matters related to this Agreement, including termination by either party.</p>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="unforeseen"
              title="7. Unforeseen Conditions & Services"
              isOpen={openAccordionId === 'unforeseen'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'unforeseen' ? null : 'unforeseen')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <p>Forensic engineering evaluations, assessments of materials, or structural strengths are <strong>outside the CONSULTANT's scope</strong>.</p>
                <p>Any unforeseen circumstances requiring additional services will be subject to mutual agreement and an <strong>Additional Services Addendum</strong>.</p>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="documentation"
              title="8. Post-Construction Documentation"
              isOpen={openAccordionId === 'documentation'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'documentation' ? null : 'documentation')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <p>Upon project completion, the CONSULTANT reserves the right to <strong>document the work</strong> through virtual twins, LiDAR scans, photographs, and video recordings under reasonable circumstances.</p>
                <p>The CLIENT agrees to allow access for post-construction documentation purposes.</p>
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
                  <div className="bg-[#f5f5f5] p-4 rounded-lg mb-4">
                    <h3 className="text-[#333333] font-bold mb-2">Verification Process:</h3>
                    <ol className="list-decimal pl-4 text-[#737D74] space-y-2">
                      <li>Enter your email address below</li>
                      <li>Check your inbox for the verification code</li>
                      <li>Enter the code to authenticate your agreement</li>
                    </ol>
                  </div>
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
                    <div className="bg-[#f5f5f5] p-4 rounded-lg">
                      <p className="text-[#737D74] mb-4">Check your email for the verification code and enter it below:</p>
                      <div className="flex space-x-2">
                        <input 
                          type="text" 
                          placeholder="Enter verification code" 
                          value={confirmationCode} 
                          onChange={(e) => setConfirmationCode(e.target.value)}
                          className="flex-1 p-2 border rounded focus:ring-2 focus:ring-[#F04E3E] text-[#333333] bg-white"
                        />
                        <button 
                          onClick={() => {
                            if (confirmationCode === "123456") {
                              handleAcceptTerms();
                            } else {
                              alert("Invalid verification code");
                            }
                          }}
                          className="bg-[#F04E3E] text-white px-4 py-2 rounded hover:bg-opacity-90"
                        >
                          Verify Code
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-[#fff4f2] rounded-lg">
                      <p className="text-[#333333] font-bold mb-2">THIS IS A LEGAL BINDING CONTRACT</p>
                      <p className="text-[#737D74] text-sm mb-4">By entering the verification code and submitting, you:</p>
                      <ul className="list-disc pl-4 text-[#737D74] text-sm mb-4">
                        <li>Acknowledge that you have read, understood, and agreed to all terms and conditions above</li>
                        <li>Authorize Louis Amy to proceed with the Proposed Services as outlined</li>
                        <li>Enter into a legally binding agreement with Louis Amy AE Studio</li>
                      </ul>
                      <p className="text-[#737D74] text-sm font-bold">A copy of this signed proposal will be sent to your email for your records.</p>
                    </div>
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
