
import React from 'react';
import { motion } from 'framer-motion';
import { brandConfig } from '@/config/brand';

export const Header: React.FC = () => (
  <section className="bg-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h1 
        className="text-4xl mb-12 text-center"
        style={{ fontFamily: brandConfig.fonts.primary }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Historic Building Laser Scan to BIM Model
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="card-elegant p-6 flex items-start space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="text-2xl text-[#737D74]">👤</span>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Requested by</h3>
            <p className="text-lg text-gray-800">Ingeniero Eliseo Toledo</p>
          </div>
        </motion.div>

        <motion.div 
          className="card-elegant p-6 flex items-start space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-2xl text-[#737D74]">🏢</span>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Company Name</h3>
            <p className="text-lg text-gray-800">ETR ENGINEERING, PSC</p>
          </div>
        </motion.div>

        <motion.div 
          className="card-elegant p-6 flex items-start space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-2xl text-[#737D74]">📁</span>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Project Name</h3>
            <p className="text-lg text-gray-800">MOOG006 - Post Office - San Juan</p>
          </div>
        </motion.div>

        <motion.div 
          className="card-elegant p-6 flex items-start space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-2xl text-[#737D74]">📍</span>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Project Address</h3>
            <p className="text-lg text-gray-800">Fortaleza 63, San Juan, Puerto Rico, 00902</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
