import { useState } from "react";
import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Eye, EyeOff } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — CareGo" }] }),
  component: Login,
});

const DEMO_USERS: Record<string, { role: string; destination: string; name: string }> = {
  "family@carego.com":   { role: "family",   destination: "/app/family",       name: "Sarah Whitfield" },
  "provider@carego.com": { role: "provider",  destination: "/app/provider",     name: "Aisha Mensah" },
  "business@carego.com": { role: "business",  destination: "/app/organisation", name: "Bristol Care Home" },
  "admin@carego.com":    { role: "admin",     destination: "/app/family",       name: "CareGo Admin" },
};

type Step = "email" | "password" | "register";

function PasswordInput({ id, name, autoFocus, placeholder }: { id: string; name?: string; autoFocus?: boolean; placeholder?: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Input
        id={id} name={name} type={show ? "text" : "password"}
        required autoFocus={autoFocus} placeholder={placeholder}
        className="mt-1.5 pr-10"
      />
      <button
        type="button"
        onClick={() => setShow(v => !v)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}

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

  function handleEmailSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const known = DEMO_USERS[email.toLowerCase().trim()];
      setStep(known ? "password" : "register");
    }, 500);
  }

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

  function handleRegisterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate({ to: "/onboarding" }); }, 700);
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
      {step === "email" && (
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" required autoFocus value={email} onChange={(e) => setEmail(e.target.value)} placeholder="sarah@example.com" className="mt-1.5" />
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
          <div>
            <Label htmlFor="password">Password</Label>
            <PasswordInput id="password" name="password" autoFocus placeholder="Enter your password" />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <div className="flex justify-end text-sm">
            <Link to="/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
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

      {step === "register" && (
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/40 px-3 py-2 flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="truncate text-muted-foreground">{email}</span>
            <button type="button" onClick={() => setStep("email")} className="ml-auto text-xs text-primary hover:underline shrink-0">Change</button>
          </div>
          <p className="text-sm text-muted-foreground">No account found. Fill in your details to get started.</p>
          <div className="grid grid-cols-2 gap-3">
            <div><Label htmlFor="fname">First name</Label><Input id="fname" required autoFocus className="mt-1.5" placeholder="Sarah" /></div>
            <div><Label htmlFor="lname">Last name</Label><Input id="lname" required className="mt-1.5" placeholder="Whitfield" /></div>
          </div>
          <div>
            <Label htmlFor="newpw">Choose a password</Label>
            <PasswordInput id="newpw" placeholder="At least 12 characters" />
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
