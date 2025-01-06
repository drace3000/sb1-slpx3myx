import React, { useState } from 'react';

interface StatCardProps {
  label: string;
  value: string;
  factoid: string;
  delay: number;
}

export default function StatCard({ label, value, factoid, delay }: StatCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div 
        className="animate-scale-in opacity-0 cursor-help"
        style={{ animationDelay: `${delay}ms` }}
      >
        <p className="text-3xl font-bold text-white">{value}</p>
        <p className="text-green-400">{label}</p>
      </div>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 z-10">
          <div className="bg-green-800/95 backdrop-blur-sm text-white text-sm rounded-lg p-3 animate-fade-in border border-black/80 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            {factoid}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-green-800/95 border-b border-r border-black/80"></div>
          </div>
        </div>
      )}
    </div>
  );
}