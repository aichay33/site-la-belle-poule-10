import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowIcon, LeafIcon, LocationIcon, PeopleIcon } from "./Icons";

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

const promises = [
  { label: "Ouverture prévue le 05/2029", icon: <LeafIcon className="h-5 w-5" /> },
  { label: "Terrain agricole plat 4 ha", icon: <LocationIcon className="h-5 w-5" /> },
  { label: "Plein air • Agroforesterie", icon: <PeopleIcon className="h-5 w-5" /> },
];

export default function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden px-5 py-14 md:px-8 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,240,226,0.95),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(168,75,42,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-green-deep/10 bg-white px-6 py-10 shadow-[0_30px_100px_rgba(31,36,24,0.08)] md:px-12 md:py-14">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-cream-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-terracotta">{eyebrow}</span>
            <h1 className="mt-6 font-display text-4xl leading-tight text-green-deep md:text-6xl">{title}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-mid md:text-xl">{intro}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {promises.map((item) => (
                <span key={item.label} className="inline-flex items-center gap-2 rounded-full border border-green-deep/10 bg-white px-4 py-2 text-sm font-semibold text-green-deep shadow-[0_10px_30px_rgba(31,36,24,0.04)]">
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/recherche-terrain" className="inline-flex items-center justify-center gap-3 rounded-full bg-green-deep px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-terracotta">
                Proposer un terrain adapté
                <ArrowIcon />
              </Link>
              <Link href="/securite" className="inline-flex items-center justify-center rounded-full border border-green-deep/15 px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-green-deep transition hover:border-terracotta hover:text-terracotta">
                Voir la sécurité
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 pb-14 md:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-green-deep/10 bg-white p-7 shadow-[0_20px_70px_rgba(31,36,24,0.06)] md:p-10">
          {children}
        </div>
      </section>
      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 rounded-[2rem] bg-green-deep p-7 text-white shadow-[0_25px_80px_rgba(24,58,34,0.18)] md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-10">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/80">Comment aider le projet</span>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">Vous connaissez un terrain agricole plat avec accès voiture et eau ?</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">La Belle Poule recherche en Gironde un terrain agricole uniquement, plat, d’environ 4 hectares, avec accès voiture et eau, pour préparer l’exploitation avant l’ouverture prévue le 05/2029.</p>
          </div>
          <div className="grid gap-3">
            <Link href="/recherche-terrain" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-center font-bold text-green-deep transition hover:bg-cream-soft">
              Voir les critères terrain
              <ArrowIcon />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-white/25 px-6 py-4 text-center font-bold text-white transition hover:bg-white/10">
              Contacter Aïcha
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
