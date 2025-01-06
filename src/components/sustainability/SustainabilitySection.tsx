import React from 'react';
import SustainabilityHero from './SustainabilityHero';
import ImpactMetrics from './ImpactMetrics';
import SustainablePractices from './SustainablePractices';
import CertificationBadges from './CertificationBadges';

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-24 bg-green-50">
      <SustainabilityHero />
      <div className="mt-20">
        <ImpactMetrics />
        <SustainablePractices />
        <CertificationBadges />
      </div>
    </section>
  );
}