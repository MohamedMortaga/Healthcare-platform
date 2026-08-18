'use client';
import { useState } from 'react';
import { useUiStore } from '@/store/uiStore';
import { useAuthStore } from '@/store/authStore';
import { useBookingStore } from '@/store/bookingStore';
import { useT } from '@/hooks/useT';
import { CLINIC } from '@/data/mockData';
import { loginSchema } from '@/schemas/validation';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';

export default function LoginView() {
  const { t } = useT();
  const { navigate } = useUiStore();
  const { login } = useAuthStore();
  const { prefill } = useBookingStore();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse({ phone, password });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? 'Please fill in all credentials');
      return;
    }

    try {
      const user = await login(phone, password);
      prefill(user.name, user.phone, user.email);
      setError('');
      navigate('home');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid phone or password.');
    }
  };

  return (
    <div className="max-w-[900px] mx-auto px-8 py-16 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-3xl overflow-hidden">
        <div className="bg-brand-midnight text-white p-9 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-semibold font-serif">{CLINIC.name}</h3>
            <p className="text-[10.5px] text-blue-300 uppercase mt-1.5">{t.login.portalLabel}</p>
            <h4 className="text-[15px] font-semibold font-serif mt-7 mb-4">{t.login.unlockTitle}</h4>
            <div className="flex flex-col gap-3.5 text-[11.5px] text-slate-300">
              <div>✓ {t.login.benefit1}</div>
              <div>✓ {t.login.benefit2}</div>
              <div>✓ {t.login.benefit3}</div>
            </div>
          </div>
          <p className="text-[10.5px] text-slate-400 leading-relaxed mt-6 pt-4 border-t border-white/10">{t.login.pdpl}</p>
        </div>
        <div className="p-9">
          <h3 className="text-[17px] font-semibold font-serif">{t.login.signInTitle}</h3>
          <p className="text-[11.5px] text-brand-muted dark:text-brand-mutedDark mt-1.5 mb-5">{t.login.signInSubtitle}</p>
          {error && <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-[11.5px] px-3.5 py-2.5 rounded-lg mb-3.5">{error}</div>}
          <form onSubmit={submit} className="flex flex-col gap-3.5">
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.login.phonePlaceholder} mono />
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t.login.passwordPlaceholder} />
            <Button type="submit" className="w-full mt-1.5">
              {t.login.signIn}
            </Button>
          </form>
          <div className="mt-5 pt-4 border-t border-brand-border dark:border-brand-borderDark text-center text-xs text-brand-muted dark:text-brand-mutedDark">
            {t.login.noAccount}{' '}
            <span className="text-brand-accent dark:text-brand-accentDark font-semibold cursor-pointer" onClick={() => navigate('register')}>
              {t.login.registerFree}
            </span>
          </div>
          <div className="text-center mt-2.5">
            <span className="text-[11.5px] text-brand-muted dark:text-brand-mutedDark cursor-pointer" onClick={() => navigate('doctors')}>
              {t.login.skipGuest}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
