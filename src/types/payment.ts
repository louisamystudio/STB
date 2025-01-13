
export interface TermSection {
  title: string;
  content: string[];
}

export interface PaymentMilestone {
  title: string;
  percentage: number;
  description: string;
}

export interface ProjectTimeline {
  phase: string;
  duration: string;
}

export const projectTimeline: ProjectTimeline[] = [
  { phase: 'Scanning', duration: '1-3 business days' },
  { phase: 'BIM Model & Deliverables', duration: '5 business days' }
];

export const terms: TermSection[] = [
  {
    title: 'Scope of Services',
    content: [
      'On-site laser scanning of specified areas',
      'Point cloud data processing and registration',
      'BIM model creation at agreed-upon LOD',
      'Quality control and validation',
      'Delivery in specified file formats',
      'Two rounds of revisions included',
    ],
  },
  {
    title: 'Project Timeline',
    content: [
      'Project initiation within 5 business days of agreement',
      'Laser scanning: 1-3 business days',
      'BIM modeling and deliverables: 5 business days',
      'Review and revision period included',
      'Total project documentation: 6-8 business days',
    ],
  },
  {
    title: 'Payment Terms',
    content: [
      'The payment schedule is divided into two main milestones:',
      'First Payment (50%) - Due upon the completion of laser scanning services.',
      'Final Payment (50%) - Due upon the delivery of all final deliverables.',
      'This straightforward two-part payment structure evenly splits the total project cost between the completion of scanning and the final deliverables.',
    ],
  },
  {
    title: 'Client Responsibilities',
    content: [
      'Provide site access and necessary permits',
      'Ensure areas are accessible and properly lit',
      'Designate project representative',
      'Review deliverables within agreed timeframes',
      'Provide feedback in writing',
      'Maintain confidentiality of proprietary methods',
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      'Point cloud data ownership transfers to client upon final payment',
      'BIM models become client property upon final payment',
      'Louis Amy AE Studio retains rights to methods and processes',
      'Portfolio usage rights retained by Louis Amy AE Studio',
      'No unauthorized reproduction or distribution',
    ],
  },
] as const;

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
