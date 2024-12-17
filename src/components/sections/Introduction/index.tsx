import React from 'react';
import { IntroHeader } from './IntroHeader';
import { IntroContent } from './IntroContent';
import { ProcessList } from './ProcessList';
import { VisualComparison } from './VisualComparison';
import { ClosingStatement } from './ClosingStatement';

export const Introduction: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <IntroHeader />
      <IntroContent />
      <ProcessList />
      <VisualComparison />
      <ClosingStatement />
    </div>
  </section>
);