'use client';
import { useUiStore } from '@/store/uiStore';

export default function ThemeToggle() {
  const theme = useUiStore((s) => s.theme);
  const toggleTheme = useUiStore((s) => s.toggleTheme);
  return (
    <button
      onClick={toggleTheme}
      title="Toggle theme"
      className="w-9 h-9 rounded-full flex items-center justify-center bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-navy dark:text-brand-navyDark text-base transition-transform active:scale-90"
    >
      {theme === 'dark' ? '☀' : '🌙'}
    </button>
  );
}
