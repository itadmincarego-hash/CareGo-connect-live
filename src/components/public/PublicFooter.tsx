import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";

export function PublicFooter() {
  return (
    <footer className="border-t border-border bg-gradient-soft">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI-powered autonomous care — keeping vulnerable people safe at home, and giving families and providers the visibility they deserve.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">Built in the UK · Aligned to CQC standards · ISO 27001 ready</p>
          </div>
          <FooterCol title="Product" links={[
            ["/features", "Features"],
            ["/how-it-works", "How It Works"],
            ["/pricing", "Pricing"],
            ["/app/family", "Live Platform Demo"],
          ]} />
          <FooterCol title="Solutions" links={[
            ["/for-families", "For Families"],
            ["/for-providers", "For Providers"],
            ["/for-organisations", "For Organisations"],
            ["/app/marketplace", "Staff Marketplace"],
          ]} />
          <FooterCol title="Company" links={[
            ["/contact", "Contact"],
            ["/signup", "Start Free Trial"],
            ["/login", "Sign in"],
          ]} />
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 CareGo Health Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
            <a href="#" className="hover:text-foreground">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2">
        {links.map(([to, label]) => (
          <li key={to}>
            <Link to={to} className="text-sm text-muted-foreground hover:text-foreground">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
