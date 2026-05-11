import { PublicNav } from "@/components/public/PublicNav";
import { PublicFooter } from "@/components/public/PublicFooter";
import { ReactNode } from "react";

export function PublicShell({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <PublicNav />
      <section className="bg-gradient-mesh">
        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>}
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
        </div>
      </section>
      <div className="container mx-auto max-w-7xl px-4 py-16">{children}</div>
      <PublicFooter />
    </div>
  );
}
