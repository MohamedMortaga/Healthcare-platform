import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthUser } from '@/types';
import { loginRequest, registerRequest } from '@/api/authApi';

interface AuthState {
  user: AuthUser | null;
  isLoggedIn: boolean;
  login: (phone: string, password: string) => Promise<AuthUser>;
  register: (input: { name: string; phone: string; email?: string }) => Promise<AuthUser>;
  setUser: (user: AuthUser) => void;
  logout: () => void;
}

// Persisted patient session — name/role/phone survive reloads (localStorage
// key "chc-auth-storage"), same shape a real /me endpoint would return.
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      login: async (phone, password) => {
        const user = await loginRequest(phone, password);
        set({ user, isLoggedIn: true });
        return user;
      },
      register: async (input) => {
        const user = await registerRequest(input);
        set({ user, isLoggedIn: true });
        return user;
      },
      setUser: (user) => set({ user, isLoggedIn: true }),
      logout: () => set({ user: null, isLoggedIn: false })
    }),
    { name: 'chc-auth-storage' }
  )
);
