import React from 'react';
import { ExternalLink } from 'lucide-react';

interface BenefitDetailProps {
  details: {
    mainBenefit: string;
    keyNutrients: string[];
    researchUrl: string;
    citation: string;
  };
}

export default function BenefitDetail({ details }: BenefitDetailProps) {
  return (
    <div className="mt-4 pt-4 border-t border-gray-100">
      <p className="text-sm text-gray-600 mb-3">{details.mainBenefit}</p>
      
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-700 mb-1">Key Nutrients:</h4>
        <div className="flex flex-wrap gap-2">
          {details.keyNutrients.map((nutrient) => (
            <span
              key={nutrient}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
            >
              {nutrient}
            </span>
          ))}
        </div>
      </div>
      
      <a
        href={details.researchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-xs text-green-600 hover:text-green-700 transition-colors"
      >
        <ExternalLink className="h-3 w-3 mr-1" />
        View Research
      </a>
      
      <p className="text-xs text-gray-500 mt-2 italic">
        {details.citation}
      </p>
    </div>
  );
}