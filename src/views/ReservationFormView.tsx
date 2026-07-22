'use client';
import { useUiStore } from '@/store/uiStore';
import { useAuthStore } from '@/store/authStore';
import { useBookingStore } from '@/store/bookingStore';
import { useT } from '@/hooks/useT';
import { MOCK_DOCTORS } from '@/data/mockData';
import StepIndicator from '@/components/molecules/StepIndicator';
import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Textarea';
import Button from '@/components/atoms/Button';
import ImagePlaceholder from '@/components/atoms/ImagePlaceholder';
import { cn } from '@/lib/cn';

export default function ReservationFormView() {
  const { t } = useT();
  const { selectedDoctorId, selectedDateKey, selectedTimeSlot, navigate } = useUiStore();
  const { user } = useAuthStore();
  const b = useBookingStore();
  const doctor = MOCK_DOCTORS.find((d) => d.id === selectedDoctorId) ?? MOCK_DOCTORS[0];
  const dateFull = ['today', 'tomorrow', 'tue', 'wed', 'thu'].includes(selectedDateKey) ? selectedDateKey : selectedDateKey;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!b.validateReservation()) return;
    navigate('payment');
  };

  const visitCardClass = (active: boolean) =>
    cn(
      'p-3.5 rounded-xl text-start transition-colors',
      active
        ? 'border-[1.5px] border-brand-navy dark:border-brand-navyDark bg-brand-accentBg dark:bg-brand-accentBgDark'
        : 'border border-brand-border2 dark:border-brand-border2Dark bg-brand-cream dark:bg-brand-bgDark'
    );

  return (
    <div className="w-full max-w-[1100px] mx-auto px-8 py-14 animate-fade-in">
      <StepIndicator current={1} labels={[t.reservation.step1, t.reservation.step2, t.reservation.step3]} />
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
        <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-7">
          <h3 className="text-base font-bold font-serif mb-5">{t.reservation.completeTitle}</h3>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <Input
              label={t.reservation.fullName}
              value={b.resName || user?.name || ''}
              onChange={(e) => b.setField('resName', e.target.value)}
              placeholder="Ahmed Aly El-Sherif"
              error={b.resErrors.name}
            />
            <Input
              label={t.reservation.mobile}
              value={b.resPhone || user?.phone || ''}
              onChange={(e) => b.setField('resPhone', e.target.value)}
              placeholder="+20 10 1234 5678"
              mono
              error={b.resErrors.phone}
            />
            <Input
              label={t.reservation.nationalId}
              value={b.resNationalId}
              onChange={(e) => b.setField('resNationalId', e.target.value)}
              placeholder="29012345678901"
              mono
              error={b.resErrors.nationalId}
            />
            <Input
              label={t.reservation.email}
              type="email"
              value={b.resEmail || user?.email || ''}
              onChange={(e) => b.setField('resEmail', e.target.value)}
              placeholder="patient@example.com"
            />
            <div>
              <label className="block text-[10.5px] font-bold uppercase text-brand-muted dark:text-brand-mutedDark mb-2">{t.reservation.visitPathway}</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button type="button" className={visitCardClass(b.visitType === 'in-person')} onClick={() => b.setVisitType('in-person')}>
                  <strong className="block text-[12.5px]">{t.reservation.inPersonTitle}</strong>
                  <span className="text-[10.5px] text-brand-muted dark:text-brand-mutedDark">{t.reservation.inPersonDesc}</span>
                </button>
                <button type="button" className={visitCardClass(b.visitType === 'video')} onClick={() => b.setVisitType('video')}>
                  <strong className="block text-[12.5px]">{t.reservation.videoTitle}</strong>
                  <span className="text-[10.5px] text-brand-muted dark:text-brand-mutedDark">{t.reservation.videoDesc}</span>
                </button>
              </div>
            </div>
            <Textarea
              label={t.reservation.notes}
              rows={3}
              value={b.doctorNotes}
              onChange={(e) => b.setField('doctorNotes', e.target.value)}
              placeholder={t.reservation.notesPlaceholder}
            />
            <div className="flex justify-between items-center pt-2.5 border-t border-brand-border dark:border-brand-borderDark">
              <button type="button" onClick={() => navigate('profile')} className="text-brand-muted dark:text-brand-mutedDark text-[12.5px] font-semibold">
                ← {t.reservation.back}
              </button>
              <Button type="submit">{t.reservation.proceed}</Button>
            </div>
          </form>
        </div>

        <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6 sticky top-[88px]">
          <h4 className="text-xs font-bold uppercase mb-4 pb-2.5 border-b border-brand-border dark:border-brand-borderDark">{t.reservation.overviewTitle}</h4>
          <div className="flex gap-3 items-center bg-brand-cream dark:bg-brand-bgDark p-3 rounded-xl mb-4">
            <ImagePlaceholder label={doctor.name} className="w-12 h-12 flex-shrink-0" />
            <div>
              <strong className="text-[12.5px]">{doctor.name}</strong>
              <div className="text-[11px] text-brand-accent dark:text-brand-accentDark font-semibold">{doctor.title}</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-[12.5px]">
            <div className="flex justify-between">
              <span className="text-brand-muted dark:text-brand-mutedDark">{t.reservation.date}</span>
              <strong>{dateFull}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-muted dark:text-brand-mutedDark">{t.reservation.time}</span>
              <strong className="font-mono">{selectedTimeSlot}</strong>
            </div>
          </div>
          <hr className="border-brand-border dark:border-brand-borderDark my-4" />
          <div className="flex justify-between text-[12.5px] mb-2">
            <span className="text-brand-muted dark:text-brand-mutedDark">{t.reservation.totalFee}</span>
            <strong>EGP {doctor.price}</strong>
          </div>
          <div className="flex justify-between bg-brand-accentBg dark:bg-brand-accentBgDark p-2.5 rounded-lg text-[12.5px] font-bold text-brand-accent dark:text-brand-accentDark">
            <span>{t.reservation.depositNow}</span>
            <span>EGP {doctor.deposit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
