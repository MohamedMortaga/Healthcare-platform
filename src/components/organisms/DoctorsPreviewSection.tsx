'use client';
import { useEffect, useState } from 'react';
import { useUiStore } from '@/store/uiStore';
import { useT } from '@/hooks/useT';
import { fetchDoctors } from '@/api/clinicApi';
import { Doctor } from '@/types';
import DoctorCard from '@/components/molecules/DoctorCard';

export default function DoctorsPreviewSection() {
  const { t } = useT();
  const navigate = useUiStore((s) => s.navigate);
  const selectDoctor = useUiStore((s) => s.selectDoctor);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetchDoctors().then(setDoctors).catch(() => setDoctors([]));
  }, []);

  return (
    <section className="max-w-[1280px] mx-auto px-8 py-24">
      <div className="flex justify-between items-end mb-10 flex-wrap gap-3">
        <div>
          <span className="text-[11px] font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wide">{t.doctorsHome.label}</span>
          <h3 className="text-[32px] font-semibold font-serif mt-2.5">{t.doctorsHome.title}</h3>
        </div>
        <button onClick={() => navigate('doctors')} className="text-[13px] font-semibold text-brand-navy dark:text-brand-inkDark">
          {t.doctorsHome.viewAll}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.slice(0, 4).map((d) => (
          <DoctorCard
            key={d.id}
            doctor={d}
            onSelect={() => {
              selectDoctor(d.id);
              navigate('profile');
            }}
            onBook={() => {
              selectDoctor(d.id);
              navigate('profile');
            }}
          />
        ))}
      </div>
    </section>
  );
}
