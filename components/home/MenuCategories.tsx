"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MENU_CATEGORIES } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function MenuCategories() {
  return (
    <section className="px-lg py-2xl">
      <p className="font-body text-accent text-sm uppercase tracking-[0.2em] mb-xs">
        Notre carte
      </p>
      <h2 className="font-display text-3xl md:text-4xl mb-lg underline-accent">
        Découvrez nos spécialités
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-md"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {MENU_CATEGORIES.map((cat) => (
          <motion.div key={cat.slug} variants={cardVariants}>
            <Link
              href={`/menu/${cat.slug}`}
              className="group relative block aspect-[3/4] rounded-sm overflow-hidden bg-neutral/20"
              aria-label={`Voir ${cat.name}`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Dégradé bas */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              {/* Texte */}
              <div className="absolute bottom-0 left-0 right-0 p-md">
                <span className="block font-display text-xl text-foreground mb-xs leading-tight">
                  {cat.name}
                </span>
                <span className="block font-body text-xs text-accent-soft leading-snug">
                  {cat.description}
                </span>
                <span className="mt-sm inline-block font-body text-xs text-accent uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Voir la carte →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
