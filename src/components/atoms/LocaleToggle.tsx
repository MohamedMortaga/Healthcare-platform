'use client';
import { useUiStore } from '@/store/uiStore';

export default function LocaleToggle() {
  const locale = useUiStore((s) => s.locale);
  const toggleLocale = useUiStore((s) => s.toggleLocale);
  return (
    <button
      onClick={toggleLocale}
      title="Change language"
      className="px-3 py-2 rounded-full text-xs font-bold whitespace-nowrap bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-navy dark:text-brand-navyDark"
    >
      {locale === 'en' ? 'العربية' : 'English'}
    </button>
  );
}
