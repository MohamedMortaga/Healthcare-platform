'use client';
import { useEffect, useMemo, useState } from 'react';
import { useUiStore } from '@/store/uiStore';
import { useT } from '@/hooks/useT';
import { fetchDoctors } from '@/api/clinicApi';
import { Doctor } from '@/types';
import DoctorListItem from '@/components/molecules/DoctorListItem';
import Button from '@/components/atoms/Button';

type SortBy = 'rating' | 'experience' | 'price-asc' | 'price-desc';
type SpecialtyFilter = 'all' | 'cardiology' | 'interventional' | 'internal';

export default function DoctorsListView() {
  const { t } = useT();
  const { navigate, selectDoctor } = useUiStore();
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState<SpecialtyFilter>('all');
  const [sortBy, setSortBy] = useState<SortBy>('rating');
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetchDoctors().then(setDoctors).catch(() => setDoctors([]));
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    let list = doctors.filter((d) => {
      const matchesSearch = !q || d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q) || d.title.toLowerCase().includes(q);
      const matchesSpecialty =
        specialty === 'all' ||
        (specialty === 'cardiology' && d.specialty.includes('Cardiology') && !d.specialty.includes('Interventional')) ||
        (specialty === 'interventional' && d.specialty.includes('Interventional')) ||
        (specialty === 'internal' && d.specialty.includes('Internal'));
      return matchesSearch && matchesSpecialty;
    });
    list = [...list].sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return b.experienceYears - a.experienceYears;
    });
    return list;
  }, [doctors, search, specialty, sortBy]);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-8 py-14 animate-fade-in">
      <div className="text-xs text-brand-muted dark:text-brand-mutedDark mb-1.5">
        <span className="cursor-pointer" onClick={() => navigate('home')}>{t.doctorsPage.breadcrumb}</span> /{' '}
        <span className="text-brand-navy dark:text-brand-inkDark font-semibold">{t.doctorsHome.title}</span>
      </div>
      <h2 className="text-[30px] font-semibold font-serif">{t.doctorsPage.title}</h2>
      <p className="text-[13px] text-brand-body dark:text-brand-bodyDark mt-2.5">{t.doctorsPage.subtitle}</p>

      <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-5 my-7 flex flex-wrap gap-3.5 items-end">
        <div className="flex-1 min-w-[220px]">
          <label className="block text-[10px] font-bold uppercase text-brand-muted dark:text-brand-mutedDark mb-1.5">{t.doctorsPage.searchLabel}</label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.doctorsPage.searchPlaceholder}
            className="w-full box-border bg-brand-cream dark:bg-brand-bgDark border border-brand-border2 dark:border-brand-border2Dark rounded-lg px-3.5 py-2.5 text-sm"
          />
        </div>
        <div className="min-w-[170px]">
          <label className="block text-[10px] font-bold uppercase text-brand-muted dark:text-brand-mutedDark mb-1.5">{t.doctorsPage.specialtyLabel}</label>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value as SpecialtyFilter)}
            className="w-full bg-brand-cream dark:bg-brand-bgDark border border-brand-border2 dark:border-brand-border2Dark rounded-lg px-3 py-2.5 text-sm"
          >
            <option value="all">{t.doctorsPage.allSpecialties}</option>
            <option value="cardiology">General Cardiology</option>
            <option value="interventional">Interventional Cardiology</option>
            <option value="internal">Internal Medicine</option>
          </select>
        </div>
        <div className="min-w-[150px]">
          <label className="block text-[10px] font-bold uppercase text-brand-muted dark:text-brand-mutedDark mb-1.5">{t.doctorsPage.sortLabel}</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            className="w-full bg-brand-cream dark:bg-brand-bgDark border border-brand-border2 dark:border-brand-border2Dark rounded-lg px-3 py-2.5 text-sm"
          >
            <option value="rating">{t.doctorsPage.sortRating}</option>
            <option value="experience">{t.doctorsPage.sortExperience}</option>
            <option value="price-asc">{t.doctorsPage.sortPriceAsc}</option>
            <option value="price-desc">{t.doctorsPage.sortPriceDesc}</option>
          </select>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((d) => (
            <DoctorListItem
              key={d.id}
              doctor={d}
              onBook={() => {
                selectDoctor(d.id);
                navigate('profile');
              }}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-14 text-center max-w-[440px] mx-auto">
          <h4 className="text-sm font-bold">{t.doctorsPage.noResultsTitle}</h4>
          <p className="text-xs text-brand-muted dark:text-brand-mutedDark mt-2">{t.doctorsPage.noResultsSubtitle}</p>
          <Button
            size="sm"
            variant="accentSoft"
            className="mt-4"
            onClick={() => {
              setSearch('');
              setSpecialty('all');
              setSortBy('rating');
            }}
          >
            {t.doctorsPage.clear}
          </Button>
        </div>
      )}
    </div>
  );
}
