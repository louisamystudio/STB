import React from 'react';
import { CompanyLogo } from '@/components/shared/CompanyLogo';
import { ContactInfo } from '@/components/shared/ContactInfo';
import { HeaderProps } from '@/types/layout';

export const Header: React.FC<HeaderProps> = ({ recipient, date }) => (
  <header>
    <CompanyLogo />
    <div className="bg-gray-100 p-8">
      <div className="mt-6 space-y-2">
        <h1 className="text-3xl font-bold tracking-wide">SCAN TO BIM SOLUTIONS</h1>
        <p className="text-xl text-gray-600">Precision. Innovation. Excellence.</p>
      </div>
      <div className="mt-6">
        <p className="font-medium">To the Attention of: {recipient}</p>
        <p className="text-gray-600">Date: {date}</p>
      </div>
      <ContactInfo />
    </div>
  </header>
);