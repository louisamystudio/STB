export interface HeaderProps {
  recipient: string;
  date: string;
}

export interface ServiceCost {
  service: string;
  area: string;
  costPerSqFt: string;
  total: string;
}

export interface InvestmentProps {
  services: ServiceCost[];
  grandTotal: string;
}