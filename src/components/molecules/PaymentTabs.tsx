'use client';
import { PaymentMethod } from '@/types';
import { cn } from '@/lib/cn';

const METHODS: PaymentMethod[] = ['card', 'fawry', 'vodafone', 'clinic'];

export default function PaymentTabs({
  active,
  onChange,
  labels
}: {
  active: PaymentMethod;
  onChange: (m: PaymentMethod) => void;
  labels: Record<PaymentMethod, string>;
}) {
  return (
    <div className="grid grid-cols-4 gap-2 mb-6">
      {METHODS.map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => onChange(m)}
          className={cn(
            'py-3 px-1 rounded-xl text-xs font-bold transition-colors',
            m === active
              ? 'border-[1.5px] border-brand-navy dark:border-brand-navyDark bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-navy dark:text-brand-inkDark'
              : 'border border-brand-border2 dark:border-brand-border2Dark bg-brand-cream dark:bg-brand-bgDark text-brand-body dark:text-brand-bodyDark'
          )}
        >
          {labels[m]}
        </button>
      ))}
    </div>
  );
}
