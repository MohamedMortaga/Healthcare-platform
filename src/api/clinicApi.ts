import { apiClient } from './client';
import { CLINIC, MOCK_DOCTORS, MOCK_REVIEWS, MOCK_SERVICES } from '@/data/mockData';
import { ClinicService, Doctor, Review } from '@/types';

const shouldUseMocks = process.env.NEXT_PUBLIC_USE_MOCKS === 'true';

function normalizeList<T>(data: unknown, fallback: T[]): T[] {
  if (Array.isArray(data)) return data as T[];
  if (data && typeof data === 'object' && Array.isArray((data as { items?: unknown }).items)) {
    return (data as { items: T[] }).items;
  }
  return fallback;
}

export async function fetchDoctors(): Promise<Doctor[]> {
  if (shouldUseMocks) return MOCK_DOCTORS;

  try {
    const { data } = await apiClient.get('/doctors');
    return normalizeList<Doctor>(data, MOCK_DOCTORS);
  } catch {
    return MOCK_DOCTORS;
  }
}

export async function fetchServices(): Promise<ClinicService[]> {
  if (shouldUseMocks) return MOCK_SERVICES;

  try {
    const { data } = await apiClient.get('/services');
    return normalizeList<ClinicService>(data, MOCK_SERVICES);
  } catch {
    return MOCK_SERVICES;
  }
}

export async function fetchReviews(): Promise<Review[]> {
  if (shouldUseMocks) return MOCK_REVIEWS;

  try {
    const { data } = await apiClient.get('/reviews');
    return normalizeList<Review>(data, MOCK_REVIEWS);
  } catch {
    return MOCK_REVIEWS;
  }
}

export async function fetchClinicInfo() {
  if (shouldUseMocks) return CLINIC;

  try {
    const { data } = await apiClient.get('/clinic');
    if (data) return data;
  } catch {
    // Fall through to static clinic info until the real API is available.
  }

  return CLINIC;
}
