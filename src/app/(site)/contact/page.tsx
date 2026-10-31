import type { Metadata } from "next";
import { WhatsAppContact } from "@/components/contact/WhatsAppContact";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { buildWhatsAppUrl, isWhatsAppReady } from "@/lib/contact/whatsapp";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Contacto",
  description:
    "WhatsApp, teléfono y correo de DIVERSA Bienes Raíces. Oficina en el Centro de Negocios del Hotel Clarion, Tegucigalpa.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = buildWhatsAppUrl();
  const secondaryUrl = buildWhatsAppUrl(undefined, siteConfig.whatsappSecondary.e164);
  const waReady = isWhatsAppReady();

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <h1 className="font-display text-5xl sm:text-6xl">Contacto</h1>
          <p className="prose-editorial mt-6 max-w-xl">
            Dos líneas de WhatsApp, teléfono y correo. La oficina está en el Centro de Negocios del Hotel Clarion.
          </p>
          <div className="mt-10 space-y-6 text-sm text-muted">
            <p>
              <span className="block text-xs uppercase tracking-[0.2em]">WhatsApp</span>
              <a
                className="focus-ring text-lg text-foreground"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.whatsapp.display}
              </a>
              <a
                className="focus-ring mt-1 block text-lg text-foreground"
                href={secondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.whatsappSecondary.display}
              </a>
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.2em]">Teléfono</span>
              <a className="focus-ring text-lg text-foreground" href="tel:+50496866312">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.2em]">Correo</span>
              <a
                className="focus-ring text-lg text-foreground"
                href={`mailto:${siteConfig.contactEmail}`}
              >
                {siteConfig.contactEmail}
              </a>
            </p>
            {siteConfig.social?.instagram ? (
              <p>
                <span className="block text-xs uppercase tracking-[0.2em]">Instagram</span>
                <a
                  className="focus-ring text-lg text-foreground"
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.social.instagramHandle}
                </a>
              </p>
            ) : null}
            {siteConfig.social.facebook ? (
              <p>
                <span className="block text-xs uppercase tracking-[0.2em]">Facebook</span>
                <a
                  className="focus-ring text-lg text-foreground"
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diversa Inmobiliaria
                </a>
              </p>
            ) : null}
            {siteConfig.offices.map((office) => (
              <p key={office.city}>
                <span className="block text-xs uppercase tracking-[0.2em]">Ubicación</span>
                <a
                  className="focus-ring text-lg text-foreground"
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {office.address}
                </a>
              </p>
            ))}
          </div>
        </div>
        {waReady ? (
          <WhatsAppContact heading="Iniciar conversación" />
        ) : (
          <div className="rounded-[var(--radius-lg)] border border-line bg-surface p-8">
            <h2 className="font-display text-2xl text-accent">WhatsApp pendiente</h2>
            <p className="prose-editorial mt-4">
              El WhatsApp se configura en el archivo de contacto del sitio.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
