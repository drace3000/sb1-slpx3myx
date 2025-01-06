import React, { useState } from 'react';
import { Heart, Brain, Battery, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { healthBenefits } from '../../data/healthBenefits';
import BenefitDetail from './BenefitDetail';
import { useInitialAnimation } from '../../hooks/useInitialAnimation';

const iconMap = {
  Heart,
  Brain,
  Battery,
  Shield,
};

export default function BenefitCards() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const shouldAnimate = useInitialAnimation(5000);

  const handleExpand = (title: string) => {
    setExpandedCard(expandedCard === title ? null : title);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {healthBenefits.map((benefit, index) => {
          const Icon = iconMap[benefit.icon as keyof typeof iconMap];
          const isExpanded = expandedCard === benefit.title;

          return (
            <div 
              key={benefit.title}
              className={`bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg ${
                shouldAnimate ? 'animate-slide-up opacity-0' : ''
              }`}
              style={shouldAnimate ? { animationDelay: `${index * 200}ms` } : undefined}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Icon 
                  className={`h-6 w-6 text-green-600 transition-all duration-500 ${
                    isExpanded ? 'animate-spin-float' : ''
                  }`}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {benefit.description}
              </p>
              
              <button
                onClick={() => handleExpand(benefit.title)}
                className="inline-flex items-center text-sm text-green-600 hover:text-green-700 transition-colors"
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

              <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <div className="pt-4 border-t border-gray-100">
                  <BenefitDetail details={benefit.details} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}