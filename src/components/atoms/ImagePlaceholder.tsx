'use client';
import { cn } from '@/lib/cn';

interface ImagePlaceholderProps {
  label: string;
  shape?: 'rounded' | 'circle';
  className?: string;
}

// Stand-in for a real <img>/next/image until the clinic supplies photography.
export default function ImagePlaceholder({ label, shape = 'rounded', className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center text-center bg-brand-accentBg dark:bg-brand-accentBgDark border-2 border-dashed border-brand-navy/20 dark:border-brand-navyDark/40 text-brand-navy dark:text-brand-navyDark text-[11px] font-medium px-2',
        shape === 'circle' ? 'rounded-full' : 'rounded-2xl',
        className
      )}
    >
      {label}
    </div>
  );
}
