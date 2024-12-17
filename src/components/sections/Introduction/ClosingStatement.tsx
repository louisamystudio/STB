import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

export const ClosingStatement: React.FC = () => (
  <motion.div
    className="mt-12 text-center"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.6 }}
  >
    <p className="text-lg leading-relaxed text-brand-dark mb-8">
      We bring clarity to your projects by documenting reality with exceptional accuracy. 
      From the physical environment to an interactive virtual reality, Louis Amy AE Studio 
      delivers excellence you can trust.
    </p>
  </motion.div>
);