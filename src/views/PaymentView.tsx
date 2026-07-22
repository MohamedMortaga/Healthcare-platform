'use client';
import { useUiStore } from '@/store/uiStore';
import { useBookingStore } from '@/store/bookingStore';
import { useT } from '@/hooks/useT';
import { interpolate } from '@/i18n';
import { MOCK_DOCTORS } from '@/data/mockData';
import StepIndicator from '@/components/molecules/StepIndicator';
import PaymentTabs from '@/components/molecules/PaymentTabs';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';

export default function PaymentView() {
  const { t } = useT();
  const { selectedDoctorId, selectedDateKey, selectedTimeSlot, navigate } = useUiStore();
  const b = useBookingStore();
  const doctor = MOCK_DOCTORS.find((d) => d.id === selectedDoctorId) ?? MOCK_DOCTORS[0];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await b.submitPayment(doctor.id, selectedDateKey, selectedTimeSlot);
    navigate('confirmation');
  };

  const copyFawry = () => {
    navigator.clipboard?.writeText('918362754').catch(() => {});
    b.setField('fawryCopied', true);
    setTimeout(() => b.setField('fawryCopied', false), 2000);
  };

  const depositNowLabel = b.paymentMethod === 'clinic' ? 'EGP 0' : `EGP ${doctor.deposit}`;

  return (
    <div className="w-full max-w-[1100px] mx-auto px-8 py-14 animate-fade-in">
      <StepIndicator current={2} labels={[t.reservation.step1, t.reservation.step2, t.reservation.step3]} />
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
        <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-7">
          <h3 className="text-base font-bold font-serif mb-5">{t.payment.title}</h3>
          <PaymentTabs
            active={b.paymentMethod}
            onChange={(m) => b.setPaymentMethod(m)}
            labels={{ card: t.payment.tabCard, fawry: t.payment.tabFawry, vodafone: t.payment.tabVodafone, clinic: t.payment.tabClinic }}
          />
          <form onSubmit={submit} className="flex flex-col gap-4">
            {b.paymentMethod === 'card' && (
              <div className="flex flex-col gap-3.5">
                <Input value={b.cardName} onChange={(e) => b.setField('cardName', e.target.value)} placeholder={t.payment.cardholder} />
                <Input value={b.cardNumber} onChange={(e) => b.setField('cardNumber', e.target.value)} placeholder={t.payment.cardNumber} mono />
                <div className="grid grid-cols-2 gap-3">
                  <Input value={b.cardExpiry} onChange={(e) => b.setField('cardExpiry', e.target.value)} placeholder="MM/YY" mono className="text-center" />
                  <Input type="password" value={b.cardCvv} onChange={(e) => b.setField('cardCvv', e.target.value)} placeholder="CVV" mono className="text-center" />
                </div>
              </div>
            )}
            {b.paymentMethod === 'fawry' && (
              <>
                <div className="bg-brand-midnight text-white rounded-2xl p-6 text-center">
                  <span className="text-[10px] text-slate-300 uppercase tracking-wide">{t.payment.kioskLabel}</span>
                  <h3 className="text-2xl font-mono text-blue-300 my-2 tracking-widest">918 362 754</h3>
                  <button type="button" onClick={copyFawry} className="mt-1.5 px-3.5 py-1.5 bg-white/10 border border-white/15 rounded-lg text-slate-200 text-[11.5px]">
                    {b.fawryCopied ? t.payment.copied : t.payment.copyCode}
                  </button>
                </div>
                <p className="text-[11.5px] text-brand-body dark:text-brand-bodyDark leading-relaxed">{t.payment.fawryHint}</p>
              </>
            )}
            {b.paymentMethod === 'vodafone' && (
              <div className="flex flex-col gap-3">
                <div className="flex gap-2.5">
                  <Input
                    className="flex-1"
                    value={b.vfWallet}
                    onChange={(e) => b.setField('vfWallet', e.target.value)}
                    placeholder="+20 10 1234 5678"
                    mono
                  />
                  {!b.vfOtpSent && (
                    <Button type="button" size="sm" onClick={() => b.setField('vfOtpSent', true)} className="whitespace-nowrap">
                      {t.payment.sendOtp}
                    </Button>
                  )}
                </div>
                {b.vfOtpSent && (
                  <Input
                    type="password"
                    value={b.vfOtp}
                    onChange={(e) => b.setField('vfOtp', e.target.value)}
                    placeholder={t.payment.otpPlaceholder}
                    mono
                    className="text-center tracking-[0.3em]"
                  />
                )}
              </div>
            )}
            {b.paymentMethod === 'clinic' && (
              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 text-[12.5px] text-emerald-800 dark:text-emerald-300 leading-relaxed">
                {interpolate(t.payment.clinicNote, { price: `EGP ${doctor.price}` })}
              </div>
            )}

            <div className="flex justify-between items-center pt-3.5 border-t border-brand-border dark:border-brand-borderDark">
              <button type="button" onClick={() => navigate('reservation')} className="text-brand-muted dark:text-brand-mutedDark text-[12.5px] font-semibold">
                ← {t.payment.back}
              </button>
              <Button type="submit">{b.paymentMethod === 'clinic' ? t.payment.submitClinic : t.payment.submitDefault}</Button>
            </div>
          </form>
        </div>

        <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6 sticky top-[88px]">
          <h4 className="text-xs font-bold uppercase mb-4 pb-2.5 border-b border-brand-border dark:border-brand-borderDark">{t.payment.summaryTitle}</h4>
          <div className="flex justify-between text-[12.5px] mb-2">
            <span className="text-brand-muted dark:text-brand-mutedDark">{t.reservation.date}</span>
            <strong>{selectedDateKey}</strong>
          </div>
          <div className="flex justify-between text-[12.5px] mb-4">
            <span className="text-brand-muted dark:text-brand-mutedDark">{t.reservation.time}</span>
            <strong className="font-mono">{selectedTimeSlot}</strong>
          </div>
          <hr className="border-brand-border dark:border-brand-borderDark mb-4" />
          <div className="flex justify-between bg-brand-accentBg dark:bg-brand-accentBgDark p-2.5 rounded-lg text-[12.5px] font-bold text-brand-accent dark:text-brand-accentDark">
            <span>{t.payment.depositNow}</span>
            <span>{depositNowLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
