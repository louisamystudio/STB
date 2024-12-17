
import { CompanyLogo } from '../shared/CompanyLogo';
import { motion } from 'framer-motion';

export const Header: React.FC = () => (
  <>
    <motion.section 
      className="bg-white py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <CompanyLogo className="mx-auto mb-10 w-64" />
          <h1 className="font-italiana text-[52px] text-gray-900 mb-4">Scan to BIM Solutions</h1>
          <p className="font-montserrat text-[22px] text-[#737D74]">Precision. Innovation. Excellence.</p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto bg-white p-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="grid grid-cols-[200px_1fr] gap-y-4">
            <div className="font-montserrat font-bold text-[16px] text-[#737D74]">Project Details:</div>
            <div className="font-montserrat text-[18px] text-[#333333]">Historic Building Laser Scan to BIM Model</div>
            
            <div className="font-montserrat font-bold text-[16px] text-[#737D74]">Requested By:</div>
            <div className="font-montserrat text-[18px] text-[#333333]">Ingeniero Eliseo Toledo</div>
            
            <div className="font-montserrat font-bold text-[16px] text-[#737D74]">Company Name:</div>
            <div className="font-montserrat text-[18px] text-[#333333]">ETR ENGINEERING, PSC</div>
            
            <div className="font-montserrat font-bold text-[16px] text-[#737D74]">Project Name:</div>
            <div className="font-montserrat text-[18px] text-[#333333]">MOOG006 - Post Office - San Juan</div>
            
            <div className="font-montserrat font-bold text-[16px] text-[#737D74]">Project Address:</div>
            <div className="font-montserrat text-[18px] text-[#333333]">Fortaleza 63, San Juan, Puerto Rico, 00902</div>
          </div>
        </motion.div>

            <div className="remittent-item">
              <h3 className="font-italiana text-[#737D74] text-lg mb-2">Requested By</h3>
              <p className="font-montserrat text-gray-900">Ingeniero Eliseo Toledo</p>
            </div>

            <div className="remittent-item">
              <h3 className="font-italiana text-[#737D74] text-lg mb-2">Company Name</h3>
              <p className="font-montserrat text-gray-900">ETR ENGINEERING, PSC</p>
            </div>

            <div className="remittent-item">
              <h3 className="font-italiana text-[#737D74] text-lg mb-2">Project Name</h3>
              <p className="font-montserrat text-gray-900">MOOG006 - Post Office - San Juan</p>
            </div>

            <div className="remittent-item col-span-2">
              <h3 className="font-italiana text-[#737D74] text-lg mb-2">Project Address</h3>
              <p className="font-montserrat text-gray-900">Fortaleza 63, San Juan, Puerto Rico, 00902</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  </>
);
