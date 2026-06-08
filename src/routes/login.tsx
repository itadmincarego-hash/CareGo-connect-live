import { useState } from "react";
import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Eye, EyeOff } from "lucide-react";
import { apiLogin, apiRegister } from "@/lib/api";
import { useAuthStore } from "@/store/authStore";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — CareGo" }] }),
  component: Login,
});

// Demo users for frontend-only routing (kept as fallback)
const DEMO_USERS: Record<string, { role: string; destination: string; name: string }> = {
  "family@carego.com":   { role: "family",   destination: "/app/family",       name: "Sarah Whitfield" },
  "provider@carego.com": { role: "provider",  destination: "/app/provider",     name: "Aisha Mensah" },
  "business@carego.com": { role: "business",  destination: "/app/organisation", name: "Bristol Care Home" },
  "admin@carego.com":    { role: "admin",     destination: "/app/family",       name: "CareGo Admin" },
};

// Role → dashboard route mapping for real API users
function destinationForRole(role: string): string {
  if (role === "provider") return "/app/provider";
  if (role === "business") return "/app/organisation";
  if (role === "admin")    return "/app/family";
  return "/app/family"; // customer / default
}

type Step = "email" | "password" | "register";

function PasswordInput({ id, name, autoFocus, placeholder }: { id: string; name?: string; autoFocus?: boolean; placeholder?: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Input id={id} name={name} type={show ? "text" : "password"} required autoFocus={autoFocus} placeholder={placeholder} className="mt-1.5 pr-10" />
      <button type="button" onClick={() => setShow(v => !v)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label={show ? "Hide password" : "Show password"}>
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}

function Login() {
  const navigate    = useNavigate();
  const router      = useRouter();
  const login       = useAuthStore(s => s.login);

  const [step, setStep]       = useState<Step>("email");
  const [email, setEmail]     = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  function handleBack() {
    if (step !== "email") { setStep("email"); setError(""); return; }
    if (typeof window !== "undefined" && window.history.length > 1) router.history.back();
    else navigate({ to: "/" });
  }

  function handleEmailSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(""); setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(DEMO_USERS[email.toLowerCase().trim()] ? "password" : "register");
    }, 400);
  }

  async function handlePasswordSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(""); setLoading(true);
    const pw = (new FormData(e.currentTarget)).get("password") as string;
    const emailKey = email.toLowerCase().trim();

    // Try live API first
    try {
      const data = await apiLogin(emailKey, pw);
      login(data.token, data.user.id, data.user.email, data.user.role);
      navigate({ to: destinationForRole(data.user.role) });
      return;
    } catch {
      // Fall back to demo mode if API login fails
    }

    // Demo fallback
    if (DEMO_USERS[emailKey] && pw === "CareGo2026!") {
      login("demo-token", 0, emailKey, DEMO_USERS[emailKey].role);
      setLoading(false);
      navigate({ to: DEMO_USERS[emailKey].destination });
      return;
    }

    setLoading(false);
    setError("Incorrect password. Please try again.");
  }

  async function handleRegisterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(""); setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      await apiRegister({
        email: email.toLowerCase().trim(),
        password: fd.get("newpw") as string,
        first_name: fd.get("fname") as string,
        last_name: fd.get("lname") as string,
      });
      // Auto-login after register
      const data = await apiLogin(email.toLowerCase().trim(), fd.get("newpw") as string);
      login(data.token, data.user.id, data.user.email, data.user.role);
      navigate({ to: "/onboarding" });
    } catch {
      setError("Registration failed. Please try again.");
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title={step === "register" ? "Create your account" : "Welcome back"}
      subtitle={
        step === "email" ? "Enter your email to continue." :
        step === "password" ? `Signing in as ${DEMO_USERS[email.toLowerCase().trim()]?.name ?? email}` :
        "Complete your profile to get started."
      }
      footer={
        step === "register"
          ? <span>Already registered? <button type="button" onClick={() => setStep("email")} className="font-medium text-primary hover:underline">Sign in instead</button></span>
          : <span>Don&apos;t have an account? <Link to="/signup" className="font-medium text-primary hover:underline">Create New</Link></span>
      }
    >
      {step === "email" && (
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" required autoFocus value={email} onChange={e => setEmail(e.target.value)} placeholder="sarah@example.com" className="mt-1.5" />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            {loading ? "Checking…" : <span className="flex items-center justify-center gap-2">Continue <ArrowRight className="h-4 w-4" /></span>}
          </Button>
          <Button type="button" variant="ghost" className="w-full text-muted-foreground" onClick={handleBack}>← Back</Button>
        </form>
      )}
      {step === "password" && (
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/40 px-3 py-2 flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="truncate text-muted-foreground">{email}</span>
            <button type="button" onClick={() => setStep("email")} className="ml-auto text-xs text-primary hover:underline shrink-0">Change</button>
          </div>
          <div><Label htmlFor="password">Password</Label><PasswordInput id="password" name="password" autoFocus placeholder="Enter your password" /></div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <div className="flex justify-end text-sm"><Link to="/forgot-password" className="text-primary hover:underline">Forgot password?</Link></div>
          <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">{loading ? "Signing in…" : "Sign in"}</Button>
          <Button type="button" variant="ghost" className="w-full text-muted-foreground" onClick={handleBack}>← Back</Button>
          <p className="text-xs text-center text-muted-foreground bg-muted/50 rounded-lg p-2">Demo password: <strong>CareGo2026!</strong></p>
        </form>
      )}
      {step === "register" && (
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/40 px-3 py-2 flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="truncate text-muted-foreground">{email}</span>
            <button type="button" onClick={() => setStep("email")} className="ml-auto text-xs text-primary hover:underline shrink-0">Change</button>
          </div>
          <p className="text-sm text-muted-foreground">No account found. Fill in your details to get started.</p>
          <div className="grid grid-cols-2 gap-3">
            <div><Label htmlFor="fname">First name</Label><Input id="fname" name="fname" required autoFocus className="mt-1.5" placeholder="e.g. Sarah" /></div>
            <div><Label htmlFor="lname">Last name</Label><Input id="lname" name="lname" required className="mt-1.5" placeholder="e.g. Whitfield" /></div>
          </div>
          <div><Label htmlFor="newpw">Choose a password</Label><PasswordInput id="newpw" name="newpw" placeholder="At least 12 characters" /></div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">{loading ? "Creating account…" : "Create account & continue"}</Button>
          <Button type="button" variant="ghost" className="w-full text-muted-foreground" onClick={handleBack}>← Back</Button>
          <p className="text-xs text-muted-foreground">By continuing you agree to our Terms and Privacy Policy.</p>
        </form>
      )}
    </AuthShell>
  );
}
