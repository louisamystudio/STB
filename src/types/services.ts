export interface Service {
  id: string;
  title: string;
  description: string;
  features?: string[];
}

export const scanToBIMServices: Service[] = [
  {
    id: 'laser-scanning',
    title: '3D Laser Scanning',
    description: 'High-precision point cloud capture with millimeter accuracy',
    features: ['Millimeter-level accuracy', 'Range up to 150 meters']
  },
  {
    id: 'bim-modeling',
    title: 'BIM Modeling',
    description: 'Detailed 3D models with intelligent building information',
    features: ['LOD 200 models', 'Exterior and interior elements']
  },
  {
    id: 'documentation',
    title: 'Documentation',
    description: 'Comprehensive as-built drawings and specifications',
    features: ['3D Point Cloud Data', 'As-Measured Drawings']
  }
] as const;