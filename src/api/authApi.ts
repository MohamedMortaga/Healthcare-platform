import { apiClient } from './client';
import { AuthUser } from '@/types';

const DEMO_USERS: Record<string, AuthUser> = {
  '+201000000000': {
    name: 'Demo Patient',
    phone: '+201000000000',
    email: 'demo@clinical.eg',
    role: 'patient'
  }
};

export async function loginRequest(phone: string, password: string): Promise<AuthUser> {
  const normalizedPhone = phone.trim();
  const normalizedPassword = password.trim();

  if (process.env.NEXT_PUBLIC_DEMO_AUTH === 'true') {
    const demoUser = DEMO_USERS[normalizedPhone];
    if (!demoUser) {
      throw new Error('This account is not registered.');
    }
    if (!normalizedPassword) {
      throw new Error('Password is required.');
    }
    return demoUser;
  }

  const { data } = await apiClient.post<AuthUser>('/auth/login', {
    phone: normalizedPhone,
    password: normalizedPassword
  });
  return data;
}

export async function registerRequest(input: { name: string; phone: string; email?: string }): Promise<AuthUser> {
  const { data } = await apiClient.post<AuthUser>('/auth/register', input);
  return data;
}
