
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
              title="Intellectual Property Rights & Ownership"
              isOpen={openAccordionId === 'ip-rights'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'ip-rights' ? null : 'ip-rights')}
            >
              <p className="text-[#737D74] leading-relaxed">
                All intellectual property rights for documents, drawings, and other materials produced by the CONSULTANT remain with the CONSULTANT until final payment is received.
              </p>
            </AccordionItem>

            <AccordionItem 
              id="consultant-fee"
              title="Consultant Fee Compensation"
              isOpen={openAccordionId === 'consultant-fee'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'consultant-fee' ? null : 'consultant-fee')}
            >
              <div className="text-[#737D74] leading-relaxed">
                <p>The CLIENT agrees to timely payments of all invoices within <strong>seven (7) days</strong> of presentation. Failure to comply grants the CONSULTANT the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Impose a monthly service charge of ten percent (10%) of the total amount owed.</li>
                  <li>Suspend all work until payment is received.</li>
                  <li>Terminate any unperformed portion of this Agreement.</li>
                </ul>
              </div>
            </AccordionItem>

            <AccordionItem 
              id="timeline"
              title="Information Review Timeline"
              isOpen={openAccordionId === 'timeline'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'timeline' ? null : 'timeline')}
            >
              <p className="text-[#737D74] leading-relaxed">
                Requests for information or review by the CONSULTANT shall allow for a minimum review period of <strong>two (2) weeks</strong>.
              </p>
            </AccordionItem>

            <AccordionItem 
              id="indemnification"
              title="Indemnification"
              isOpen={openAccordionId === 'indemnification'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'indemnification' ? null : 'indemnification')}
            >
              <p className="text-[#737D74] leading-relaxed">
                The CLIENT agrees to indemnify and hold harmless the CONSULTANT from any claims, damages, losses, or expenses, including attorney's fees, arising from the use of the CONSULTANT's documents when the CONSULTANT is not actively rendering services on the project.
              </p>
            </AccordionItem>

            <AccordionItem 
              id="written-approval"
              title="Written Approval for Changes"
              isOpen={openAccordionId === 'written-approval'}
              onToggle={() => setOpenAccordionId(openAccordionId === 'written-approval' ? null : 'written-approval')}
            >
              <p className="text-[#737D74] leading-relaxed">
                Any modifications, additions, or changes to the project scope post-initial completion require the CLIENT's written approval. Associated fees for these amendments will be estimated and agreed upon before the CONSULTANT proceeds with the work.
              </p>
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
};
