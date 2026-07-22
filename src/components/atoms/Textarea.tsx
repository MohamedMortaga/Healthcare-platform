'use client';
import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/cn';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, className, ...props }, ref) => (
  <div>
    {label && (
      <label className="block text-[10.5px] font-bold uppercase tracking-wide text-brand-muted dark:text-brand-mutedDark mb-1.5">
        {label}
      </label>
    )}
    <textarea
      ref={ref}
      className={cn(
        'w-full box-border rounded-lg px-3.5 py-2.5 text-sm bg-brand-cream dark:bg-brand-bgDark border border-brand-border2 dark:border-brand-border2Dark text-brand-ink dark:text-brand-inkDark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent/40 font-sans',
        className
      )}
      {...props}
    />
  </div>
));
Textarea.displayName = 'Textarea';
export default Textarea;
