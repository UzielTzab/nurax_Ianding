import React from 'react';
import { cn } from '@/lib/cn';
import type { StatCardProps } from '@/types';

/**
 * StatCard Composite Component
 * Cards minimalistas para estadísticas de impacto
 */
export const StatCard: React.FC<StatCardProps> = ({ icon, num, label }) => {
  return (
    <div 
      className={cn(
        'group rounded-2xl p-8 md:p-10',
        'bg-white border border-neutral-100',
        'hover:border-neutral-200 hover:shadow-sm transition-all duration-300 cursor-default',
        'flex flex-col items-center justify-center text-center'
      )}
    >
      {/* Icon - Grande y prominente */}
      <div className="text-5xl md:text-6xl mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Number - Verde primario, tipografía fuerte */}
      <p className="text-4xl md:text-5xl font-bold text-primary-700 mb-3 leading-tight">
        {num}
      </p>
      
      {/* Label - Descripción clara y legible */}
      <p className="text-neutral-600 text-sm md:text-base font-medium leading-snug">
        {label}
      </p>
    </div>
  );
};

StatCard.displayName = 'StatCard';

export default StatCard;
