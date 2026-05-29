import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create New Account — CareGo" }] }),
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors]   = useState<string[]>([]);
  const [showPw, setShowPw]   = useState(false);

  // Controlled values so validation always reads current state
  const [fname,    setFname]    = useState("");
  const [lname,    setLname]    = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const missing: string[] = [];
    if (!fname.trim())    missing.push("fname");
    if (!lname.trim())    missing.push("lname");
    if (!email.trim())    missing.push("email");
    if (!password.trim()) missing.push("password");
    if (missing.length) { setErrors(missing); return; }
    setErrors([]);
    setLoading(true);
    sessionStorage.setItem("carego-signup", JSON.stringify({ firstName: fname, lastName: lname, email }));
    setTimeout(() => { setLoading(false); navigate({ to: "/onboarding" }); }, 700);
  }

  const err = (id: string) => errors.includes(id);

  return (
    <AuthShell
      title="Create New Account"
      subtitle="14 days free. No credit card required."
      footer={<>Already have an account?{" "}<Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link></>}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="fname" className={err("fname") ? "text-destructive" : ""}>First name <span className="text-destructive">*</span></Label>
            <Input id="fname" value={fname} onChange={e => { setFname(e.target.value); setErrors(x => x.filter(v => v !== "fname")); }}
              className={cn("mt-1.5", err("fname") && "border-destructive ring-1 ring-destructive")} placeholder="e.g. Sarah" />
            {err("fname") && <p className="mt-1 text-xs text-destructive">Required</p>}
          </div>
          <div>
            <Label htmlFor="lname" className={err("lname") ? "text-destructive" : ""}>Last name <span className="text-destructive">*</span></Label>
            <Input id="lname" value={lname} onChange={e => { setLname(e.target.value); setErrors(x => x.filter(v => v !== "lname")); }}
              className={cn("mt-1.5", err("lname") && "border-destructive ring-1 ring-destructive")} placeholder="e.g. Whitfield" />
            {err("lname") && <p className="mt-1 text-xs text-destructive">Required</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="email" className={err("email") ? "text-destructive" : ""}>Email <span className="text-destructive">*</span></Label>
          <Input id="email" type="email" value={email} onChange={e => { setEmail(e.target.value); setErrors(x => x.filter(v => v !== "email")); }}
            className={cn("mt-1.5", err("email") && "border-destructive ring-1 ring-destructive")} placeholder="e.g. sarah@example.com" />
          {err("email") && <p className="mt-1 text-xs text-destructive">Required</p>}
        </div>

        <div>
          <Label htmlFor="password" className={err("password") ? "text-destructive" : ""}>Password <span className="text-destructive">*</span></Label>
          <div className="relative">
            <Input
              id="password"
              type={showPw ? "text" : "password"}
              value={password}
              onChange={e => { setPassword(e.target.value); setErrors(x => x.filter(v => v !== "password")); }}
              placeholder="At least 12 characters"
              className={cn("mt-1.5 pr-10", err("password") && "border-destructive ring-1 ring-destructive")}
            />
            <button type="button" onClick={() => setShowPw(v => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={showPw ? "Hide password" : "Show password"}>
              {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {err("password") && <p className="mt-1 text-xs text-destructive">Required</p>}
        </div>

        <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          {loading ? "Creating account…" : "Create New Account"}
        </Button>
        <p className="text-xs text-muted-foreground">By creating an account you agree to our Terms and Privacy Policy.</p>
      </form>
    </AuthShell>
  );
}
