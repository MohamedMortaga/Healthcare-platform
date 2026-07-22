'use client';
import { Doctor } from '@/types';
import { useUiStore } from '@/store/uiStore';
import { useT } from '@/hooks/useT';
import { AVAILABLE_DATES, TIME_SLOTS } from '@/data/mockData';
import DateChip from '@/components/molecules/DateChip';
import TimeSlotButton from '@/components/molecules/TimeSlotButton';
import Button from '@/components/atoms/Button';

export default function BookingWidget({ doctor }: { doctor: Doctor }) {
  const { t } = useT();
  const { selectedDateKey, selectedTimeSlot, selectDate, selectTimeSlot, navigate } = useUiStore();

  return (
    <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border2 dark:border-brand-border2Dark rounded-2xl p-6 sticky top-[88px]">
      <h4 className="text-sm font-bold font-serif mb-1.5">{t.profile.bookingTitle}</h4>
      <p className="text-xs text-brand-body dark:text-brand-bodyDark leading-relaxed mb-5">{t.profile.bookingSubtitle}</p>

      <label className="block text-[10px] font-bold uppercase tracking-wide text-brand-muted dark:text-brand-mutedDark mb-2">{t.profile.selectDate}</label>
      <div className="flex gap-2 flex-wrap mb-5">
        {AVAILABLE_DATES.map((d) => (
          <DateChip key={d.key} dayName={d.dayName} dayNum={d.dayNum} selected={d.key === selectedDateKey} onClick={() => selectDate(d.key)} />
        ))}
      </div>

      <label className="block text-[10px] font-bold uppercase tracking-wide text-brand-muted dark:text-brand-mutedDark mb-2">{t.profile.selectTime}</label>
      <div className="grid grid-cols-3 gap-2 mb-5">
        {TIME_SLOTS.map((slot) => (
          <TimeSlotButton key={slot} label={slot} selected={slot === selectedTimeSlot} onClick={() => selectTimeSlot(slot)} />
        ))}
      </div>

      <div className="bg-brand-accentBg dark:bg-brand-accentBgDark rounded-2xl p-4 mb-5">
        <span className="text-[10px] font-bold text-brand-accent dark:text-brand-accentDark uppercase">{t.profile.depositModel}</span>
        <div className="flex justify-between mt-2.5 text-xs">
          <div>
            <span className="block text-brand-body dark:text-brand-bodyDark text-[10px]">{t.profile.payOnline}</span>
            <strong className="text-brand-navy dark:text-brand-inkDark text-[15px]">EGP {doctor.deposit}</strong>
          </div>
          <div>
            <span className="block text-brand-body dark:text-brand-bodyDark text-[10px]">{t.profile.payClinic}</span>
            <strong className="text-[15px]">EGP {doctor.price - doctor.deposit}</strong>
          </div>
        </div>
      </div>

      <Button className="w-full" onClick={() => navigate('reservation')}>
        {t.profile.secureButton}
      </Button>
      <p className="text-center text-[10.5px] text-brand-muted dark:text-brand-mutedDark mt-3">{t.profile.guestNote}</p>
    </div>
  );
}
