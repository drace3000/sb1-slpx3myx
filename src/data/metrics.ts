import { LucideIcon, Droplets, Wind, Factory, Sprout } from 'lucide-react';

export interface Metric {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  details: {
    title: string;
    description: string;
  }[];
}

export const metrics: Metric[] = [
  {
    icon: Droplets,
    value: '98%',
    label: 'Less Water Usage',
    description: 'Compared to traditional farming methods',
    details: [
      {
        title: 'Recirculating System',
        description: 'Our hydroponic systems recycle and reuse water continuously, minimizing waste.'
      },
      {
        title: 'Smart Monitoring',
        description: 'Advanced sensors optimize water distribution based on plant needs.'
      },
      {
        title: 'Annual Impact',
        description: 'Saves over 3 million gallons of water per year compared to conventional farming.'
      }
    ]
  },
  {
    icon: Wind,
    value: '90%',
    label: 'Carbon Footprint Reduction',
    description: 'Through local production and efficient systems',
    details: [
      {
        title: 'Local Distribution',
        description: 'Reduced transportation emissions through local delivery networks.'
      },
      {
        title: 'Energy Efficiency',
        description: 'LED lighting and smart climate controls minimize energy consumption.'
      },
      {
        title: 'Vertical Farming',
        description: 'Maximized growing space reduces land use and associated carbon emissions.'
      }
    ]
  },
  {
    icon: Factory,
    value: '0',
    label: 'Pesticides Used',
    description: 'Pure, clean growing environment',
    details: [
      {
        title: 'Controlled Environment',
        description: 'Indoor growing prevents pest infestations naturally.'
      },
      {
        title: 'Biological Controls',
        description: 'Natural predators and beneficial insects maintain plant health.'
      },
      {
        title: 'Clean Air Filtration',
        description: 'HEPA filters ensure a sterile growing environment.'
      }
    ]
  },
  {
    icon: Sprout,
    value: '100%',
    label: 'Renewable Energy',
    description: 'Powered by solar and wind energy',
    details: [
      {
        title: 'Solar Array',
        description: 'Rooftop solar panels generate 75% of our energy needs.'
      },
      {
        title: 'Wind Power',
        description: 'On-site wind turbines provide supplementary power.'
      },
      {
        title: 'Battery Storage',
        description: 'Advanced battery systems ensure 24/7 renewable operation.'
      }
    ]
  }
];