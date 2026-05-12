import { useState } from "react";
import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Heart, Briefcase, Building2 } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — CareGo" }] }),
  component: Login,
});

type Role = "family" | "provider" | "business" | "admin";

const ROLES: { role: Role; label: string; icon: React.ReactNode; destination: string }[] = [
  { role: "family",   label: "Family / Customer",   icon: <Heart className="h-4 w-4" />,     destination: "/app/family" },
  { role: "provider", label: "Care Provider",        icon: <Briefcase className="h-4 w-4" />, destination: "/app/provider" },
  { role: "business", label: "Business / Care Home", icon: <Building2 className="h-4 w-4" />, destination: "/app/organisation" },
  { role: "admin",    label: "Platform Admin",        icon: <Shield className="h-4 w-4" />,    destination: "/app/family" },
];

function Login() {
  const navigate = useNavigate();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<Role>("family");
  const [loading, setLoading] = useState(false);

  const dest  = ROLES.find((r) => r.role === selectedRole)!.destination;
  const label = ROLES.find((r) => r.role === selectedRole)!.label;

  function handleBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
    } else {
      navigate({ to: "/" });
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate({ to: dest }); }, 600);
  }

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to continue caring with CareGo."
      footer={<>Don&apos;t have an account?{" "}<Link to="/signup" className="font-medium text-primary hover:underline">Create one</Link></>}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label>Sign in as</Label>
          <div className="grid grid-cols-2 gap-2 mt-1.5">
            {ROLES.map(({ role, label: rl, icon }) => (
              <button key={role} type="button" onClick={() => setSelectedRole(role)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors text-left
                  ${selectedRole === role ? "border-primary bg-primary/5 text-primary" : "border-input bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}>
                <span className={selectedRole === role ? "text-primary" : "text-muted-foreground"}>{icon}</span>
                {rl}
              </button>
            ))}
          </div>
        </div>
        <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required placeholder="sarah@example.com" className="mt-1.5" /></div>
        <div><Label htmlFor="password">Password</Label><Input id="password" type="password" required placeholder="Enter your password" className="mt-1.5" /></div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-input" /> Remember me</label>
          <Link to="/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          {loading ? "Signing in…" : `Sign in as ${label}`}
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
          <div className="relative flex justify-center text-xs"><span className="bg-background px-2 text-muted-foreground">or</span></div>
        </div>
        <Button type="button" variant="outline" className="w-full">Continue with Google</Button>
        <Button type="button" variant="ghost" className="w-full text-muted-foreground" onClick={handleBack}>← Back</Button>
      </form>
    </AuthShell>
  );
}
