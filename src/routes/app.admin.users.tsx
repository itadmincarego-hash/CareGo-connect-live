import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, CheckCircle, XCircle, AlertTriangle, Users, RotateCcw, ShieldCheck, KeyRound, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "./app";

export const Route = createFileRoute("/app/admin/users")({
  component: UserManagement,
});

type Role   = "family" | "provider" | "organisation" | "admin";
type Status = "active" | "suspended" | "pending";

interface MUser {
  id: string; name: string; email: string; role: Role; status: Status;
  lastActive: string; bookings: number; issues: number; joined: string;
}

const MOCK: MUser[] = [
  { id: "u1",  name: "Jane Cooper",    email: "jane@email.com",        role: "family",       status: "active",    lastActive: "2 min ago",   bookings: 12, issues: 0, joined: "2025-11-01" },
  { id: "u2",  name: "Aisha Patel",    email: "provider@carego.com",   role: "provider",     status: "active",    lastActive: "5 min ago",   bookings: 45, issues: 1, joined: "2025-09-15" },
  { id: "u3",  name: "Bristol Care",   email: "business@carego.com",   role: "organisation", status: "active",    lastActive: "1 hr ago",    bookings: 89, issues: 0, joined: "2025-08-20" },
  { id: "u4",  name: "Emma Williams",  email: "emma@carego.com",       role: "provider",     status: "active",    lastActive: "10 min ago",  bookings: 67, issues: 0, joined: "2025-07-10" },
  { id: "u5",  name: "Mark Stevens",   email: "mark@email.com",        role: "family",       status: "suspended", lastActive: "3 days ago",  bookings: 3,  issues: 2, joined: "2026-01-05" },
  { id: "u6",  name: "Lucy Turner",    email: "lucy@email.com",        role: "family",       status: "active",    lastActive: "30 min ago",  bookings: 8,  issues: 0, joined: "2026-02-14" },
  { id: "u7",  name: "Michael Roberts",email: "michael@carego.com",    role: "provider",     status: "pending",   lastActive: "Never",       bookings: 0,  issues: 0, joined: "2026-04-01" },
  { id: "u8",  name: "Claire Adams",   email: "claire@brightcare.com", role: "organisation", status: "active",    lastActive: "2 hrs ago",   bookings: 34, issues: 1, joined: "2025-12-01" },
  { id: "u9",  name: "Derek Fox",      email: "derek@email.com",       role: "provider",     status: "suspended", lastActive: "1 week ago",  bookings: 15, issues: 3, joined: "2025-10-10" },
  { id: "u10", name: "Alice Brown",    email: "alice@email.com",       role: "family",       status: "active",    lastActive: "15 min ago",  bookings: 22, issues: 0, joined: "2025-06-20" },
];

const ROLE_BADGE: Record<Role, string> = {
  family:       "bg-primary-soft text-primary",
  provider:     "bg-accent-soft text-accent",
  organisation: "bg-warning/10 text-warning-foreground",
  admin:        "bg-destructive/10 text-destructive",
};

const ROLE_LABEL: Record<Role, string> = {
  family:       "Family",
  provider:     "Provider",
  organisation: "Organisation",
  admin:        "Admin",
};

const STATUS_ICON: Record<Status, React.ReactNode> = {
  active:    <CheckCircle  className="h-3.5 w-3.5 text-success" />,
  suspended: <XCircle      className="h-3.5 w-3.5 text-destructive" />,
  pending:   <AlertTriangle className="h-3.5 w-3.5 text-warning" />,
};

function initials(name: string) {
  return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}

function UserManagement() {
  const [search,     setSearch]     = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [statFilter, setStatFilter] = useState<string>("all");
  const [selected,   setSelected]   = useState<MUser | null>(null);
  const [users,      setUsers]      = useState<MUser[]>(MOCK);
  const [toast,      setToast]      = useState<string | null>(null);

  const filtered = useMemo(() => users.filter(u => {
    const q = search.toLowerCase();
    const matchSearch = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.id.includes(q);
    const matchRole   = roleFilter === "all" || u.role === roleFilter;
    const matchStat   = statFilter === "all" || u.status === statFilter;
    return matchSearch && matchRole && matchStat;
  }), [users, search, roleFilter, statFilter]);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  function suspend(id: string) {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status: "suspended" } : u));
    setSelected(prev => prev?.id === id ? { ...prev, status: "suspended" } : prev);
    showToast("User suspended");
  }
  function activate(id: string) {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status: "active" } : u));
    setSelected(prev => prev?.id === id ? { ...prev, status: "active" } : prev);
    showToast("User reactivated");
  }
  function changeRole(id: string, role: Role) {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, role } : u));
    setSelected(prev => prev?.id === id ? { ...prev, role } : prev);
    showToast(`Role changed to ${ROLE_LABEL[role]}`);
  }

  return (
    <div className="animate-fade-in space-y-6">
      <PageHeader title="User Management" subtitle="Search, filter, and manage user accounts & permissions" />

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl border border-border bg-card px-4 py-3 shadow-lg text-sm font-medium animate-fade-in">
          ✓ {toast}
        </div>
      )}

      {/* Filters */}
      <div className="rounded-xl border border-border bg-card shadow-card p-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, email or ID…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <select
            value={roleFilter}
            onChange={e => setRoleFilter(e.target.value)}
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">All Roles</option>
            <option value="family">Family</option>
            <option value="provider">Provider</option>
            <option value="organisation">Organisation</option>
            <option value="admin">Admin</option>
          </select>
          <select
            value={statFilter}
            onChange={e => setStatFilter(e.target.value)}
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          {filtered.length} user{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

        {/* User list */}
        <div className="space-y-2 lg:col-span-2">
          {filtered.map(u => (
            <button
              key={u.id}
              onClick={() => setSelected(u)}
              className={`w-full rounded-xl border bg-card shadow-card p-4 text-left transition-all hover:border-primary/40 ${
                selected?.id === u.id ? "border-primary ring-1 ring-primary/20" : "border-border"
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-hero text-xs font-bold text-white">
                  {initials(u.name)}
                </div>
                {/* Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-sm font-medium">{u.name}</span>
                    {STATUS_ICON[u.status]}
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${ROLE_BADGE[u.role]}`}>
                      {ROLE_LABEL[u.role]}
                    </span>
                  </div>
                  <p className="truncate text-xs text-muted-foreground">
                    {u.email} · Last active: {u.lastActive}
                  </p>
                </div>
                {/* Stats */}
                <div className="hidden shrink-0 text-right sm:block">
                  <p className="text-xs text-muted-foreground">{u.bookings} bookings</p>
                  {u.issues > 0 && (
                    <p className="text-xs font-medium text-destructive">{u.issues} issue{u.issues > 1 ? "s" : ""}</p>
                  )}
                </div>
              </div>
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <Users className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">No users match your filters</p>
            </div>
          )}
        </div>

        {/* Detail / Permissions panel */}
        <div className="lg:col-span-1">
          {selected ? (
            <div className="sticky top-20 rounded-xl border border-border bg-card shadow-card p-5 space-y-5">
              {/* Avatar + name */}
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-hero text-lg font-bold text-white">
                  {initials(selected.name)}
                </div>
                <h3 className="font-semibold">{selected.name}</h3>
                <p className="text-xs text-muted-foreground">{selected.email}</p>
                <span className={`mt-1.5 inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${ROLE_BADGE[selected.role]}`}>
                  {ROLE_LABEL[selected.role]}
                </span>
              </div>

              {/* Details */}
              <div className="divide-y divide-border rounded-lg border border-border text-sm">
                {[
                  ["User ID",     <span className="font-mono text-xs">{selected.id}</span>],
                  ["Status",      <span className="flex items-center gap-1">{STATUS_ICON[selected.status]} {selected.status}</span>],
                  ["Joined",      selected.joined],
                  ["Last active", selected.lastActive],
                  ["Bookings",    selected.bookings],
                  ["Open issues", <span className={selected.issues > 0 ? "font-medium text-destructive" : ""}>{selected.issues}</span>],
                ].map(([k, v]) => (
                  <div key={String(k)} className="flex items-center justify-between px-3 py-2">
                    <span className="text-muted-foreground">{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>

              {/* Change Role */}
              <div className="space-y-2">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5" /> Change Role / Permissions
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {(["family", "provider", "organisation", "admin"] as Role[]).map(r => (
                    <button
                      key={r}
                      onClick={() => changeRole(selected.id, r)}
                      className={`rounded-lg border px-3 py-2 text-xs font-medium transition-all ${
                        selected.role === r
                          ? "border-primary bg-primary-soft text-primary"
                          : "border-border bg-muted/40 hover:border-primary/40 hover:bg-primary-soft/60 hover:text-primary"
                      }`}
                    >
                      {ROLE_LABEL[r]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Actions</p>
                {selected.status === "suspended" ? (
                  <Button
                    size="sm" variant="outline"
                    className="w-full border-success/40 text-success hover:bg-success/10"
                    onClick={() => activate(selected.id)}
                  >
                    <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Reactivate account
                  </Button>
                ) : (
                  <Button
                    size="sm" variant="outline"
                    className="w-full border-destructive/40 text-destructive hover:bg-destructive/10"
                    onClick={() => suspend(selected.id)}
                  >
                    <XCircle className="mr-1.5 h-3.5 w-3.5" /> Suspend account
                  </Button>
                )}
                <Button size="sm" variant="outline" className="w-full">
                  <KeyRound className="mr-1.5 h-3.5 w-3.5" /> Reset password
                </Button>
                <Button size="sm" variant="outline" className="w-full">
                  <Eye className="mr-1.5 h-3.5 w-3.5" /> View activity logs
                </Button>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
              <Users className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
              <p className="text-sm font-medium">Select a user</p>
              <p className="mt-1 text-xs text-muted-foreground">Click any user from the list to view details and manage permissions</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
