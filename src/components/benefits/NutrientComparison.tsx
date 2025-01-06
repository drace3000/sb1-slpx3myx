import React from 'react';
import { nutrients } from '../../data/nutrients';
import NutrientBar from './NutrientBar';
import NutrientSummary from './NutrientSummary';

export default function NutrientComparison() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-white/95 rounded-2xl shadow-md p-8 border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Nutrient Comparison
        </h3>
        <div className="space-y-6">
          {nutrients.map((nutrient) => (
            <NutrientBar key={nutrient.name} {...nutrient} />
          ))}
        </div>
      </div>
      <NutrientSummary />
    </div>
  );
}