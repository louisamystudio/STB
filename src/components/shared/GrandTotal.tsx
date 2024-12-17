import React from 'react';

interface GrandTotalProps {
  total: string;
}

export const GrandTotal: React.FC<GrandTotalProps> = ({ total }) => (
  <div className="mt-8 bg-brand-sage bg-opacity-10 p-6 rounded-lg">
    <p className="text-2xl font-bold text-brand-dark flex justify-between items-center">
      <span>Grand Total:</span>
      <span className="text-brand-accent">{total}</span>
    </p>
  </div>
);