import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import type { Resource } from '../../data/educationResources';
import { categoryImages } from '../../data/educationResources';

interface ResourceSectionProps {
  category: string;
  resources: Resource[];
}

export default function ResourceSection({ category, resources }: ResourceSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img
          src={categoryImages[category]}
          alt={category}
          className="w-full h-full object-cover rounded-t-xl transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">{category}</h2>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white hover:text-green-400 transition-colors"
            >
              {isExpanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="p-6 space-y-4">
          {resources.map((resource) => (
            <div key={resource.title} className="group">
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <span>{resource.source}</span>
                      {resource.year && <span>• {resource.year}</span>}
                      {resource.type && <span>• {resource.type}</span>}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}