// CareGo Auth Store — Module 18
// Persists to sessionStorage so login survives back/forward navigation
// sessionStorage clears automatically when the browser tab is closed

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

// Read any previously saved session on startup
function loadSession(): Partial<AuthState> {
  try {
    const raw = sessionStorage.getItem('carego_auth');
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed?.token) return { ...parsed, isAuthenticated: true };
  } catch {}
  return {};
}

function saveSession(state: Partial<AuthState>) {
  try {
    sessionStorage.setItem('carego_auth', JSON.stringify({
      token: state.token,
      userId: state.userId,
      email: state.email,
      role: state.role,
    }));
  } catch {}
}

function clearSession() {
  try { sessionStorage.removeItem('carego_auth'); } catch {}
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  userId: null,
  email: null,
  role: null,
  isAuthenticated: false,
  // Hydrate from sessionStorage on first load
  ...loadSession(),

  login: (token, userId, email, role) => {
    const next = { token, userId, email, role: role as UserRole, isAuthenticated: true };
    saveSession(next);
    set(next);
  },

  logout: () => {
    clearSession();
    set({ token: null, userId: null, email: null, role: null, isAuthenticated: false });
  },
}));
