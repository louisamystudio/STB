import React from 'react';

export const PaymentSchedule: React.FC = () => (
  <section className="p-8 bg-gray-50">
    <h2 className="text-2xl font-bold mb-6">Payment Schedule</h2>
    <ul className="list-decimal pl-6 space-y-2">
      <li><strong>50% Deposit:</strong> Upon contract signing.</li>
      <li><strong>30%:</strong> Delivery of raw scan data.</li>
      <li><strong>20%:</strong> Delivery of final BIM model and certified drawings.</li>
    </ul>

    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">Timeline</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Scanning & Processing: <strong>5-7 business days</strong>.</li>
        <li>BIM Model Creation: <strong>10-15 business days</strong>.</li>
      </ul>
    </div>
  </section>
);