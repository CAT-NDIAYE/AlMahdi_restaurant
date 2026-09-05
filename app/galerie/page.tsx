import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { RESTAURANT } from "@/lib/data";

export const metadata: Metadata = {
  title: `Galerie — ${RESTAURANT.name}`,
  description: `Photos et ambiance du restaurant ${RESTAURANT.name} à ${RESTAURANT.city}.`,
};

export default function GaleriePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="px-lg py-2xl">
        <p className="font-body text-accent text-sm uppercase tracking-[0.2em] mb-xs">
          Nos photos
        </p>
        <h1 className="font-display text-4xl md:text-6xl mb-md underline-accent">
          Galerie
        </h1>
        {/* ⚠️ À compléter : grille de photos — Prompt 4 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-md">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-neutral/20 rounded-sm flex items-center justify-center"
            >
              <span className="font-body text-neutral text-xs">Photo {i + 1}</span>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
