import React from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from '@/components/layout/Header';
import { Introduction } from '@/components/sections/Introduction';
import { PhysicalToDigital } from '@/components/sections/PhysicalToDigital';
import { ScopeOfWork } from '@/components/sections/ScopeOfWork';
import { Investment } from '@/components/sections/Investment';
import { PaymentSchedule } from '@/components/sections/PaymentSchedule';
import { Footer } from '@/components/sections/Footer';
import { useStartupMetrics } from '@/hooks/useStartupMetrics';
import { HowWeWork } from './components/sections/HowWeWork';

const calculateTotal = (area: number, cost: number) => (area * cost).toFixed(2);

const area = 8755.00;
const services = [
  {
    service: '3D Scanning and Point Cloud',
    area: area.toLocaleString() + ' sq-ft',
    costPerSqFt: '$0.50',
    total: '$' + calculateTotal(area, 0.50)
  },
  {
    service: 'Revit BIM Model',
    area: area.toLocaleString() + ' sq-ft',
    costPerSqFt: '$0.65',
    total: '$' + calculateTotal(area, 0.65)
  }
];

function App() {
  useStartupMetrics();

  return (
    <ErrorBoundary>
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
          grandTotal="$10,068.25"
        />
        <HowWeWork />
        <PaymentSchedule />
        <Footer />
      </div>
    </div>
    </ErrorBoundary>
  );
}

export default App;