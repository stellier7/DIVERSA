"use client";

import Link from "next/link";
import { HeroCatalogSearch } from "@/components/home/HeroCatalogSearch";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { Container } from "@/components/layout/Container";
import { SocialButtons } from "@/components/layout/SocialButtons";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site/config";

type HomeHeroProps = {
  heroImage: string;
};

export function HomeHero({ heroImage }: HomeHeroProps) {
  return (
    <ParallaxMedia
      src={heroImage}
      alt={siteConfig.heroImageAlt}
      videoSrc={siteConfig.heroVideo}
      priority
      minHeightClass="hero-shell-min"
      imageClassName="hero-bg-image"
    >
      <Container className="hero-panel hero-copy relative w-full">
        <div>
          <h1 className="type-display-hero max-w-4xl text-pretty text-hero-ink">
            {siteConfig.name}
          </h1>
          <p className="type-meta mt-4 max-w-2xl text-pretty font-medium text-hero-ink/85">
            {siteConfig.tagline}
          </p>
          <p className="type-meta mt-2 max-w-2xl text-pretty">
            {siteConfig.heroSupporting}
            <span aria-hidden="true"> · </span>
            Tegucigalpa, Honduras
          </p>
          <p className="prose-editorial mt-5 max-w-2xl sm:mt-6">{siteConfig.heroLead}</p>
        </div>

        <div className="hero-actions w-full max-w-none">
          <div className="hero-catalog-actions">
            <Button
              href="/properties?listing=sale"
              variant="primary"
              className="hero-cta-btn w-full min-w-0 justify-center"
            >
              En venta
            </Button>
            <Button
              href="/properties?listing=rent"
              variant="outline"
              className="hero-cta-btn w-full min-w-0 justify-center"
            >
              En renta
            </Button>
          </div>
          <HeroCatalogSearch />
          <Link
            href="/about"
            className="focus-ring hero-ink-link type-meta inline-flex min-h-11 items-center py-2 underline underline-offset-4"
          >
            {siteConfig.heroAboutLabel}
          </Link>
          <SocialButtons />
        </div>
      </Container>
    </ParallaxMedia>
  );
}
