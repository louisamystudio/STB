import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

export const IntroContent: React.FC = () => (
  <motion.div
    className="prose max-w-none"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.3 }}
  >
    <p className="text-lg leading-relaxed text-brand-dark mb-8">
      At Louis Amy AE Studio, we are experts in transforming existing spaces into highly 
      accurate digital twins. Through our advanced Scan-to-BIM Solutions, we merge 
      cutting-edge terrestrial LiDAR scanning with our expertise in Building Information 
      Modeling (BIM).
    </p>
  </motion.div>
);