'use client';
import { cn } from '@/lib/cn';

export default function TimeSlotButton({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'py-2.5 px-1 rounded-lg text-xs font-mono font-semibold transition-colors',
        selected
          ? 'bg-brand-midnight text-white'
          : 'border border-brand-border2 dark:border-brand-border2Dark bg-white dark:bg-brand-surfaceDark text-brand-body dark:text-brand-bodyDark'
      )}
    >
      {label}
    </button>
  );
}
