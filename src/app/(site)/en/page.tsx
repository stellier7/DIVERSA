import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site/config";
import { buildWhatsAppUrl } from "@/lib/contact/whatsapp";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Tegucigalpa real estate",
  description:
    "DIVERSA Bienes Raíces is a Tegucigalpa agency for sales, rentals, certified appraisals, property management, construction, and renovations. The first consultation is free.",
  path: "/en",
  locale: "en_US",
});

export default function EnglishPage() {
  const copy = siteConfig.english;
  const office = siteConfig.offices[0];
  const whatsappUrl = buildWhatsAppUrl(
    "Hello, I saw the DIVERSA Bienes Raíces site and I would like more information.",
  );

  return (
    <>
      <Section>
        <p className="type-meta-caps text-accent">{copy.eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-5xl text-accent sm:text-6xl">
          {copy.headline}
        </h1>
        <p className="prose-editorial mt-6 max-w-2xl">{copy.lede}</p>
        <p className="mt-4 max-w-2xl font-medium text-accent">{siteConfig.heroSupporting}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={whatsappUrl} variant="primary" target="_blank" rel="noopener noreferrer">
            {copy.cta}
          </Button>
          <Button href="/properties" variant="outline">
            Properties
          </Button>
        </div>
      </Section>

      <Section id="about" className="bg-surface">
        <h2 className="font-display text-4xl text-accent">{copy.aboutTitle}</h2>
        <div className="prose-editorial mt-6 max-w-2xl space-y-4">
          {copy.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="services">
        <h2 className="font-display text-4xl text-accent">{copy.servicesTitle}</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {copy.services.map((service) => (
            <article key={service.title} className="border-t border-line pt-6">
              <h3 className="font-display text-3xl">{service.title}</h3>
              <p className="prose-editorial mt-4">{service.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="process" className="bg-surface">
        <h2 className="font-display text-4xl text-accent">{copy.processTitle}</h2>
        <ol className="mt-10 grid gap-8">
          {copy.process.map((step, index) => (
            <li key={step.title} className="border-t border-line pt-6">
              <p className="type-meta-caps text-muted">0{index + 1}</p>
              <h3 className="mt-2 font-display text-3xl">{step.title}</h3>
              <p className="prose-editorial mt-3 max-w-2xl">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="faq">
        <h2 className="font-display text-4xl text-accent">{copy.faqTitle}</h2>
        <div className="mt-10 grid gap-8">
          {copy.faqs.map((item) => (
            <article key={item.question} className="border-t border-line pt-6">
              <h3 className="font-display text-2xl">{item.question}</h3>
              <p className="prose-editorial mt-3 max-w-2xl">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" className="bg-surface">
        <h2 className="font-display text-4xl text-accent">{copy.contactTitle}</h2>
        <p className="prose-editorial mt-6 max-w-2xl">{copy.contactBody}</p>
        <div className="mt-8 space-y-3 text-lg">
          <p>
            <a className="focus-ring underline decoration-accent/40 underline-offset-4" href={whatsappUrl}>
              WhatsApp {siteConfig.whatsapp.display}
            </a>
          </p>
          <p>
            <a
              className="focus-ring underline decoration-accent/40 underline-offset-4"
              href={buildWhatsAppUrl(
                "Hello, I saw the DIVERSA Bienes Raíces site and I would like more information.",
                siteConfig.whatsappSecondary.e164,
              )}
            >
              WhatsApp {siteConfig.whatsappSecondary.display}
            </a>
          </p>
          <p>
            <a className="focus-ring" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
          </p>
          {office ? (
            <p>
              <a
                className="focus-ring underline decoration-accent/40 underline-offset-4"
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {office.address}
              </a>
            </p>
          ) : null}
        </div>
      </Section>
    </>
  );
}
