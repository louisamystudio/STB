
import React from 'react';
import type { InvestmentProps } from '@/types/layout';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, area, costPerSqFt, total }: { 
  title: string;
  area?: string;
  costPerSqFt?: string;
  total: string;
}) => (
  <motion.div 
    className="bg-[#F5F5F5] rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border hover:border-[#737D74]"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h3 className="font-italiana text-2xl text-[#333333] mb-4">{title}</h3>
    {area && costPerSqFt && (
      <div className="font-montserrat text-base text-[#737D74] mb-4">
        <p><strong>Area:</strong> {area}</p>
        <p><strong>Cost/Sq-ft:</strong> {costPerSqFt}</p>
      </div>
    )}
    <p className="font-montserrat font-bold text-xl text-[#F04E3E]">
      Total: {total}
    </p>
  </motion.div>
);

export const Investment: React.FC<InvestmentProps> = ({ services, grandTotal }) => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-italiana text-4xl text-center text-[#333333] mb-12">
        Investment
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.service}
            area={service.area}
            costPerSqFt={service.costPerSqFt}
            total={service.total}
          />
        ))}
        <ServiceCard
          title="Grand Total"
          total={grandTotal}
        />
      </div>
      <div className="text-center">
        <a
          href="mailto:info@louisamy.com"
          className="inline-block bg-[#F04E3E] text-white font-montserrat px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300"
        >
          Approve Proposal & Start Project
        </a>
      </div>
    </div>
  </section>
);
