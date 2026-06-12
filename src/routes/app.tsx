import { createFileRoute, Link, Outlet, redirect, useNavigate, useRouterState } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Heart, Activity, AlertTriangle, Calendar, History, Settings, Wifi, ShoppingBag, MapPin,
  Building2, Users, Bell, Search, Plus, LogOut, ChevronDown, UserCircle, KeyRound
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { familyUser } from "@/lib/demo-data";

export const Route = createFileRoute("/app")({
  // ── Auth guard ──────────────────────────────────────────────────────────────
  // Runs before the route renders. Reads sessionStorage directly (not the
  // Zustand store) so it works even on a hard refresh before React mounts.
  beforeLoad: () => {
    try {
      const raw = sessionStorage.getItem("carego_auth");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.token) return; // ✅ valid session — allow through
      }
    } catch {}
    // No valid session — send to login
    throw redirect({ to: "/login" });
  },
  component: AppLayout,
});

const nav = [
  { group: "Care", items: [
    { to: "/app/family",     label: "Family dashboard",    icon: Heart },
    { to: "/app/monitoring", label: "AI monitoring",        icon: Activity },
    { to: "/app/alerts",     label: "Alerts & response",   icon: AlertTriangle },
    { to: "/app/book",       label: "Book support",         icon: Plus },
    { to: "/app/tracking",   label: "Live agent tracking",  icon: MapPin },
  ]},
  { group: "Workforce", items: [
    { to: "/app/provider",      label: "Provider dashboard", icon: Users },
    { to: "/app/organisation",  label: "Organisation",       icon: Building2 },
    { to: "/app/marketplace",   label: "Staff marketplace",  icon: ShoppingBag },
  ]},
  { group: "Insights", items: [
    { to: "/app/history",  label: "History & reports", icon: History },
    { to: "/app/devices",  label: "Devices",           icon: Wifi },
    { to: "/app/settings", label: "Settings",           icon: Settings },
  ]},
] as const;

function UserMenu() {
  const navigate = useNavigate();
  const logout   = useAuthStore(s => s.logout);
  const email    = useAuthStore(s => s.email);
  const role     = useAuthStore(s => s.role);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isDemo    = !email || email === familyUser.email || email.endsWith("@carego.com");
  const name      = isDemo ? familyUser.name : email!.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const photo     = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=b6e3f4`;
  const roleLabel = role === "provider" ? "Care Provider" : role === "business" ? "Organisation" : role === "admin" ? "Admin" : "Family Plus";

  useEffect(() => {
    function handle(e: MouseEvent) { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  function handleLogout() {
    logout();
    navigate({ to: "/login" });
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 rounded-lg border border-border bg-card px-2 py-1.5 text-sm hover:bg-muted/60 transition-colors"
      >
        <img src={photo} alt="" className="h-6 w-6 rounded-full bg-muted" />
        <span className="hidden md:inline">{name.split(" ")[0]}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-border bg-card shadow-lg z-50 overflow-hidden">
          <div className="px-4 py-3 border-b border-border">
            <p className="text-sm font-semibold truncate">{name}</p>
            <p className="text-xs text-muted-foreground truncate">{email ?? familyUser.email}</p>
            <Badge variant="secondary" className="mt-1 text-[10px]">{roleLabel}</Badge>
          </div>
          <div className="py-1">
            <Link to="/app/settings" onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-4 py-2 text-sm hover:bg-muted/60 transition-colors">
              <UserCircle className="h-4 w-4 text-muted-foreground" /> View profile
            </Link>
            <Link to="/forgot-password" onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-4 py-2 text-sm hover:bg-muted/60 transition-colors">
              <KeyRound className="h-4 w-4 text-muted-foreground" /> Reset password
            </Link>
          </div>
          <div className="border-t border-border py-1">
            <button onClick={handleLogout}
              className="flex w-full items-center gap-2.5 px-4 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const path     = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const logout   = useAuthStore(s => s.logout);
  const email    = useAuthStore(s => s.email);
  const role     = useAuthStore(s => s.role);

  const isDemo    = !email || email.endsWith("@carego.com");
  const name      = isDemo ? familyUser.name : email!.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const photo     = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=b6e3f4`;
  const roleLabel = role === "provider" ? "Care Provider" : role === "business" ? "Organisation" : role === "admin" ? "Admin" : "Family Plus";

  function handleSignOut() {
    logout();
    navigate({ to: "/login" });
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-sidebar transition-transform lg:static lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-16 items-center border-b border-border px-5"><Logo /></div>
        <nav className="flex h-[calc(100%-4rem)] flex-col overflow-y-auto p-3">
          {nav.map(g => (
            <div key={g.group} className="mb-4">
              <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{g.group}</p>
              {g.items.map(item => {
                const active = path === item.to;
                return (
                  <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-primary-soft text-primary" : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"}`}>
                    <item.icon className="h-4 w-4" /> {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
          {/* Sidebar user card */}
          <div className="mt-auto rounded-xl border border-border bg-gradient-soft p-3">
            <div className="flex items-center gap-2">
              <img src={photo} alt="" className="h-9 w-9 rounded-full bg-muted" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{name}</p>
                <p className="truncate text-[11px] text-muted-foreground">{roleLabel}</p>
              </div>
              <button onClick={handleSignOut} aria-label="Sign out">
                <LogOut className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-xl lg:px-8">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-lg p-2 lg:hidden" aria-label="Menu">
            <div className="h-0.5 w-5 bg-foreground" /><div className="mt-1 h-0.5 w-5 bg-foreground" /><div className="mt-1 h-0.5 w-5 bg-foreground" />
          </button>
          <BackButton />
          <Link to="/" aria-label="CareGo home" className="lg:hidden"><Logo size="sm" /></Link>
          <div className="relative hidden flex-1 max-w-md md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search people, devices, events…" className="pl-9" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button asChild size="sm" className="bg-gradient-hero shadow-glow hidden sm:inline-flex"><Link to="/app/book"><Plus className="mr-1 h-4 w-4" /> Book support</Link></Button>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-semibold text-destructive-foreground">3</span>
            </Button>
            <UserMenu />
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// Shared page header
export function PageHeader({ title, subtitle, action, badge }: { title: string; subtitle?: string; action?: React.ReactNode; badge?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <div className="flex items-center gap-2.5">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h1>
          {badge}
        </div>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
