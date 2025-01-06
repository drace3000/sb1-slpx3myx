import React from 'react';
import { Flower } from 'lucide-react';
import { AnimatedTitle } from '../ui/AnimatedTitle';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';

export default function SustainabilityHero() {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <div ref={ref} className="relative">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://media.istockphoto.com/id/1427848310/photo/multiracial-group-of-young-men-and-young-women-gather-as-volunteers-to-plant-vegetables-in.jpg?s=612x612&w=0&k=20&c=3dzwDaO5nrQBwlKW0iXAivhp9sarZma_Dp6hD40znAk=")',
          }}
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-transparent to-transparent opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-50 opacity-95" />
        </div>
      </div>

      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`flex items-center justify-center mb-4 ${isVisible ? 'animate-bounce' : ''}`}>
            <Flower className="h-8 w-8 text-green-600" />
          </div>
          <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${isVisible ? 'animate-slide-up opacity-0' : ''}`}
              style={isVisible ? { animationDelay: '300ms' } : undefined}>
            Growing for a Better Tomorrow
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${isVisible ? 'animate-slide-up opacity-0' : ''}`} 
             style={isVisible ? { animationDelay: '600ms' } : undefined}>
            Our commitment to sustainable farming goes beyond organic practices. 
            We're revolutionizing agriculture with innovative solutions that protect 
            our planet while delivering exceptional nutrition.
          </p>
        </div>
      </div>
    </div>
  );
}