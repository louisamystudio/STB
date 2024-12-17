
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

// Rest of your component code remains the same until the accordion items

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

// Continue with the rest of your accordion items following the same pattern...
