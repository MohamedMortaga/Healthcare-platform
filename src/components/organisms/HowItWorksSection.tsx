'use client';
import { useT } from '@/hooks/useT';

export default function HowItWorksSection() {
  const { t } = useT();
  const steps = [
    { num: '01', title: t.steps.s1t, desc: t.steps.s1d },
    { num: '02', title: t.steps.s2t, desc: t.steps.s2d },
    { num: '03', title: t.steps.s3t, desc: t.steps.s3d },
    { num: '04', title: t.steps.s4t, desc: t.steps.s4d }
  ];
  return (
    <section className="max-w-[1280px] mx-auto px-8 py-24">
      <span className="text-[11px] font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wide">{t.steps.label}</span>
      <h3 className="text-[30px] font-semibold font-serif mt-2.5 mb-11">{t.steps.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s) => (
          <div key={s.num}>
            <div className="text-[34px] font-bold font-serif text-brand-border2 dark:text-brand-border2Dark mb-1.5">{s.num}</div>
            <h5 className="text-[14.5px] font-bold font-serif">{s.title}</h5>
            <p className="text-[12.5px] text-brand-body dark:text-brand-bodyDark leading-relaxed mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
