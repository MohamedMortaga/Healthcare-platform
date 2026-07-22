'use client';
import { useUiStore } from '@/store/uiStore';
import { useT } from '@/hooks/useT';
import { CLINIC } from '@/data/mockData';
import { interpolate } from '@/i18n';
import Button from '@/components/atoms/Button';
import ImagePlaceholder from '@/components/atoms/ImagePlaceholder';
import StatItem from '@/components/molecules/StatItem';

export default function HeroSection() {
  const { t } = useT();
  const navigate = useUiStore((s) => s.navigate);

  return (
    <section className="max-w-[1280px] mx-auto px-8 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center animate-fade-in">
      <div>
        <span className="inline-block bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-accent dark:text-brand-accentDark text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wide mb-6">
          {t.hero.badge}
        </span>
        <h2 className="text-[46px] leading-[1.12] font-semibold font-serif text-balance">{t.hero.title}</h2>
        <p className="text-[15px] text-brand-body dark:text-brand-bodyDark mt-5 max-w-[480px] leading-relaxed">
          {interpolate(t.hero.subtitle, { clinic: CLINIC.name })}
        </p>
        <div className="flex items-center gap-3.5 mt-8 flex-wrap">
          <Button onClick={() => navigate('doctors')}>{t.hero.cta1}</Button>
          <Button variant="secondary" onClick={() => navigate('home')}>
            {t.hero.cta2}
          </Button>
        </div>
        <div className="flex items-center gap-6 mt-11">
          <StatItem value={CLINIC.patientsCount} label={t.hero.statPatients} />
          <div className="w-px h-[34px] bg-brand-border2 dark:bg-brand-border2Dark" />
          <StatItem value={CLINIC.doctorsCount} label={t.hero.statSpecialists} />
          <div className="w-px h-[34px] bg-brand-border2 dark:bg-brand-border2Dark" />
          <StatItem value={CLINIC.rating} label={t.hero.statRating} />
        </div>
      </div>
      <div className="relative">
        <ImagePlaceholder label="Clinic interior photo" className="w-full h-[480px]" />
        <div className="absolute left-6 -bottom-7 max-w-[280px] bg-white dark:bg-brand-surfaceDark rounded-2xl border border-brand-border dark:border-brand-borderDark shadow-xl p-5">
          <p className="text-[12.5px] italic text-brand-body dark:text-brand-bodyDark leading-relaxed">
            &ldquo;The most professional cardiac care I&rsquo;ve received in Egypt. Thorough, calm, unhurried.&rdquo;
          </p>
          <p className="text-[11px] font-bold text-brand-navy dark:text-brand-inkDark mt-2.5">— Mahmoud Youssef, patient</p>
        </div>
      </div>
    </section>
  );
}
