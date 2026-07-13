import { createFileRoute } from "@tanstack/react-router";
import { PublicShell } from "@/components/public/PublicShell";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — CareGo" }] }),
  component: ContactPage,
});

const MS_FORM_EMBED =
  "https://forms.microsoft.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAbFzx1pUMkJaVlk5SEJaME5YQjVSTDFMRlZUOVQ0Wi4u&embed=true";

const MS_FORM_URL =
  "https://forms.microsoft.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAbFzx1pUMkJaVlk5SEJaME5YQjVSTDFMRlZUOVQ0Wi4u";

function ContactPage() {
  return (
    <PublicShell
      eyebrow="Contact"
      title="Talk to our team."
      subtitle="Book a demo, ask about pricing, or partner with us."
    >
      <div className="flex flex-col gap-6 w-full max-w-2xl">

        {/* Microsoft Forms embed */}
        <div
          className="w-full rounded-xl overflow-hidden border border-border/60 shadow-sm"
          style={{ minHeight: "560px" }}
        >
          <iframe
            src={MS_FORM_EMBED}
            width="100%"
            height="560"
            frameBorder="0"
            marginWidth={0}
            marginHeight={0}
            style={{ border: "none", display: "block", width: "100%" }}
            allowFullScreen
            title="CareGo Contact Form"
          />
        </div>

        {/* Fallback open-in-new-tab link */}
        <p className="text-sm text-muted-foreground text-center">
          Having trouble with the form?{" "}
          <a
            href={MS_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            Open it in a new tab ↗
          </a>
        </p>

      </div>
    </PublicShell>
  );
}
