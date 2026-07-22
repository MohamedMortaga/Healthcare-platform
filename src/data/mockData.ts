import { ClinicService, Doctor, Review } from '@/types';

// Static seed data standing in for the future GET /api/doctors, /api/services,
// /api/reviews responses. Shapes match what the backend contract will return.
export const MOCK_DOCTORS: Doctor[] = [
  {
    id: 'doc-ahmed',
    name: 'Dr. Ahmed Samir',
    title: 'Consultant Cardiologist',
    specialty: 'General Cardiology & Rhythm Disorders',
    experienceYears: 10,
    patientsTreated: 3200,
    rating: 4.9,
    reviewCount: 312,
    price: 350,
    deposit: 100,
    nextAvailable: 'today',
    bio: 'Dr. Ahmed Samir is a renowned Consultant Cardiologist specializing in electrophysiology, cardiac pacing, and preventive cardiology. With over a decade of dedicated clinical practice in Cairo and Europe, he focuses on personalized heart care.',
    education: [
      'MD in Cardiology - Cairo University (Kasr Al-Ainy)',
      'Fellowship in Cardiac Rhythm Management - ESC',
      'Member, Egyptian Society of Cardiology'
    ],
    timeline: [
      { year: '2018 - Present', title: 'Senior Cardiology Consultant', institution: 'Cairo Heart Center' },
      { year: '2014 - 2018', title: 'Assistant Professor of Cardiology', institution: 'Cairo University Hospital' },
      { year: '2011 - 2014', title: 'Cardiology Registrar', institution: 'National Heart Institute' }
    ]
  },
  {
    id: 'doc-sara',
    name: 'Dr. Sara Mansour',
    title: 'Internal Medicine Specialist',
    specialty: 'Internal Medicine & Metabolic Health',
    experienceYears: 7,
    patientsTreated: 2100,
    rating: 4.8,
    reviewCount: 185,
    price: 250,
    deposit: 75,
    nextAvailable: 'tomorrow',
    bio: 'Dr. Sara Mansour specializes in comprehensive internal medicine, managing chronic conditions like hypertension, diabetes, and metabolic syndrome, with a focus on cardiometabolic health.',
    education: [
      "Master's in Internal Medicine - Ain Shams University",
      'Diploma in Diabetes & Endocrinology - RCP, UK',
      'Egyptian Board of Internal Medicine'
    ],
    timeline: [
      { year: '2020 - Present', title: 'Internal Medicine Specialist', institution: 'Cairo Heart Center' },
      { year: '2017 - 2020', title: 'Internal Medicine Specialist', institution: 'Demerdash Hospital' },
      { year: '2015 - 2017', title: 'Resident Physician', institution: 'Ain Shams University Hospitals' }
    ]
  },
  {
    id: 'doc-omar',
    name: 'Dr. Omar Khalil',
    title: 'Interventional Cardiology Consultant',
    specialty: 'Interventional Cardiology & Coronary Stenting',
    experienceYears: 14,
    patientsTreated: 4500,
    rating: 4.95,
    reviewCount: 540,
    price: 500,
    deposit: 150,
    nextAvailable: 'today',
    bio: 'Dr. Omar Khalil is a pioneer in interventional cardiology in Cairo, having performed thousands of complex coronary angioplasties, stenting, and transcatheter valve replacements.',
    education: [
      'PhD in Interventional Cardiology - Cairo University',
      'Fellowship - Cleveland Clinic, USA',
      'Fellow, American College of Cardiology (FACC)'
    ],
    timeline: [
      { year: '2015 - Present', title: 'Head of Interventional Unit', institution: 'Cairo Heart Center' },
      { year: '2011 - 2015', title: 'Consultant Interventionalist', institution: 'Dar Al Fouad Hospital' },
      { year: '2008 - 2011', title: 'Cardiology Fellow', institution: 'Kasr Al-Ainy University Hospital' }
    ]
  },
  {
    id: 'doc-nour',
    name: 'Dr. Nour Hassan',
    title: 'Cardiac Imaging Specialist',
    specialty: 'Cardiac Ultrasound, MRI & CT Scan',
    experienceYears: 8,
    patientsTreated: 1800,
    rating: 4.85,
    reviewCount: 122,
    price: 300,
    deposit: 100,
    nextAvailable: 'monday',
    bio: 'Dr. Nour Hassan focuses on advanced diagnostic cardiac imaging, including stress echocardiography, cardiac MRI, and multi-slice coronary CT, ensuring accurate disease staging.',
    education: [
      'M.Sc. in Cardiovascular Medicine - Cairo University',
      'Certified in Advanced Cardiac MRI - EACVI',
      'Member, Society of Cardiovascular CT (SCCT)'
    ],
    timeline: [
      { year: '2021 - Present', title: 'Lead Cardiac Imaging Specialist', institution: 'Cairo Heart Center' },
      { year: '2018 - 2021', title: 'Cardiovascular Imaging Specialist', institution: 'National Heart Institute' },
      { year: '2014 - 2018', title: 'Cardiology Specialist Registrar', institution: 'Cairo University Hospital' }
    ]
  }
];

export const MOCK_SERVICES: ClinicService[] = [
  { id: 'serv-consult', title: 'Comprehensive Cardiac Consultation', description: 'Detailed evaluation of heart health, symptom review, and risk factor assessment.' },
  { id: 'serv-ecg', title: 'ECG & Stress Testing', description: 'Electrocardiogram monitoring at rest and under exercise to detect rhythm abnormalities.' },
  { id: 'serv-echo', title: 'Transthoracic Echocardiography', description: 'High-resolution cardiac ultrasound mapping blood flow and valve efficiency.' },
  { id: 'serv-holter', title: '24/48-Hour Holter Monitoring', description: 'Continuous ambulatory ECG recording to trace transient arrhythmias.' },
  { id: 'serv-imaging', title: 'Cardiac Imaging & CT Angiography', description: 'Non-invasive imaging detailing coronary artery structures and calcification.' }
];

export const MOCK_REVIEWS: Review[] = [
  { id: 'rev-1', author: 'Mohamed El-Tayeb', date: 'Jul 12, 2026', comment: 'Excellent care and professionalism. Dr. Ahmed spent 45 minutes explaining my ECG results in detail.' },
  { id: 'rev-2', author: 'Fatma Abdel Rahman', date: 'Jul 05, 2026', comment: "Cleanest clinic in Nasr City. Dr. Sara is amazing and has managed my mother's hypertension with high caution." },
  { id: 'rev-3', author: 'Youssef Shenouda', date: 'Jun 28, 2026', comment: 'Dr. Omar Khalil is a master in coronary interventions. I still visit annually for stress tests.' }
];

export const CLINIC = {
  name: 'Cairo Heart Center',
  tagline: 'Nasr City · Since 2009',
  phone: '+20 2 2401 9988',
  address: '14 Abbas El Akkad St, Nasr City, Cairo',
  hours: 'Sun – Thu · 9:00 AM – 9:00 PM\nSat · 10:00 AM – 6:00 PM\nFri · Closed',
  patientsCount: '12,000+',
  doctorsCount: 8,
  rating: 4.9
};

export const AVAILABLE_DATES = [
  { key: 'today', dayName: 'Sun', dayNum: 19, full: 'Today, July 19, 2026' },
  { key: 'tomorrow', dayName: 'Mon', dayNum: 20, full: 'Tomorrow, July 20, 2026' },
  { key: 'tue', dayName: 'Tue', dayNum: 21, full: 'Tuesday, July 21, 2026' },
  { key: 'wed', dayName: 'Wed', dayNum: 22, full: 'Wednesday, July 22, 2026' },
  { key: 'thu', dayName: 'Thu', dayNum: 23, full: 'Thursday, July 23, 2026' }
];

export const TIME_SLOTS = ['11:30 AM', '12:15 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM'];

export const DEMO_SCREENS: { key: string; label: string }[] = [
  { key: 'home', label: '1. Home' },
  { key: 'doctors', label: '2. Our Doctors' },
  { key: 'profile', label: '3. Doctor Profile' },
  { key: 'reservation', label: '4. Reservation Form' },
  { key: 'payment', label: '5. Payment' },
  { key: 'confirmation', label: '6. Confirmation' },
  { key: 'login', label: '7. Patient Login' },
  { key: 'register', label: '8. Patient Register' }
];
