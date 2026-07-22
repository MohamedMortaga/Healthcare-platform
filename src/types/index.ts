export type ActiveView =
  | 'home'
  | 'doctors'
  | 'profile'
  | 'reservation'
  | 'payment'
  | 'confirmation'
  | 'login'
  | 'register';

export type Theme = 'light' | 'dark';
export type Locale = 'en' | 'ar';

export interface TimelineEntry {
  year: string;
  title: string;
  institution: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experienceYears: number;
  patientsTreated: number;
  rating: number;
  reviewCount: number;
  price: number;
  deposit: number;
  nextAvailable: 'today' | 'tomorrow' | 'monday';
  bio: string;
  education: string[];
  timeline: TimelineEntry[];
}

export interface ClinicService {
  id: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  comment: string;
}

export interface AuthUser {
  name: string;
  phone: string;
  email: string;
  role: 'patient';
}

export type PaymentMethod = 'card' | 'fawry' | 'vodafone' | 'clinic';
export type VisitType = 'in-person' | 'video';

export interface BookingPayload {
  doctorId: string;
  dateKey: string;
  timeSlot: string;
  patientName: string;
  patientPhone: string;
  paymentMethod: PaymentMethod;
}

export interface ReservationErrors {
  name?: string;
  phone?: string;
  nationalId?: string;
}
