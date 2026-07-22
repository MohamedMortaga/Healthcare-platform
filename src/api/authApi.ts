import { apiClient } from './client';
import { AuthUser } from '@/types';

// Seeded fallback so the product is fully demoable before the backend ships.
// Swap in the real call by uncommenting the axios line and deleting the seed.
export async function loginRequest(phone: string, _password: string): Promise<AuthUser> {
  // const { data } = await apiClient.post<AuthUser>('/auth/login', { phone, password: _password });
  // return data;
  await new Promise((r) => setTimeout(r, 350));
  let name = 'Sherif El-Gendy';
  if (phone.includes('10')) name = 'Maged Farouk';
  else if (phone.includes('12')) name = 'Nadine Mansour';
  return { name, phone, email: `${phone.replace(/\+/g, '')}@clinical.eg`, role: 'patient' };
}

export async function registerRequest(input: { name: string; phone: string; email?: string }): Promise<AuthUser> {
  // const { data } = await apiClient.post<AuthUser>('/auth/register', input);
  // return data;
  await new Promise((r) => setTimeout(r, 350));
  return {
    name: input.name,
    phone: input.phone,
    email: input.email || `${input.phone.replace(/\+/g, '')}@clinical.eg`,
    role: 'patient'
  };
}
