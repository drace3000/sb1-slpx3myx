import { useState, useEffect } from 'react';

export function useInitialAnimation(duration = 5000) {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return shouldAnimate;
}