import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  isVisible: boolean;
  delay: number;
}

export default function ProductCard({ product, isVisible, delay }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg ${
        isVisible ? 'animate-slide-up opacity-0' : ''
      }`}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
    >
      <div className="relative overflow-hidden group p-5">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-48 rounded-xl transform transition-all duration-700 group-hover:scale-110"
          />
          {/* Border overlay that appears on hover */}
          <div className="absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="absolute inset-[2px] border-2 border-green-800 rounded-lg pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
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
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Nutrition Facts</h4>
                <ul className="mt-2 text-sm text-gray-600">
                  {product.nutritionFacts.map((fact, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Growing Time</h4>
                <p className="mt-1 text-sm text-gray-600">{product.growingTime}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Taste Profile</h4>
                <p className="mt-1 text-sm text-gray-600">{product.tasteProfile}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}