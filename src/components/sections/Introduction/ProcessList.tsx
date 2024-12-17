import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, listItem } from '@/utils/animations';

const processes = [
  {
    id: 'precision',
    title: 'Unparalleled Precision',
    description: 'Millimeter-accurate laser scanning capturing every detail.'
  },
  {
    id: 'efficiency',
    title: 'Efficiency Redefined',
    description: 'Faster, reliable results that streamline planning and reduce rework.'
  },
  {
    id: 'integration',
    title: 'Seamless Integration',
    description: 'Digital models ready for tools like Revit, AutoCAD, and Navisworks.'
  }
];

export const ProcessList: React.FC = () => (
  <motion.div
    className="my-12"
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
  >
    <h3 className="text-xl font-medium text-brand-dark mb-8">
      Our process ensures:
    </h3>
    <ul className="space-y-6">
      {processes.map(process => (
        <motion.li
          key={process.id}
          variants={listItem}
          className="flex items-start space-x-4"
        >
          <span className="w-2 h-2 mt-2 bg-brand-accent rounded-full flex-shrink-0" />
          <div>
            <h4 className="font-medium text-brand-dark">{process.title}</h4>
            <p className="text-gray-600">{process.description}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);