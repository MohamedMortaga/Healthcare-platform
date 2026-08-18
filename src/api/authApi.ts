import { apiClient } from './client';
import { AuthUser } from '@/types';

function normalizeAuthUser(data: any): AuthUser {
  return {
    name: data?.fullName ?? data?.name ?? 'Patient',
    phone: data?.phoneNumber ?? data?.phone ?? '',
    email: data?.email ?? '',
    role: 'patient'
  };
}

export async function loginRequest(phone: string, password: string): Promise<AuthUser> {
  const normalizedPhone = phone.trim();
  const normalizedPassword = password.trim();

  const { data } = await apiClient.post('/api/auth/patients/login', {
    phoneNumber: normalizedPhone,
    password: normalizedPassword
  });

  return normalizeAuthUser(data);
}

export async function registerRequest(input: { name: string; phone: string; email?: string; password: string }): Promise<AuthUser> {
  const { data } = await apiClient.post('/api/auth/patients/register', {
    fullName: input.name,
    phoneNumber: input.phone,
    email: input.email || undefined,
    password: input.password
  });

  return normalizeAuthUser(data);
}
