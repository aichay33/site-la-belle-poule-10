"use client";

import Script from "next/script";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAADVkmWYpCj_tqNbD";

const initialStatus = {
  type: "idle" as "idle" | "success" | "error" | "loading",
  message: "",
};

const FieldLabel = ({ children, required = false }: { children: React.ReactNode; required?: boolean }) => (
  <label className="text-sm font-bold text-green-deep">
    {children}
    {required ? <span className="text-terracotta"> *</span> : null}
  </label>
);

const inputClass =
  "mt-2 w-full rounded-2xl border border-green-deep/15 bg-white px-4 py-3 text-sm text-text-mid outline-none transition placeholder:text-text-mid/45 focus:border-terracotta focus:ring-4 focus:ring-terracotta/10";

export default function TerrainProposalForm() {
  const [status, setStatus] = useState(initialStatus);
  const [token, setToken] = useState("");
  const [scriptReady, setScriptReady] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const turnstileRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  const canRenderTurnstile = useMemo(() => Boolean(siteKey && scriptReady), [scriptReady]);

  useEffect(() => {
    if (!canRenderTurnstile || !turnstileRef.current || !window.turnstile || widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: siteKey,
      theme: "light",
      callback: (value: string) => setToken(value),
      "expired-callback": () => setToken(""),
      "error-callback": () => setToken(""),
    });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [canRenderTurnstile]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Envoi en cours..." });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (!token) {
      setStatus({ type: "error", message: "Merci de valider la protection anti-robot avant l’envoi." });
      return;
    }

    try {
      const response = await fetch("/api/proposer-terrain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, turnstileToken: token, startedAt }),
      });

      const result = await response.json().catch(() => ({ message: "Réponse serveur illisible." }));

      if (!response.ok) {
        throw new Error(result.message || "Le message n’a pas pu être envoyé.");
      }

      form.reset();
      setToken("");
      window.turnstile?.reset(widgetIdRef.current || undefined);
      setStatus({ type: "success", message: "Merci, votre proposition a bien été envoyée." });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Erreur lors de l’envoi." });
      window.turnstile?.reset(widgetIdRef.current || undefined);
      setToken("");
    }
  }

  return (
    <section id="formulaire-terrain" className="rounded-[2rem] border border-green-deep/10 bg-white p-6 shadow-[0_15px_50px_rgba(31,36,24,0.06)] md:p-9">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onLoad={() => setScriptReady(true)} />

      <div className="max-w-3xl">
        <span className="inline-flex rounded-full bg-cream-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Formulaire sécurisé</span>
        <h2 className="mt-4 font-display text-3xl text-green-deep">Proposer un terrain agricole</h2>
        <p className="mt-4 leading-8 text-text-mid">
          Ce formulaire sert uniquement à transmettre une piste de terrain pour le projet La Belle Poule. Il est protégé par Cloudflare Turnstile pour limiter les robots et les messages indésirables.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <FieldLabel required>Nom / prénom</FieldLabel>
            <input className={inputClass} name="name" type="text" autoComplete="name" required maxLength={120} placeholder="Votre nom" />
          </div>
          <div>
            <FieldLabel required>Email</FieldLabel>
            <input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={160} placeholder="votre@email.fr" />
          </div>
          <div>
            <FieldLabel>Téléphone facultatif</FieldLabel>
            <input className={inputClass} name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="Facultatif" />
          </div>
          <div>
            <FieldLabel required>Commune / secteur</FieldLabel>
            <input className={inputClass} name="commune" type="text" required maxLength={140} placeholder="Commune en Gironde" />
          </div>
          <div>
            <FieldLabel required>Surface estimée</FieldLabel>
            <input className={inputClass} name="surface" type="text" required maxLength={80} placeholder="Ex : 4 hectares" />
          </div>
          <div>
            <FieldLabel>Prix ou conditions</FieldLabel>
            <input className={inputClass} name="prix" type="text" maxLength={160} placeholder="Prix, location, contact propriétaire..." />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          <div>
            <FieldLabel>Terrain agricole ?</FieldLabel>
            <select className={inputClass} name="agricole" defaultValue="">
              <option value="">À préciser</option>
              <option>Oui</option>
              <option>Non</option>
              <option>Je ne sais pas</option>
            </select>
          </div>
          <div>
            <FieldLabel>Terrain plat ?</FieldLabel>
            <select className={inputClass} name="plat" defaultValue="">
              <option value="">À préciser</option>
              <option>Oui</option>
              <option>Non</option>
              <option>Pente faible</option>
            </select>
          </div>
          <div>
            <FieldLabel>Accès voiture ?</FieldLabel>
            <select className={inputClass} name="accesVoiture" defaultValue="">
              <option value="">À préciser</option>
              <option>Oui</option>
              <option>Non</option>
              <option>À créer</option>
            </select>
          </div>
          <div>
            <FieldLabel>Eau disponible ?</FieldLabel>
            <select className={inputClass} name="eau" defaultValue="">
              <option value="">À préciser</option>
              <option>Oui</option>
              <option>Non</option>
              <option>Solution possible</option>
            </select>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <FieldLabel>Bois / haies / taillis</FieldLabel>
            <input className={inputClass} name="boisHaies" type="text" maxLength={160} placeholder="Ex : haies adultes, petit bois, taillis..." />
          </div>
          <div>
            <FieldLabel>Lien annonce / cadastre / photos</FieldLabel>
            <input className={inputClass} name="lien" type="url" maxLength={300} placeholder="https://..." />
          </div>
        </div>

        <div>
          <FieldLabel required>Message</FieldLabel>
          <textarea className={`${inputClass} min-h-36 resize-y`} name="message" required maxLength={1800} placeholder="Décrivez le terrain, l’accès, l’eau, le prix, le contact du propriétaire ou toute information utile." />
        </div>

        <div className="rounded-2xl bg-cream-soft p-4">
          <div ref={turnstileRef} className="min-h-[65px]" />
          {!scriptReady ? <p className="text-sm text-text-mid">Chargement de la protection anti-robot...</p> : null}
        </div>

        <p className="text-sm leading-7 text-text-mid">
          Les informations envoyées servent uniquement à étudier une proposition de terrain pour La Belle Poule. Elles ne sont pas revendues et peuvent être supprimées sur demande.
        </p>

        {status.message ? (
          <div className={`rounded-2xl px-5 py-4 text-sm font-bold ${status.type === "success" ? "bg-green-deep text-white" : status.type === "error" ? "bg-terracotta/10 text-terracotta" : "bg-cream-soft text-green-deep"}`}>
            {status.message}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={status.type === "loading"}
          className="inline-flex w-full items-center justify-center rounded-full bg-green-deep px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-terracotta disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
        >
          {status.type === "loading" ? "Envoi..." : "Envoyer la proposition"}
        </button>
      </form>
    </section>
  );
}
