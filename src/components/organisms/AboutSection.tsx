'use client';
import { useT } from '@/hooks/useT';
import { CLINIC } from '@/data/mockData';
import { interpolate } from '@/i18n';

export default function AboutSection() {
  const { t } = useT();
  const cards = [
    { title: t.about.excellenceTitle, text: t.about.excellenceText },
    { title: t.about.transparencyTitle, text: t.about.transparencyText },
    { title: t.about.continuityTitle, text: t.about.continuityText },
    { title: t.about.accessibilityTitle, text: t.about.accessibilityText }
  ];
  return (
    <section id="about-clinic" className="bg-brand-midnight text-white py-24 px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
        <div>
          <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wide">{t.about.label}</span>
          <h3 className="text-[30px] font-semibold font-serif mt-2.5 mb-5 text-balance">{t.about.title}</h3>
          <p className="text-[13.5px] text-slate-300 leading-relaxed">{interpolate(t.about.p1, { clinic: CLINIC.name })}</p>
          <p className="text-[13.5px] text-slate-300 leading-relaxed mt-4">
            {interpolate(t.about.p2, { doctors: CLINIC.doctorsCount, patients: CLINIC.patientsCount })}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {cards.map((c) => (
            <div key={c.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h5 className="text-[13px] font-bold text-blue-300 font-serif">{c.title}</h5>
              <p className="text-[11.5px] text-slate-300 leading-relaxed mt-2">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
