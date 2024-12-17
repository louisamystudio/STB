import React from 'react';
import { contactDetails } from '@/config/company';

export const ContactInfo: React.FC = () => (
  <div className="mt-4 text-sm text-gray-600">
    <p>{contactDetails.companyName}</p>
    <p>
      {contactDetails.email} | <strong>Office:</strong> {contactDetails.office} |{' '}
      <strong>Mobile:</strong> {contactDetails.mobile}
    </p>
  </div>
);