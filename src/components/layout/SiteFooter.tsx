import Link from "next/link";
import { headers } from "next/headers";
import { siteConfig } from "@/content/site/config";
import { SocialButtons } from "@/components/layout/SocialButtons";
import { Container } from "./Container";

export async function SiteFooter() {
  const year = new Date().getFullYear();
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") ?? "/";
  const english = pathname === "/en" || pathname.startsWith("/en/");
  const nav = english ? siteConfig.navEn : siteConfig.nav;

  return (
    <footer className="border-t border-line bg-surface" aria-label="Pie de página">
      <Container className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between md:py-6">
        <SocialButtons />
        <nav aria-label="Navegación del pie" className="md:text-right">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm md:justify-end">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring inline-flex items-center py-0.5 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      {siteConfig.sisterBrand.enabled ? (
        <Container className="border-t border-line py-4">
          <p className="type-meta text-center sm:text-left">
            {siteConfig.sisterBrand.eyebrow}:{" "}
            <a
              href={siteConfig.sisterBrand.url}
              className="focus-ring font-medium text-accent underline decoration-accent/35 underline-offset-4 transition-colors hover:decoration-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.sisterBrand.name}
            </a>
            <span className="text-muted"> — ¿buscas Airbnb? Alojamientos amueblados</span>
          </p>
        </Container>
      ) : null}
      <Container className="border-t border-line py-4">
        <div className="grid gap-2 text-center sm:grid-cols-3 sm:items-center sm:gap-3">
          <p className="type-meta sm:text-left">
            © {year} {siteConfig.legalName}.
          </p>
          <p className="type-meta sm:text-center">
            Diseñado por{" "}
            <a
              href="https://www.iagodigital.com/"
              className="focus-ring font-medium text-accent underline decoration-accent/35 underline-offset-4 transition-colors hover:decoration-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              iAGO Digital
            </a>
          </p>
          <p className="type-meta sm:text-right">Tegucigalpa, Honduras</p>
        </div>
      </Container>
    </footer>
  );
}
