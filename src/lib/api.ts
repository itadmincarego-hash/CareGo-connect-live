// CareGo API Client — Module 18
// Connects frontend to live Cloud Run backend

const API_BASE = import.meta.env.VITE_API_URL || 'https://carego-api-213384839991.europe-west2.run.app';

// ─── Auth ───────────────────────────────────────────────────────────────────

export async function apiLogin(email: string, password: string) {
  const res = await fetch(`${API_BASE}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Invalid email or password');
  return res.json() as Promise<{ token: string; user: { id: number; email: string; role: string } }>;
}

export async function apiRegister(data: {
  email: string; password: string; first_name: string; last_name: string;
}) {
  const res = await fetch(`${API_BASE}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Registration failed');
  return res.json();
}

// ─── Authenticated helper ────────────────────────────────────────────────────

function authHeaders(token: string) {
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
}

// ─── Dashboard ───────────────────────────────────────────────────────────────

export async function apiGetDashboard(token: string) {
  const res = await fetch(`${API_BASE}/api/dashboard`, { headers: authHeaders(token) });
  if (!res.ok) throw new Error('Failed to load dashboard');
  return res.json() as Promise<{
    user: { id: number; email: string; role: string };
    companion: string;
    recent_checkins: { id: number; mood: string; note: string; created_at: string }[];
    medications: { id: number; name: string; dosage: string; frequency: string; taken_today: boolean }[];
    open_alerts: number;
  }>;
}

// ─── Profile ─────────────────────────────────────────────────────────────────

export async function apiGetProfile(token: string) {
  const res = await fetch(`${API_BASE}/api/profile`, { headers: authHeaders(token) });
  if (!res.ok) throw new Error('Failed to load profile');
  return res.json();
}

export async function apiUpdateProfile(token: string, data: {
  first_name?: string; last_name?: string; phone?: string;
  address?: string; emergency_contact_name?: string; emergency_contact_phone?: string;
}) {
  const res = await fetch(`${API_BASE}/api/profile`, {
    method: 'PUT',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update profile');
  return res.json();
}

// ─── Check-ins ───────────────────────────────────────────────────────────────

export async function apiGetCheckins(token: string) {
  const res = await fetch(`${API_BASE}/api/checkins`, { headers: authHeaders(token) });
  if (!res.ok) throw new Error('Failed to load check-ins');
  return res.json() as Promise<{ id: number; mood: string; note: string; created_at: string }[]>;
}

export async function apiPostCheckin(token: string, mood: string, note: string) {
  const res = await fetch(`${API_BASE}/api/checkin`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify({ mood, note }),
  });
  if (!res.ok) throw new Error('Failed to record check-in');
  return res.json();
}

// ─── Medications ─────────────────────────────────────────────────────────────

export async function apiGetMedications(token: string) {
  const res = await fetch(`${API_BASE}/api/medications`, { headers: authHeaders(token) });
  if (!res.ok) throw new Error('Failed to load medications');
  return res.json() as Promise<{ id: number; name: string; dosage: string; frequency: string; taken_today: boolean }[]>;
}

export async function apiAddMedication(token: string, name: string, dosage: string, frequency: string) {
  const res = await fetch(`${API_BASE}/api/medication`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify({ name, dosage, frequency }),
  });
  if (!res.ok) throw new Error('Failed to add medication');
  return res.json();
}

export async function apiMarkMedicationTaken(token: string, id: number) {
  const res = await fetch(`${API_BASE}/api/medication/${id}/taken`, {
    method: 'PUT',
    headers: authHeaders(token),
  });
  if (!res.ok) throw new Error('Failed to mark medication taken');
  return res.json();
}

// ─── Alerts ──────────────────────────────────────────────────────────────────

export async function apiGetAlerts(token: string) {
  const res = await fetch(`${API_BASE}/api/alerts`, { headers: authHeaders(token) });
  if (!res.ok) throw new Error('Failed to load alerts');
  return res.json() as Promise<{ id: number; type: string; message: string; is_resolved: boolean; created_at: string }[]>;
}

export async function apiResolveAlert(token: string, id: number) {
  const res = await fetch(`${API_BASE}/api/alert/${id}/resolve`, {
    method: 'PUT',
    headers: authHeaders(token),
  });
  if (!res.ok) throw new Error('Failed to resolve alert');
  return res.json();
}

// ─── Companion ───────────────────────────────────────────────────────────────

export async function apiGetCompanion(token: string) {
  const res = await fetch(`${API_BASE}/api/companion`, { headers: authHeaders(token) });
  if (!res.ok) throw new Error('Failed to load companion');
  return res.json();
}

// ─── Trigger Engine ──────────────────────────────────────────────────────────

export async function apiEvaluateTrigger(token: string, data: {
  user_id: number; heart_rate?: number; steps?: number;
  sleep_hours?: number; checkin_gap_hours?: number;
  anomaly_score?: number; is_anomaly?: boolean;
}) {
  const res = await fetch(`${API_BASE}/api/triggers/evaluate`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to evaluate trigger');
  return res.json() as Promise<{ status: string; message: string; user_id: number }>;
}
