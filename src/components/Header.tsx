import React from 'react';
import { CompanyLogo } from './CompanyLogo';
import { ContactInfo } from './ContactInfo';

interface HeaderProps {
  recipient: string;
  date: string;
}

export const Header: React.FC<HeaderProps> = ({ recipient, date }) => (
  <header className="bg-gray-100 p-8">
    <CompanyLogo />
    <div className="mt-6 space-y-2">
      <h1 className="text-3xl font-bold">SCAN TO BIM SOLUTIONS</h1>
      <p className="text-xl text-gray-600">Precision. Innovation. Excellence.</p>
    </div>
    <div className="mt-6">
      <p className="font-medium">To the Attention of: {recipient}</p>
      <p className="text-gray-600">Date: {date}</p>
    </div>
    <ContactInfo />
  </header>
);