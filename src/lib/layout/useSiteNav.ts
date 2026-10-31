"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site/config";

export function useSiteNav() {
  const pathname = usePathname();
  const english = pathname === "/en" || pathname.startsWith("/en/");

  return {
    english,
    homeHref: english ? "/en" : "/",
    items: english ? siteConfig.navEn : siteConfig.nav,
  };
}
