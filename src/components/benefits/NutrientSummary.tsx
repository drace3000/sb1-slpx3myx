import React from 'react';
import { Sprout } from 'lucide-react';

export default function NutrientSummary() {
  return (
    <div className="max-w-3xl mx-auto mt-12 bg-white/95 rounded-xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-4">
        <Sprout className="h-6 w-6 text-green-600 flex-shrink-0" />
        <h3 className="text-xl font-semibold text-gray-900">
          Back to Basics: Nature's Nutrient Powerhouse
        </h3>
      </div>
      <p className="text-gray-600 leading-relaxed">
        This comparison illustrates a fundamental truth about nutrition: sometimes the 
        smallest things pack the biggest punch. Microgreens represent a return to 
        basic, wholesome nutrition, offering concentrated doses of essential vitamins 
        and minerals in their most natural form. By harvesting these plants at their 
        peak nutritional moment, we capture nature's intended balance of nutrients, 
        providing a simple yet powerful way to enhance your daily diet.
      </p>
    </div>
  );
}