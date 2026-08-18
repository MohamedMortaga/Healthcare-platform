'use client';
import { useEffect, useState } from 'react';
import { useT } from '@/hooks/useT';
import { fetchServices } from '@/api/clinicApi';
import { ClinicService } from '@/types';
import ServiceCard from '@/components/molecules/ServiceCard';

export default function ServicesSection() {
  const { t } = useT();
  const [services, setServices] = useState<ClinicService[]>([]);

  useEffect(() => {
    fetchServices().then(setServices).catch(() => setServices([]));
  }, []);

  return (
    <section id="services-section" className="max-w-[1280px] mx-auto px-8 pt-24 pb-8">
      <span className="text-[11px] font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wide">{t.services.label}</span>
      <h3 className="text-[32px] font-semibold font-serif mt-2.5 mb-10 max-w-[640px] text-balance">{t.services.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </section>
  );
}
