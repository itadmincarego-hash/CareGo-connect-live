import { create } from "zustand";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface AuthUser {
  id: number;
  email: string;
  name?: string;
  role?: string;
  token: string;
}

interface AuthState {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
  logout: () => void;
}

// ─── In-memory store (no localStorage — GitHub Pages sandboxed context) ──────

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

// ─── API helpers ─────────────────────────────────────────────────────────────

const API = import.meta.env.VITE_API_URL ?? "https://carego-api-213384839991.europe-west2.run.app";

export async function apiLogin(
  email: string,
  password: string
): Promise<{ token: string; user_id: number; email: string; role?: string }> {
  const res = await fetch(`${API}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.msg ?? data?.error ?? "Login failed");
  return data;
}

export async function apiRegister(
  email: string,
  password: string,
  first_name: string,
  last_name: string
): Promise<{ msg: string }> {
  const res = await fetch(`${API}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, first_name, last_name }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.msg ?? data?.error ?? "Registration failed");
  return data;
}

// ─── Role → dashboard route mapping ──────────────────────────────────────────

export function dashboardForRole(role?: string): string {
  switch (role?.toLowerCase()) {
    case "provider":  return "/app/provider";
    case "business":  return "/app/organisation";
    case "admin":     return "/app/family";
    default:          return "/app/family"; // family role or unknown
  }
}
