import React from 'react';
import type { ServiceCost } from '@/types/layout';

interface InvestmentTableProps {
  services: ServiceCost[];
}

export const InvestmentTable: React.FC<InvestmentTableProps> = ({ services }) => (
  <div className="elegant-card overflow-hidden">
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr className="bg-brand-sage bg-opacity-10">
          <th className="px-6 py-4 text-left text-sm font-medium tracking-wider">Service</th>
          <th className="px-6 py-4 text-left text-sm font-medium tracking-wider">Area (sq-ft)</th>
          <th className="px-6 py-4 text-left text-sm font-medium tracking-wider">Cost/Sq-ft</th>
          <th className="px-6 py-4 text-right text-sm font-medium tracking-wider">Total</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {services.map((service, index) => (
          <tr 
            key={index}
            className="transition-colors hover:bg-gray-50"
          >
            <td className="px-6 py-4 text-sm">{service.service}</td>
            <td className="px-6 py-4 text-sm">{service.area}</td>
            <td className="px-6 py-4 text-sm">{service.costPerSqFt}</td>
            <td className="px-6 py-4 text-sm text-right font-medium">{service.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);