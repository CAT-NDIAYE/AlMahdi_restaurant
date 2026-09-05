import { MENU_CATEGORIES, RESTAURANT } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Props = {
  params: { categorie: string };
};

export function generateStaticParams() {
  return MENU_CATEGORIES.map((cat) => ({ categorie: cat.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = MENU_CATEGORIES.find((c) => c.slug === params.categorie);
  if (!cat) return {};
  return {
    title: `${cat.name} — ${RESTAURANT.name}`,
    description: cat.description,
  };
}

export default function MenuCategoriePage({ params }: Props) {
  const cat = MENU_CATEGORIES.find((c) => c.slug === params.categorie);
  if (!cat) notFound();

  return (
    <main className="min-h-screen">
      <Header />
      <section className="px-lg py-2xl">
        <p className="font-body text-accent text-sm uppercase tracking-[0.2em] mb-xs">
          Notre carte
        </p>
        <h1 className="font-display text-4xl md:text-6xl mb-md underline-accent">
          {cat.name}
        </h1>
        <p className="font-body text-accent-soft max-w-xl mb-xl">
          {cat.description}
        </p>

        {/* ⚠️ À compléter : liste des plats de la catégorie — Prompt 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="border border-white/10 rounded-sm p-md text-center text-neutral font-body text-sm">
            Plats à venir…
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
