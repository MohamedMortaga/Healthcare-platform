'use client';
import { Doctor } from '@/types';
import ImagePlaceholder from '@/components/atoms/ImagePlaceholder';
import Button from '@/components/atoms/Button';
import { useT } from '@/hooks/useT';

const AVAIL_LABEL: Record<Doctor['nextAvailable'], string> = {
  today: 'Available Today',
  tomorrow: 'Next: Tomorrow',
  monday: 'Next: Monday'
};

export default function DoctorCard({ doctor, onSelect, onBook }: { doctor: Doctor; onSelect: () => void; onBook: () => void }) {
  const { t } = useT();
  return (
    <div className="cursor-pointer group" onClick={onSelect}>
      <div className="relative">
        <ImagePlaceholder label={doctor.name} className="w-full h-[190px]" />
        <span
          className={
            'absolute top-2.5 left-2.5 text-[9.5px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ' +
            (doctor.nextAvailable === 'today'
              ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300'
              : 'bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-accent dark:text-brand-accentDark')
          }
        >
          {AVAIL_LABEL[doctor.nextAvailable]}
        </span>
      </div>
      <h4 className="text-[15px] font-bold font-serif mt-3.5">{doctor.name}</h4>
      <p className="text-[10.5px] font-bold text-brand-accent dark:text-brand-accentDark mt-1 uppercase tracking-wide">{doctor.title}</p>
      <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-brand-border dark:border-brand-borderDark text-xs">
        <span className="text-brand-muted dark:text-brand-mutedDark">EGP {doctor.price}</span>
        <Button
          size="sm"
          variant="secondary"
          onClick={(e) => {
            e.stopPropagation();
            onBook();
          }}
        >
          {t.doctorsHome.book}
        </Button>
      </div>
    </div>
  );
}
