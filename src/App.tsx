import React from 'react';
import { Header } from '@/components/layout/Header';
import { Introduction } from '@/components/sections/Introduction';
import { ScopeOfWork } from '@/components/sections/ScopeOfWork';
import { Investment } from '@/components/sections/Investment';
import { PaymentSchedule } from '@/components/sections/PaymentSchedule';
import { Footer } from '@/components/sections/Footer';
import { useStartupMetrics } from '@/hooks/useStartupMetrics';

const services = [
  {
    service: '3D Scanning and Point Cloud',
    area: '10,000 sq-ft',
    costPerSqFt: '$0.30',
    total: '$3,000'
  },
  {
    service: 'Revit BIM Model',
    area: '10,000 sq-ft',
    costPerSqFt: '$0.50',
    total: '$5,000'
  }
];

function App() {
  useStartupMetrics();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-xl">
        <Header 
          recipient="Arch. Ana Mediavilla"
          date="November 20, 2024"
        />
        <Introduction />
        <ScopeOfWork />
        <Investment 
          services={services}
          grandTotal="$8,000"
        />
        <PaymentSchedule />
        <Footer />
      </div>
    </div>
  );
}

export default App;