import React from 'react';
import { Award, CheckCircle, Shield } from 'lucide-react';
import { certifications } from '../../data/certifications';
import CertificationCard from './CertificationCard';

const iconMap = {
  Award,
  Shield,
  CheckCircle
};

export default function CertificationBadges() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <h3 className="text-2xl font-semibold text-center mb-8">Our Certifications</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.name}
              certification={cert}
              IconComponent={iconMap[cert.icon as keyof typeof iconMap]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}