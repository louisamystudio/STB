
import { motion } from 'framer-motion';
import React from 'react';

export const PhysicalToDigital: React.FC = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-italiana text-[36px] text-[#333333] tracking-[0.1em] mb-6">
            From the Physical World to a Digital Reality
          </h2>
          <div className="font-montserrat text-[#737D74] text-base leading-[1.8] space-y-6">
            <p>
              Louis Amy AE Studio is proud to present <span className="font-bold">Scan to BIM Solutions</span> – a revolutionary service that combines <span className="font-bold">terrestrial LiDAR scanning</span> with <span className="font-bold">Building Information Modeling (BIM)</span>.
            </p>
            <p>
              With over a decade of expertise and state-of-the-art equipment, we deliver unmatched:
            </p>
            <ul className="space-y-3 text-[#333333] list-none">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f04e3e] rounded-full mr-3"></span>
                <span className="font-bold text-[#f04e3e]">Precision</span>: Millimeter-level accuracy.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f04e3e] rounded-full mr-3"></span>
                <span className="font-bold text-[#f04e3e]">Efficiency</span>: Faster, detailed results than manual measurements.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f04e3e] rounded-full mr-3"></span>
                <span className="font-bold text-[#f04e3e]">Innovation</span>: Seamless integration with BIM tools like Revit, AutoCAD, and more.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
