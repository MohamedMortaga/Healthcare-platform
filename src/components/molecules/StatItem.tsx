'use client';

export default function StatItem({ value, label }: { value: string | number; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold font-serif text-brand-navy dark:text-brand-navyDark">{value}</div>
      <div className="text-[11px] text-brand-muted dark:text-brand-mutedDark mt-0.5 uppercase tracking-wide">{label}</div>
    </div>
  );
}
