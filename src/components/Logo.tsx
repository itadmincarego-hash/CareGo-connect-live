import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";

export function Logo({ className = "", variant = "default" }: { className?: string; variant?: "default" | "light" }) {
  return (
    <Link to="/" className={`flex items-center gap-2 font-display font-semibold tracking-tight ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero shadow-glow">
        <Heart className="h-5 w-5 text-white" fill="currentColor" strokeWidth={0} />
      </span>
      <span className={`text-lg ${variant === "light" ? "text-white" : "text-foreground"}`}>
        Care<span className="text-gradient">Go</span>
      </span>
    </Link>
  );
}
