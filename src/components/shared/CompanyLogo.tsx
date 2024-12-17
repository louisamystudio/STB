import React from 'react';
import { brandConfig } from '@/config/brand';

export const CompanyLogo: React.FC = () => (
  <div className="w-full bg-brand-sage">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-center py-16 px-8">
        <h1 
          className="text-[72px] font-normal tracking-[0.3em] text-brand-dark"
          style={{ 
            fontFamily: brandConfig.fonts.primary,
            lineHeight: '1'
          }}
        >
          {brandConfig.companyName}
        </h1>
      </div>
    </div>
  </div>
);