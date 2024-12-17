import React from 'react';
import { motion } from 'framer-motion';
import { scanToBIMServices } from '@/types/services';

export const Services: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="heading-lg text-center mb-16">Our Services</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {scanToBIMServices.map((service, index) => (
          <motion.div
            key={service.id}
            className="elegant-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-italiana mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features?.map((feature, i) => (
                <li key={i} className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);