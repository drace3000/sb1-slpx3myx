export interface Product {
  name: string;
  description: string;
  image: string;
  nutritionFacts: string[];
  growingTime: string;
  tasteProfile: string;
}

export const products: Product[] = [
  {
    name: 'Sunflower',
    description: 'Nutrient-dense microgreens with a satisfying crunch and nutty flavor.',
    image: 'https://cdn.shopify.com/s/files/1/2016/2681/files/Black-oil-Sunflower-Large-Microgreens-Seeds_dd8fb822-a31e-4d1f-8a7a-99869197ac2c.jpg?v=1712440778?width=732&height=732',
    nutritionFacts: [
      'High in protein and healthy fats',
      'Rich in vitamins D and B complex',
      'Contains zinc and iron',
      'Good source of fiber'
    ],
    growingTime: '7-10 days',
    tasteProfile: 'Nutty and crunchy with a mild, sunflower seed flavor'
  },
  {
    name: 'Radish',
    description: 'Spicy and colorful microgreens that pack a flavorful punch.',
    image: 'https://cdn.shopify.com/s/files/1/2016/2681/files/Radish-Rambo-Organic-Microgreens_e95c9337-2037-4c98-861f-c283e036d998.jpg?v=1712440780?width=732&height=732',
    nutritionFacts: [
      'High in vitamin C',
      'Rich in antioxidants',
      'Contains glucosinolates',
      'Good source of folate'
    ],
    growingTime: '6-8 days',
    tasteProfile: 'Peppery and zesty with a crisp texture'
  },
  {
    name: 'Peas',
    description: 'Sweet and tender microgreens with excellent nutritional value.',
    image: 'https://cdn.shopify.com/s/files/1/2016/2681/files/Pea-Speckled-Organic-Microgreens-comp_ca62b600-7e9e-47ec-a6c5-e2ddb31b5ca9.jpg?v=1713424983?width=732&height=732',
    nutritionFacts: [
      'High in protein',
      'Rich in vitamins A and C',
      'Contains beta-carotene',
      'Good source of fiber'
    ],
    growingTime: '8-12 days',
    tasteProfile: 'Sweet and delicate with a fresh pea flavor'
  },
  {
    name: 'Broccoli',
    description: 'Nutrient-packed microgreens with powerful health benefits.',
    image: 'https://cdn.shopify.com/s/files/1/2016/2681/products/broccoli-waltham-microgreens-wm_700.jpg?v=1710361058?width=732&height=732',
    nutritionFacts: [
      'High in sulforaphane',
      'Rich in vitamins K and C',
      'Contains calcium',
      'Good source of iron'
    ],
    growingTime: '7-10 days',
    tasteProfile: 'Mild and fresh with a subtle broccoli flavor'
  }
];