import React from 'react';
import type { CertificationDetail } from '../../data/certifications';

interface CertificationDetailsProps {
  details: CertificationDetail[];
}

export default function CertificationDetails({ details }: CertificationDetailsProps) {
  return (
    <div className="space-y-4">
      {details.map((detail, index) => (
        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <h5 className="font-medium text-gray-900 mb-1">{detail.title}</h5>
          <p className="text-sm text-gray-600">{detail.description}</p>
        </div>
      ))}
    </div>
  );
}