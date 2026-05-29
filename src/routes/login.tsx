import { useState } from "react";
import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail } from "lucide-react";
import { apiLogin, dashboardForRole, useAuthStore } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — CareGo" }] }),
  component: Login,
});

type Step = "email" | "password";

function Login() {
  const navigate  = useNavigate();
  const router    = useRouter();
  const setUser   = useAuthStore((s) => s.setUser);

  const [step,     setStep]     = useState<Step>("email");
  const [email,    setEmail]    = useState("");
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState("");

  function handleBack() {
    if (step !== "email") { setStep("email"); setError(""); return; }
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
    } else {
      navigate({ to: "/" });
    }
  }

  // Step 1 — just validate the email format and advance
  function handleEmailSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const trimmed = email.trim().toLowerCase();
    if (!trimmed.includes("@")) { setError("Please enter a valid email address."); return; }
    setEmail(trimmed);
    setStep("password");
  }

  // Step 2 — call the real API
  async function handlePasswordSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const fd       = new FormData(e.currentTarget);
    const password = (fd.get("password") as string) ?? "";
    if (!password) { setError("Please enter your password."); return; }

    setLoading(true);
    try {
      const data = await apiLogin(email, password);
      setUser({
        id:    data.user_id,
        email: data.email ?? email,
        role:  data.role,
        token: data.token,
        name:  data.email ?? email,
      });
      navigate({ to: dashboardForRole(data.role) });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title={step === "email" ? "Welcome back" : "Enter your password"}
      subtitle={
        step === "email"
          ? "Enter your email to continue."
          : `Signing in as ${email}`
      }
      footer={
        <span>
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-medium text-primary hover:underline">Create one</Link>
        </span>
      }
    >
      {/* ── STEP 1: EMAIL ── */}
      {step === "email" && (
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email" type="email" required autoFocus
              value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="sarah@example.com" className="mt-1.5"
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <span className="flex items-center justify-center gap-2">
              Continue <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
          <Button type="button" variant="ghost" className="w-full text-muted-foreground" onClick={handleBack}>
            ← Back
          </Button>
        </form>
      )}

      {/* ── STEP 2: PASSWORD ── */}
      {step === "password" && (
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/40 px-3 py-2 flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="truncate text-muted-foreground">{email}</span>
            <button
              type="button"
              onClick={() => { setStep("email"); setError(""); }}
              className="ml-auto text-xs text-primary hover:underline shrink-0"
            >
              Change
            </button>
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password" name="password" type="password"
              required autoFocus placeholder="Enter your password" className="mt-1.5"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <div className="flex justify-end text-sm">
            <Link to="/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
          </div>

          <Button
            type="submit" disabled={loading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {loading ? "Signing in…" : "Sign in"}
          </Button>

          <Button type="button" variant="ghost" className="w-full text-muted-foreground" onClick={handleBack}>
            ← Back
          </Button>
        </form>
      )}
    </AuthShell>
  );
}
