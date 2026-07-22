'use client';
import { ClinicService } from '@/types';

export default function ServiceCard({ service }: { service: ClinicService }) {
  return (
    <div className="bg-brand-cream dark:bg-brand-bgDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6">
      <div className="w-10 h-10 rounded-xl bg-brand-accentBg dark:bg-brand-accentBgDark flex items-center justify-center mb-4 text-brand-accent dark:text-brand-accentDark">
        ♥
      </div>
      <h4 className="text-[15px] font-bold font-serif">{service.title}</h4>
      <p className="text-[12.5px] text-brand-body dark:text-brand-bodyDark leading-relaxed mt-2">{service.description}</p>
    </div>
  );
}
