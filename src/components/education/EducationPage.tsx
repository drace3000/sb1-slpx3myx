import React from 'react';
import EducationHero from './EducationHero';
import ResourceDirectory from './ResourceDirectory';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-16">
      <EducationHero />
      <ResourceDirectory />
    </div>
  );
}