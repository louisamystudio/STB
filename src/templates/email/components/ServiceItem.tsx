import React from 'react';
import { Service } from '@/types/services';
import { brandConfig } from '@/config/brand';

interface ServiceItemProps {
  service: Service;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => (
  <div className="service-item" style={brandConfig.styles.serviceItem}>
    <h3 style={brandConfig.styles.serviceTitle}>
      {service.title}
    </h3>
    <p className="text" style={brandConfig.styles.serviceText}>
      {service.description}
    </p>
  </div>
);