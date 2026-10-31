import { siteConfig } from "@/content/site/config";

export function isWhatsAppReady(): boolean {
  return Boolean(siteConfig.whatsapp.ready && siteConfig.whatsapp.e164);
}

/** WhatsApp deep link — falls back to /contact when number is still a placeholder. */
export function buildWhatsAppUrl(message?: string, e164?: string): string {
  const number = e164 ?? siteConfig.whatsapp.e164;
  if (!number || (!e164 && !isWhatsAppReady())) {
    return "/contact";
  }
  const text = message ?? siteConfig.whatsapp.defaultMessage;
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function buildPropertyWhatsAppUrl(propertyName: string): string {
  return buildWhatsAppUrl(
    `Hola, me gustaría recibir más información sobre ${propertyName}.`,
  );
}
