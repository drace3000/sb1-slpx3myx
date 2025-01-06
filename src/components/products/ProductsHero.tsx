import React from 'react';
import { Sprout } from 'lucide-react';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';

export default function ProductsHero() {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <div ref={ref} className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7nVvnpCQ-ILBOgV8_RaMx1MGG_LFmnCepw&s")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-transparent to-transparent opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-50 opacity-95" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 py-20">
        <div className="text-center">
          <div className={`flex items-center justify-center mb-4 ${isVisible ? 'animate-bounce' : ''}`}>
            <Sprout className="h-8 w-8 text-green-600" />
          </div>
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-slide-up opacity-0' : ''}`}
              style={isVisible ? { animationDelay: '300ms' } : undefined}>
            Our Microgreens
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${isVisible ? 'animate-slide-up opacity-0' : ''}`}
             style={isVisible ? { animationDelay: '600ms' } : undefined}>
            Explore our selection of nutrient-rich microgreens, each carefully cultivated 
            for optimal flavor and nutritional content
          </p>
        </div>
      </div>
    </div>
  );
}