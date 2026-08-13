'use client';
import { useUiStore } from '@/store/uiStore';
import { useT } from '@/hooks/useT';
import { MOCK_DOCTORS, MOCK_REVIEWS } from '@/data/mockData';
import ImagePlaceholder from '@/components/atoms/ImagePlaceholder';
import BookingWidget from '@/components/organisms/BookingWidget';

export default function DoctorProfileView() {
  const { t } = useT();
  const { selectedDoctorId, navigate } = useUiStore();
  const doctor = MOCK_DOCTORS.find((d) => d.id === selectedDoctorId) ?? MOCK_DOCTORS[0];
  const lastName = doctor.name.split(' ').slice(-1)[0];

  return (
    <div className="w-full max-w-[1280px] mx-auto px-8 py-14 animate-fade-in">
      <div className="text-xs text-brand-muted dark:text-brand-mutedDark mb-5">
        <span className="cursor-pointer" onClick={() => navigate('doctors')}>{t.doctorsHome.title}</span> /{' '}
        <span className="text-brand-navy dark:text-brand-inkDark font-semibold">{doctor.name}</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-7 items-start">
        <div className="flex flex-col gap-5">
          <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6 flex gap-5 items-center">
            <ImagePlaceholder label={doctor.name} className="w-[110px] h-[110px] flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold font-serif">{doctor.name}</h2>
              <p className="text-[13px] font-bold text-brand-accent dark:text-brand-accentDark mt-1.5">{doctor.title}</p>
              <p className="text-xs text-brand-muted dark:text-brand-mutedDark mt-1">{doctor.specialty}</p>
              <div className="flex gap-4.5 gap-x-5 mt-3.5 pt-3.5 border-t border-brand-border dark:border-brand-borderDark text-xs">
                <div>
                  <strong>{doctor.experienceYears} yrs</strong>
                  <div className="text-brand-muted dark:text-brand-mutedDark text-[10.5px]">Experience</div>
                </div>
                <div>
                  <strong>{doctor.patientsTreated}+</strong>
                  <div className="text-brand-muted dark:text-brand-mutedDark text-[10.5px]">Patients</div>
                </div>
                <div>
                  <strong>★ {doctor.rating}</strong>
                  <div className="text-brand-muted dark:text-brand-mutedDark text-[10.5px]">{doctor.reviewCount} reviews</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6">
            <h4 className="text-[13px] font-bold uppercase tracking-wide border-s-[3px] border-brand-accent dark:border-brand-accentDark ps-2.5 mb-3.5 font-serif">
              {t.profile.aboutPrefix} {lastName}
            </h4>
            <p className="text-[12.5px] text-brand-body dark:text-brand-bodyDark leading-relaxed">{doctor.bio}</p>
          </div>

          <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6">
            <h4 className="text-[13px] font-bold uppercase tracking-wide border-s-[3px] border-brand-accent dark:border-brand-accentDark ps-2.5 mb-3.5 font-serif">
              {t.profile.education}
            </h4>
            {doctor.education.map((edu) => (
              <div key={edu} className="flex gap-2.5 items-start mb-2.5 text-[12.5px] text-brand-body dark:text-brand-bodyDark">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent dark:bg-brand-accentDark mt-1.5 flex-shrink-0" />
                <span>{edu}</span>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6">
            <h4 className="text-[13px] font-bold uppercase tracking-wide border-s-[3px] border-brand-accent dark:border-brand-accentDark ps-2.5 mb-4.5 font-serif">
              {t.profile.timeline}
            </h4>
            <div className="border-s-2 border-brand-accentBg dark:border-brand-accentBgDark ms-1 ps-4.5 flex flex-col gap-4.5">
              {doctor.timeline.map((item) => (
                <div key={item.year}>
                  <span className="text-[10px] font-mono font-bold text-brand-accent dark:text-brand-accentDark bg-brand-accentBg dark:bg-brand-accentBgDark px-2 py-0.5 rounded">
                    {item.year}
                  </span>
                  <h5 className="text-[12.5px] font-bold mt-2">{item.title}</h5>
                  <p className="text-[11.5px] text-brand-muted dark:text-brand-mutedDark mt-0.5">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6">
            <h4 className="text-[13px] font-bold uppercase tracking-wide border-s-[3px] border-brand-accent dark:border-brand-accentDark ps-2.5 mb-4.5 font-serif">
              {t.profile.reviews}
            </h4>
            <div className="flex flex-col gap-3.5">
              {MOCK_REVIEWS.map((rev) => (
                <div key={rev.id} className="bg-brand-cream dark:bg-brand-bgDark rounded-xl p-4 text-xs">
                  <div className="flex justify-between mb-1.5">
                    <strong>{rev.author}</strong>
                    <span className="text-brand-muted dark:text-brand-mutedDark text-[10.5px]">{rev.date}</span>
                  </div>
                  <p className="text-brand-body dark:text-brand-bodyDark italic leading-relaxed">&ldquo;{rev.comment}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BookingWidget doctor={doctor} />
      </div>
    </div>
  );
}
