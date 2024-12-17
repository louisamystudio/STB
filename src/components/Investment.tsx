import React from 'react';

interface ServiceCost {
  service: string;
  area: string;
  costPerSqFt: string;
  total: string;
}

interface InvestmentProps {
  services: ServiceCost[];
  grandTotal: string;
}

export const Investment: React.FC<InvestmentProps> = ({ services, grandTotal }) => (
  <section className="p-8 bg-white">
    <h2 className="text-2xl font-bold mb-6">INVESTMENT</h2>
    
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Service
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Area (sq-ft)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cost/Sq-ft
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {services.map((service, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{service.service}</td>
              <td className="px-6 py-4 whitespace-nowrap">{service.area}</td>
              <td className="px-6 py-4 whitespace-nowrap">{service.costPerSqFt}</td>
              <td className="px-6 py-4 whitespace-nowrap">{service.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="mt-6">
      <p className="text-xl font-bold">Grand Total: {grandTotal}</p>
    </div>
  </section>
);