// CareGo Auth Store — Module 18 update
// In-memory Zustand store (no localStorage — blocked on GitHub Pages)
// Now stores token and user role for API calls

import { create } from 'zustand';

type UserRole = 'customer' | 'provider' | 'business' | 'admin' | null;

interface AuthState {
  token: string | null;
  userId: number | null;
  email: string | null;
  role: UserRole;
  isAuthenticated: boolean;
  login: (token: string, userId: number, email: string, role: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  userId: null,
  email: null,
  role: null,
  isAuthenticated: false,

  login: (token, userId, email, role) => set({
    token,
    userId,
    email,
    role: role as UserRole,
    isAuthenticated: true,
  }),

  logout: () => set({
    token: null,
    userId: null,
    email: null,
    role: null,
    isAuthenticated: false,
  }),
}));
