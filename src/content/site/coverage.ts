export type CoverageCity = {
  label: string;
  slug: string;
  matchNames: string[];
  featured: boolean;
  image?: { src: string; alt: string };
};

/** Service areas. El Chimbo has no town photograph; its card uses the first matching listing. */
export const coverageCities: CoverageCity[] = [
  {
    label: "Tegucigalpa",
    slug: "tegucigalpa",
    matchNames: ["Tegucigalpa"],
    featured: true,
    image: {
      src: "/images/site/zones/tegucigalpa.jpg",
      alt: "Tegucigalpa con cielo despejado, torres y montañas al fondo",
    },
  },
  {
    label: "Valle de Ángeles",
    slug: "valle-de-angeles",
    matchNames: ["Valle de Ángeles", "Valle de Angeles"],
    featured: true,
    image: {
      src: "/images/site/zones/valle-de-angeles.jpg",
      alt: "Artesanías y puerta tallada en Valle de Ángeles",
    },
  },
  {
    label: "Santa Lucía",
    slug: "santa-lucia",
    matchNames: ["Santa Lucía", "Santa Lucia"],
    featured: true,
    image: {
      src: "/images/site/zones/santa-lucia.jpg",
      alt: "Santa Lucía, iglesia blanca y techos de teja entre montañas",
    },
  },
  {
    label: "El Chimbo",
    slug: "el-chimbo",
    matchNames: ["El Chimbo", "Chimbo"],
    featured: true,
  },
];

export const homeServiceLinks = [
  {
    label: "Propiedades en venta",
    href: "/properties?listing=sale",
  },
  {
    label: "Propiedades en renta",
    href: "/properties?listing=rent",
  },
  {
    label: "Avalúos",
    href: "/services#avaluos",
  },
  {
    label: "Administración",
    href: "/services#administracion",
  },
  {
    label: "Construcción y remodelación",
    href: "/proceso",
  },
  {
    label: "Asesoría gratuita",
    href: "/contact",
  },
] as const;

export function findCoverageCityBySlug(slug: string): CoverageCity | undefined {
  const normalized = slug.trim().toLowerCase();
  return coverageCities.find((city) => city.slug === normalized);
}

export function normalizeCityKey(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim();
}

export function cityMatchesCoverage(
  propertyCity: string,
  coverage: CoverageCity,
): boolean {
  const key = normalizeCityKey(propertyCity);
  return coverage.matchNames.some((name) => normalizeCityKey(name) === key);
}
