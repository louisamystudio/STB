
import React from 'react';
import { motion } from 'framer-motion';
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
            <motion.div 
              key={percentage} 
              className="flex flex-col items-center w-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-10 h-10 bg-[#f04e3e] rounded-full flex items-center justify-center text-white font-bold mb-3 relative z-10">
                {index + 1}
              </div>
              <h3 className="font-italiana text-lg text-[#333333] mb-1 text-center">
                {percentage}%
              </h3>
              <p className="font-montserrat text-sm text-[#737D74] text-center">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-10 bg-gray-50 p-6 rounded-lg">
        <h3 className="font-italiana text-2xl text-[#333333] mb-6 text-center">Project Timeline</h3>
        <div className="flex flex-col gap-4">
          {projectTimeline.map((phase, index) => (
            <motion.div 
              key={phase.phase}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-2 h-2 bg-[#f04e3e] rounded-full"/>
              <p className="font-montserrat text-[#333333]">
                <span className="font-semibold">{phase.phase}:</span>
                <span className="text-[#f04e3e] ml-2">{phase.duration}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
