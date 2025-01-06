interface PracticeDetail {
  title: string;
  description: string;
}

export interface SustainablePractice {
  title: string;
  description: string;
  image: string;
  details: PracticeDetail[];
}

export const sustainablePractices: SustainablePractice[] = [
  {
    title: 'Vertical Farming',
    description: 'Maximizing space efficiency while minimizing land use through advanced vertical farming techniques.',
    image: 'https://images.squarespace-cdn.com/content/v1/6132a73afc037602b6a9d765/1631125446725-73MR5H3J7SWLT3I5AS43/April+-+234370208_1477062749316087_6397535405174005760_n.jpg',
    details: [
      {
        title: 'Space Optimization',
        description: 'Our vertical farming system produces up to 10x more yield per square foot compared to traditional farming.'
      },
      {
        title: 'Climate Control',
        description: 'Precise environmental controls ensure optimal growing conditions year-round.'
      },
      {
        title: 'Energy Efficiency',
        description: 'LED lighting and smart climate systems reduce energy consumption by 40%.'
      }
    ]
  },
  {
    title: 'Water Recycling',
    description: 'Closed-loop hydroponic systems that recycle and reuse water, minimizing waste and consumption.',
    image: 'https://microgreensworld.com/wp-content/uploads/2024/06/irrigation-system-in-a-microgreens-greenhouse.jpg',
    details: [
      {
        title: 'Water Conservation',
        description: 'Our closed-loop system recycles 98% of water used, saving thousands of gallons annually.'
      },
      {
        title: 'Nutrient Management',
        description: 'Smart monitoring ensures optimal nutrient levels while preventing waste.'
      },
      {
        title: 'Filtration Technology',
        description: 'Advanced filtration systems maintain water purity without chemical treatments.'
      }
    ]
  }
];