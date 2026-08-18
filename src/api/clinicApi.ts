import { apiClient } from './client';
import { ClinicService, Doctor, Review } from '@/types';

function normalizeList<T>(data: unknown): T[] {
  if (Array.isArray(data)) return data as T[];
  if (data && typeof data === 'object' && Array.isArray((data as { items?: unknown }).items)) {
    return (data as { items: T[] }).items;
  }
  return [];
}

export async function fetchDoctors(): Promise<Doctor[]> {
  const { data } = await apiClient.get('/api/doctors');
  return normalizeList<Doctor>(data);
}

export async function fetchServices(): Promise<ClinicService[]> {
  const { data } = await apiClient.get('/api/services');
  return normalizeList<ClinicService>(data);
}

export async function fetchReviews(): Promise<Review[]> {
  const { data } = await apiClient.get('/api/reviews');
  return normalizeList<Review>(data);
}

export async function fetchClinicInfo() {
  const { data } = await apiClient.get('/api/clinic');
  return data;
}
