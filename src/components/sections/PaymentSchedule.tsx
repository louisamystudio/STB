import React from 'react';
import { paymentSchedule, projectTimeline } from '@/types/payment';

export const PaymentSchedule: React.FC = () => (
  <section className="p-8 bg-gray-50">
    <h2 className="text-3xl font-bold mb-8 text-brand-dark tracking-wide">Payment Schedule</h2>
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <ul className="space-y-4">
          {paymentSchedule.map(({ percentage, description }) => (
            <li key={percentage} className="flex items-center">
              <span className="text-xl font-bold text-brand-accent w-24">{percentage}%</span>
              <span className="text-gray-700">{description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4">Timeline</h3>
        <ul className="space-y-4">
          {projectTimeline.map(({ phase, duration }) => (
            <li key={phase} className="flex items-center">
              <span className="font-medium text-brand-dark w-48">{phase}:</span>
              <span className="text-brand-accent font-bold">{duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);