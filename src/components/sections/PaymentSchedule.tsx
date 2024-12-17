
import React from 'react';
import { paymentSchedule, projectTimeline } from '@/types/payment';

export const PaymentSchedule: React.FC = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-italiana text-4xl text-[#333333] mb-12 text-center">
        Payment Schedule
      </h2>
      
      <div className="relative max-w-3xl mx-auto mb-16">
        <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200"/>
        <div className="relative flex justify-between">
          {paymentSchedule.map(({ percentage, description }, index) => (
            <div key={percentage} className="flex flex-col items-center w-32">
              <div className="w-10 h-10 bg-[#f04e3e] rounded-full flex items-center justify-center text-white font-bold mb-3 relative z-10">
                {index + 1}
              </div>
              <h3 className="font-italiana text-lg text-[#333333] mb-1 text-center">
                {percentage}%
              </h3>
              <p className="font-montserrat text-sm text-[#737D74] text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="font-montserrat text-[#333333] text-base">
          <strong>Project Timeline:</strong>
          {projectTimeline.map((phase, index) => (
            <span key={phase.phase}>
              {' '}
              {phase.phase}: <span className="text-[#f04e3e]">{phase.duration}</span>
              {index < projectTimeline.length - 1 ? ' |' : ''}
            </span>
          ))}
        </p>
      </div>
    </div>
  </section>
);
