import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { buildWhatsAppUrl, isWhatsAppReady } from "@/lib/contact/whatsapp";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Servicios",
  description:
    "Venta, alquiler, avalúos con ingenieros certificados, administración, construcción y remodelaciones. Asesoría inicial gratuita.",
  path: "/services",
});

export default function ServicesPage() {
  const whatsappUrl = buildWhatsAppUrl();
  const waReady = isWhatsAppReady();

  return (
    <>
      <Section>
        <h1 className="font-display text-5xl sm:text-6xl">Servicios</h1>
        <p className="prose-editorial mt-6 max-w-2xl">
          Comercialización, avalúos, administración y obra. La primera asesoría no tiene costo.
          El paso a paso está en{" "}
          <a className="underline decoration-accent/40 underline-offset-4" href="/proceso">
            Proceso
          </a>
          .
        </p>
      </Section>
      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          {siteConfig.services.map((service) => (
            <article key={service.id} id={service.id} className="border-t border-line pt-6">
              <h2 className="font-display text-3xl">{service.title}</h2>
              <p className="prose-editorial mt-4">{service.body}</p>
            </article>
          ))}
        </div>
        <a
          href={whatsappUrl}
          className="focus-ring mt-12 inline-block text-sm uppercase tracking-[0.18em] text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground/50"
          {...(waReady ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {waReady ? "Consultar por WhatsApp →" : "Ir a contacto →"}
        </a>
      </Section>
    </>
  );
}
