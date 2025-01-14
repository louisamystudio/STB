
import React from 'react';
import { brandConfig } from '@/config/brand';
import { Service } from '@/types/services';

interface MainContentProps {
  services: Service[];
}

export const MainContent: React.FC<MainContentProps> = React.memo(({ services }) => (
  <tr>
    <td className="content" style={{
      padding: '20px',
      backgroundColor: brandConfig.colors.background,
      fontFamily: brandConfig.fonts.secondary
    }}>
      <h2 style={{
        fontFamily: brandConfig.fonts.primary,
        color: brandConfig.colors.secondary,
        marginBottom: '1rem'
      }}>
        Scan to BIM Services
      </h2>
      <p style={{
        color: brandConfig.colors.text.secondary,
        marginBottom: '2rem'
      }}>
        Transform your existing buildings into precise digital assets with our state-of-the-art 
        Scan to BIM services. Using advanced laser scanning technology, we create accurate 
        Building Information Models that empower your renovation, documentation, and facility 
        management needs.
      </p>
      
      <div className="service-grid" style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
      }}>
        {services.map(service => (
          <div key={service.id} className="service-item" style={{
            padding: '1rem',
            backgroundColor: brandConfig.colors.text.light,
            borderRadius: '4px'
          }}>
            <h3 style={{
              fontFamily: brandConfig.fonts.primary,
              color: brandConfig.colors.secondary,
              marginBottom: '0.5rem'
            }}>{service.title}</h3>
            <p style={{
              color: brandConfig.colors.text.secondary
            }}>{service.description}</p>
          </div>
        ))}
      </div>
    </td>
  </tr>
));

MainContent.displayName = 'MainContent';
