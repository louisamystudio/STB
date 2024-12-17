
import React from 'react';

export const PaymentSchedule: React.FC = () => (
  <section className="p-8 bg-white shadow-sm rounded-lg">
    <h2 className="text-2xl font-bold mb-8 text-center luxury-title">Payment Schedule</h2>
    
    <div className="space-y-6">
      <div className="payment-step">
        <p className="text-lg font-semibold text-gray-700">50%: <span className="text-gray-500">Upon contract signing</span></p>
        <div className="progress-bar bg-gray-200 rounded-full h-2 w-full mt-2">
          <div className="bg-brand-accent h-2 rounded-full transition-all duration-500" style={{width: '50%'}}></div>
        </div>
      </div>
      
      <div className="payment-step">
        <p className="text-lg font-semibold text-gray-700">30%: <span className="text-gray-500">Delivery of raw scan data</span></p>
        <div className="progress-bar bg-gray-200 rounded-full h-2 w-full mt-2">
          <div className="bg-brand-accent h-2 rounded-full transition-all duration-500" style={{width: '30%'}}></div>
        </div>
      </div>
      
      <div className="payment-step">
        <p className="text-lg font-semibold text-gray-700">20%: <span className="text-gray-500">Final delivery of BIM model</span></p>
        <div className="progress-bar bg-gray-200 rounded-full h-2 w-full mt-2">
          <div className="bg-brand-accent h-2 rounded-full transition-all duration-500" style={{width: '20%'}}></div>
        </div>
      </div>
    </div>

    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-bold mb-6 luxury-title">Timeline</h3>
      <div className="space-y-4">
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
