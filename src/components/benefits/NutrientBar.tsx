import React from 'react';

interface NutrientBarProps {
  name: string;
  microgreen: number;
  mature: number;
  unit: string;
}

export default function NutrientBar({ name, microgreen, mature, unit }: NutrientBarProps) {
  const maxWidth = Math.max(microgreen, mature);
  const microWidth = (microgreen / maxWidth) * 100;
  const matureWidth = (mature / maxWidth) * 100;

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">per 100g</span>
      </div>
      <div className="space-y-2">
        <div>
          <div className="flex items-center">
            <span className="text-xs font-medium text-green-800 w-20">Microgreen</span>
            <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full transition-all duration-500"
                style={{ width: `${microWidth}%` }}
              />
            </div>
            <span className="ml-3 text-sm text-gray-600">{microgreen}{unit}</span>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <span className="text-xs font-medium text-gray-800 w-20">Mature</span>
            <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gray-400 rounded-full transition-all duration-500"
                style={{ width: `${matureWidth}%` }}
              />
            </div>
            <span className="ml-3 text-sm text-gray-600">{mature}{unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}