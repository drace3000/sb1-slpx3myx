interface Benefit {
  title: string;
  description: string;
  icon: any;
  details: {
    mainBenefit: string;
    keyNutrients: string[];
    researchUrl: string;
    citation: string;
  };
}

export const healthBenefits: Benefit[] = [
  {
    title: 'Heart Health',
    description: 'Rich in heart-healthy nutrients like potassium and antioxidants that support cardiovascular function.',
    icon: 'Heart',
    details: {
      mainBenefit: 'Microgreens contain high levels of polyphenols and nitrates that help reduce blood pressure and improve arterial function.',
      keyNutrients: ['Potassium', 'Nitrates', 'Polyphenols', 'Omega-3 fatty acids'],
      researchUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3614697/',
      citation: 'Journal of Agricultural and Food Chemistry: "Assessment of Vitamin and Carotenoid Concentrations of Emerging Food Products: Edible Microgreens"'
    }
  },
  {
    title: 'Brain Function',
    description: 'Packed with omega-3 fatty acids and vitamins that support cognitive function and mental clarity.',
    icon: 'Brain',
    details: {
      mainBenefit: 'Essential nutrients in microgreens support neuroplasticity and may help protect against cognitive decline.',
      keyNutrients: ['Omega-3 fatty acids', 'Vitamin E', 'Folate', 'Antioxidants'],
      researchUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6266976/',
      citation: 'Frontiers in Chemistry: "Microgreens: Assessment of Nutrient Concentrations"'
    }
  },
  {
    title: 'Energy Boost',
    description: 'Natural source of B vitamins and iron that help maintain energy levels throughout the day.',
    icon: 'Battery',
    details: {
      mainBenefit: 'High concentration of B vitamins and iron supports cellular energy production and oxygen transport.',
      keyNutrients: ['Vitamin B12', 'Iron', 'Magnesium', 'Folate'],
      researchUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5362588/',
      citation: 'Journal of Food Composition and Analysis: "Nutrient composition of fresh and dried microgreens"'
    }
  },
  {
    title: 'Immune Support',
    description: 'High in vitamin C and other antioxidants that strengthen your immune system.',
    icon: 'Shield',
    details: {
      mainBenefit: 'Concentrated levels of vitamins C and E, along with other antioxidants, support immune system function.',
      keyNutrients: ['Vitamin C', 'Vitamin E', 'Beta Carotene', 'Zinc'],
      researchUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7600421/',
      citation: 'Nutrients Journal: "The Role of Microgreens in Nutrition and Human Health"'
    }
  }
];