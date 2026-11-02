import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site/config";

export function HomeLocation() {
  const office = siteConfig.offices[0];
  if (!office) return null;

  return (
    <Section id="ubicacion" className="bg-surface/70 !py-10 sm:!py-12">
      <RevealOnScroll className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-snug text-muted">{office.address}</p>
        <Button
          href={office.mapLink}
          variant="outline"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          Abrir en Maps
        </Button>
      </RevealOnScroll>
      {office.mapEmbedUrl ? (
        <RevealOnScroll delayMs={80} className="mt-4">
          <div className="relative h-36 overflow-hidden rounded-[var(--radius-md)] border border-line sm:h-44">
            <iframe
              title={`Mapa — ${office.city}`}
              src={office.mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </RevealOnScroll>
      ) : null}
    </Section>
  );
}
