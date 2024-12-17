
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#fafafa] p-4 rounded-lg mt-1"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  const [agreed, setAgreed] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const handleSubmit = () => {
    if (email) {
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
            className="bg-white max-w-[1000px] rounded-lg p-10 m-4 max-h-[90vh] overflow-y-auto"
          >
            <h2 className="font-italiana text-[36px] text-center text-[#333333] mb-10">
              Terms of Agreement
            </h2>

            {!showEmailForm ? (
              <>
                <div className="space-y-2">
                  <AccordionItem 
                    title="Intellectual Property Rights & Ownership"
                    isOpen={openAccordionId === 'ip-rights'}
                    onToggle={() => setOpenAccordionId(openAccordionId === 'ip-rights' ? null : 'ip-rights')}
                    <p className="text-[#737D74] leading-relaxed">
                      All copyrights, patents, and intellectual property rights in the <strong>Instruments of Service</strong> are irrevocably retained by the CONSULTANT. The CLIENT may utilize the deliverables solely for their intended purpose as outlined in this proposal.<br /><br />
                      Any reuse, reproduction, or repurposing of the deliverables without the CONSULTANT's explicit written consent is strictly prohibited.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Written Approval for Changes">
                    <p className="text-[#737D74] leading-relaxed">
                      Any modifications, additions, or changes to the project scope post-initial completion require the CLIENT's written approval. Associated fees for these amendments will be estimated and agreed upon before the CONSULTANT proceeds with the work.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Consultant Fee Compensation">
                    <div className="text-[#737D74] leading-relaxed">
                      <p>The CLIENT agrees to timely payments of all invoices within <strong>seven (7) days</strong> of presentation. Failure to comply grants the CONSULTANT the right to:</p>
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Impose a monthly service charge of ten percent (10%) of the total amount owed.</li>
                        <li>Suspend all work until payment is received.</li>
                        <li>Terminate any unperformed portion of this Agreement.</li>
                      </ul>
                    </div>
                  </AccordionItem>

                  <AccordionItem title="Information Review Timeline">
                    <p className="text-[#737D74] leading-relaxed">
                      Requests for information or review by the CONSULTANT shall allow for a minimum review period of <strong>two (2) weeks</strong>.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Indemnification">
                    <p className="text-[#737D74] leading-relaxed">
                      The CLIENT agrees to indemnify and hold harmless the CONSULTANT from any claims, damages, losses, or expenses, including attorney's fees, arising from the use of the CONSULTANT's documents when the CONSULTANT is not actively rendering services on the project.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Project Documentation Post-Construction">
                    <p className="text-[#737D74] leading-relaxed">
                      Upon project completion, the CONSULTANT reserves the right to document the work performed. This may include visits to the CLIENT's property to capture virtual twins, LiDAR scans, measurements, photographs, and video recordings under reasonable circumstances.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Scope of Work and Additional Fees">
                    <p className="text-[#737D74] leading-relaxed">
                      Any alterations to the design or scope of work post-completion of the CONSULTANT's initial services will incur additional fees. The CONSULTANT will furnish an estimate for these additional fees, which require the CLIENT's written approval before proceeding.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Waiver of Consequential Damages">
                    <p className="text-[#737D74] leading-relaxed">
                      Both CLIENT and CONSULTANT waive any claims for consequential damages resulting from disputes, claims, or matters related to this Agreement, including termination by either party.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Costs of Changes & Reimbursement">
                    <p className="text-[#737D74] leading-relaxed">
                      The CLIENT shall bear the cost of any changes approved after a project stage is finalized. The CONSULTANT shall receive reimbursement for any reasonable and necessary expenses incurred while rendering services.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Unforeseen Conditions & Services">
                    <p className="text-[#737D74] leading-relaxed">
                      Forensic engineering evaluations, including property material assessments and structural strengths, are outside the CONSULTANT's scope. Any unforeseen services will only be addressed upon mutual agreement and execution of an Additional Services Addendum.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Limitation of Responsibility">
                    <p className="text-[#737D74] leading-relaxed">
                      The CONSULTANT is not liable for actions, errors, or omissions of contractors, subcontractors, suppliers, or other entities executing the work. The CONSULTANT also cannot be held responsible for their adherence to construction contract documents.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Areas Not to be Scanned">
                    <p className="text-[#737D74] leading-relaxed">
                      Areas inaccessible or restricted by the property owner will not be scanned and will be excluded from the final model. Any exclusions will be documented and agreed upon prior to scanning commencement.
                    </p>
                  </AccordionItem>
                </div>

                <label className="flex items-center gap-3 mt-8 mb-6 text-[#333333]">
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
