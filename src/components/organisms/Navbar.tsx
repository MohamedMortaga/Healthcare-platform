'use client';
import { useUiStore } from '@/store/uiStore';
import { useAuthStore } from '@/store/authStore';
import { useT } from '@/hooks/useT';
import { CLINIC } from '@/data/mockData';
import ThemeToggle from '@/components/atoms/ThemeToggle';
import LocaleToggle from '@/components/atoms/LocaleToggle';
import Button from '@/components/atoms/Button';
import { cn } from '@/lib/cn';

export default function Navbar() {
  const { t } = useT();
  const view = useUiStore((s) => s.view);
  const navigate = useUiStore((s) => s.navigate);
  const { user, isLoggedIn, logout } = useAuthStore();

  const navBtn = (active: boolean) =>
    cn(
      'px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors',
      active ? 'bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-navy dark:text-brand-inkDark font-semibold' : 'text-brand-body dark:text-brand-bodyDark hover:bg-black/5 dark:hover:bg-white/5'
    );

  return (
    <header className="w-full bg-white dark:bg-brand-surfaceDark border-b border-brand-border dark:border-brand-borderDark sticky top-0 z-40">
      <div className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
        <button onClick={() => navigate('home')} className="flex items-center gap-3 text-start">
          <div className="w-[38px] h-[38px] rounded-[10px] bg-brand-navy dark:bg-brand-navyDark flex items-center justify-center text-white font-serif italic font-semibold text-lg flex-shrink-0">
            C
          </div>
          <div>
            <h1 className="text-[17px] font-semibold leading-tight font-serif">{CLINIC.name}</h1>
            <p className="text-[10px] font-semibold text-brand-muted dark:text-brand-mutedDark mt-0.5 uppercase tracking-wide">{CLINIC.tagline}</p>
          </div>
        </button>

        <nav className="flex items-center gap-1.5 flex-wrap">
          <button className={navBtn(view === 'home')} onClick={() => navigate('home')}>
            {t.nav.home}
          </button>
          <button className={navBtn(view === 'doctors' || view === 'profile')} onClick={() => navigate('doctors')}>
            {t.nav.doctors}
          </button>
        </nav>

        <div className="flex items-center gap-2.5 flex-wrap">
          <LocaleToggle />
          <ThemeToggle />
          {isLoggedIn && user ? (
            <div className="flex items-center gap-2.5 bg-brand-cream dark:bg-brand-bgDark pl-3 pr-1.5 py-1.5 rounded-xl border border-brand-border dark:border-brand-borderDark">
              <div className="w-[26px] h-[26px] rounded-full bg-brand-navy dark:bg-brand-navyDark text-white flex items-center justify-center text-[11px] font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="text-xs font-semibold leading-tight">{user.name}</div>
              <button onClick={logout} className="px-2 py-1 text-brand-muted dark:text-brand-mutedDark text-xs font-semibold whitespace-nowrap">
                {t.nav.logout}
              </button>
            </div>
          ) : (
            <button onClick={() => navigate('login')} className="px-3.5 py-2 text-[13px] font-semibold text-brand-navy dark:text-brand-inkDark whitespace-nowrap">
              {t.nav.signin}
            </button>
          )}
          <Button size="sm" onClick={() => navigate('doctors')} className="whitespace-nowrap">
            {t.nav.book}
          </Button>
        </div>
      </div>
    </header>
  );
}
