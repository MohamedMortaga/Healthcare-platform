'use client';
import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accentSoft';
  size?: 'sm' | 'md';
}

const VARIANTS: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-brand-navy dark:bg-brand-navyDark text-white hover:opacity-90',
  secondary: 'bg-white dark:bg-brand-surfaceDark text-brand-navy dark:text-brand-inkDark border border-brand-border2 dark:border-brand-border2Dark hover:bg-brand-cream dark:hover:bg-brand-bgDark',
  ghost: 'bg-transparent text-brand-navy dark:text-brand-inkDark hover:bg-brand-accentBg dark:hover:bg-brand-accentBgDark',
  accentSoft: 'bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-accent dark:text-brand-accentDark hover:opacity-90'
};

export default function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full font-semibold transition-all duration-150 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed',
        size === 'md' ? 'px-6 py-3 text-sm' : 'px-4 py-2 text-xs',
        VARIANTS[variant],
        className
      )}
      {...props}
    />
  );
}
