import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ActiveView, Locale, Theme } from '@/types';

interface UiState {
  theme: Theme;
  themeIsExplicit: boolean;
  locale: Locale;
  view: ActiveView;
  selectedDoctorId: string;
  selectedDateKey: string;
  selectedTimeSlot: string;
  demoOpen: boolean;
  setTheme: (t: Theme, explicit?: boolean) => void;
  toggleTheme: () => void;
  toggleLocale: () => void;
  navigate: (v: ActiveView) => void;
  selectDoctor: (id: string) => void;
  selectDate: (key: string) => void;
  selectTimeSlot: (slot: string) => void;
  toggleDemo: () => void;
}

// Persisted via zustand/persist (localStorage key "chc-ui-storage") — mirrors
// what a real device-preference + language-preference store looks like.
export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      theme: 'light',
      themeIsExplicit: false,
      locale: 'en',
      view: 'home',
      selectedDoctorId: 'doc-ahmed',
      selectedDateKey: 'today',
      selectedTimeSlot: '05:30 PM',
      demoOpen: false,
      setTheme: (t, explicit = false) => set({ theme: t, themeIsExplicit: explicit || undefined ? explicit : false }),
      toggleTheme: () => set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light', themeIsExplicit: true })),
      toggleLocale: () => set((s) => ({ locale: s.locale === 'en' ? 'ar' : 'en' })),
      navigate: (v) => set({ view: v }),
      selectDoctor: (id) => set({ selectedDoctorId: id }),
      selectDate: (key) => set({ selectedDateKey: key }),
      selectTimeSlot: (slot) => set({ selectedTimeSlot: slot }),
      toggleDemo: () => set((s) => ({ demoOpen: !s.demoOpen }))
    }),
    {
      name: 'chc-ui-storage',
      partialize: (s) => ({ theme: s.theme, themeIsExplicit: s.themeIsExplicit, locale: s.locale })
    }
  )
);
