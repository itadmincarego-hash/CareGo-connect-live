import { useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

/**
 * Universal back button. Goes to the previous screen in history when possible,
 * otherwise falls back to home ("/"). Hidden on the home page itself.
 * Compatible with both BrowserHistory and HashHistory.
 */
export function BackButton({
  className,
  fallback = "/",
  label = "Back",
}: {
  className?: string;
  fallback?: string;
  label?: string;
}) {
  const router = useRouter();

  // With HashHistory the real path lives after the '#'
  const hash = typeof window !== "undefined" ? window.location.hash : "";
  // hash looks like "#/signup" or "#/" or "" on root
  const hashPath = hash.replace(/^#/, "") || "/";
  const isHome = hashPath === "/" || hashPath === "";

  if (isHome) return null;

  const canGoBack =
    typeof window !== "undefined" && window.history.length > 1;

  const baseClass = cn(
    "inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/80 px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
    className,
  );

  if (canGoBack) {
    return (
      <button
        type="button"
        aria-label="Go back"
        onClick={() => router.history.back()}
        className={baseClass}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="hidden sm:inline">{label}</span>
      </button>
    );
  }

  return (
    <Link to={fallback} aria-label="Go back home" className={baseClass}>
      <ArrowLeft className="h-4 w-4" />
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}
