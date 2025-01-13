import React from 'react';
import { motion } from 'framer-motion';
import { paymentSchedule, projectTimeline, ProjectTimeline } from '@/types/payment';

export const PaymentSchedule: React.FC = () => (
  <section className="p-12 bg-white">
    <h2 className="text-3xl font-light text-center mb-12 font-['Italiana']">Payment Schedule</h2>
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gray-200">
        <div className="absolute top-0 left-0 h-full bg-[#f04e3e] w-full transform origin-left transition-transform duration-1000" />
      </div>

      <div className="flex justify-between items-start relative">
        {paymentSchedule.map((payment, index) => (
          <div key={index} className="text-center w-1/2">
            <div className="relative">
              <div className="bg-white border-4 border-[#f04e3e] text-[#f04e3e] rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform hover:scale-105">
                <span className="text-4xl font-bold">{payment.percentage}%</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">{payment.title}</h3>
            <p className="text-gray-600">{payment.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-bold mb-6 luxury-title">Project Timeline</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-brand-accent rounded-full mr-3"></span>
          <span>Scanning: <strong className="text-brand-accent">1-3 business days</strong></span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-brand-accent rounded-full mr-3"></span>
          <span>BIM Model & Deliverables: <strong className="text-brand-accent">5 business days</strong></span>
        </div>
        <div className="text-sm text-gray-600 mt-4 font-semibold">Total project duration: 5 business days or less</div>
      </div>
    </div>
  </section>
);