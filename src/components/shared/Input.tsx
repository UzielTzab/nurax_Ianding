import React from 'react';
import { cn } from '@/lib/cn';
import type { InputProps } from '@/types';

/**
 * Input Component - Con soporte para label, error, e iconos
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full px-3 py-2 rounded-md border border-neutral-200 text-neutral-900 placeholder-neutral-400',
              'focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent',
              'transition-all duration-300',
              error && 'border-red-500 focus:ring-red-500',
              icon ? 'pl-10' : false,
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
