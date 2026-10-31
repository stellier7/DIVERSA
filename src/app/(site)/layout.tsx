import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { siteConfig } from "@/content/site/config";
import { absoluteAssetUrl, absoluteUrl } from "@/lib/seo/metadata";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const office = siteConfig.offices[0];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.legalName,
    url: absoluteUrl("/"),
    image: absoluteAssetUrl(siteConfig.logo),
    telephone: siteConfig.phone,
    email: siteConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: office?.address,
      addressLocality: "Tegucigalpa",
      addressCountry: "HN",
    },
    areaServed: ["Tegucigalpa", "Valle de Ángeles", "Santa Lucía", "El Chimbo"],
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    knowsLanguage: ["es", "en"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="contenido-principal">{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
