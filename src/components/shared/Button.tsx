import React from 'react';
import { cn } from '@/lib/cn';
import type { ButtonProps } from '@/types';

/**
 * Button Component - Reutilizable, 5 variantes
 * Props tipadas, sin hardcoding
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      icon,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 cursor-pointer border relative overflow-hidden';

    const variantClasses = {
      primary: 'bg-primary-700 text-white border-transparent shadow-md hover:shadow-lg disabled:opacity-60 before:absolute before:inset-0 before:z-0 before:bg-primary-700 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-500',
      outline: 'bg-transparent text-primary-700 border-2 border-primary-700 disabled:opacity-60 transition-colors duration-500 hover:text-white before:absolute before:inset-0 before:z-0 before:bg-primary-700 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-500',
      secondary: 'bg-neutral-100 text-primary-700 border-transparent shadow-sm disabled:opacity-60 transition-colors duration-500 before:absolute before:inset-0 before:z-0 before:bg-neutral-300 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-500',
      ghost: 'bg-transparent text-primary-700 border-transparent hover:bg-primary-50 disabled:opacity-60',
      white: 'bg-white text-primary-700 border-transparent shadow-md hover:shadow-lg disabled:opacity-60',
    };

    const sizeClasses = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg font-semibold',
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
        ) : icon ? (
          icon
        ) : null}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
