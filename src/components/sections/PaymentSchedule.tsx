
import React from 'react';
import { paymentSchedule, projectTimeline } from '@/types/payment';

export const PaymentSchedule: React.FC = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="font-italiana text-4xl text-[#333333] mb-12">
        Payment Schedule
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto mb-12">
        {paymentSchedule.map(({ percentage, description }) => (
          <div key={percentage} className="flex-1 text-center">
            <div className="w-24 h-24 bg-[#f5f5f5] rounded-full mx-auto flex items-center justify-center shadow-md">
              <span className="font-montserrat text-2xl font-bold text-[#f04e3e]">
                {percentage}%
              </span>
            </div>
            <h3 className="font-italiana text-xl text-[#333333] mt-4 mb-2">
              {description}
            </h3>
            <p className="font-montserrat text-[#737D74] text-base leading-relaxed">
              {percentage === 50 && "Initial payment to begin project preparation and scheduling."}
              {percentage === 30 && "Payment upon completion and delivery of high-resolution scan data."}
              {percentage === 20 && "Payment upon handover of certified BIM models and documentation."}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
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
