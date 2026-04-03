import { useState, useEffect } from 'react';

/**
 * Hook para detectar scroll position
 * Útil para cambiar navbar estado (backdrop, shadow, etc)
 */
export function useScrolled(threshold = 40) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}

export default useScrolled;
