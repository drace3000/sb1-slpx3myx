import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Leaf } from 'lucide-react';
import { sustainablePractices } from '../../data/sustainablePractices';
import PracticeDetails from './PracticeDetails';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';

export default function SustainablePractices() {
  const [expandedPractice, setExpandedPractice] = useState<string | null>(null);
  const { ref, isVisible } = useInViewAnimation();

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid md:grid-cols-2 gap-12">
        {sustainablePractices.map((practice, index) => {
          const isExpanded = expandedPractice === practice.title;
          
          return (
            <div 
              key={practice.title} 
              className={`bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 ${
                isVisible ? 'animate-slide-up opacity-0' : ''
              }`}
              style={isVisible ? { animationDelay: `${index * 300}ms` } : undefined}
            >
              <div className="flex items-center justify-center py-4">
                <Leaf 
                  className={`h-8 w-8 text-green-600 transition-all duration-500 ${
                    isExpanded ? 'animate-spin-float' : ''
                  }`}
                />
                <h3 className="text-2xl font-semibold text-gray-900 ml-3">
                  {index === 0 ? 'Efficient Vertical Farming' : 'Essential Water Recycling'}
                </h3>
              </div>
              <div className="relative overflow-hidden px-3">
                <div className="relative group">
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-64 object-cover transform transition-all duration-700 rounded-2xl shadow-[0_5px_5px_rgba(0,0,0,0.1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-[10px] border-2 border-green-800 rounded-xl pointer-events-none" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{practice.description}</p>
                
                <button
                  onClick={() => setExpandedPractice(isExpanded ? null : practice.title)}
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

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <PracticeDetails details={practice.details} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}