import { useState } from 'react';

/**
 * Hook para manejar mobile menu toggle
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, close };
}

export default useMobileMenu;
