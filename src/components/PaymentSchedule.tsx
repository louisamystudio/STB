
import React from 'react';

export const PaymentSchedule: React.FC = () => (
  <section className="p-8 bg-white shadow-sm rounded-lg">
    <h2 className="text-2xl font-bold mb-8 text-center">Payment Schedule</h2>
    
    <div className="grid gap-6 md:grid-cols-3">
      <div className="elegant-card">
        <div className="text-brand-accent text-2xl font-bold mb-2">50%</div>
        <p className="text-gray-600">Upon contract signing</p>
      </div>
      
      <div className="elegant-card">
        <div className="text-brand-accent text-2xl font-bold mb-2">30%</div>
        <p className="text-gray-600">Delivery of raw scan data</p>
      </div>
      
      <div className="elegant-card">
        <div className="text-brand-accent text-2xl font-bold mb-2">20%</div>
        <p className="text-gray-600">Final delivery of BIM model</p>
      </div>
    </div>

    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Timeline</h3>
      <div className="space-y-3">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-brand-accent rounded-full mr-3"></span>
          <span>Scanning & Processing: <strong className="text-brand-accent">5-7 business days</strong></span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-brand-accent rounded-full mr-3"></span>
          <span>BIM Model Creation: <strong className="text-brand-accent">10-15 business days</strong></span>
        </div>
      </div>
    </div>
  </section>
);
