import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

export const VisualComparison: React.FC = () => (
  <motion.div
    className="grid md:grid-cols-2 gap-8 my-12"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.4 }}
  >
    <div className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center">
      <p className="text-center text-gray-500">Point Cloud Scan Visualization</p>
    </div>
    <div className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center">
      <p className="text-center text-gray-500">BIM Model View</p>
    </div>
  </motion.div>
);