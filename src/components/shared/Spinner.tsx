import React from 'react';

/**
 * Spinner Component - Para loading states
 */
export const Spinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-3',
    lg: 'w-8 h-8 border-4',
  };

  return (
    <div className={`inline-block ${sizeClasses[size]} border-primary-700 border-r-transparent rounded-full animate-spin`} />
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
