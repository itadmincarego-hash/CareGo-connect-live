import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Start free trial — CareGo" }] }),
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate({ to: "/onboarding" }); }, 700);
  }

  return (
    <AuthShell title="Start your free trial" subtitle="14 days free. No credit card required."
      footer={<>Already have an account?{" "}<Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link></>}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div><Label htmlFor="fname">First name</Label><Input id="fname" required className="mt-1.5" placeholder="Sarah" /></div>
          <div><Label htmlFor="lname">Last name</Label><Input id="lname" required className="mt-1.5" placeholder="Whitfield" /></div>
        </div>
        <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required className="mt-1.5" placeholder="sarah@example.com" /></div>
        <div><Label htmlFor="password">Password</Label><Input id="password" type="password" required className="mt-1.5" placeholder="At least 12 characters" /></div>
        <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          {loading ? "Creating account…" : "Create account"}
        </Button>
        <p className="text-xs text-muted-foreground">By creating an account you agree to our Terms and Privacy Policy.</p>
      </form>
    </AuthShell>
  );
}
