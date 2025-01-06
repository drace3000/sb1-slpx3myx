import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  text: string[] | string;
  children: React.ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom' | 'left' | 'right'>('top');
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showTooltip && tooltipRef.current && containerRef.current) {
      const tooltip = tooltipRef.current;
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      
      const spaceAbove = rect.top;
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceLeft = rect.left;
      const spaceRight = viewportWidth - rect.right;
      
      const tooltipRect = tooltip.getBoundingClientRect();
      
      if (spaceAbove >= tooltipRect.height + 8) {
        setPosition('top');
      } else if (spaceBelow >= tooltipRect.height + 8) {
        setPosition('bottom');
      } else if (spaceRight >= tooltipRect.width + 8) {
        setPosition('right');
      } else {
        setPosition('left');
      }
    }
  }, [showTooltip]);

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 -translate-y-1/2 ml-2';
    }
  };

  const getArrowClasses = () => {
    switch (position) {
      case 'top':
        return 'left-1/2 -translate-x-1/2 top-full border-t-green-600';
      case 'bottom':
        return 'left-1/2 -translate-x-1/2 bottom-full border-b-green-600';
      case 'left':
        return 'top-1/2 -translate-y-1/2 left-full border-l-green-600';
      case 'right':
        return 'top-1/2 -translate-y-1/2 right-full border-r-green-600';
    }
  };

  const renderTooltipContent = () => {
    if (Array.isArray(text)) {
      return text.map((line, index) => (
        <div key={index} className="text-center">
          {line}
        </div>
      ));
    }
    return text;
  };

  return (
    <div className="relative inline-block" ref={containerRef}>
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div 
          ref={tooltipRef}
          className={`absolute z-50 ${getPositionClasses()}`}
        >
          <div className="relative">
            <div className="bg-green-600 text-white text-sm rounded-lg py-2 px-3">
              {renderTooltipContent()}
            </div>
            <div 
              className={`absolute border-8 border-transparent ${getArrowClasses()}`} 
            />
          </div>
        </div>
      )}
    </div>
  );
}