
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description }) => (
  <motion.div
    className="bg-[#F5F5F5] rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border hover:border-[#737D74]"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="w-full h-48 mx-auto mb-6 rounded-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="font-italiana text-2xl text-[#333333] mb-4">{title}</h3>
    <p className="font-montserrat text-base text-[#737D74] leading-relaxed">{description}</p>
  </motion.div>
);

export const ScopeOfWork: React.FC = () => {
  const services = [
    {
      imageSrc: "/images/image6.png",
      title: "High-Precision 3D Laser Scanning",
      description: "Capture of high-resolution scans with millimeter-level precision and a range of up to 150 meters for large-scale environments."
    },
    {
      imageSrc: "/images/image45.png",
      title: "BIM Model Creation",
      description: "Development of LOD 200–300 BIM models with precise geometry, intelligent components, and parametric data for project planning."
    },
    {
      imageSrc: "/images/image44.png",
      title: "Deliverables",
      description: "Includes 3D point cloud data (RCP, E57, PTS), certified as-measured drawings (DWG, PDF), and 360° virtual panoramas for easy access."
    },
    {
      imageSrc: "/images/image50.png",
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
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
