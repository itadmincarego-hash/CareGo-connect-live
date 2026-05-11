import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — CareGo" }] }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  return (
    <AuthShell title="Welcome back" subtitle="Sign in to continue caring with CareGo."
      footer={<>Don't have an account? <Link to="/signup" className="font-medium text-primary hover:underline">Create one</Link></>}>
      <form onSubmit={(e) => { e.preventDefault(); navigate({ to: "/app/family" }); }} className="space-y-4">
        <div><Label>Email</Label><Input type="email" required defaultValue="sarah@example.com" className="mt-1.5" /></div>
        <div><Label>Password</Label><Input type="password" required defaultValue="••••••••" className="mt-1.5" /></div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-input" /> Remember me</label>
          <Link to="/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
        </div>
        <Button type="submit" className="w-full bg-gradient-hero shadow-glow">Sign in</Button>
        <div className="relative"><div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div><div className="relative flex justify-center text-xs"><span className="bg-background px-2 text-muted-foreground">or</span></div></div>
        <Button type="button" variant="outline" className="w-full">Continue with Google</Button>
      </form>
    </AuthShell>
  );
}
