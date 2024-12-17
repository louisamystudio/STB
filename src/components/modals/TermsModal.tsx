
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#333333]">Terms of Agreement</h2>
            <button onClick={onClose} className="text-2xl">&times;</button>
          </div>
          <div className="space-y-2">
            <AccordionItem 
              id="ip-rights"
              title="1. Intellectual Property & Ownership"
              isOpen={openAccordionId === 'ip-rights'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'ip-rights' ? null : 'ip-rights')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <p>All copyrights, patents, and intellectual property rights in the Instruments of Service are irrevocably retained by the CONSULTANT.</p>
                <ul className="list-disc pl-6">
                  <li>The CLIENT may utilize deliverables solely for their intended purpose as outlined in this proposal.</li>
                  <li>Ownership of Work Product, Proprietary Information, and Deliverables remains the exclusive property of the CONSULTANT.</li>
                  <li>Reuse, reproduction, or repurposing of deliverables without the CONSULTANT's explicit written consent is strictly prohibited.</li>
                </ul>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="scope-changes"
              title="2. Scope of Work, Changes & Additional Fees"
              isOpen={openAccordionId === 'scope-changes'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'scope-changes' ? null : 'scope-changes')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <p>The CONSULTANT will deliver the agreed-upon services, which include on-site scanning, processing, and model creation.</p>
                <ul className="list-disc pl-6">
                  <li>Any alterations to the design or scope of work post-completion of initial services will incur additional fees.</li>
                  <li>Changes require the CLIENT's written approval, and an estimate for the additional fees will be provided beforehand.</li>
                  <li>Costs associated with changes or modifications made after project approval are the CLIENT's responsibility.</li>
                </ul>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="payment"
              title="3. Payment Obligations & Fee Compensation"
              isOpen={openAccordionId === 'payment'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'payment' ? null : 'payment')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <p>The CLIENT agrees to pay all fees within seven (7) days of invoice presentation.</p>
                <p>Failure to comply grants the CONSULTANT the right to:</p>
                <ul className="list-disc pl-6">
                  <li>Impose a 10% monthly service charge on the outstanding balance.</li>
                  <li>Suspend all work until payment is received.</li>
                  <li>Terminate any unperformed portion of this Agreement.</li>
                </ul>
                <p>The CLIENT may not apply reductions, discounts, or set-offs to payments.</p>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="client-responsibilities"
              title="4. Client Responsibilities & Information Review"
              isOpen={openAccordionId === 'client-responsibilities'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'client-responsibilities' ? null : 'client-responsibilities')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <ul className="list-disc pl-6">
                  <li>The CLIENT shall provide timely decisions, approvals, and necessary documentation to prevent delays.</li>
                  <li>Requests for Information submitted to the CONSULTANT must allow a minimum review period of two (2) weeks.</li>
                  <li>The CONSULTANT is entitled to rely on the accuracy and completeness of all information provided by the CLIENT.</li>
                </ul>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="limitations"
              title="5. Limitations of Responsibility"
              isOpen={openAccordionId === 'limitations'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'limitations' ? null : 'limitations')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <ul className="list-disc pl-6">
                  <li>The CONSULTANT is not responsible for the actions or omissions of contractors, subcontractors, suppliers, or any other entities executing the work.</li>
                  <li>Areas that are inaccessible or restricted will not be scanned or included in the final deliverables unless mutually agreed upon and documented prior to the start of work.</li>
                </ul>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="indemnification"
              title="6. Indemnification & Waiver of Damages"
              isOpen={openAccordionId === 'indemnification'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'indemnification' ? null : 'indemnification')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <ul className="list-disc pl-6">
                  <li>The CLIENT agrees to indemnify and hold harmless the CONSULTANT from any claims, damages, losses, or expenses (including attorney's fees) arising from the use of the CONSULTANT's deliverables.</li>
                  <li>Both CLIENT and CONSULTANT waive any claims for consequential damages arising from disputes, claims, or matters related to this Agreement.</li>
                </ul>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="unforeseen"
              title="7. Unforeseen Conditions & Services"
              isOpen={openAccordionId === 'unforeseen'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'unforeseen' ? null : 'unforeseen')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <ul className="list-disc pl-6">
                  <li>Forensic engineering evaluations, assessments of materials, or structural strengths are outside the CONSULTANT's scope.</li>
                  <li>Any unforeseen circumstances requiring additional services will be subject to mutual agreement and an Additional Services Addendum.</li>
                </ul>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="documentation"
              title="8. Post-Construction Documentation"
              isOpen={openAccordionId === 'documentation'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'documentation' ? null : 'documentation')}
            >
              <div className="text-[#737D74] leading-relaxed space-y-2">
                <ul className="list-disc pl-6">
                  <li>Upon project completion, the CONSULTANT reserves the right to document the work through virtual twins, LiDAR scans, photographs, and video recordings under reasonable circumstances.</li>
                  <li>The CLIENT agrees to allow access for post-construction documentation purposes.</li>
                </ul>
              </div>
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
};
