import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Preguntas",
  description:
    "Preguntas frecuentes de DIVERSA Bienes Raíces: asesoría gratuita, zonas, avalúos, administración y obra.",
  path: "/preguntas",
});

export default function QuestionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="type-meta-caps text-accent">Ayuda</p>
      <h1 className="mt-3 font-display text-5xl sm:text-6xl">Preguntas</h1>
      <div className="mt-12 grid gap-10">
        {siteConfig.faqs.map((item) => (
          <article key={item.question} className="border-t border-line pt-6">
            <h2 className="font-display text-3xl">{item.question}</h2>
            <p className="prose-editorial mt-4 max-w-2xl">{item.answer}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
