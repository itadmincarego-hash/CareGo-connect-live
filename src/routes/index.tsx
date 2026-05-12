import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicNav } from "@/components/public/PublicNav";
import { PublicFooter } from "@/components/public/PublicFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity, AlertTriangle, Bell, Bot, Calendar, CheckCircle2, ChevronRight,
  Clock, Heart, Home, MapPin, MessageSquare, Phone, Pill, Shield, Sparkles,
  Stethoscope, Users, Wifi, Zap, Star, ArrowRight, PlayCircle, BarChart3,
  Building2, UserCheck, HeartHandshake, Headphones
} from "lucide-react";
import { testimonials, pricingTiers, faqs, heartRateChart } from "@/lib/demo-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareGo — AI-powered care, always Monitor, always ready" },
      { name: "description", content: "CareGo helps families, care providers, and organisations monitor wellbeing, respond faster to risks, and coordinate care through one intelligent platform." },
      { property: "og:title", content: "CareGo — AI-powered autonomous care platform" },
      { property: "og:description", content: "Monitor, respond, and coordinate care — all in one connected platform built for the UK care sector." },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNav />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <FeaturesGrid />
      <AICompanion />
      <RiskTiers />
      <DashboardPreviews />
      <Marketplace />
      <LiveResponse />
      <AgentTracking />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <PublicFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-mesh">
      <div className="container relative mx-auto max-w-7xl px-4 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge className="mb-6 border-primary/20 bg-primary-soft text-primary hover:bg-primary-soft">
              <Sparkles className="mr-1.5 h-3 w-3" /> Now with AI Care Companion 2.0
            </Badge>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI-powered care,<br />
              <span className="text-gradient">always watching, always ready.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              CareGo helps families, care providers, and care organisations monitor wellbeing, respond faster to risks, book trusted support, and coordinate care — through one intelligent platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-hero shadow-glow hover:opacity-95">
                <Link to="/signup">Start Free Trial <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Book Demo</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/app/family"><PlayCircle className="mr-1.5 h-4 w-4" /> View Live Demo</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Shield className="h-4 w-4 text-accent" /> CQC-aligned</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> GDPR & ISO 27001</span>
              <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-accent" /> 12,000+ care recipients</span>
            </div>
          </div>
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-hero opacity-20 blur-3xl" />
      <div className="relative rounded-3xl border border-border/60 bg-card p-5 shadow-elevated">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero"><Heart className="h-4 w-4 text-white" fill="currentColor" strokeWidth={0} /></div>
            <div>
              <p className="text-xs font-medium text-foreground">Margaret · 78</p>
              <p className="text-[10px] text-muted-foreground">Bristol · monitored by Sarah</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent">
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent pulse-dot text-accent" />
            All systems normal
          </div>
        </div>

        {/* Score */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <Card className="border-0 bg-primary-soft p-3 shadow-none">
            <p className="text-[10px] uppercase tracking-wide text-primary/80">Wellbeing</p>
            <p className="mt-1 text-2xl font-semibold text-primary">82</p>
            <p className="text-[10px] text-primary/70">+4 this week</p>
          </Card>
          <Card className="border-0 bg-accent-soft p-3 shadow-none">
            <p className="text-[10px] uppercase tracking-wide text-accent">Heart rate</p>
            <p className="mt-1 text-2xl font-semibold text-accent">74</p>
            <p className="text-[10px] text-accent/80">bpm · normal</p>
          </Card>
          <Card className="border-0 bg-muted p-3 shadow-none">
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Last activity</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">8m</p>
            <p className="text-[10px] text-muted-foreground">ago · kitchen</p>
          </Card>
        </div>

        {/* Mini chart */}
        <Card className="mt-3 border border-border/60 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium">Today · Heart rate</p>
            <p className="text-[10px] text-muted-foreground">62–88 bpm baseline</p>
          </div>
          <svg viewBox="0 0 200 50" className="mt-2 h-14 w-full">
            <defs>
              <linearGradient id="hr" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.48 0.16 245)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="oklch(0.48 0.16 245)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={polyPath(heartRateChart.map(p => p.v), 200, 50, 55, 82)} fill="none" stroke="oklch(0.48 0.16 245)" strokeWidth="2" />
            <path d={areaPath(heartRateChart.map(p => p.v), 200, 50, 55, 82)} fill="url(#hr)" />
          </svg>
        </Card>

        {/* AI alert */}
        <Card className="mt-3 border border-accent/20 bg-accent-soft/40 p-3">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Bot className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold">AI Companion · gentle nudge sent</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">Medication window approaching at 13:00. Voice reminder queued on Echo. Sarah notified.</p>
              <div className="mt-1.5 flex items-center gap-2 text-[10px] text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Sparkles className="h-3 w-3" /> 94% confidence</span>
                <span>· Low risk</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Floating cards */}
      <Card className="absolute -left-4 top-1/3 hidden w-56 border border-border/60 p-3 shadow-elevated animate-float md:block">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10 text-success"><MapPin className="h-4 w-4" /></div>
          <div>
            <p className="text-xs font-semibold">Aisha is on the way</p>
            <p className="text-[10px] text-muted-foreground">ETA 12 min · 2.4 mi</p>
          </div>
        </div>
      </Card>
      <Card className="absolute -right-4 bottom-8 hidden w-60 border border-border/60 p-3 shadow-elevated animate-float md:block" style={{ animationDelay: "1.5s" }}>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-warning/15 text-warning-foreground"><Pill className="h-4 w-4" /></div>
          <div>
            <p className="text-xs font-semibold">Morning meds taken</p>
            <p className="text-[10px] text-muted-foreground">09:38 · dispenser confirmed</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

// build SVG paths
function polyPath(values: number[], w: number, h: number, min: number, max: number) {
  return values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * h;
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}
function areaPath(values: number[], w: number, h: number, min: number, max: number) {
  return polyPath(values, w, h, min, max) + ` L${w},${h} L0,${h} Z`;
}

function TrustBar() {
  const items = ["NHS-aligned", "CQC standards", "ISO 27001", "GDPR compliant", "DBS verified network", "24/7 monitoring"];
  return (
    <section className="border-y border-border bg-card/50 py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">Trusted infrastructure for the UK care sector</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map(i => (
            <span key={i} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent" /> {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Wifi, title: "1. Connect", desc: "Pair wearables, sensors, and smart devices in minutes. CareGo learns each person's baseline within 48 hours." },
    { icon: Bot, title: "2. Monitor", desc: "The AI Companion observes wellbeing 24/7 — movement, vitals, medication, sleep, environment — explainable at every step." },
    { icon: Zap, title: "3. Respond", desc: "From a gentle reminder to a full emergency dispatch, the right response is triggered in seconds, with everyone informed." },
  ];
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="How CareGo works" title="One platform. Three intelligent layers." subtitle="Connect, monitor, and respond — built so families, providers, and organisations work from the same source of truth." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(s => (
            <Card key={s.title} className="relative overflow-hidden border-border/60 p-7 transition-all hover:shadow-elevated">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-hero opacity-5" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-white shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const features = [
    { icon: Bot, title: "AI Care Companion", desc: "24/7 conversational assistant on smart speakers — gentle reminders, check-ins, and friendly company." },
    { icon: Activity, title: "Live wellbeing monitoring", desc: "Vitals, movement, sleep, hydration, environment — fused into a single wellbeing score." },
    { icon: AlertTriangle, title: "Three-tier risk response", desc: "Low-risk nudge, medium-risk family alert, high-risk emergency dispatch — fully audited." },
    { icon: MapPin, title: "Live agent travel tracking", desc: "See accepted agent, ETA, live route, and verified credentials — the moment help is on the way." },
    { icon: Building2, title: "Workforce & compliance", desc: "DBS, training, right-to-work, rotas, shift gaps and dispatch in one operations console." },
    { icon: HeartHandshake, title: "Staff marketplace", desc: "Care homes and agencies share unused capacity — verified, rated, instantly bookable." },
    { icon: BarChart3, title: "Auditable reporting", desc: "Every AI decision, alert, visit, and intervention exportable for CQC, families, and funders." },
    { icon: Headphones, title: "24/7 emergency response", desc: "Human responders in the loop for every high-risk event — never replaced by AI, always supported by it." },
  ];
  return (
    <section className="bg-gradient-soft py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Features" title="Everything you need to deliver safer care." subtitle="Designed alongside families, frontline carers, and operators — built to the standards the UK care sector demands." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(f => (
            <Card key={f.title} className="group border-border/60 p-6 transition-all hover:-translate-y-1 hover:shadow-elevated">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function AICompanion() {
  return (
    <section className="py-24">
      <div className="container mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <Badge className="mb-4 border-accent/20 bg-accent-soft text-accent hover:bg-accent-soft">AI Care Companion</Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A warm, intelligent presence — even when no-one else is home.</h2>
          <p className="mt-4 text-muted-foreground">
            More than a monitor. The CareGo Companion has gentle two-way conversations through any compatible speaker — offering reminders, comfort, escalation when needed, and a clear, explainable record of every decision it makes.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Personalised baselines learned in 48 hours",
              "Explainable AI — see exactly why every alert was raised",
              "Privacy by design — no continuous audio recording",
              "Hand-off to a human responder at every risk level",
            ].map(p => (
              <li key={p} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <Card className="relative overflow-hidden border-border/60 p-6 shadow-elevated">
          <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-hero opacity-10 blur-2xl" />
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-hero text-white"><Bot className="h-5 w-5" /></div>
            <div>
              <p className="font-semibold">CareGo Companion</p>
              <p className="text-xs text-muted-foreground">Listening · sharing only what matters</p>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            <Bubble side="ai">"Good morning Margaret — how did you sleep?"</Bubble>
            <Bubble side="user">"Not too bad. A bit stiff."</Bubble>
            <Bubble side="ai">"Thank you. I'll log that. Your physio exercises are on at 11 — would you like a reminder?"</Bubble>
            <Bubble side="user">"Yes please."</Bubble>
            <Card className="border border-border/60 bg-muted/40 p-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span><strong className="text-foreground">AI decision:</strong> Sleep below personal average (-18m). Trend stable, no alert raised. Reminder queued.</span>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Bubble({ side, children }: { side: "ai" | "user"; children: React.ReactNode }) {
  const isAI = side === "ai";
  return (
    <div className={`flex ${isAI ? "" : "justify-end"}`}>
      <div className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm ${isAI ? "rounded-bl-sm bg-primary-soft text-foreground" : "rounded-br-sm bg-gradient-hero text-white"}`}>{children}</div>
    </div>
  );
}

function RiskTiers() {
  const tiers = [
    { icon: Bell, color: "text-accent", bg: "bg-accent-soft", border: "border-accent/20", label: "Low risk", action: "Gentle prompt", desc: "AI sends a friendly voice reminder or a soft notification. Logged for trend analysis. No escalation.", example: "Missed scheduled hydration window." },
    { icon: Phone, color: "text-warning-foreground", bg: "bg-warning/15", border: "border-warning/30", label: "Medium risk", action: "Family / carer notified", desc: "Designated family member or assigned carer is alerted. AI initiates check-in call to confirm wellbeing.", example: "2h+ unusual inactivity during the day." },
    { icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/10", border: "border-destructive/30", label: "High risk", action: "Emergency dispatch", desc: "Nearest verified responder dispatched, emergency services contacted, full incident audit started immediately.", example: "Fall detected with no recovery movement." },
  ];
  return (
    <section className="bg-gradient-soft py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Three-tier risk response" title="The right response, every single time." subtitle="Every event passes through CareGo's risk model. Action is always proportionate — and every step is auditable." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tiers.map(t => (
            <Card key={t.label} className={`border ${t.border} bg-card p-6 shadow-card`}>
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${t.bg} ${t.color}`}><t.icon className="h-5 w-5" /></div>
              <p className={`mt-4 text-xs font-semibold uppercase tracking-wide ${t.color}`}>{t.label}</p>
              <h3 className="mt-1 text-lg font-semibold">{t.action}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-4 rounded-lg border border-border bg-muted/50 p-3 text-xs">
                <p className="font-medium text-foreground">Example</p>
                <p className="mt-0.5 text-muted-foreground">{t.example}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardPreviews() {
  const previews = [
    { title: "Family Dashboard", desc: "Wellbeing at a glance, live alerts, AI decisions, and one-tap support booking.", link: "/app/family", icon: Heart, audience: "For families" },
    { title: "Provider Dashboard", desc: "Today's visits, live travel, check-ins, incident logging, earnings, and verification.", link: "/app/provider", icon: UserCheck, audience: "For carers & agents" },
    { title: "Organisation Dashboard", desc: "Workforce, compliance, alerts, dispatch and marketplace — all in one console.", link: "/app/organisation", icon: Building2, audience: "For care homes & agencies" },
  ];
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Built for every role" title="One product. Three connected experiences." subtitle="Whether you're a daughter checking in on Mum, an agent on a visit, or an operations director — CareGo speaks your language." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {previews.map(p => (
            <Link key={p.title} to={p.link} className="group">
              <Card className="h-full overflow-hidden border-border/60 transition-all hover:-translate-y-1 hover:shadow-elevated">
                <div className="relative h-44 overflow-hidden bg-gradient-mesh">
                  <div className="absolute inset-4 rounded-xl border border-border/60 bg-card/80 p-3 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary-soft text-primary"><p.icon className="h-4 w-4" /></div>
                        <span className="text-xs font-medium">{p.title}</span>
                      </div>
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-medium text-accent">Live</span>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-1.5">
                      <div className="h-10 rounded-md bg-primary-soft/60" />
                      <div className="h-10 rounded-md bg-accent-soft/60" />
                      <div className="h-10 rounded-md bg-muted" />
                    </div>
                    <div className="mt-1.5 h-12 rounded-md bg-muted/70" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-primary">{p.audience}</p>
                  <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2">
                    Explore live demo <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marketplace() {
  return (
    <section className="bg-gradient-soft py-24">
      <div className="container mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <Card className="order-2 border-border/60 p-6 shadow-elevated lg:order-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Available carers · nearby</p>
            <Badge variant="secondary">Live</Badge>
          </div>
          <div className="mt-4 space-y-3">
            {[
              { n: "Joseph A.", o: "BrightCare", r: 22, d: "3.1 mi", s: "Dementia · Hoist" },
              { n: "Yuki T.", o: "Avon Home Care", r: 18, d: "6.4 mi", s: "Companion · MHFA" },
              { n: "Marcus B.", o: "Independent", r: 26, d: "2.0 mi", s: "Night · First Aid" },
            ].map(c => (
              <div key={c.n} className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary">{c.n[0]}</div>
                  <div>
                    <p className="text-sm font-medium">{c.n}</p>
                    <p className="text-xs text-muted-foreground">{c.o} · {c.s}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">£{c.r}/hr</p>
                  <p className="text-xs text-muted-foreground">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <div className="order-1 lg:order-2">
          <Badge className="mb-4 border-primary/20 bg-primary-soft text-primary hover:bg-primary-soft">Staff Marketplace</Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Solve shift gaps in minutes, not days.</h2>
          <p className="mt-4 text-muted-foreground">
            Care homes, agencies and independent carers share verified capacity through the CareGo Marketplace. Cover gaps, expand reach, and unlock new revenue — without compromising on compliance.
          </p>
          <Button asChild className="mt-6 bg-gradient-hero shadow-glow">
            <Link to="/app/marketplace">Explore the marketplace <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function LiveResponse() {
  return (
    <section className="py-24">
      <div className="container mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <Badge className="mb-4 border-destructive/20 bg-destructive/10 text-destructive hover:bg-destructive/10">Live Emergency Response</Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">When seconds matter, CareGo moves first.</h2>
          <p className="mt-4 text-muted-foreground">
            Every high-risk event triggers a coordinated response — verified responders, family notification, emergency services hand-off, and a complete audit trail. Built so no one is ever alone.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { l: "Median dispatch", v: "47s" },
              { l: "Resolution rate", v: "99.2%" },
              { l: "False positives", v: "< 0.4%" },
              { l: "Family reach", v: "100%" },
            ].map(s => (
              <div key={s.l} className="rounded-xl border border-border bg-card p-4">
                <p className="text-2xl font-semibold text-gradient">{s.v}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <Card className="overflow-hidden border-destructive/20 shadow-elevated">
          <div className="border-b border-border bg-destructive/5 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive pulse-dot text-destructive" />
              <p className="text-sm font-semibold text-destructive">High-risk event · in progress</p>
              <span className="ml-auto text-xs text-muted-foreground">14:32</span>
            </div>
          </div>
          <div className="space-y-3 p-5">
            {[
              { t: "14:31:02", l: "Fall pattern detected · Living Room", ok: true },
              { t: "14:31:14", l: "AI escalated to high risk · 97% confidence", ok: true },
              { t: "14:31:22", l: "Emergency contact Sarah W. called", ok: true },
              { t: "14:31:38", l: "Nearest agent Aisha P. dispatched · ETA 9 min", ok: true },
              { t: "14:32:05", l: "Voice contact established via Echo", ok: true },
              { t: "14:33", l: "Awaiting agent arrival", ok: false },
            ].map((e, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${e.ok ? "bg-success text-success-foreground" : "border-2 border-dashed border-muted-foreground/40"}`}>
                  {e.ok && <CheckCircle2 className="h-3.5 w-3.5" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{e.l}</p>
                  <p className="text-xs text-muted-foreground">{e.t}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function AgentTracking() {
  return (
    <section className="bg-gradient-soft py-24">
      <div className="container mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <Card className="overflow-hidden border-border/60 shadow-elevated">
          {/* Mock map */}
          <div className="relative h-64 bg-gradient-to-br from-primary-soft via-card to-accent-soft">
            <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="oklch(0.48 0.16 245 / 0.1)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="400" height="200" fill="url(#grid)" />
              <path d="M 50 160 Q 130 100, 220 110 T 340 50" stroke="oklch(0.48 0.16 245)" strokeWidth="3" fill="none" strokeDasharray="6 4" />
              <circle cx="50" cy="160" r="8" fill="oklch(0.62 0.14 165)" />
              <circle cx="50" cy="160" r="14" fill="oklch(0.62 0.14 165)" opacity="0.3" />
              <circle cx="340" cy="50" r="8" fill="oklch(0.48 0.16 245)" />
            </svg>
            <div className="absolute left-4 top-4 rounded-lg bg-card/90 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur">
              <MapPin className="mr-1 inline h-3.5 w-3.5 text-accent" /> Aisha Patel · 2.4 mi away
            </div>
            <div className="absolute bottom-4 right-4 rounded-lg bg-gradient-hero px-3 py-1.5 text-xs font-semibold text-white shadow-glow">ETA 12 min</div>
          </div>
          <div className="border-t border-border p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-base font-semibold text-primary">AP</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="truncate font-semibold">Aisha Patel</p>
                  <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                  <span className="text-sm font-medium">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground">Senior Care Specialist · BrightCare Bristol</p>
              </div>
              <Button size="icon" variant="outline"><Phone className="h-4 w-4" /></Button>
              <Button size="icon" variant="outline"><MessageSquare className="h-4 w-4" /></Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["DBS", "Training", "Right to Work", "First Aid"].map(v => (
                <Badge key={v} variant="secondary" className="text-[10px]"><Shield className="mr-1 h-3 w-3" />{v}</Badge>
              ))}
            </div>
          </div>
        </Card>
        <div>
          <Badge className="mb-4 border-accent/20 bg-accent-soft text-accent hover:bg-accent-soft">Accepted Agent Live Tracking</Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Know who's coming. See them arrive.</h2>
          <p className="mt-4 text-muted-foreground">
            From the moment a booking is accepted, families see exactly who is coming, what they're trained in, and how far away they are — in real time. Comfort and clarity, when it matters most.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Verified profile · DBS, training, right-to-work",
              "Live route, ETA, and journey timeline",
              "Direct call and message — no shared phone numbers",
              "Full audit trail: accepted → arrived → checked-in → completed",
            ].map(p => (
              <li key={p} className="flex items-start gap-2.5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span>{p}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Stories" title="Trusted by families, providers, and operators." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map(t => (
            <Card key={t.name} className="border-border/60 p-6">
              <div className="flex gap-0.5 text-warning">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full bg-muted" />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-gradient-soft py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Pricing" title="Simple plans for every kind of care." subtitle="Start free for 14 days. No card required. Cancel anytime." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricingTiers.map(t => (
            <Card key={t.name} className={`relative p-7 ${t.featured ? "border-primary shadow-elevated ring-1 ring-primary" : "border-border/60"}`}>
              {t.featured && <Badge className="absolute -top-3 left-7 bg-gradient-hero text-white">Most popular</Badge>}
              <p className="text-sm font-semibold text-primary">{t.name}</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{t.price}</span>
                {t.per && <span className="text-sm text-muted-foreground">{t.per}</span>}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
              <ul className="mt-6 space-y-2.5">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className={`mt-7 w-full ${t.featured ? "bg-gradient-hero shadow-glow" : ""}`} variant={t.featured ? "default" : "outline"}>
                <Link to={t.cta === "Book Demo" ? "/contact" : "/signup"}>{t.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-4 pb-24">
      <div className="container mx-auto max-w-6xl">
        <Card className="overflow-hidden border-0 bg-gradient-hero p-10 text-center shadow-elevated md:p-16">
          <Sparkles className="mx-auto h-8 w-8 text-white/80" />
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Care that's always one step ahead.</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">Join thousands of families and providers using CareGo to keep loved ones safe, reduce response times, and run better operations.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90"><Link to="/signup">Start Free Trial</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link to="/contact">Book a demo</Link></Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
