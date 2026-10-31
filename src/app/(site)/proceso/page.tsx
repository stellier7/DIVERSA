import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { buildWhatsAppUrl } from "@/lib/contact/whatsapp";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Proceso",
  description:
    "Cómo trabaja DIVERSA: asesoría gratuita, comercialización, avalúo, administración, construcción y remodelación.",
  path: "/proceso",
});

export default function ProcessPage() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <>
      <Section>
        <p className="type-meta-caps text-accent">Cómo trabajamos</p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl">Proceso</h1>
        <p className="prose-editorial mt-6 max-w-2xl">
          De la primera conversación al cierre, la administración o la obra. La asesoría inicial es
          gratuita.
        </p>
      </Section>
      <Section className="bg-surface">
        <ol className="grid gap-12">
          {siteConfig.process.map((step, index) => (
            <li key={step.title} className="border-t border-line pt-6">
              <p className="type-meta-caps text-muted">0{index + 1}</p>
              <h2 className="mt-3 font-display text-3xl">{step.title}</h2>
              <p className="prose-editorial mt-4 max-w-2xl">{step.body}</p>
            </li>
          ))}
        </ol>
        <a
          href={whatsappUrl}
          className="focus-ring mt-12 inline-block text-sm uppercase tracking-[0.18em] text-foreground underline decoration-line underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Empezar por WhatsApp →
        </a>
      </Section>
    </>
  );
}
