/**
 * DIVERSA Bienes Raíces — single editable CONFIG.
 * Listings live in src/data/properties.json.
 */

export const siteConfig = {
  name: "DIVERSA",
  legalName: "DIVERSA Bienes Raíces",
  heroImage: "/images/site/hero.jpg",
  heroImageAlt: "Tegucigalpa desde una ladera, con el centro y las montañas al fondo",
  /** Leave empty to keep the still. Palermo's film is not used. */
  heroVideo: "",
  tagline:
    "Somos una agencia de bienes raíces, expertos en comercialización, desarrollo y administración de bienes inmuebles.",
  heroSupporting: "Brindamos asesoría gratuita.",
  heroAboutLabel: "Conocer DIVERSA",
  heroLead:
    "Venta, alquiler, avalúos, administración, construcción y remodelaciones en Tegucigalpa, Valle de Ángeles, Santa Lucía y El Chimbo.",
  description:
    "DIVERSA Bienes Raíces, agencia en Tegucigalpa. Comercialización, desarrollo y administración de inmuebles, con asesoría gratuita.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  defaultOgImage: "/images/site/hero.jpg",
  logo: "/images/site/logo-diversa.png",
  logoFull: "/images/site/logo-diversa.png",

  contactEmail: "diversa.br.hn@gmail.com",
  phone: "+504 9686-6312",
  mobile: "+504 9686-6312",
  whatsapp: {
    display: "+504 9686-6312",
    e164: "50496866312",
    defaultMessage:
      "Hola, vi el sitio de DIVERSA Bienes Raíces y me gustaría recibir información.",
    ready: true,
  },
  whatsappSecondary: {
    display: "+504 9690-5149",
    e164: "50496905149",
  },
  offices: [
    {
      city: "Tegucigalpa",
      address: "Centro de Negocios Hotel Clarion, Tegucigalpa, Honduras",
      phone: "+504 9686-6312",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Centro%20de%20Negocios%20Hotel%20Clarion%20Tegucigalpa&z=16&output=embed",
      mapLink: "https://maps.app.goo.gl/FoPrg3VFM91RiNH97",
    },
  ],

  nav: [
    { label: "Propiedades", href: "/properties" },
    { label: "Servicios", href: "/services" },
    { label: "Nosotros", href: "/about" },
    { label: "Proceso", href: "/proceso" },
    { label: "Preguntas", href: "/preguntas" },
    { label: "Contacto", href: "/contact" },
    { label: "EN", href: "/en" },
  ],
  navEn: [
    { label: "Services", href: "/en#services" },
    { label: "About", href: "/en#about" },
    { label: "Process", href: "/en#process" },
    { label: "FAQ", href: "/en#faq" },
    { label: "Contact", href: "/en#contact" },
    { label: "ES", href: "/" },
  ],

  homeFeaturedPropertySlugs: [
    "casa-lujo-santa-lucia-p001",
    "apartamento-cipreses-san-ignacio-p002",
    "casa-un-nivel-valle-de-angeles-p003",
  ],

  social: {
    instagram: "https://www.instagram.com/diversa.br.hn/",
    instagramHandle: "@diversa.br.hn",
    facebook: "https://www.facebook.com/Diversa.Inmobiliaria/",
    facebookHandle: "Facebook",
  },

  services: [
    {
      id: "venta",
      title: "Venta de inmuebles",
      body: "Comercializamos casas, apartamentos, terrenos y activos comerciales. La primera asesoría no tiene costo.",
    },
    {
      id: "alquiler",
      title: "Alquileres",
      body: "Buscamos y colocamos inmuebles en renta, con seguimiento claro para propietarios e inquilinos.",
    },
    {
      id: "avaluos",
      title: "Avalúos",
      body: "Avalúos con ingenieros certificados, para compra, venta, crédito o una decisión de inversión.",
    },
    {
      id: "administracion",
      title: "Administración de propiedades",
      body: "Cuidamos inmuebles de terceros: renta, mantenimiento y la relación con quien los ocupa.",
    },
    {
      id: "construccion",
      title: "Construcción",
      body: "Acompañamos obra nueva, desde la idea y el terreno hasta la entrega del inmueble.",
    },
    {
      id: "remodelaciones",
      title: "Remodelaciones",
      body: "Renovamos espacios para habitarlos, alquilarlos o venderlos con mejor presentación.",
    },
  ],

  process: [
    {
      title: "Asesoría gratuita",
      body: "Cuéntenos qué busca o qué quiere hacer con su inmueble. La primera conversación no tiene costo y sirve para ordenar zona, presupuesto y siguientes pasos.",
    },
    {
      title: "Comercialización",
      body: "Preparamos la salida al mercado, las visitas y la negociación, tanto en venta como en alquiler.",
    },
    {
      title: "Avalúo",
      body: "Cuando hace falta un valor de referencia, coordinamos el avalúo con ingenieros certificados.",
    },
    {
      title: "Administración",
      body: "Si el inmueble se queda en renta, podemos administrarlo: cobro, mantenimiento y reporte al propietario.",
    },
    {
      title: "Construcción y remodelación",
      body: "Para obra nueva o una renovación, armamos el alcance y damos seguimiento hasta dejar el espacio listo.",
    },
  ],

  faqs: [
    {
      question: "¿La asesoría tiene costo?",
      answer:
        "No. La asesoría inicial es gratuita. Le decimos con claridad si un avalúo, una administración o una obra tienen un costo aparte.",
    },
    {
      question: "¿En qué zonas trabajan?",
      answer:
        "Sobre todo en Tegucigalpa, y también en Valle de Ángeles, Santa Lucía y El Chimbo. El mapa de zonas se puede afinar cuando tengamos más inventario.",
    },
    {
      question: "¿Hacen avalúos?",
      answer:
        "Sí. Los avalúos se hacen con ingenieros certificados, para compra, venta o crédito.",
    },
    {
      question: "¿Pueden administrar una propiedad que ya tengo?",
      answer:
        "Sí. La administración cubre la renta, el mantenimiento y la comunicación con el propietario.",
    },
    {
      question: "¿También construyen y remodelan?",
      answer:
        "Sí. Además de vender y alquilar, acompañamos construcción y remodelaciones.",
    },
    {
      question: "¿Cómo pido una visita o una cotización?",
      answer:
        "Por WhatsApp al +504 9686-6312 o al +504 9690-5149, o por correo a diversa.br.hn@gmail.com. La oficina está en el Centro de Negocios del Hotel Clarion.",
    },
  ],

  about: {
    eyebrow: "Nosotros",
    headline: "Comercialización, desarrollo y administración",
    portrait: "/images/site/about.jpg",
    portraitAlt: "Hotel Clarion en Tegucigalpa, donde está la oficina",
    paragraphs: [
      "DIVERSA Bienes Raíces es una agencia en Tegucigalpa. Comercializamos, desarrollamos y administramos bienes inmuebles, y la asesoría inicial es gratuita.",
      "Vendemos y alquilamos, coordinamos avalúos con ingenieros certificados y acompañamos construcción y remodelaciones. La oficina está en el Centro de Negocios del Hotel Clarion.",
      "Trabajamos sobre todo en Tegucigalpa, y también en Valle de Ángeles, Santa Lucía y El Chimbo.",
    ],
    trustPoints: [
      { label: "Asesoría", value: "Gratuita" },
      { label: "Cobertura", value: "Tegucigalpa y alrededores" },
      { label: "Oficina", value: "Hotel Clarion" },
    ],
  },

  testimonialsLead:
    "Borradores de presentación. Los sustituimos por testimonios reales en cuanto nos los compartan.",
  testimonials: [
    {
      quote:
        "Nos explicaron la compra sin apuro y sin cobrarnos la primera asesoría. Las visitas fueron puntuales y el papeleo, ordenado.",
      author: "Familia M.",
      role: "Compradores · Tegucigalpa",
    },
    {
      quote:
        "Dejamos un apartamento en administración y el reporte mensual llega claro: renta, mantenimiento y lo que hay que decidir.",
      author: "Propietario",
      role: "Administración · Santa Lucía",
    },
    {
      quote:
        "Pedimos un avalúo antes de cerrar. El ingeniero fue certificado y el informe llegó a tiempo para la negociación.",
      author: "Inversionista",
      role: "Avalúo · Tegucigalpa",
    },
    {
      quote:
        "Remodelaron el local antes de volver a alquilarlo. El alcance quedó por escrito y la obra se entregó como se acordó.",
      author: "Comerciante",
      role: "Remodelación · Valle de Ángeles",
    },
  ],

  galleryLead: "Tegucigalpa y los pueblos de pino alrededor de la capital.",
  gallery: [
    {
      src: "/images/site/zones/tegucigalpa.jpg",
      alt: "Tegucigalpa con cielo despejado, torres y montañas al fondo",
    },
    {
      src: "/images/site/zones/tegucigalpa-noche.jpg",
      alt: "Tegucigalpa de noche, luces de la ciudad bajo un cielo morado",
    },
    {
      src: "/images/site/zones/valle-de-angeles.jpg",
      alt: "Artesanías y puerta tallada en Valle de Ángeles",
    },
    {
      src: "/images/site/zones/santa-lucia.jpg",
      alt: "Santa Lucía, iglesia blanca y techos de teja entre montañas",
    },
  ],

  coverageLead:
    "Tegucigalpa, Valle de Ángeles, Santa Lucía y El Chimbo. La fila se mueve sola.",

  sisterBrand: {
    enabled: false,
    eyebrow: "",
    name: "",
    blurb: "",
    url: "",
    cta: "",
  },

  english: {
    eyebrow: "Real estate",
    headline: "DIVERSA Bienes Raíces",
    lede: "A Tegucigalpa agency for selling, developing, and managing property. The first consultation is free.",
    aboutTitle: "About",
    about: [
      "DIVERSA sells and rents homes and commercial property, orders certified appraisals, and manages buildings for owners.",
      "The same team can take on new construction and renovations. The office is at Centro de Negocios, Hotel Clarion, Tegucigalpa.",
      "Coverage today is Tegucigalpa, Valle de Ángeles, Santa Lucía, and El Chimbo.",
    ],
    servicesTitle: "Services",
    services: [
      {
        title: "Sales",
        body: "Houses, apartments, land, and commercial property. The first consultation is free.",
      },
      {
        title: "Rentals",
        body: "We place and look for rentals, with a clear follow-up for owners and tenants.",
      },
      {
        title: "Appraisals",
        body: "Appraisals by certified engineers, for a purchase, a sale, a loan, or an investment decision.",
      },
      {
        title: "Property management",
        body: "We look after other people's buildings: rent, maintenance, and the relationship with the occupant.",
      },
      {
        title: "Construction",
        body: "New work, from the idea and the land through to handover.",
      },
      {
        title: "Renovations",
        body: "We renew a space so it can be lived in, rented, or sold in better shape.",
      },
    ],
    processTitle: "How it works",
    process: [
      {
        title: "Free consultation",
        body: "Tell us what you are looking for. The first conversation is free and sets the area, budget, and next step.",
      },
      {
        title: "Going to market",
        body: "We prepare the listing, the visits, and the negotiation, for a sale or a rental.",
      },
      {
        title: "Appraisal",
        body: "When a reference value is needed, we coordinate it with certified engineers.",
      },
      {
        title: "Management",
        body: "If the property stays rented, we can manage it: collection, maintenance, and a report to the owner.",
      },
      {
        title: "Construction and renovation",
        body: "For new work or a renovation, we set the scope and follow it until the space is ready.",
      },
    ],
    faqTitle: "Questions",
    faqs: [
      {
        question: "Does the consultation cost anything?",
        answer:
          "No. The first consultation is free. We say plainly when an appraisal, management, or construction job has a separate fee.",
      },
      {
        question: "Where do you work?",
        answer:
          "Mostly Tegucigalpa, and also Valle de Ángeles, Santa Lucía, and El Chimbo.",
      },
      {
        question: "Do you do appraisals?",
        answer: "Yes. Certified engineers prepare them for a purchase, a sale, or a loan.",
      },
      {
        question: "Can you manage a property I already own?",
        answer: "Yes. Management covers the rent, maintenance, and updates to the owner.",
      },
      {
        question: "Do you build and renovate as well?",
        answer: "Yes. Besides sales and rentals, we take on construction and renovations.",
      },
    ],
    contactTitle: "Contact",
    contactBody:
      "Write on WhatsApp or email. Visits are by appointment at Hotel Clarion.",
    cta: "WhatsApp",
  },

  sourceWebsite: "",
} as const;

export type SiteConfig = typeof siteConfig;
