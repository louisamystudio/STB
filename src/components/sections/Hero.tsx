import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#1C1C1C] bg-gradient-to-b from-[#232323] to-[#1C1C1C]">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
    
    <div className="container mx-auto px-4 py-20 relative z-10 text-center">
      <motion.h1 
        className="heading-xl text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Transform Spaces with Precision and Innovation
      </motion.h1>
      
      <motion.div 
        className="flex gap-6 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button className="luxury-button">
          View Proposal
        </button>
        <button className="luxury-button bg-transparent border-2 border-white">
          Explore Services
        </button>
      </motion.div>
    </div>
  </section>
);