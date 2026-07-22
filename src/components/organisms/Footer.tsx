'use client';
import { useUiStore } from '@/store/uiStore';
import { useT } from '@/hooks/useT';
import { CLINIC } from '@/data/mockData';

export default function Footer() {
  const { t } = useT();
  const navigate = useUiStore((s) => s.navigate);

  return (
    <footer className="bg-white dark:bg-brand-surfaceDark border-t border-brand-border dark:border-brand-borderDark pt-14 px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-9">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-[30px] h-[30px] rounded-lg bg-brand-navy dark:bg-brand-navyDark flex items-center justify-center text-white font-serif italic text-sm">
              C
            </div>
            <strong className="font-serif text-sm">{CLINIC.name}</strong>
          </div>
          <p className="text-[11.5px] text-brand-muted dark:text-brand-mutedDark leading-relaxed max-w-[260px]">{t.footer.tagline}</p>
        </div>
        <div>
          <h5 className="text-[10.5px] font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wide mb-3.5">{t.footer.visitUs}</h5>
          <p className="text-xs text-brand-body dark:text-brand-bodyDark leading-loose">
            {CLINIC.address}
            <br />
            {CLINIC.phone}
          </p>
        </div>
        <div>
          <h5 className="text-[10.5px] font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wide mb-3.5">{t.footer.explore}</h5>
          <div className="flex flex-col gap-2 text-xs text-brand-body dark:text-brand-bodyDark">
            <span className="cursor-pointer" onClick={() => navigate('doctors')}>{t.nav.doctors}</span>
            <span className="cursor-pointer" onClick={() => navigate('home')}>{t.nav.services}</span>
            <span className="cursor-pointer" onClick={() => navigate('home')}>{t.nav.about}</span>
            <span className="cursor-pointer" onClick={() => navigate('login')}>{t.nav.signin}</span>
          </div>
        </div>
        <div>
          <h5 className="text-[10.5px] font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wide mb-3.5">{t.footer.hours}</h5>
          <p className="text-xs text-brand-body dark:text-brand-bodyDark leading-loose whitespace-pre-line">{CLINIC.hours}</p>
        </div>
      </div>
      <div className="border-t border-brand-border dark:border-brand-borderDark py-4 flex justify-between flex-wrap gap-2 text-[11px] text-brand-muted dark:text-brand-mutedDark max-w-[1280px] mx-auto">
        <span>© 2026 {CLINIC.name}. {t.footer.rights}</span>
        <span>{t.footer.poweredBy}</span>
      </div>
    </footer>
  );
}
