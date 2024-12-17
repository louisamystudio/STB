export const contactDetails = {
  companyName: 'Louis Amy AE Studio, LLC',
  email: 'wesley@louisamy.com',
  office: '787-913-9472',
  mobile: '787-202-9472'
} as const;

export const companyServices = [
  {
    id: 'scanning',
    name: '3D Scanning and Point Cloud',
    description: 'High-resolution scans of existing conditions.',
    features: ['Millimeter-level accuracy', 'Range up to 150 meters']
  },
  {
    id: 'bim',
    name: 'Revit BIM Model',
    description: 'Development of LOD 200 models in Revit.',
    features: ['Exterior and interior elements', 'Structural components']
  }
] as const;