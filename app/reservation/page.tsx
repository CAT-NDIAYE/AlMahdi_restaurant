"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { RESTAURANT, LOCATIONS } from "@/lib/data";

type FormData = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  notes: string;
};

const TIME_SLOTS = [
  "12:00","12:30","13:00","13:30","14:00","14:30",
  "19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30",
];

const OCCASIONS = ["Aucune","Anniversaire","Romantique","Affaires","Famille","Autre"];

export default function ReservationPage() {
  const [form, setForm] = useState<FormData>({
    name:"", phone:"", email:"", date:"", time:"", guests:"2", occasion:"Aucune", notes:""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400)); // Simulation envoi
    setLoading(false);
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <main className="min-h-screen" style={{ background: "var(--color-background)" }}>
      <Header />

      {/* Hero section */}
      <section className="relative pt-40 pb-xl px-lg overflow-hidden">
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: "url('/hero_ambiance.jpg')", backgroundSize:"cover", backgroundPosition:"center" }} />
        <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom, var(--color-background) 0%, transparent 50%, var(--color-background) 100%)" }} />
        <div className="relative text-center">
          <p className="font-body text-xs uppercase tracking-[0.25em] mb-xs" style={{ color:"var(--color-gold)" }}>
            Complexe Al Mahdi
          </p>
          <h1 className="font-display font-bold mb-md" style={{ fontSize:"clamp(2.5rem,6vw,5rem)", color:"var(--color-foreground)" }}>
            Réservez votre <span className="underline-accent">table</span>
          </h1>
          <p className="font-body max-w-md mx-auto" style={{ color:"var(--color-gold-soft)", lineHeight:1.7 }}>
            Une soirée inoubliable vous attend. Choisissez votre créneau, nous nous occupons du reste.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="max-w-5xl mx-auto px-lg pb-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg items-start">

          {/* ── Infos pratiques ── */}
          <div className="lg:col-span-1 space-y-md">
            {/* Horaires */}
            <div className="p-md rounded-sm"
                 style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>
              <div className="flex items-center gap-sm mb-xs">
                <span className="text-xl">🕐</span>
                <h3 className="font-display text-sm font-bold" style={{ color:"var(--color-gold)" }}>Horaires</h3>
              </div>
              <p className="font-body text-sm" style={{ color:"var(--color-foreground)" }}>
                {RESTAURANT.hours.label} · {RESTAURANT.hours.open} – {RESTAURANT.hours.close}
              </p>
            </div>

            {/* Nos sites */}
            <div className="p-md rounded-sm"
                 style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>
              <h3 className="font-display text-sm font-bold mb-sm" style={{ color:"var(--color-gold)" }}>
                Nos sites
              </h3>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {LOCATIONS.map(l => (
                  <div key={l.name} className="flex items-center justify-between">
                    <span className="font-body font-bold"
                          style={{ fontSize:"0.72rem", letterSpacing:"0.1em", color:"var(--color-gold-soft)" }}>
                      {l.name}
                    </span>
                    <a href={l.tel} className="font-body text-sm"
                       style={{ color:"var(--color-foreground)" }}>
                      {l.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="p-md rounded-sm" style={{ background:"rgba(192,39,45,0.08)", border:"1px solid rgba(192,39,45,0.25)" }}>
              <p className="font-body text-xs" style={{ color:"var(--color-gold-soft)", lineHeight:1.7 }}>
                ⚠️ La réservation sera confirmée par téléphone dans les 24h. Pour les groupes de plus de 10 personnes, contactez-nous directement.
              </p>
            </div>
          </div>

          {/* ── Formulaire ── */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success"
                  initial={{ opacity:0, scale:0.96 }} animate={{ opacity:1, scale:1 }}
                  className="flex flex-col items-center justify-center text-center p-2xl rounded-sm"
                  style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-lg"
                       style={{ background:"rgba(201,164,96,0.15)", border:"2px solid var(--color-gold)" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-sm" style={{ color:"var(--color-foreground)" }}>
                    Demande envoyée !
                  </h2>
                  <p className="font-body text-sm mb-lg" style={{ color:"var(--color-gold-soft)" }}>
                    Merci <strong style={{ color:"var(--color-gold)" }}>{form.name}</strong>. Nous vous contacterons au{" "}
                    <strong style={{ color:"var(--color-gold)" }}>{form.phone}</strong> dans les 24h pour confirmer votre table du{" "}
                    <strong style={{ color:"var(--color-gold)" }}>{form.date}</strong> à{" "}
                    <strong style={{ color:"var(--color-gold)" }}>{form.time}</strong>.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({name:"",phone:"",email:"",date:"",time:"",guests:"2",occasion:"Aucune",notes:""}); }}
                          className="btn-gold">
                    Nouvelle réservation
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit}
                  className="p-lg md:p-xl rounded-sm space-y-md"
                  style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)" }}>

                  <h2 className="font-display text-xl font-bold mb-lg" style={{ color:"var(--color-gold)" }}>
                    Vos informations
                  </h2>

                  {/* Ligne 1: Nom + Téléphone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                    <div>
                      <label className="block font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>
                        Nom complet *
                      </label>
                      <input required type="text" value={form.name} onChange={set("name")}
                             placeholder="Votre nom" className="input-field" />
                    </div>
                    <div>
                      <label className="block font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>
                        Téléphone *
                      </label>
                      <input required type="tel" value={form.phone} onChange={set("phone")}
                             placeholder="77 000 00 00" className="input-field" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>
                      Email
                    </label>
                    <input type="email" value={form.email} onChange={set("email")}
                           placeholder="votre@email.com" className="input-field" />
                  </div>

                  <div className="gold-divider font-body text-xs uppercase tracking-widest" style={{ color:"var(--color-gold)" }}>
                    Votre soirée
                  </div>

                  {/* Date + Heure */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                    <div>
                      <label className="block font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>
                        Date *
                      </label>
                      <input required type="date" value={form.date} onChange={set("date")}
                             min={today} className="input-field" />
                    </div>
                    <div>
                      <label className="block font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>
                        Heure *
                      </label>
                      <select required value={form.time} onChange={set("time")} className="input-field">
                        <option value="">Choisir un créneau</option>
                        {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Couverts + Occasion */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                    <div>
                      <label className="block font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>
                        Nombre de couverts *
                      </label>
                      <select required value={form.guests} onChange={set("guests")} className="input-field">
                        {Array.from({length:20},(_,i)=>i+1).map(n=>(
                          <option key={n} value={n}>{n} {n===1?"personne":"personnes"}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>
                        Occasion
                      </label>
                      <select value={form.occasion} onChange={set("occasion")} className="input-field">
                        {OCCASIONS.map(o=><option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block font-body text-xs uppercase tracking-wider mb-xs" style={{ color:"var(--color-gold)" }}>
                      Demandes particulières
                    </label>
                    <textarea value={form.notes} onChange={set("notes")}
                              placeholder="Allergies, préférences, disposition souhaitée…"
                              rows={3} className="input-field resize-none" />
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={loading}
                          className="btn-primary w-full flex items-center justify-center gap-sm"
                          style={{ opacity: loading ? 0.7 : 1 }}>
                    {loading ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
                          <path d="M12 2a10 10 0 0 1 10 10" />
                        </svg>
                        Envoi en cours…
                      </>
                    ) : "Confirmer la réservation"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
