import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';
import { metrics } from '../../data/metrics';

export default function ImpactMetrics() {
  const { ref, isVisible } = useInViewAnimation();
  const [expandedMetric, setExpandedMetric] = useState<string | null>(null);

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => {
          const isExpanded = expandedMetric === metric.label;
          const Icon = metric.icon;
          
          return (
            <div 
              key={metric.label} 
              className={`bg-white rounded-xl p-6 shadow-md border-2 border-green-100 transform transition-all duration-300 ${
                isVisible ? 'animate-slide-up opacity-0' : ''
              }`}
              style={isVisible ? { animationDelay: `${index * 200}ms` } : undefined}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Icon 
                  className={`h-6 w-6 text-green-600 transition-all duration-500 ${
                    isExpanded ? 'animate-spin-float' : ''
                  }`}
                />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{metric.label}</div>
              <p className="text-gray-600 mb-4">{metric.description}</p>
              
              <button
                onClick={() => setExpandedMetric(isExpanded ? null : metric.label)}
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
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
                  {metric.details.map((detail, idx) => (
                    <div 
                      key={detail.title}
                      className="animate-fade-in"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <h5 className="font-medium text-gray-900 mb-1">{detail.title}</h5>
                      <p className="text-sm text-gray-600">{detail.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}