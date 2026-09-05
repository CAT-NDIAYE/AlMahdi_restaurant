"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const INSTAGRAM_HANDLE = "complex_al_mahdi_officiel";
const INSTAGRAM_URL    = `https://www.instagram.com/${INSTAGRAM_HANDLE}`;

const POSTS = [
  { image: "/insta_1.jpg", alt: "Brochettes argentines" },
  { image: "/insta_2.jpg", alt: "Dibi poulet entier" },
  { image: "/insta_3.jpg", alt: "Pizza fruits de mer" },
  { image: "/insta_4.jpg", alt: "Salle du restaurant" },
  { image: "/insta_5.jpg", alt: "Plateau de desserts" },
  { image: "/insta_6.jpg", alt: "Gambas à la mangue" },
];

export default function InstagramSection() {
  return (
    <section className="py-2xl" style={{ borderTop: "1px solid var(--color-border)" }}>
      {/* Header */}
      <div className="px-lg mb-lg flex flex-col md:flex-row md:items-end justify-between gap-md">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.25em] mb-xs"
             style={{ color: "var(--color-gold)" }}>
            Réseaux sociaux
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold underline-accent"
              style={{ color: "var(--color-foreground)" }}>
            Notre Instagram
          </h2>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold flex items-center gap-sm self-start md:self-auto"
        >
          {/* Instagram icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4.5"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0"/>
          </svg>
          @{INSTAGRAM_HANDLE}
        </a>
      </div>

      {/* Grille */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[3px]">
        {POSTS.map((post, i) => (
          <motion.a
            key={post.image}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square block overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            aria-label={`Voir ${post.alt} sur Instagram`}
          >
            <Image
              src={post.image}
              alt={post.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            {/* Overlay au hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ background: "rgba(16,12,9,0.72)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                   stroke="var(--color-gold)" strokeWidth="1.6">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="var(--color-gold)" strokeWidth="0"/>
              </svg>
              <span className="mt-xs font-body text-xs uppercase tracking-wider"
                    style={{ color: "var(--color-gold-soft)" }}>
                Voir sur Instagram
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA bas */}
      <div className="text-center mt-lg">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
           className="font-body text-sm uppercase tracking-wider transition-colors"
           style={{ color: "var(--color-gold)" }}
           onMouseEnter={e => (e.currentTarget.style.color = "var(--color-foreground)")}
           onMouseLeave={e => (e.currentTarget.style.color = "var(--color-gold)")}>
          Voir tous nos posts →
        </a>
      </div>
    </section>
  );
}
