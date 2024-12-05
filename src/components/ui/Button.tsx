import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-medium rounded-lg transition-all duration-300 transform hover:scale-105',
        {
          'bg-brand-yellow text-brand-black hover:bg-yellow-400': variant === 'primary',
          'bg-white text-brand-red hover:bg-gray-100': variant === 'secondary',
          'px-6 py-2 text-sm': size === 'sm',
          'px-8 py-3 text-base': size === 'md',
          'px-10 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}