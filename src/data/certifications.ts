interface CertificationDetail {
  title: string;
  description: string;
}

export interface Certification {
  icon: any;
  name: string;
  description: string;
  details: CertificationDetail[];
}

export const certifications: Certification[] = [
  {
    icon: 'Award',
    name: 'USDA Organic',
    description: 'Certified organic growing practices',
    details: [
      {
        title: 'No Synthetic Pesticides',
        description: 'Our growing process is completely free from synthetic pesticides and harmful chemicals'
      },
      {
        title: 'Natural Fertilizers',
        description: 'We use only organic, natural fertilizers and growing mediums'
      },
      {
        title: 'Annual Audits',
        description: 'Regular third-party inspections ensure compliance with USDA organic standards'
      }
    ]
  },
  {
    icon: 'Shield',
    name: 'Global GAP',
    description: 'Good Agricultural Practices certified',
    details: [
      {
        title: 'Food Safety',
        description: 'Comprehensive food safety management systems and regular testing'
      },
      {
        title: 'Traceability',
        description: 'Complete seed-to-sale tracking system for all products'
      },
      {
        title: 'Worker Welfare',
        description: 'Fair labor practices and safe working conditions for all employees'
      }
    ]
  },
  {
    icon: 'CheckCircle',
    name: 'Carbon Neutral',
    description: 'Verified carbon neutral operation',
    details: [
      {
        title: 'Renewable Energy',
        description: '100% powered by solar and wind energy'
      },
      {
        title: 'Offset Programs',
        description: 'Investment in verified carbon offset projects'
      },
      {
        title: 'Efficient Operations',
        description: 'Advanced energy management systems and LED lighting'
      }
    ]
  }
];