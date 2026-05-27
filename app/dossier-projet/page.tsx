import Link from "next/link";
import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Dossier du projet agricole — La Belle Poule",
  description: "Dossier de présentation de La Belle Poule : future exploitation avicole plein air agroforestière en Gironde, ouverture prévue le 01/05/2029, œufs, volailles de chair par reproduction naturelle et vente directe.",
  path: "/dossier-projet",
  keywords: ["dossier projet agricole", "exploitation avicole Gironde", "œufs plein air Gironde", "volailles de chair Gironde"],
});

const steps = [
  "Projet en préparation : ouverture prévue le 01/05/2029.",
  "Recherche d’un terrain agricole uniquement, plat, avec accès voiture et eau, environ 4 hectares en Gironde.",
  "Atelier 1 : œufs de poules pondeuses plein air agroforestier.",
  "Atelier 2 : volailles de chair plein air agroforestier, avec achat d’un noyau reproducteur puis reproduction naturelle.",
  "Ouverture visée avec 240 pondeuses et un atelier chair progressif, objectif 300 volailles/an au départ.",
  "Objectif progressif : jusqu’à 1 000 pondeuses et 1 000 volailles de chair/an si la demande, les autorisations et l’organisation suivent.",
  "Système d’eau : pluie, stockage, distribution gravitaire, appoint atmosphérique et infiltration sans mare obligatoire.",
];

export default function DossierProjetPage() {
  return (
    <PageShell
      eyebrow="Dossier du projet"
      title="Une exploitation avicole en préparation, claire et sécurisée"
      intro="Cette page rassemble les informations essentielles pour comprendre La Belle Poule et présenter le projet à une mairie, un propriétaire, un partenaire, un financeur ou une structure d’accompagnement agricole."
    >
      <div className="grid gap-10 text-text-mid">
        <section className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <h2 className="font-display text-3xl text-green-deep">Résumé du projet</h2>
            <p className="mt-4 leading-8">
              La Belle Poule est un projet de future exploitation avicole en Gironde. Le projet met en avant le plein air et l’agroforesterie : des paddocks arborés, des haies, des fruitiers utiles aux volailles, une gestion de l’eau, une vente directe et une organisation lisible pour les partenaires.
            </p>
            <p className="mt-4 leading-8">
              Le site ne présente pas une ferme déjà ouverte. La Belle Poule entre dans une phase de préparation avant ouverture prévue le 01/05/2029 : terrain, autorisations, bâtiments, eau, solaire, paddocks, sécurité, distributeurs et organisation sanitaire.
            </p>
          </div>
          <dl className="grid gap-3 rounded-[2rem] bg-cream-soft p-6 text-sm leading-6">
            <div><dt className="font-bold text-green-deep">Activité principale</dt><dd>Exploitation avicole : œufs + volailles de chair</dd></div>
            <div><dt className="font-bold text-green-deep">Ouverture</dt><dd>Prévue le 01/05/2029</dd></div>
            <div><dt className="font-bold text-green-deep">Pondeuses</dt><dd>240 à l’ouverture, augmentation selon la demande</dd></div>
            <div><dt className="font-bold text-green-deep">Chair</dt><dd>Noyau reproducteur puis reproduction naturelle, objectif 300/an au départ</dd></div>
            <div><dt className="font-bold text-green-deep">Objectif</dt><dd>Jusqu’à 1 000 pondeuses et 1 000 volailles de chair/an si le marché suit</dd></div>
            <div><dt className="font-bold text-green-deep">Terrain recherché</dt><dd>Terrain agricole uniquement, plat, accès voiture + eau, environ 4 ha</dd></div>
          </dl>
        </section>

        <section className="rounded-[2rem] bg-green-deep p-7 text-white md:p-9">
          <h2 className="font-display text-3xl">Points clés à retenir</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {steps.map((item) => (
              <li key={item} className="rounded-2xl bg-white/10 px-5 py-4 leading-7"><span className="font-bold text-white">✓</span> {item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Paddocks et accès</h2>
          <p className="mt-4 leading-8">
            Les pondeuses et les volailles de chair seront placées dans des paddocks distincts, sans mélange libre. Les parties communes pourront être accessibles de 10h à 19h : parking, point de vente, toilettes publiques, aire de pique-nique barbecue, aire de jeux pour enfants et parcours balisé. Les zones agricoles resteront fermées au public. Un distributeur automatique d’œufs et de boissons est prévu en H24, sur une zone sécurisée et séparée des animaux.
          </p>
        </section>

        <section className="rounded-[2rem] border border-green-deep/10 bg-white p-7 md:p-9 shadow-[0_12px_40px_rgba(31,36,24,0.05)]">
          <h2 className="font-display text-3xl text-green-deep">PDF du projet</h2>
          <p className="mt-4 leading-8">
            Un dossier de présentation concis est disponible pour les mairies, propriétaires, partenaires et structures d’accompagnement agricole. Il rappelle que la ferme n’est pas ouverte avant le 01/05/2029 et présente le projet plein air • agroforesterie, les 2 ateliers avicoles, le plan de préparation, l’eau, les paddocks, la zone publique avec parking, toilettes, pique-nique barbecue, aire de jeux, la sécurité et les garanties du projet.
          </p>
          <a href="/dossier-projet-la-belle-poule.pdf" className="mt-6 inline-flex rounded-full bg-green-deep px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-terracotta">
            Télécharger le PDF du projet
          </a>
        </section>

        <section className="grid gap-5 md:grid-cols-4">
          <Link href="/plan-3-ans" className="rounded-2xl bg-white p-5 leading-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]"><strong className="text-green-deep">Plan 3 ans</strong><br />Les années avant l’ouverture.</Link>
          <Link href="/systeme-verger" className="rounded-2xl bg-white p-5 leading-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]"><strong className="text-green-deep">Paddocks</strong><br />Pondeuses et chair séparées.</Link>
          <Link href="/systeme-eau" className="rounded-2xl bg-white p-5 leading-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]"><strong className="text-green-deep">Système d’eau</strong><br />Pluie et appoint atmosphérique.</Link>
          <Link href="/securite" className="rounded-2xl bg-white p-5 leading-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]"><strong className="text-green-deep">Sécurité</strong><br />Zones séparées et accès maîtrisés.</Link>
        </section>
      </div>
    </PageShell>
  );
}
