import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PublicShell } from "@/components/public/PublicShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";

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
      <div className="grid gap-10 lg:grid-cols-3">
        {/* Form card */}
        <Card className="border-border/60 p-6 lg:col-span-2">
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

        {/* Contact info sidebar */}
        <div className="space-y-4">
          <Card className="border-border/60 p-5">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium">hello@carego.health</p>
                <p className="text-xs text-muted-foreground">Reply within 4 working hours</p>
              </div>
            </div>
          </Card>
          <Card className="border-border/60 p-5">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium">+44 117 555 0192</p>
                <p className="text-xs text-muted-foreground">Mon–Fri · 8am–8pm</p>
              </div>
            </div>
          </Card>
          <Card className="border-border/60 p-5">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium">Engine Shed, Bristol</p>
                <p className="text-xs text-muted-foreground">Station Approach · BS1 6QH</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PublicShell>
  );
}
