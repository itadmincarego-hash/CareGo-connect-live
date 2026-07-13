import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PublicShell } from "@/components/public/PublicShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — CareGo" }] }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission without blocking the thread
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <PublicShell
      eyebrow="Contact"
      title="Talk to our team."
      subtitle="Book a demo, ask about pricing, or partner with us."
    >
      <div className="grid gap-10">
        {/* Form card */}
        <Card className="border-border/60 p-6 max-w-2xl">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <CheckCircle className="h-12 w-12 text-primary" />
              <h3 className="text-lg font-semibold">Message sent!</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Thanks! Our team will be in touch within one business day.
              </p>
              <Button
                variant="outline"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 sm:grid-cols-2"
            >
              <div>
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" name="firstName" className="mt-1.5" placeholder="Sarah" required />
              </div>
              <div>
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" name="lastName" className="mt-1.5" placeholder="Whitfield" required />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1.5"
                  placeholder="sarah@example.com"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="org">Organisation (optional)</Label>
                <Input id="org" name="organisation" className="mt-1.5" placeholder="Sunrise Care Home" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1.5"
                  placeholder="I'd like to book a demo for a small care home (24 residents)."
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="sm:col-span-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {loading ? "Sending…" : "Send message"}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </PublicShell>
  );
}
