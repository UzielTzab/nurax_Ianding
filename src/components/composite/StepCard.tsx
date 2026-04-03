import React from 'react';
import { cn } from '@/lib/cn';
import type { StepCardProps } from '@/types';

/**
 * StepCard Composite Component
 * Cards minimalistas para "How It Works"
 */
export const StepCard: React.FC<StepCardProps> = ({ icon, title, desc, number }) => {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {/* Number circle - Numerado limpio */}
      <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-700 text-white rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-xl md:text-2xl font-bold">{number}</span>
      </div>

      {/* Icon - Grande y visible */}
      <div className="text-5xl md:text-6xl">{icon}</div>

      {/* Content - Minimalista y limpio */}
      <div className={cn(
        'rounded-2xl p-6 md:p-7 w-full',
        'bg-white border border-neutral-100',
        'hover:border-neutral-200 hover:shadow-sm transition-all duration-300'
      )}>
        <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">{title}</h3>
        <p className="text-neutral-600 text-sm md:text-base leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

StepCard.displayName = 'StepCard';

export default StepCard;
