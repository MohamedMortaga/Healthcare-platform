'use client';
import { cn } from '@/lib/cn';

interface DateChipProps {
  dayName: string;
  dayNum: number;
  selected: boolean;
  onClick: () => void;
}

export default function DateChip({ dayName, dayNum, selected, onClick }: DateChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex-shrink-0 w-[52px] py-2.5 rounded-xl text-center transition-colors',
        selected
          ? 'bg-brand-navy dark:bg-brand-navyDark text-white'
          : 'border border-brand-border2 dark:border-brand-border2Dark bg-brand-cream dark:bg-brand-bgDark text-brand-body dark:text-brand-bodyDark'
      )}
    >
      <span className="block text-[9.5px] uppercase">{dayName}</span>
      <span className="block text-xs font-bold mt-0.5">{dayNum}</span>
    </button>
  );
}
