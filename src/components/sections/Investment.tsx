import React from 'react';
import { InvestmentTable } from '@/components/shared/InvestmentTable';
import { GrandTotal } from '@/components/shared/GrandTotal';
import type { InvestmentProps } from '@/types/layout';

export const Investment: React.FC<InvestmentProps> = ({ services, grandTotal }) => (
  <section className="p-8 bg-white">
    <h2 className="text-3xl font-bold mb-8 text-brand-dark tracking-wide">INVESTMENT</h2>
    <div className="bg-gray-50 p-6 rounded-lg">
      <InvestmentTable services={services} />
      <GrandTotal total={grandTotal} />
    </div>
  </section>
);