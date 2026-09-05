import type { Metadata } from "next";
import "./globals.css";
import { RESTAURANT } from "@/lib/data";

export const metadata: Metadata = {
  title: `${RESTAURANT.fullName} — ${RESTAURANT.city}`,
  description: "Gastronomie franco-africaine au cœur de Dakar. Viandes d'exception, poissons frais, pizzas VIP et pâtes maison.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: `${RESTAURANT.fullName} — ${RESTAURANT.city}`,
    description: "Gastronomie franco-africaine au cœur de Dakar.",
    type: "website",
    images: [{ url: "/hero_ambiance.jpg" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
