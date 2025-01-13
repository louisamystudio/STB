import React from 'react';
import { Header } from '@/components/layout/Header';
import { Introduction } from '@/components/sections/Introduction';
import { PhysicalToDigital } from '@/components/sections/PhysicalToDigital';
import { ScopeOfWork } from '@/components/sections/ScopeOfWork';
import { Investment } from '@/components/sections/Investment';
import { PaymentSchedule } from '@/components/sections/PaymentSchedule';
import { Footer } from '@/components/sections/Footer';
import { useStartupMetrics } from '@/hooks/useStartupMetrics';
import { HowWeWork } from './components/sections/HowWeWork';

const services = [
  {
    service: '3D Scanning and Point Cloud',
    area: '8,755.00 sq-ft',
    costPerSqFt: '$0.30',
    total: '$2,626.50'
  },
  {
    service: 'Revit BIM Model',
    area: '8,755.00 sq-ft',
    costPerSqFt: '$0.50',
    total: '$4,377.50'
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
        <PhysicalToDigital />
        <ScopeOfWork />
        <Investment 
          services={services}
          grandTotal="$7,004.00"
        />
        <HowWeWork />
        <PaymentSchedule />
        <Footer />
      </div>
    </div>
  );
}

export default App;