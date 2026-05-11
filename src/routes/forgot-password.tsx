import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password — CareGo" }] }),
  component: () => (
    <AuthShell title="Reset your password" subtitle="We'll email you a secure reset link."
      footer={<><Link to="/login" className="font-medium text-primary hover:underline">Back to sign in</Link></>}>
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Check your email for the reset link."); }} className="space-y-4">
        <div><Label>Email</Label><Input type="email" required className="mt-1.5" /></div>
        <Button type="submit" className="w-full bg-gradient-hero shadow-glow">Send reset link</Button>
      </form>
    </AuthShell>
  ),
});
