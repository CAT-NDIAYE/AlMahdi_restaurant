"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HERO_SLIDES } from "@/lib/data";

const DURATION = 5000;

export default function Hero() {
  const [idx, setIdx]       = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef            = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIdx(i => (i + 1) % HERO_SLIDES.length);
    }, DURATION);
  };

  useEffect(() => {
    if (!paused) startTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  const goTo = (i: number) => { setIdx(i); startTimer(); };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* ── Toutes les images préchargées, seule l'active est visible ── */}
      {HERO_SLIDES.map((slide, i) => (
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === idx ? 1 : 0, scale: i === idx ? 1 : 1.05 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ zIndex: i === idx ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.label}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0"
               style={{ background: "linear-gradient(160deg,rgba(16,12,9,0.05) 0%,rgba(16,12,9,0.5) 40%,rgba(16,12,9,0.93) 100%)" }} />
        </motion.div>
      ))}

      {/* ── Barre de progression ── */}
      <div
        className="absolute top-0 left-0 right-0 z-20 flex gap-1 px-lg"
        style={{ paddingTop: "5.5rem" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className="relative flex-1 h-[2px] rounded-full overflow-hidden"
                  style={{ background: "rgba(201,164,96,0.2)" }}>
            {i === idx && (
              <motion.span className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: "var(--color-gold)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: DURATION / 1000, ease: "linear" }}
                key={`bar-${idx}`} />
            )}
            {i < idx && <span className="absolute inset-0 rounded-full" style={{ background: "var(--color-gold)", opacity: 0.5 }} />}
          </button>
        ))}
      </div>

      {/* ── Texte animé ── */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end px-lg pb-2xl md:pb-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)",
              transition: { duration: 0.6, delay: 0.15, ease: [0.25,0.46,0.45,0.94] } }}
            exit={{ opacity: 0, y: -10, filter: "blur(3px)",
              transition: { duration: 0.3 } }}
          >
            {/* Étiquette dorée */}
            <p className="font-body text-xs uppercase mb-sm"
               style={{ color: "var(--color-gold)", letterSpacing: "0.25em" }}>
              Complexe Al Mahdi · Dakar
            </p>

            {/* Titre */}
            <h1 className="font-display font-bold leading-[0.9] mb-md"
                style={{ fontSize: "clamp(2.6rem,7vw,6.5rem)", color: "var(--color-foreground)" }}>
              <span className="underline-accent">{HERO_SLIDES[idx].label.split(" ").slice(0,3).join(" ")}</span>
              {HERO_SLIDES[idx].label.split(" ").length > 3 && (
                <><br />{HERO_SLIDES[idx].label.split(" ").slice(3).join(" ")}</>
              )}
            </h1>

            {/* Sous-titre */}
            <p className="font-body max-w-lg mb-lg"
               style={{ color: "var(--color-gold-soft)", fontSize: "1.05rem", lineHeight: 1.6 }}>
              {HERO_SLIDES[idx].subtitle}
            </p>

            {/* CTAs — la pause ne s'active que si la souris survole les boutons */}
            <div
              className="flex gap-sm flex-wrap w-fit"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <Link href="/menu" className="btn-primary">Voir le menu</Link>
              <Link href="/reservation" className="btn-gold">Réserver une table</Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Compteur */}
        <div className="absolute bottom-md right-lg font-body text-xs tabular-nums select-none"
             style={{ color: "rgba(201,164,96,0.5)" }}>
          <span style={{ color: "var(--color-gold)", fontWeight: 600 }}>
            {String(idx + 1).padStart(2, "0")}
          </span>
          {" / "}{String(HERO_SLIDES.length).padStart(2, "0")}
        </div>
      </div>

      {/* Points mobile */}
      <div
        className="absolute bottom-lg left-1/2 -translate-x-1/2 z-20 flex gap-xs md:hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{ width: i===idx?20:8, height:8,
              background: i===idx?"var(--color-accent)":"rgba(201,164,96,0.3)" }} />
        ))}
      </div>
    </section>
  );
}
