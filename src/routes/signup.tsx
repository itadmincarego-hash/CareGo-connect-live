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

function PasswordInput({ id, placeholder, className }: { id: string; placeholder?: string; className?: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Input id={id} type={show ? "text" : "password"} required placeholder={placeholder} className={cn("mt-1.5 pr-10", className)} />
      <button type="button" onClick={() => setShow(v => !v)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label={show ? "Hide password" : "Show password"}>
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors]   = useState<string[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const missing: string[] = [];
    if (!fd.get("fname")?.toString().trim()) missing.push("fname");
    if (!fd.get("lname")?.toString().trim()) missing.push("lname");
    if (!fd.get("email")?.toString().trim()) missing.push("email");
    if (!fd.get("password")?.toString().trim()) missing.push("password");
    if (missing.length) { setErrors(missing); return; }
    setErrors([]);
    setLoading(true);
    // Store signup data in sessionStorage so onboarding can auto-fill profile
    sessionStorage.setItem("carego-signup", JSON.stringify({
      firstName: fd.get("fname"),
      lastName:  fd.get("lname"),
      email:     fd.get("email"),
    }));
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
            <Input id="fname" name="fname" required className={cn("mt-1.5", err("fname") && "border-destructive ring-1 ring-destructive")} placeholder="e.g. Sarah" />
            {err("fname") && <p className="mt-1 text-xs text-destructive">Required</p>}
          </div>
          <div>
            <Label htmlFor="lname" className={err("lname") ? "text-destructive" : ""}>Last name <span className="text-destructive">*</span></Label>
            <Input id="lname" name="lname" required className={cn("mt-1.5", err("lname") && "border-destructive ring-1 ring-destructive")} placeholder="e.g. Whitfield" />
            {err("lname") && <p className="mt-1 text-xs text-destructive">Required</p>}
          </div>
        </div>
        <div>
          <Label htmlFor="email" className={err("email") ? "text-destructive" : ""}>Email <span className="text-destructive">*</span></Label>
          <Input id="email" name="email" type="email" required className={cn("mt-1.5", err("email") && "border-destructive ring-1 ring-destructive")} placeholder="e.g. sarah@example.com" />
          {err("email") && <p className="mt-1 text-xs text-destructive">Required</p>}
        </div>
        <div>
          <Label htmlFor="password" className={err("password") ? "text-destructive" : ""}>Password <span className="text-destructive">*</span></Label>
          <PasswordInput id="password" placeholder="At least 12 characters" className={err("password") ? "border-destructive ring-1 ring-destructive" : ""} />
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
