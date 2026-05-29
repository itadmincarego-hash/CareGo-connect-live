import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiRegister } from "@/lib/auth";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Start free trial — CareGo" }] }),
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const fd         = new FormData(e.currentTarget);
    const first_name = (fd.get("fname")    as string).trim();
    const last_name  = (fd.get("lname")    as string).trim();
    const email      = (fd.get("email")    as string).trim().toLowerCase();
    const password   = (fd.get("password") as string);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    try {
      await apiRegister(email, password, first_name, last_name);
      setSuccess(true);
      // Short delay then send to login so they can sign in immediately
      setTimeout(() => navigate({ to: "/login" }), 1500);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="Start your free trial"
      subtitle="14 days free. No credit card required."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link>
        </>
      }
    >
      {success ? (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800 text-center">
          ✅ Account created! Redirecting you to sign in…
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="fname">First name</Label>
              <Input id="fname" name="fname" required className="mt-1.5" placeholder="Sarah" />
            </div>
            <div>
              <Label htmlFor="lname">Last name</Label>
              <Input id="lname" name="lname" required className="mt-1.5" placeholder="Whitfield" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required className="mt-1.5" placeholder="sarah@example.com" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password" name="password" type="password"
              required className="mt-1.5" placeholder="At least 8 characters"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button
            type="submit" disabled={loading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {loading ? "Creating account…" : "Create account"}
          </Button>

          <p className="text-xs text-muted-foreground">
            By creating an account you agree to our Terms and Privacy Policy.
          </p>
        </form>
      )}
    </AuthShell>
  );
}
