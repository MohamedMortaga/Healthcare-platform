'use client';
import { useEffect, useState } from 'react';
import { useUiStore } from '@/store/uiStore';
import { useAuthStore } from '@/store/authStore';
import { useBookingStore } from '@/store/bookingStore';
import { useT } from '@/hooks/useT';
import { interpolate } from '@/i18n';
import { fetchDoctors } from '@/api/clinicApi';
import { CLINIC } from '@/data/mockData';
import { Doctor } from '@/types';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';

export default function ConfirmationView() {
  const { t } = useT();
  const { selectedDoctorId, selectedDateKey, selectedTimeSlot, navigate } = useUiStore();
  const { setUser } = useAuthStore();
  const b = useBookingStore();
  const [doctor, setDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    fetchDoctors().then((doctors) => {
      setDoctor(doctors.find((d) => d.id === selectedDoctorId) ?? doctors[0] ?? null);
    }).catch(() => setDoctor(null));
  }, [selectedDoctorId]);

  if (!doctor) return null;
  const remaining = b.paymentMethod === 'clinic' ? doctor.price : doctor.price - doctor.deposit;

  const activate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!b.ccPassword.trim()) return;
    setUser({ name: b.resName || 'Valued Patient', phone: b.resPhone || CLINIC.phone, email: b.resEmail || 'patient@clinical.eg', role: 'patient' });
    b.markAccountCreated();
  };

  return (
    <div className="max-w-[640px] mx-auto px-8 py-16 animate-fade-in">
      <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-3xl p-9">
        <div className="text-center mb-7">
          <div className="w-[60px] h-[60px] rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-2xl text-emerald-600 mx-auto mb-4 animate-gentle-bounce">
            ✓
          </div>
          <span className="text-[10.5px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full uppercase">{t.confirmation.badge}</span>
          <h2 className="text-2xl font-semibold font-serif mt-3.5">{t.confirmation.title}</h2>
          <p className="text-[12.5px] text-brand-body dark:text-brand-bodyDark mt-2">{t.confirmation.subtitle}</p>
        </div>

        <div className="bg-brand-midnight text-white rounded-2xl p-4.5 flex justify-between items-center mb-5">
          <div>
            <span className="text-[10px] text-slate-300 uppercase">{t.confirmation.refLabel}</span>
            <div className="text-[17px] font-mono text-blue-300 mt-1">{b.referenceNumber || `CHC-${1000}-EGP`}</div>
          </div>
          <span className="text-[11px] font-bold text-emerald-400">● {t.confirmation.confirmed}</span>
        </div>

        <div className="bg-brand-cream dark:bg-brand-bgDark rounded-2xl p-5 mb-5 flex flex-col gap-2.5 text-[12.5px]">
          <div className="flex justify-between">
            <span className="text-brand-muted dark:text-brand-mutedDark">{t.confirmation.patient}</span>
            <strong>{b.resName}</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-muted dark:text-brand-mutedDark">{t.confirmation.physician}</span>
            <strong>{doctor.name}</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-muted dark:text-brand-mutedDark">{t.confirmation.date}</span>
            <strong>{selectedDateKey}</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-muted dark:text-brand-mutedDark">{t.confirmation.time}</span>
            <strong className="font-mono">{selectedTimeSlot}</strong>
          </div>
          <div className="flex justify-between pt-2.5 border-t border-brand-border2 dark:border-brand-border2Dark">
            <span className="text-brand-muted dark:text-brand-mutedDark">{t.confirmation.remaining}</span>
            <strong className="text-brand-accent dark:text-brand-accentDark">EGP {remaining}</strong>
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 mb-5 text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
          {interpolate(t.confirmation.whatsapp, { phone: b.resPhone || CLINIC.phone })}
        </div>

        {!b.accountCreated ? (
          <div className="border-[1.5px] border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-5 mb-5">
            <h4 className="text-[12.5px] font-bold mb-2.5">{t.confirmation.secureTitle}</h4>
            <form onSubmit={activate} className="flex gap-2.5 flex-wrap">
              <Input
                type="password"
                value={b.ccPassword}
                onChange={(e) => b.setField('ccPassword', e.target.value)}
                placeholder={t.confirmation.passwordPlaceholder}
                className="flex-1 min-w-[180px]"
              />
              <Button type="submit" size="sm">
                {t.confirmation.activate}
              </Button>
            </form>
          </div>
        ) : (
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-3.5 mb-5 text-xs text-emerald-800 dark:text-emerald-300">
            {t.confirmation.activated}
          </div>
        )}

        <div className="flex justify-center">
          <Button onClick={() => navigate('home')}>{interpolate(t.confirmation.backHome, { clinic: CLINIC.name })}</Button>
        </div>
      </div>
    </div>
  );
}
