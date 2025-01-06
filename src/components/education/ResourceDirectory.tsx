import React from 'react';
import ResourceSection from './ResourceSection';
import { resources } from '../../data/educationResources';

export default function ResourceDirectory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(resources).map(([category, items]) => (
          <ResourceSection 
            key={category} 
            category={category} 
            resources={items}
          />
        ))}
      </div>
    </div>
  );
}