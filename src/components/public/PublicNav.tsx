import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/for-families", label: "For Families" },
  { to: "/for-providers", label: "For Providers" },
  { to: "/for-organisations", label: "For Organisations" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function PublicNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary bg-primary-soft" }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
            <Link to="/login">Sign in</Link>
          </Button>
          <Button asChild size="sm" className="hidden md:inline-flex bg-gradient-hero shadow-glow hover:opacity-95">
            <Link to="/signup">Start Free Trial</Link>
          </Button>
          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navItems.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted">
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 border-t pt-3">
              <Button asChild variant="outline" size="sm" className="flex-1"><Link to="/login">Sign in</Link></Button>
              <Button asChild size="sm" className="flex-1 bg-gradient-hero"><Link to="/signup">Free Trial</Link></Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
