// CareGo Auth Store — Module 18
// Persists to sessionStorage so login survives back/forward navigation.
// sessionStorage clears automatically when the browser tab is closed.

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

const STORAGE_KEY = 'carego_auth';

function loadSession(): Partial<AuthState> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed?.token) {
      return {
        token: parsed.token,
        userId: parsed.userId ?? null,
        email: parsed.email ?? null,
        role: parsed.role ?? null,
        isAuthenticated: true,
      };
    }
  } catch {}
  return {};
}

function saveSession(data: { token: string; userId: number | null; email: string | null; role: UserRole }) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

function clearSession() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {}
}

export const useAuthStore = create<AuthState>(() => ({
  // Default unauthenticated state
  token: null,
  userId: null,
  email: null,
  role: null,
  isAuthenticated: false,
  // Hydrate from sessionStorage immediately — overrides defaults if a session exists
  ...loadSession(),

  login: (token, userId, email, role) => {
    const next = {
      token,
      userId,
      email,
      role: role as UserRole,
      isAuthenticated: true,
    };
    saveSession(next);
    useAuthStore.setState(next);
  },

  logout: () => {
    clearSession();
    useAuthStore.setState({
      token: null,
      userId: null,
      email: null,
      role: null,
      isAuthenticated: false,
    });
  },
}));
