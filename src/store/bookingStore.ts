import { create } from 'zustand';
import { PaymentMethod, ReservationErrors, VisitType } from '@/types';
import { reservationSchema, zodErrorsToFieldMap } from '@/schemas/validation';
import { createBookingRequest } from '@/api/bookingApi';

interface BookingState {
  resName: string;
  resPhone: string;
  resEmail: string;
  resNationalId: string;
  visitType: VisitType;
  doctorNotes: string;
  resErrors: ReservationErrors;
  paymentMethod: PaymentMethod;
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  vfWallet: string;
  vfOtp: string;
  vfOtpSent: boolean;
  fawryCopied: boolean;
  referenceNumber: string;
  ccPassword: string;
  accountCreated: boolean;
  setField: <K extends keyof BookingState>(key: K, value: BookingState[K]) => void;
  setVisitType: (t: VisitType) => void;
  setPaymentMethod: (m: PaymentMethod) => void;
  prefill: (name: string, phone: string, email: string) => void;
  validateReservation: () => boolean;
  submitPayment: (doctorId: string, dateKey: string, timeSlot: string) => Promise<string>;
  markAccountCreated: () => void;
}

export const useBookingStore = create<BookingState>()((set, get) => ({
  resName: '', resPhone: '', resEmail: '', resNationalId: '', visitType: 'in-person', doctorNotes: '', resErrors: {},
  paymentMethod: 'card', cardName: '', cardNumber: '', cardExpiry: '', cardCvv: '',
  vfWallet: '', vfOtp: '', vfOtpSent: false, fawryCopied: false,
  referenceNumber: '', ccPassword: '', accountCreated: false,

  setField: (key, value) => set({ [key]: value } as Pick<BookingState, typeof key>),
  setVisitType: (t) => set({ visitType: t }),
  setPaymentMethod: (m) => set({ paymentMethod: m }),
  prefill: (name, phone, email) => set({ resName: name, resPhone: phone, resEmail: email }),

  // Validated with the shared Zod schema (src/schemas/validation.ts) — same
  // rules the backend will re-enforce server-side.
  validateReservation: () => {
    const { resName, resPhone, resNationalId, resEmail } = get();
    const result = reservationSchema.safeParse({ name: resName, phone: resPhone, nationalId: resNationalId, email: resEmail });
    if (!result.success) {
      set({ resErrors: zodErrorsToFieldMap<keyof ReservationErrors>(result.error) });
      return false;
    }
    set({ resErrors: {} });
    return true;
  },

  submitPayment: async (doctorId, dateKey, timeSlot) => {
    const { resName, resPhone, paymentMethod } = get();
    const { referenceNumber } = await createBookingRequest({
      doctorId, dateKey, timeSlot, patientName: resName, patientPhone: resPhone, paymentMethod
    });
    set({ referenceNumber });
    return referenceNumber;
  },

  markAccountCreated: () => set({ accountCreated: true })
}));
