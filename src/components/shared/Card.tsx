import React from 'react';
import { cn } from '@/lib/cn';
import type { CardProps } from '@/types';

/**
 * Card Component - 3 variantes (base, elevated, flat)
 * Contenedor reutilizable para cualquier contenido
 */
export const Card: React.FC<CardProps> = ({
  variant = 'base',
  children,
  className,
}) => {
  const variantClasses = {
    base: 'rounded-lg bg-white overflow-hidden',
    elevated: 'rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden',
    flat: 'rounded-lg bg-neutral-50 border border-neutral-200 overflow-hidden',
  };

  return (
    <div className={cn(variantClasses[variant], className)}>
      {children}
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
