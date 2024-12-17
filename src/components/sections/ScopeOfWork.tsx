
import React from 'react';
import { brandConfig } from '@/config/brand';

interface ServiceCardProps {
  icon: string;
  title: string;
  items: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" style={{ fontFamily: brandConfig.fonts.secondary }}>
    <div className="w-12 h-12 rounded-full bg-[#737D74] flex items-center justify-center mb-4">
      <span className="text-white text-2xl">{icon}</span>
    </div>
    <h4 className="text-xl font-bold mb-4" style={{ 
      fontFamily: brandConfig.fonts.primary,
      color: brandConfig.colors.secondary 
    }}>{title}</h4>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="w-2 h-2 mt-2 mr-2 bg-[#737D74] rounded-full flex-shrink-0" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const ScopeOfWork: React.FC = () => {
  const services = [
    {
      icon: "📡",
      title: "High-Precision 3D Laser Scanning",
      items: [
        "Capture of high-resolution scans with millimeter-level precision",
        "Effective range of up to 150 meters for large-scale environments"
      ]
    },
    {
      icon: "🏗️",
      title: "BIM Model Creation",
      items: [
        "Development of LOD 200 BIM Models in Revit",
        "Detailed modeling of exterior and interior elements",
        "Parametric components for precise project planning"
      ]
    },
    {
      icon: "📊",
      title: "Deliverables",
      items: [
        "3D Point Cloud Data (.RCP, .E57, .PTS)",
        "2D As-Measured Drawings (.DWG, .PDF, .DXF)",
        "Interactive 3D Web Viewer",
        "360 Virtual Panoramas"
      ]
    },
    {
      icon: "✅",
      title: "Certified Documentation",
      items: [
        "Professionally reviewed and validated deliverables",
        "Signed by Wesley Louis López Rivera, PE, M.Arch, BSCE"
      ]
    }
  ];

  return (
    <section className="p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: brandConfig.fonts.primary }}>
          SCOPE OF SERVICES
        </h2>
        <p className="text-center mb-12 text-gray-600" style={{ fontFamily: brandConfig.fonts.secondary }}>
          Transforming Existing Conditions into Actionable Data
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
