import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    id: 'visualize',
    text: 'Visualize existing spaces in interactive 3D environments.'
  },
  {
    id: 'analyze',
    text: 'Analyze every corner with pinpoint accuracy, from walls and structural elements to fine details.'
  },
  {
    id: 'integrate',
    text: 'Integrate BIM-ready models into your workflows using platforms like Revit, AutoCAD, and Navisworks.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const CapabilityList: React.FC = () => (
  <motion.div
    className="my-12"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <p className="text-lg font-medium text-brand-dark mb-6">
      With millimeter-accurate data and cutting-edge tools, we empower you to:
    </p>
    <ul className="space-y-4">
      {capabilities.map(capability => (
        <motion.li
          key={capability.id}
          variants={itemVariants}
          className="flex items-start space-x-3"
        >
          <span className="w-2 h-2 mt-2 bg-brand-accent rounded-full flex-shrink-0" />
          <span className="text-brand-dark">{capability.text}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);