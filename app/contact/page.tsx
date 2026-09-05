"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { RESTAURANT, LOCATIONS } from "@/lib/data";

type ContactForm = { name: string; email: string; phone: string; message: string };

export default function ContactPage() {
  const [form, setForm]     = useState<ContactForm>({ name:"", email:"", phone:"", message:"" });
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof ContactForm) =>
    (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <main className="min-h-screen" style={{ background:"var(--color-background)" }}>
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-xl px-lg text-center">
        <p className="font-body text-xs uppercase tracking-[0.25em] mb-xs" style={{ color:"var(--color-gold)" }}>
          Parlons-nous
        </p>
        <h1 className="font-display font-bold mb-sm" style={{ fontSize:"clamp(2.5rem,6vw,5rem)", color:"var(--color-foreground)" }}>
          <span className="underline-accent">Contactez</span>-nous
        </h1>
        <p className="font-body max-w-md mx-auto mt-md" style={{ color:"var(--color-gold-soft)", lineHeight:1.7 }}>
          Une question, un événement privé ou simplement envie de nous écrire — on vous répond rapidement.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-lg pb-2xl grid grid-cols-1 lg:grid-cols-2 gap-lg items-start">

        {/* ── Formulaire ── */}
        <div>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="success"
                initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
                className="flex flex-col items-center text-center p-2xl rounded-sm"
                style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-lg"
                     style={{ background:"rgba(201,164,96,0.1)", border:"2px solid var(--color-gold)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-bold mb-sm" style={{ color:"var(--color-foreground)" }}>Message envoyé !</h2>
                <p className="font-body text-sm mb-lg" style={{ color:"var(--color-gold-soft)" }}>
                  Merci <strong style={{ color:"var(--color-gold)" }}>{form.name}</strong>, nous vous répondrons
                  sous 24h à l&apos;adresse <strong style={{ color:"var(--color-gold)" }}>{form.email}</strong>.
                </p>
                <button onClick={() => { setSent(false); setForm({name:"",email:"",phone:"",message:""}); }}
                        className="btn-gold">Envoyer un autre message</button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit}
                className="p-lg md:p-xl rounded-sm space-y-md"
                style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>
                <h2 className="font-display text-xl font-bold mb-lg" style={{ color:"var(--color-gold)" }}>
                  Envoyer un message
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                  <div>
                    <label className="block font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>
                      Nom *
                    </label>
                    <input required type="text" value={form.name} onChange={set("name")}
                           placeholder="Votre nom" className="input-field" />
                  </div>
                  <div>
                    <label className="block font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>
                      Téléphone
                    </label>
                    <input type="tel" value={form.phone} onChange={set("phone")}
                           placeholder="77 000 00 00" className="input-field" />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>
                    Email *
                  </label>
                  <input required type="email" value={form.email} onChange={set("email")}
                         placeholder="votre@email.com" className="input-field" />
                </div>
                <div>
                  <label className="block font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>
                    Message *
                  </label>
                  <textarea required value={form.message} onChange={set("message")}
                            placeholder="Votre message, question ou demande d'événement privé…"
                            rows={5} className="input-field resize-none" />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full"
                        style={{ opacity: loading ? 0.7 : 1 }}>
                  {loading ? "Envoi…" : "Envoyer le message"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Infos contact — sites + email + horaires */}
          <div className="mt-lg space-y-sm">
            {/* 4 sites en grille 2x2 */}
            <div className="grid grid-cols-2 gap-sm">
              {LOCATIONS.map(l => (
                <a key={l.name} href={l.tel}
                   className="p-sm rounded-sm"
                   style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)", display:"block" }}>
                  <p className="font-body font-bold" style={{ fontSize:"0.65rem", letterSpacing:"0.12em", color:"var(--color-gold)" }}>
                    {l.name}
                  </p>
                  <p className="font-body text-sm" style={{ color:"var(--color-foreground)" }}>{l.phone}</p>
                </a>
              ))}
            </div>
            {/* Email + horaires */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
              <div className="p-sm rounded-sm text-center" style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>
                <p className="font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>Email</p>
                <a href={`mailto:${RESTAURANT.email}`} className="font-body text-xs break-all" style={{ color:"var(--color-foreground)" }}>
                  {RESTAURANT.email}
                </a>
              </div>
              <div className="p-sm rounded-sm text-center" style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>
                <p className="font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>Horaires</p>
                <p className="font-body text-xs" style={{ color:"var(--color-foreground)" }}>
                  {RESTAURANT.hours.open} – {RESTAURANT.hours.close}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Carte Google Maps ── */}
        <div className="space-y-sm">
          <div className="rounded-sm overflow-hidden" style={{ border:"1px solid var(--color-border)" }}>
            <iframe
              title="Complexe Al Mahdi — Carte"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0!2d-17.4441!3d14.6937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQxJzM3LjMiTiAxN8KwMjYnMzguOCJX!5e0!3m2!1sfr!2ssn!4v1700000000000!5m2!1sfr!2ssn&q=Complexe+Al+Mahdi+Dakar"
              width="100%"
              height="380"
              style={{ border:0, display:"block", filter:"invert(0.85) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://maps.app.goo.gl/rmKxf7EVDmLrcb2m6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full flex items-center justify-center gap-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Ouvrir dans Google Maps
          </a>

          {/* Instagram CTA */}
          <a
            href="https://www.instagram.com/complex_al_mahdi_officiel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-md p-md rounded-sm transition-colors"
            style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}
            onMouseEnter={e=>(e.currentTarget.style.borderColor="var(--color-gold)")}
            onMouseLeave={e=>(e.currentTarget.style.borderColor="var(--color-border)")}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="var(--color-gold)" strokeWidth="0"/>
            </svg>
            <div>
              <p className="font-body text-xs uppercase tracking-wider" style={{ color:"var(--color-gold)" }}>Instagram</p>
              <p className="font-body text-sm" style={{ color:"var(--color-foreground)" }}>@complex_al_mahdi_officiel</p>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
