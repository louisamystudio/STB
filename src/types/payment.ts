
export interface PaymentMilestone {
  title: string;
  percentage: number;
  description: string;
}

export interface ProjectTimeline {
  phase: string;
  duration: string;
}

export const paymentSchedule: PaymentMilestone[] = [
  { 
    title: "First Payment",
    percentage: 50, 
    description: "Upon completion of laser scanning" 
  },
  { 
    title: "Final Payment",
    percentage: 50, 
    description: "Upon delivery of final deliverables" 
  }
] as const;

export const projectTimeline: ProjectTimeline[] = [
  { phase: 'Scanning & Processing', duration: '5-7 business days' },
  { phase: 'BIM Model Creation', duration: '10-15 business days' }
] as const;
