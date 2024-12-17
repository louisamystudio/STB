
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <motion.div
    className="bg-[#F5F5F5] rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border hover:border-[#737D74]"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#737D74] flex items-center justify-center">
      <span className="text-2xl text-white">{icon}</span>
    </div>
    <h3 className="font-italiana text-2xl text-[#333333] mb-4">{title}</h3>
    <p className="font-montserrat text-base text-[#737D74] leading-relaxed">{description}</p>
  </motion.div>
);

export const ScopeOfWork: React.FC = () => {
  const services = [
    {
      icon: "📡",
      title: "High-Precision 3D Laser Scanning",
      description: "Capture of high-resolution scans with millimeter-level precision and a range of up to 150 meters for large-scale environments."
    },
    {
      icon: "🏗️",
      title: "BIM Model Creation",
      description: "Development of LOD 200–300 BIM models with precise geometry, intelligent components, and parametric data for project planning."
    },
    {
      icon: "📊",
      title: "Deliverables",
      description: "Includes 3D point cloud data (RCP, E57, PTS), certified as-measured drawings (DWG, PDF), and 360° virtual panoramas for easy access."
    },
    {
      icon: "✅",
      title: "Certified Documentation",
      description: "Professionally reviewed, validated, and certified deliverables to meet exact project standards and requirements."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-italiana text-4xl text-center text-[#333333] mb-12">
          Scope of Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
