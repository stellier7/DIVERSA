export type HomeCategoryIcon =
  | "house"
  | "apartment"
  | "commercial"
  | "land"
  | "office"
  | "resident";

export type HomeCategory = {
  label: string;
  icon: HomeCategoryIcon;
  href: string;
};

export const homeCategories: HomeCategory[] = [
  {
    label: "Casa",
    icon: "house",
    href: "/properties?type=house",
  },
  {
    label: "Apartamento",
    icon: "apartment",
    href: "/properties?type=apartment",
  },
  {
    label: "Comercial",
    icon: "commercial",
    href: "/properties?type=commercial",
  },
  {
    label: "Terreno",
    icon: "land",
    href: "/properties?type=land",
  },
  {
    label: "Oficina",
    icon: "office",
    href: "/properties?type=office",
  },
  {
    label: "Solo para dama",
    icon: "resident",
    href: "/properties?q=dama",
  },
];
