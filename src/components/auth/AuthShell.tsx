import { Link } from "@tanstack/react-router";
import { Logo, CareGoMark } from "@/components/Logo";
import { ReactNode } from "react";
import { Sparkles } from "lucide-react";


export function AuthShell({ title, subtitle, children, footer }: { title: string; subtitle?: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      <div className="flex flex-col px-6 py-8 lg:px-12">
        <Logo />
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-6 text-sm text-muted-foreground">{footer}</div>}
        </div>
        <p className="text-xs text-muted-foreground">© 2026 CareGo Health Ltd · <Link to="/" className="hover:text-foreground">Back to site</Link></p>
      </div>
      <div className="relative hidden overflow-hidden bg-gradient-hero lg:block">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative flex h-full flex-col justify-between p-12 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs backdrop-blur"><Sparkles className="h-3.5 w-3.5" /> Trusted by 12,000+ care recipients</div>
          <div>
            <p className="text-3xl font-semibold leading-tight">"CareGo gives me the calm of knowing Mum is safe — even from 200 miles away."</p>
            <p className="mt-4 text-white/80">Eleanor R. · Family user, Newcastle</p>
          </div>
        </div>
      </div>
    </div>
  );
}
