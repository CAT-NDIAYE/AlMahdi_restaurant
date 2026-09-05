"use client";

import Link from "next/link";
import Image from "next/image";
import { RESTAURANT, MENU_CATEGORIES, NAV_LINKS, LOCATIONS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      {/* ── Corps principal ── */}
      <div className="max-w-7xl mx-auto px-lg py-xl grid grid-cols-1 md:grid-cols-12 gap-lg">

        {/* Logo + slogan + insta */}
        <div className="md:col-span-4">
          <Link href="/" className="flex items-center gap-sm mb-md">
            <div className="relative shrink-0 flex items-center justify-center overflow-hidden rounded-full" style={{ width: 56, height: 56 }}>
              <Image src="/logo.png" alt="Logo Complexe Al Mahdi" fill className="object-contain" />
            </div>
            <div className="leading-none">
              <p className="font-display font-black uppercase tracking-wider"
                 style={{ fontSize: "1.1rem", color: "var(--color-foreground)", letterSpacing: "0.12em" }}>
                COMPLEXE
              </p>
              <p className="font-display" style={{ fontSize: "1.15rem", color: "var(--color-gold)" }}>
                <em>Al</em> Mahdi
              </p>
            </div>
          </Link>

          <p className="font-display italic mb-xs"
             style={{ fontSize: "0.8rem", letterSpacing: "0.15em", color: "var(--color-accent)" }}>
            {RESTAURANT.slogan}
          </p>
          <p className="font-body text-sm mb-md"
             style={{ color: "var(--color-neutral)", lineHeight: 1.8, maxWidth: 280 }}>
            Gastronomie franco-africaine au cœur de Dakar. Viandes d&apos;exception, poissons frais, pizzas VIP.
          </p>

          <a href="https://www.instagram.com/complex_al_mahdi_officiel"
             target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-xs font-body text-xs uppercase tracking-wider"
             style={{ color: "var(--color-gold)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0"/>
            </svg>
            @complex_al_mahdi_officiel
          </a>
        </div>

        {/* Navigation */}
        <div className="md:col-span-2">
          <h3 className="font-display text-xs uppercase tracking-widest mb-md"
              style={{ color: "var(--color-gold)", letterSpacing: "0.2em" }}>Navigation</h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="font-body text-sm"
                      style={{ color: "var(--color-neutral)" }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4 adresses */}
        <div className="md:col-span-3">
          <h3 className="font-display text-xs uppercase tracking-widest mb-md"
              style={{ color: "var(--color-gold)", letterSpacing: "0.2em" }}>Nos Sites</h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {LOCATIONS.map(l => (
              <li key={l.name} className="flex items-center gap-xs">
                <span className="font-body font-bold"
                      style={{ fontSize: "0.72rem", letterSpacing: "0.1em", color: "var(--color-gold-soft)", minWidth: 70 }}>
                  {l.name}
                </span>
                <a href={l.tel} className="font-body text-sm"
                   style={{ color: "var(--color-neutral)" }}>
                  {l.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Horaires + contact */}
        <div className="md:col-span-3">
          <h3 className="font-display text-xs uppercase tracking-widest mb-md"
              style={{ color: "var(--color-gold)", letterSpacing: "0.2em" }}>Infos pratiques</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div>
              <p className="font-body text-xs uppercase tracking-wider mb-xs"
                 style={{ color: "var(--color-gold-soft)", fontSize: "0.65rem" }}>Horaires</p>
              <p className="font-body text-sm" style={{ color: "var(--color-neutral)" }}>
                {RESTAURANT.hours.label}
              </p>
              <p className="font-body text-sm" style={{ color: "var(--color-neutral)" }}>
                {RESTAURANT.hours.open} – {RESTAURANT.hours.close}
              </p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-wider mb-xs"
                 style={{ color: "var(--color-gold-soft)", fontSize: "0.65rem" }}>Email</p>
              <a href={`mailto:${RESTAURANT.email}`} className="font-body text-sm"
                 style={{ color: "var(--color-neutral)" }}>
                {RESTAURANT.email}
              </a>
            </div>
            <Link href="/reservation" className="btn-primary text-center mt-xs"
                  style={{ fontSize: "0.78rem", padding: "10px 20px" }}>
              Réserver une table
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bas de page ── */}
      <div style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-7xl mx-auto px-lg py-md flex flex-col sm:flex-row items-center justify-between gap-xs">
          <p className="font-body text-xs" style={{ color: "var(--color-neutral)" }}>
            © {year} {RESTAURANT.fullName} — {RESTAURANT.slogan}
          </p>
          <div className="flex gap-md flex-wrap justify-center">
            {MENU_CATEGORIES.map(c => (
              <Link key={c.slug} href={`/menu/${c.slug}`}
                    className="font-body text-xs uppercase"
                    style={{ color: "var(--color-neutral)", letterSpacing: "0.08em" }}>
                {c.name.split(" ")[0]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
