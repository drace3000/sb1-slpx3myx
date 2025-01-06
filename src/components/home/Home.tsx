import React from 'react';
import Hero from './Hero';
import ProductsSection from '../products/ProductsSection';
import HealthBenefits from '../benefits/HealthBenefits';
import SustainabilitySection from '../sustainability/SustainabilitySection';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <ProductsSection />
      <HealthBenefits />
      <SustainabilitySection />
    </div>
  );
}