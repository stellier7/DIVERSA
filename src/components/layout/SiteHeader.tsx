"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site/config";
import { useScrollLinkedHeader } from "@/lib/layout/useScrollLinkedHeader";
import { useSiteNav } from "@/lib/layout/useSiteNav";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  const headerRef = useScrollLinkedHeader();
  const { homeHref, items } = useSiteNav();

  return (
    <header ref={headerRef} className="site-header">
        <a
          href="#contenido-principal"
          className="focus-ring sr-only left-4 top-4 z-[60] rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground focus:not-sr-only focus:absolute"
        >
          Saltar al contenido
        </a>
        <Container className="flex h-full items-center gap-2.5 sm:gap-3">
          <Link
            href={homeHref}
            className="focus-ring group flex shrink-0 items-center"
            aria-label={siteConfig.legalName}
          >
            <Image
              src={siteConfig.logo}
              alt=""
              width={952}
              height={664}
              className="h-14 w-auto sm:h-16"
              priority
              unoptimized
            />
          </Link>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <nav
              className="hidden items-center gap-1 text-sm lg:flex xl:gap-2"
              aria-label="Principal"
            >
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring site-nav-link type-meta-caps inline-flex min-h-10 items-center rounded-full px-2.5 transition-colors hover:bg-accent-soft xl:px-3"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <MobileNav />
          </div>
        </Container>
    </header>
  );
}
