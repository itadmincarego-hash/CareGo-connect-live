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
  return (
    <AuthShell title="Start your free trial" subtitle="14 days free. No credit card required."
      footer={<>Already have an account? <Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link></>}>
      <form onSubmit={(e) => { e.preventDefault(); navigate({ to: "/onboarding" }); }} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div><Label>First name</Label><Input required className="mt-1.5" defaultValue="Sarah" /></div>
          <div><Label>Last name</Label><Input required className="mt-1.5" defaultValue="Whitfield" /></div>
        </div>
        <div><Label>Email</Label><Input type="email" required className="mt-1.5" defaultValue="sarah@example.com" /></div>
        <div><Label>Password</Label><Input type="password" required className="mt-1.5" placeholder="At least 12 characters" /></div>
        <Button type="submit" className="w-full bg-gradient-hero shadow-glow">Create account</Button>
        <p className="text-xs text-muted-foreground">By creating an account you agree to our Terms and Privacy Policy.</p>
      </form>
    </AuthShell>
  );
}
