'use client';
import { useState } from 'react';
import { useUiStore } from '@/store/uiStore';
import { useAuthStore } from '@/store/authStore';
import { useBookingStore } from '@/store/bookingStore';
import { useT } from '@/hooks/useT';
import { interpolate } from '@/i18n';
import { CLINIC } from '@/data/mockData';
import { registerSchema } from '@/schemas/validation';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';

export default function RegisterView() {
  const { t } = useT();
  const { navigate } = useUiStore();
  const { register } = useAuthStore();
  const { prefill } = useBookingStore();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = registerSchema.safeParse({ name, phone, email, password, consent });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? 'Please complete all required fields');
      return;
    }
    const user = await register({ name, phone, email, password });
    prefill(user.name, user.phone, user.email);
    setError('');
    navigate('home');
  };

  return (
    <div className="max-w-[460px] mx-auto px-8 py-16 animate-fade-in">
      <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-3xl p-8">
        <h3 className="text-[17px] font-semibold font-serif">{t.register.title}</h3>
        <p className="text-[11.5px] text-brand-muted dark:text-brand-mutedDark mt-1.5 mb-5">{interpolate(t.register.subtitle, { clinic: CLINIC.name })}</p>
        {error && <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-[11.5px] px-3.5 py-2.5 rounded-lg mb-3.5">{error}</div>}
        <form onSubmit={submit} className="flex flex-col gap-3.5">
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.register.namePlaceholder} />
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.register.phonePlaceholder} mono />
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.register.emailPlaceholder} />
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t.register.passwordPlaceholder} />
          <label className="flex gap-2.5 items-start text-[11px] text-brand-body dark:text-brand-bodyDark leading-relaxed">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5" />
            <span>{t.register.consent}</span>
          </label>
          <Button type="submit" className="w-full mt-1">
            {t.register.button}
          </Button>
        </form>
        <div className="mt-5 pt-4 border-t border-brand-border dark:border-brand-borderDark text-center text-xs text-brand-muted dark:text-brand-mutedDark">
          {t.register.already}{' '}
          <span className="text-brand-accent dark:text-brand-accentDark font-semibold cursor-pointer" onClick={() => navigate('login')}>
            {t.register.signIn}
          </span>
        </div>
      </div>
    </div>
  );
}
