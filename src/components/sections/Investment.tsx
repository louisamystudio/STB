
import React from 'react';
import type { InvestmentProps } from '@/types/layout';

export const Investment: React.FC<InvestmentProps> = ({ services, grandTotal }) => (
  <section className="p-8 bg-white">
    <h2 className="text-3xl font-bold mb-8 text-brand-dark tracking-wide font-italiana">INVESTMENT</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {services.map((service, index) => (
        <div 
          key={index}
          className="elegant-card hover:transform hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="text-xl font-montserrat font-medium text-brand-sage mb-4">
            {service.service}
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Area</span>
              <span className="font-medium text-brand-dark">{service.area}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cost per sq-ft</span>
              <span className="font-medium text-brand-dark">{service.costPerSqFt}</span>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-medium text-brand-sage">Total</span>
                <span className="text-xl font-bold text-brand-dark">{service.total}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="elegant-card bg-brand-sage bg-opacity-5">
      <div className="flex justify-between items-center">
        <span className="text-xl font-italiana text-brand-dark">Grand Total</span>
        <span className="text-2xl font-bold text-brand-sage font-montserrat">{grandTotal}</span>
      </div>
    </div>
  </section>
);
