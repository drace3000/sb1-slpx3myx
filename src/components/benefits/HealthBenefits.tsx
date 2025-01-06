import React from 'react';
import BenefitsHero from './BenefitsHero';
import NutrientComparison from './NutrientComparison';
import BenefitCards from './BenefitCards';

export default function HealthBenefits() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-green-50 to-green-100">
      <BenefitsHero />
      <BenefitCards />
      <div className="mt-24">
        <NutrientComparison />
      </div>
    </section>
  );
}