'use client';
import { useUiStore } from '@/store/uiStore';
import { useT } from '@/hooks/useT';
import Button from '@/components/atoms/Button';

export default function CtaBanner() {
  const { t } = useT();
  const navigate = useUiStore((s) => s.navigate);
  return (
    <section className="max-w-[1280px] mx-auto px-8 pb-24">
      <div className="bg-brand-navy dark:bg-brand-navyDark rounded-3xl py-14 px-8 text-center">
        <h3 className="text-[28px] font-semibold font-serif text-white">{t.cta.title}</h3>
        <p className="text-[13.5px] text-blue-100/80 mt-3.5 max-w-[460px] mx-auto leading-relaxed">{t.cta.subtitle}</p>
        <Button variant="accentSoft" className="mt-6" onClick={() => navigate('doctors')}>
          {t.cta.button}
        </Button>
      </div>
    </section>
  );
}
