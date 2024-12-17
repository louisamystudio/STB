import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

export const IntroHeader: React.FC = () => (
  <motion.div
    className="mb-12 text-center"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
  >
    <h2 className="font-italiana text-4xl tracking-wider text-brand-dark mb-4">
      FROM THE PHYSICAL WORLD TO A DIGITAL REALITY
    </h2>
    <div className="w-24 h-1 bg-brand-accent mx-auto" />
  </motion.div>
);