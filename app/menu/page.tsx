import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MenuCategories from "@/components/home/MenuCategories";
import { RESTAURANT } from "@/lib/data";

export const metadata: Metadata = {
  title: `Menu — ${RESTAURANT.fullName}`,
  description: `Découvrez la carte complète du ${RESTAURANT.fullName} : viandes, poissons, pizzas, pâtes et sandwichs.`,
};

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="px-lg pt-2xl pb-md">
        <p className="font-body text-accent text-sm uppercase tracking-[0.2em] mb-xs">
          La carte
        </p>
        <h1 className="font-display text-4xl md:text-6xl mb-md underline-accent">
          Notre Menu
        </h1>
        <p className="font-body text-accent-soft max-w-xl">
          Une cuisine franco-africaine généreuse — viandes d&apos;exception, poissons frais du jour, pizzas VIP et pâtes maison.
        </p>
      </section>
      <MenuCategories />
      <Footer />
    </main>
  );
}
