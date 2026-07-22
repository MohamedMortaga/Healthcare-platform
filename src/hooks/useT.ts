'use client';
import { useUiStore } from '@/store/uiStore';
import { DICTIONARIES } from '@/i18n';

export function useT() {
  const locale = useUiStore((s) => s.locale);
  const dict = DICTIONARIES[locale];
  return { t: dict, locale, isRtl: locale === 'ar' };
}
