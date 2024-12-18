import React from 'react';
import { motion } from 'framer-motion';
import { paymentSchedule, projectTimeline } from '@/types/payment';

export const PaymentSchedule: React.FC = () => (
  <section className="p-12 bg-white">
    <h2 className="text-3xl font-light text-center mb-12 font-['Italiana']">Payment Schedule</h2>
    <div className="relative max-w-4xl mx-auto">
      {/* Progress Line */}
      <div className="absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gray-200">
        <div className="absolute top-0 left-0 h-full bg-[#f04e3e] w-full transform origin-left transition-transform duration-1000" />
      </div>

      <div className="flex justify-between items-start relative">
        <div className="text-center w-1/3">
          <div className="relative">
            <div className="bg-white border-4 border-[#f04e3e] text-[#f04e3e] rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform hover:scale-105">
              <span className="text-4xl font-bold">50%</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Initial Payment</h3>
          <p className="text-gray-600">
            Upon contract signing
          </p>
        </div>

        <div className="text-center w-1/3">
          <div className="relative">
            <div className="bg-white border-4 border-[#f04e3e] text-[#f04e3e] rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform hover:scale-105">
              <span className="text-4xl font-bold">30%</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Second Payment</h3>
          <p className="text-gray-600">
            Delivery of raw scan data
          </p>
        </div>

        <div className="text-center w-1/3">
          <div className="relative">
            <div className="bg-white border-4 border-[#f04e3e] text-[#f04e3e] rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform hover:scale-105">
              <span className="text-4xl font-bold">20%</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Final Payment</h3>
          <p className="text-gray-600">
            Delivery of final BIM model<br />and certified drawings
          </p>
        </div>
      </div>
    </div>
  </section>
);

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