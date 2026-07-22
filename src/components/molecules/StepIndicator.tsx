'use client';

interface StepIndicatorProps {
  current: 1 | 2 | 3;
  labels: [string, string, string];
}

export default function StepIndicator({ current, labels }: StepIndicatorProps) {
  const stateFor = (n: number) => (n < current ? 'done' : n === current ? 'active' : 'todo');
  return (
    <div className="max-w-[440px] mx-auto mb-10 flex items-center justify-between text-[11.5px]">
      {labels.map((label, i) => {
        const n = i + 1;
        const st = stateFor(n);
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <span className={st === 'todo' ? 'text-brand-muted dark:text-brand-mutedDark' : 'text-brand-navy dark:text-brand-inkDark font-bold'}>
              {st === 'done' ? '✓' : `①②③`[n - 1]} {label}
            </span>
            {n < 3 && (
              <span className={'flex-1 h-px mx-3 ' + (st === 'done' ? 'bg-brand-navy dark:bg-brand-navyDark' : 'bg-brand-border2 dark:bg-brand-border2Dark')} />
            )}
          </div>
        );
      })}
    </div>
  );
}
