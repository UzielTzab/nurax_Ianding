import React from 'react';
import { cn } from '@/lib/cn';
import type { BadgeProps } from '@/types';

/**
 * Badge Component - Para tags, labels, etc
 * 5 variantes de colores
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  children,
  className,
}) => {
  const variantClasses = {
    success: 'bg-green-50 text-green-700 border border-green-200',
    danger: 'bg-red-50 text-red-700 border border-red-200',
    warning: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
    info: 'bg-blue-50 text-blue-700 border border-blue-200',
    neutral: 'bg-neutral-100 text-neutral-700 border border-neutral-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';

export default Badge;
