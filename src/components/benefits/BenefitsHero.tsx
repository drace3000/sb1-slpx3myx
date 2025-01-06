import React from 'react';
import { Leaf } from 'lucide-react';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';

export default function BenefitsHero() {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <div ref={ref} className="relative">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://www.livewholier.com/cdn/shop/articles/Microgreens-Spoons.png?v=1686325690")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-green-50 via-transparent to-transparent opacity-95"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-50 opacity-95"
          />
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 py-20">
        <div className="text-center">
          <div className={`flex items-center justify-center mb-4 ${isVisible ? 'animate-bounce' : ''}`}>
            <Leaf className="h-8 w-8 text-green-600" />
          </div>
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-slide-up opacity-0' : ''}`}
              style={isVisible ? { animationDelay: '300ms' } : undefined}>
            Supercharge Your Health
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-slide-up opacity-0' : ''}`} 
             style={isVisible ? { animationDelay: '600ms' } : undefined}>
            Microgreens are essentially baby vegetables with up to 40 times more nutrients than their mature counterparts
          </p>
        </div>
      </div>
    </div>
  );
}