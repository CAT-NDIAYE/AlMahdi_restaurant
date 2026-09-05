import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { RESTAURANT } from "@/lib/data";

export const metadata: Metadata = {
  title: `À propos — ${RESTAURANT.name}`,
  description: `Découvrez l'histoire et l'identité du restaurant ${RESTAURANT.name} à ${RESTAURANT.city}.`,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="px-lg py-2xl max-w-3xl">
        <p className="font-body text-accent text-sm uppercase tracking-[0.2em] mb-xs">
          Notre histoire
        </p>
        <h1 className="font-display text-4xl md:text-6xl mb-md underline-accent">
          À propos
        </h1>
        {/* ⚠️ À compléter avec le copywriting du Prompt 5 */}
        <p className="font-body text-accent-soft leading-relaxed">
          Description du restaurant, histoire, valeurs et identité à compléter via le Prompt 5.
        </p>
      </section>
      <Footer />
    </main>
  );
}
