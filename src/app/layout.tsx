import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { buildSiteMetadata } from "@/lib/seo/metadata";
import "./globals.css";

export const metadata: Metadata = buildSiteMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#87080d",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") ?? "/";
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";

  return (
    <html lang={lang}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
