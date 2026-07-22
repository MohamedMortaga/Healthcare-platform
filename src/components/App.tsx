'use client';
import { useEffect } from 'react';
import { useUiStore } from '@/store/uiStore';
import { useT } from '@/hooks/useT';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import DemoScreenSwitcher from '@/components/organisms/DemoScreenSwitcher';
import HomeView from '@/views/HomeView';
import DoctorsListView from '@/views/DoctorsListView';
import DoctorProfileView from '@/views/DoctorProfileView';
import ReservationFormView from '@/views/ReservationFormView';
import PaymentView from '@/views/PaymentView';
import ConfirmationView from '@/views/ConfirmationView';
import LoginView from '@/views/LoginView';
import RegisterView from '@/views/RegisterView';

const VIEWS = {
  home: HomeView,
  doctors: DoctorsListView,
  profile: DoctorProfileView,
  reservation: ReservationFormView,
  payment: PaymentView,
  confirmation: ConfirmationView,
  login: LoginView,
  register: RegisterView
} as const;

export default function App() {
  const { theme, themeIsExplicit, setTheme, view } = useUiStore();
  const { isRtl } = useT();

  // Follow the device/OS color scheme until the patient explicitly toggles
  // the theme; from then on their explicit choice wins (persisted).
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (!themeIsExplicit) setTheme(mq.matches ? 'dark' : 'light');
    const listener = (e: MediaQueryListEvent) => {
      if (!useUiStore.getState().themeIsExplicit) setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ActiveView = VIEWS[view];

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className={(theme === 'dark' ? 'dark ' : '') + (isRtl ? 'font-arabic' : 'font-sans')}>
      <div className="min-h-screen w-full bg-brand-cream dark:bg-brand-bgDark text-brand-ink dark:text-brand-inkDark flex flex-col">
        <Navbar />
        <main className="flex-1 w-full">
          <ActiveView />
        </main>
        <Footer />
        <DemoScreenSwitcher />
      </div>
    </div>
  );
}
