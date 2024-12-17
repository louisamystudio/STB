import React from 'react';
import { BaseLayout } from './layouts/BaseLayout';
import { EmailHeader } from './components/Header';
import { EmailButton } from './components/Button';
import { MainContent } from './components/MainContent';
import { EmailFooter } from './components/Footer';
import { scanToBIMServices } from '@/types/services';

interface ProposalEmailProps {
  recipientName: string;
  proposalUrl: string;
}

export const ProposalEmail: React.FC<ProposalEmailProps> = ({ 
  recipientName, 
  proposalUrl 
}) => (
  <BaseLayout title="Scan to BIM Proposal">
    <EmailHeader />
    <MainContent services={scanToBIMServices} />
    <EmailButton 
      href={proposalUrl}
      text="View Full Proposal"
    />
    <EmailFooter />
  </BaseLayout>
);