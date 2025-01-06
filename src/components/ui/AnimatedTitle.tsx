import React from 'react';
import { useInitialAnimation } from '../../hooks/useInitialAnimation';

interface AnimatedTitleProps {
  children: string;
}

export function AnimatedTitle({ children }: AnimatedTitleProps) {
  const shouldAnimate = useInitialAnimation(300);

  return (
    <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${shouldAnimate ? 'animate-slide-up opacity-0' : ''}`}>
      {children.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block ${shouldAnimate ? 'hover:scale-105 transition-transform duration-300' : ''}`}
          style={shouldAnimate ? { animationDelay: `${index * 50}ms` } : undefined}
        >
          {char}
        </span>
      ))}
    </h2>
  );
}