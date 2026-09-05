// lib/data.ts — Source unique de vérité pour les données du restaurant

export const RESTAURANT = {
  name: "Al Mahdi",
  fullName: "Complexe Al Mahdi",
  slogan: "LA RESTAURATION AUTREMENT",
  tagline: "Gastronomie franco-africaine · Dakar",
  city: "Dakar",
  email: "contact@complexe-almahdi.sn",
  hours: {
    label: "Tous les jours",
    open: "08:00",
    close: "02:00",
  },
  delivery: true,
} as const;

export type Location = {
  name: string;
  phone: string;
  tel: string; // format tel: link
};

export const LOCATIONS: Location[] = [
  { name: "CASTOR",   phone: "33 801 83 34", tel: "tel:+221338018334" },
  { name: "YOFF",     phone: "76 604 81 35", tel: "tel:+221766048135" },
  { name: "MARISTES", phone: "33 829 09 02", tel: "tel:+221338290902" },
  { name: "UCAD",     phone: "33 914 84 81", tel: "tel:+221339148481" },
];

// Navigation principale — pages du site (pas les catégories de plats)
export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "À propos", href: "/about" },
  { label: "Galerie", href: "/galerie" },
  { label: "Réservation", href: "/reservation" },
  { label: "Contact", href: "/contact" },
];

export type MenuCategory = {
  slug: string;
  name: string;
  image: string;
  description: string;
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    slug: "viandes",
    name: "Viandes & Volailles",
    image: "/hero_viandes.jpg",
    description: "Filets, côtelettes et poulets rôtis à la braise",
  },
  {
    slug: "poissons",
    name: "Poissons & Crustacés",
    image: "/hero_poissons.jpg",
    description: "Pêche du jour, gambas et fruits de mer frais",
  },
  {
    slug: "pizzas",
    name: "VIP Pizzas",
    image: "/hero_pizza.jpg",
    description: "Pizzas généreuses façon Al Mahdi",
  },
  {
    slug: "pates",
    name: "Pâtes & Sandwichs",
    image: "/hero_pates.jpg",
    description: "Pâtes maison, tacos, paninis et burgers",
  },
];

// Slides du hero — images défilantes avec légende
export type HeroSlide = {
  image: string;
  label: string;
  subtitle: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/hero_ambiance.jpg",
    label: "Une table qui a du caractère",
    subtitle: "Gastronomie franco-africaine au cœur de Dakar",
  },
  {
    image: "/hero_viandes.jpg",
    label: "Viandes d'exception",
    subtitle: "Filet argentin, côtelettes d'agneau, brochettes à la braise",
  },
  {
    image: "/hero_poissons.jpg",
    label: "La mer dans l'assiette",
    subtitle: "Pêche fraîche, gambas laquées, dorade plancha",
  },
  {
    image: "/hero_pizza.jpg",
    label: "Nos VIP Pizzas",
    subtitle: "Recettes généreuses, ingrédients de qualité",
  },
  {
    image: "/hero_pates.jpg",
    label: "Pâtes & saveurs marines",
    subtitle: "Fettuccine, linguine, tagliatelles aux fruits de mer",
  },
];
