import { useState } from "react";
import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — CareGo" }] }),
  component: Login,
});

// Demo user registry — replace with real API call later
const DEMO_USERS: Record<string, { role: string; destination: string; name: string }> = {
  "family@carego.com":   { role: "family",   destination: "/app/family",       name: "Sarah Whitfield" },
  "provider@carego.com": { role: "provider",  destination: "/app/provider",     name: "Aisha Mensah" },
  "business@carego.com": { role: "business",  destination: "/app/organisation", name: "Bristol Care Home" },
  "admin@carego.com":    { role: "admin",     destination: "/app/family",       name: "CareGo Admin" },
};

type Step = "email" | "password" | "register";

function Login() {
  const navigate = useNavigate();
  const router = useRouter();

  const [step, setStep]       = useState<Step>("email");
  const [email, setEmail]     = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  function handleBack() {
    if (step !== "email") { setStep("email"); setError(""); return; }
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
    } else {
      navigate({ to: "/" });
    }
  }

  // Step 1 — check email
  function handleEmailSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const known = DEMO_USERS[email.toLowerCase().trim()];
      if (known) {
        setStep("password");
      } else {
        setStep("register");
      }
    }, 500);
  }

  // Step 2a — password login
  function handlePasswordSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const pw = fd.get("password") as string;
    if (pw !== "CareGo2026!") {
      setError("Incorrect password. Demo password is: CareGo2026!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const user = DEMO_USERS[email.toLowerCase().trim()];
      navigate({ to: user.destination });
    }, 600);
  }

  // Step 2b — register (first time)
  function handleRegisterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate({ to: "/onboarding" });
    }, 700);
  }

  return (
    <AuthShell
      title={step === "register" ? "Create your account" : "Welcome back"}
      subtitle={
        step === "email"    ? "Enter your email to continue." :
        step === "password" ? `Signing in as ${DEMO_USERS[email.toLowerCase().trim()]?.name ?? email}` :
        "Complete your profile to get started."
      }
      footer={
        step === "register"
          ? <span>Already registered? <button type="button" onClick={() => setStep("email")} className="font-medium text-primary hover:underline">Sign in instead</button></span>
          : <span>Don&apos;t have an account? <Link to="/signup" className="font-medium text-primary hover:underline">Create one</Link></span>
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
          <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            {loading ? "Checking…" : <span className="flex items-center justify-center gap-2">Continue <ArrowRight className="h-4 w-4" /></span>}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-background px-2 text-muted-foreground">or continue with</span></div>
          </div>

          <Button type="button" variant="outline" className="w-full gap-2">
            <svg className="h-4 w-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Continue with Google
          </Button>

          <Button type="button" variant="outline" className="w-full gap-2">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#00A4EF"><path d="M11.4 24H0V12.6L11.4 24zM12.6 24H24V12.6L12.6 24zM0 11.4V0h11.4L0 11.4zM12.6 0H24v11.4L12.6 0z"/></svg>
            Continue with Microsoft
          </Button>

          <Button type="button" variant="ghost" className="w-full text-muted-foreground" onClick={handleBack}>← Back</Button>
        </form>
      )}

      {/* ── STEP 2a: PASSWORD ── */}
      {step === "password" && (
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/40 px-3 py-2 flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="truncate text-muted-foreground">{email}</span>
            <button type="button" onClick={() => setStep("email")} className="ml-auto text-xs text-primary hover:underline shrink-0">Change</button>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required autoFocus placeholder="Enter your password" className="mt-1.5" />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <div className="flex justify-end text-sm">
            <Link to="/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" id="remember" className="rounded border-input" />
            <label htmlFor="remember" className="cursor-pointer">Remember me</label>
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            {loading ? "Signing in…" : "Sign in"}
          </Button>
          <Button type="button" variant="ghost" className="w-full text-muted-foreground" onClick={handleBack}>← Back</Button>
          <p className="text-xs text-center text-muted-foreground bg-muted/50 rounded-lg p-2">
            Demo password: <strong>CareGo2026!</strong>
          </p>
        </form>
      )}

      {/* ── STEP 2b: REGISTER (first time) ── */}
      {step === "register" && (
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/40 px-3 py-2 flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="truncate text-muted-foreground">{email}</span>
            <button type="button" onClick={() => setStep("email")} className="ml-auto text-xs text-primary hover:underline shrink-0">Change</button>
          </div>
          <p className="text-sm text-muted-foreground">No account found. Fill in your details to get started — we'll complete your profile after sign up.</p>
          <div className="grid grid-cols-2 gap-3">
            <div><Label htmlFor="fname">First name</Label><Input id="fname" required autoFocus className="mt-1.5" placeholder="Sarah" /></div>
            <div><Label htmlFor="lname">Last name</Label><Input id="lname" required className="mt-1.5" placeholder="Whitfield" /></div>
          </div>
          <div>
            <Label htmlFor="newpw">Choose a password</Label>
            <Input id="newpw" type="password" required className="mt-1.5" placeholder="At least 12 characters" />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            {loading ? "Creating account…" : "Create account & continue"}
          </Button>
          <Button type="button" variant="ghost" className="w-full text-muted-foreground" onClick={handleBack}>← Back</Button>
          <p className="text-xs text-muted-foreground">By continuing you agree to our Terms and Privacy Policy.</p>
        </form>
      )}
    </AuthShell>
  );
}
