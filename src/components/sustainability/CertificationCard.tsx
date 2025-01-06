import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Certification } from '../../data/certifications';
import CertificationDetails from './CertificationDetails';

interface CertificationCardProps {
  certification: Certification;
  IconComponent: React.ComponentType<any>;
}

export default function CertificationCard({ certification, IconComponent }: CertificationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <IconComponent 
            className={`h-8 w-8 text-green-600 transition-all duration-500 ${
              isExpanded ? 'animate-spin-float' : ''
            }`}
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{certification.name}</h4>
          <p className="text-sm text-gray-600 mt-1">{certification.description}</p>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 inline-flex items-center text-sm text-green-600 hover:text-green-700"
          >
            {isExpanded ? (
              <>
                Show Less
                <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                Learn More
                <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <CertificationDetails details={certification.details} />
        </div>
      )}
    </div>
  );
}