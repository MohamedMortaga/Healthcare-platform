'use client';
import { Doctor } from '@/types';
import ImagePlaceholder from '@/components/atoms/ImagePlaceholder';
import Button from '@/components/atoms/Button';
import { useT } from '@/hooks/useT';

export default function DoctorListItem({ doctor, onBook }: { doctor: Doctor; onBook: () => void }) {
  const { t } = useT();
  const bioShort = doctor.bio.length > 130 ? doctor.bio.slice(0, 130) + '…' : doctor.bio;
  return (
    <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl overflow-hidden">
      <div className="p-5 flex gap-4">
        <ImagePlaceholder label={doctor.name} className="w-[88px] h-[88px] flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-bold font-serif">{doctor.name}</h3>
          <p className="text-[11px] font-bold text-brand-accent dark:text-brand-accentDark mt-1 uppercase tracking-wide">{doctor.title}</p>
          <div className="text-[11.5px] text-brand-muted dark:text-brand-mutedDark mt-1.5">
            ★ {doctor.rating} ({doctor.reviewCount}) · {doctor.experienceYears} yrs
          </div>
        </div>
      </div>
      <p className="text-xs text-brand-body dark:text-brand-bodyDark leading-relaxed px-5 pb-4">{bioShort}</p>
      <div className="flex justify-between items-center bg-brand-cream dark:bg-brand-bgDark px-5 py-4 border-t border-brand-border dark:border-brand-borderDark">
        <div className="text-[12.5px]">
          <span className="font-bold">EGP {doctor.price}</span>{' '}
          <span className="text-brand-muted dark:text-brand-mutedDark">· EGP {doctor.deposit} deposit</span>
        </div>
        <Button size="sm" onClick={onBook}>
          {t.doctorsPage.book}
        </Button>
      </div>
    </div>
  );
}
