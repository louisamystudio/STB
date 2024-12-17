
import React from 'react';
import { motion } from 'framer-motion';
import { CompanyLogo } from '../shared/CompanyLogo';

export const Hero: React.FC = () => (
  <section className="hero-section bg-[#f5f5f5] py-20">
    <div className="container mx-auto px-6">
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <CompanyLogo className="w-48 mb-12" />
        
        <motion.h1 
          className="font-italiana text-[48px] tracking-[0.2em] text-[#333333] mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Scan to BIM Solutions
        </motion.h1>
        
        <motion.p 
          className="font-montserrat text-[20px] text-[#737D74] mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Precision. Innovation. Excellence.
        </motion.p>
        
        <motion.a
          href="mailto:info@louisamy.com"
          className="bg-[#F04E3E] text-white font-montserrat font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Request a Consultation
        </motion.a>
      </motion.div>
    </div>
  </section>
);
