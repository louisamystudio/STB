
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'Consultation',
    description: 'Understanding your project\'s needs and objectives.'
  },
  {
    number: 2,
    title: 'On-Site Scanning',
    description: 'Capturing millimeter-precise data with 3D laser scanning.'
  },
  {
    number: 3,
    title: 'Data Processing',
    description: 'Converting scans into detailed BIM models and drawings.'
  },
  {
    number: 4,
    title: 'Final Deliverables',
    description: 'Providing certified BIM models, drawings, and documentation.'
  }
];

export const HowWeWork: React.FC = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-italiana text-4xl text-center text-[#333333] mb-12">
        How We Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative text-center group"
          >
            <div className="inline-block p-4 bg-[#F5F5F5] rounded-full shadow-md mb-4 transition-transform duration-300 group-hover:-translate-y-1">
              <span className="text-[#F04E3E] font-montserrat text-2xl font-bold">
                {step.number}
              </span>
            </div>
            <h3 className="font-italiana text-xl text-[#333333] mb-2">
              {step.title}
            </h3>
            <p className="font-montserrat text-[#737D74] text-base">
              {step.description}
            </p>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-[#737D74] opacity-20" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
