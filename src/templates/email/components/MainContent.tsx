
import React from 'react';
import { brandConfig } from '@/config/brand';
import { Service } from '@/types/services';

interface MainContentProps {
  services: Service[];
}

export const MainContent: React.FC<MainContentProps> = ({ services }) => (
  <tr>
    <td className="content" style={brandConfig.styles.content}>
      <h2 style={brandConfig.styles.sectionTitle}>
        Scan to BIM Services
      </h2>
      <p style={brandConfig.styles.text}>
        Transform your existing buildings into precise digital assets with our state-of-the-art 
        Scan to BIM services. Using advanced laser scanning technology, we create accurate 
        Building Information Models that empower your renovation, documentation, and facility 
        management needs.
      </p>
      
      <div className="service-grid" style={brandConfig.styles.serviceGrid}>
        {services.map(service => (
          <div key={service.id} className="service-item" style={brandConfig.styles.serviceItem}>
            <h3 style={brandConfig.styles.serviceTitle}>{service.title}</h3>
            <p style={brandConfig.styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </td>
  </tr>
);
