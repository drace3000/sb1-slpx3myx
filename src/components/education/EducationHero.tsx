import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';

export default function EducationHero() {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <div ref={ref} className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`flex justify-center mb-4 ${isVisible ? 'animate-bounce' : ''}`}>
          <GraduationCap className="h-12 w-12 text-green-600" />
        </div>
        <h1 className={`text-4xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-slide-up opacity-0' : ''}`}
            style={isVisible ? { animationDelay: '300ms' } : undefined}>
          Educational Resources
        </h1>
        <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${isVisible ? 'animate-slide-up opacity-0' : ''}`}
           style={isVisible ? { animationDelay: '600ms' } : undefined}>
          Explore peer-reviewed research, medical studies, and expert insights about the 
          health benefits and nutritional value of microgreens
        </p>
      </div>
    </div>
  );
}