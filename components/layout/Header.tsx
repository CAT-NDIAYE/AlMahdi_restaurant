"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { NAV_LINKS, LOCATIONS, RESTAURANT } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [tickerIdx, setTickerIdx]   = useState(0);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ticker mobile : fait défiler les sites
  useEffect(() => {
    const t = setInterval(() => setTickerIdx(i => (i + 1) % LOCATIONS.length), 3000);
    return () => clearInterval(t);
  }, []);

  const loc = LOCATIONS[tickerIdx];

  return (
    <header
      className="w-full fixed top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(16,12,9,0.97)"
          : "rgba(16,12,9,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "var(--color-border)" : "transparent"}`,
      }}
    >
      {/* ════════════════════════════════════════
          BANDE SUPÉRIEURE — 4 sites + slogan
      ════════════════════════════════════════ */}
      <div
        className="hidden md:block"
        style={{
          background: "var(--color-accent)",
          borderBottom: "1px solid rgba(201,164,96,0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-lg flex items-center justify-between"
             style={{ height: "34px" }}>
          {/* Sites desktop — tous affichés */}
          <div className="flex items-center gap-lg">
            {LOCATIONS.map((l) => (
              <a
                key={l.name}
                href={l.tel}
                className="flex items-center gap-xs font-body transition-opacity hover:opacity-75"
                style={{ fontSize: "0.7rem", letterSpacing: "0.08em", color: "#fff" }}
              >
                <span
                  className="font-bold"
                  style={{ color: "var(--color-gold-soft)" }}
                >
                  {l.name}
                </span>
                <span style={{ color: "rgba(255,255,255,0.8)" }}>
                  {l.phone}
                </span>
              </a>
            ))}
          </div>

          {/* Slogan */}
          <p
            className="font-display italic"
            style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--color-gold-soft)" }}
          >
            {RESTAURANT.slogan}
          </p>
        </div>
      </div>

      {/* Bande mobile — ticker rotatif */}
      <div
        className="md:hidden flex items-center justify-center gap-xs px-lg"
        style={{
          height: "28px",
          background: "var(--color-accent)",
          fontSize: "0.65rem",
          letterSpacing: "0.06em",
        }}
      >
        <span style={{ color: "var(--color-gold-soft)", fontWeight: 700 }}>
          {loc.name}
        </span>
        <a
          href={loc.tel}
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          {loc.phone}
        </a>
      </div>

      {/* ════════════════════════════════════════
          BARRE PRINCIPALE — Logo + Nav
      ════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-lg flex items-center justify-between"
           style={{ height: "72px" }}>

        {/* ── Logo — fidèle au screenshot ── */}
        <Link href="/" className="flex items-center gap-sm shrink-0 group">
          {/* Badge circulaire */}
          <div className="relative shrink-0 flex items-center justify-center overflow-hidden rounded-full" style={{ width: 50, height: 50 }}>
            <Image
              src="/logo.png"
              alt="Logo Complexe Al Mahdi"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Texte logo — typographie du screenshot */}
          <div className="leading-none">
            <div className="flex items-baseline gap-[6px]">
              <span
                className="font-display font-black uppercase tracking-wider"
                style={{
                  fontSize: "1.3rem",
                  color: "var(--color-foreground)",
                  letterSpacing: "0.12em",
                }}
              >
                COMPLEXE
              </span>
            </div>
            <div className="flex items-center gap-[6px]">
              <span
                className="font-display italic"
                style={{
                  fontSize: "1.35rem",
                  color: "var(--color-gold)",
                  letterSpacing: "0.04em",
                }}
              >
                Al
              </span>
              <span
                className="font-display font-bold"
                style={{
                  fontSize: "1.35rem",
                  color: "var(--color-gold)",
                  letterSpacing: "0.06em",
                }}
              >
                Mahdi
              </span>
            </div>
          </div>
        </Link>

        {/* ── Nav desktop ── */}
        <nav
          className="hidden md:flex items-center"
          style={{ gap: "28px" }}
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body relative group"
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-foreground)",
              }}
            >
              {link.label}
              {/* Soulignement doré au hover */}
              <span
                className="absolute -bottom-[3px] left-0 w-0 group-hover:w-full transition-all duration-300"
                style={{ height: "1px", background: "var(--color-gold)" }}
              />
            </Link>
          ))}
        </nav>

        {/* ── CTA + hamburger ── */}
        <div className="flex items-center gap-sm">
          <Link
            href="/reservation"
            className="hidden md:inline-flex items-center btn-primary"
            style={{ padding: "8px 20px", fontSize: "0.78rem" }}
          >
            Réserver
          </Link>

          {/* Hamburger mobile */}
          <button
            className="md:hidden p-xs flex flex-col justify-center"
            style={{ gap: "5px" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span className="block transition-all duration-300"
              style={{
                width: 24, height: 1.5,
                background: "var(--color-gold)",
                transformOrigin: "center",
                transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }} />
            <span className="block transition-all duration-300"
              style={{
                width: 24, height: 1.5,
                background: "var(--color-gold)",
                opacity: mobileOpen ? 0 : 1,
              }} />
            <span className="block transition-all duration-300"
              style={{
                width: 24, height: 1.5,
                background: "var(--color-gold)",
                transformOrigin: "center",
                transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }} />
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════
          MENU MOBILE déroulant
      ════════════════════════════════════════ */}
      {mobileOpen && (
        <div
          style={{
            background: "var(--color-background)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {/* Liens de navigation */}
          <nav className="px-lg py-md flex flex-col" style={{ gap: 20 }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body uppercase"
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.12em",
                  color: "var(--color-foreground)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reservation"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center mt-xs"
              style={{ fontSize: "0.85rem" }}
            >
              Réserver une table
            </Link>
          </nav>

          {/* Tous les sites en mobile */}
          <div
            className="px-lg py-md grid grid-cols-2 gap-xs"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            {LOCATIONS.map((l) => (
              <a
                key={l.name}
                href={l.tel}
                className="flex flex-col p-xs rounded-sm"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <span
                  className="font-body font-bold"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--color-gold)" }}
                >
                  {l.name}
                </span>
                <span
                  className="font-body"
                  style={{ fontSize: "0.75rem", color: "var(--color-foreground)" }}
                >
                  {l.phone}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
