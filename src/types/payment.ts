export interface PaymentMilestone {
  percentage: number;
  description: string;
}

export interface ProjectTimeline {
  phase: string;
  duration: string;
}

export const paymentSchedule: PaymentMilestone[] = [
  { percentage: 50, description: 'Upon contract signing' },
  { percentage: 30, description: 'Delivery of raw scan data' },
  { percentage: 20, description: 'Delivery of final BIM model and certified drawings' }
] as const;

export const projectTimeline: ProjectTimeline[] = [
  { phase: 'Scanning & Processing', duration: '5-7 business days' },
  { phase: 'BIM Model Creation', duration: '10-15 business days' }
] as const;