import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password — CareGo" }] }),
  component: ForgotPassword,
});

function ForgotPassword() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 800);
  }

  return (
    <AuthShell title="Reset your password" subtitle="We'll email you a secure reset link."
      footer={<Link to="/login" className="font-medium text-primary hover:underline">Back to sign in</Link>}>
      {sent ? (
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <CheckCircle className="h-12 w-12 text-primary" />
          <p className="text-sm text-muted-foreground">Check your email for the reset link.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required className="mt-1.5" placeholder="sarah@example.com" /></div>
          <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            {loading ? "Sending…" : "Send reset link"}
          </Button>
        </form>
      )}
    </AuthShell>
  );
}
