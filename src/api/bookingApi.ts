import { apiClient } from './client';
import { BookingPayload } from '@/types';

export async function createBookingRequest(payload: BookingPayload): Promise<{ referenceNumber: string }> {
  // const { data } = await apiClient.post<{ referenceNumber: string }>('/bookings', payload);
  // return data;
  void apiClient;
  await new Promise((r) => setTimeout(r, 450));
  return { referenceNumber: `CHC-${Math.floor(1000 + Math.random() * 9000)}-EGP` };
}
