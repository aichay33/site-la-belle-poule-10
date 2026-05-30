import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Sécurité et organisation — La Belle Poule",
  description: "Sécurité du projet La Belle Poule : parties communes 10h-19h, distributeur H24 séparé, zones agricoles fermées, signalétique, biosécurité, eau et électricité sécurisées.",
  path: "/securite",
  keywords: ["sécurité ferme avicole", "accueil public ferme", "biosécurité volailles", "La Belle Poule"],
});

const publicRules = [
  "Parties communes ouvertes de 10h à 19h après ouverture : accueil, parking, toilettes publiques, aire de pique-nique avec barbecue encadré, aire de jeux pour enfants, cheminement et observation.",
  "Distributeur d’œufs et boissons prévu en H24, placé sur une zone séparée et contrôlable, hors accès aux animaux.",
  "Parcours client balisé : les visiteurs observent les paddocks sans entrer dans les zones agricoles.",
  "Signalétique claire : horaires, zones interdites, enfants sous surveillance, chiens encadrés, interdiction de nourrir les animaux, règles d’usage de l’aire de jeux et du barbecue.",
];

const farmRules = [
  "Paddocks, poulaillers, bâtiment agricole, stockage aliment, batteries et cuves fermés au public.",
  "Poules pondeuses organisées en paddocks : pas d’accès libre aux lots.",
  "Eau et électricité placées en zones techniques fermées ou protégées.",
  "Chargement des poules pondeuses et interventions agricoles prévus hors parcours visiteurs.",
];

export default function SecuritePage() {
  return (
    <PageShell
      eyebrow="Sécurité"
      title="Une ferme lisible, séparée et optimisée"
      intro="La Belle Poule est pensée pour rassurer les mairies, la Chambre d’agriculture, les assureurs et les visiteurs : parties communes accessibles, zones agricoles fermées, signalétique claire et ouverture prévue seulement le 05/2029."
    >
      <div className="grid gap-10 text-text-mid">
        <section className="rounded-[2rem] bg-green-deep p-7 text-white md:p-9">
          <h2 className="font-display text-3xl">Principe de sécurité</h2>
          <p className="mt-4 leading-8 text-white/85">
            Le public ne circule jamais librement dans les zones d’élevage. La ferme distingue trois espaces : zone publique, zone agricole et zone privée. Cette séparation protège les visiteurs, les animaux, le matériel et la biosécurité de l’exploitation.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-[2rem] border border-green-deep/10 p-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]">
            <h2 className="font-display text-3xl text-green-deep">Zone publique</h2>
            <ul className="mt-5 grid gap-3">
              {publicRules.map((item) => (
                <li key={item} className="rounded-2xl bg-cream-soft px-5 py-4 leading-7"><span className="font-bold text-terracotta">•</span> {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-green-deep/10 p-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]">
            <h2 className="font-display text-3xl text-green-deep">Zone agricole</h2>
            <ul className="mt-5 grid gap-3">
              {farmRules.map((item) => (
                <li key={item} className="rounded-2xl bg-cream-soft px-5 py-4 leading-7"><span className="font-bold text-terracotta">•</span> {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-[1.5rem] bg-cream-soft p-6">
            <h3 className="font-display text-2xl text-green-deep">Eau</h3>
            <p className="mt-3 leading-7">Les cuves, filtres, vannes, abreuvoirs et trop-pleins sont organisés dans des zones techniques. L’eau de pluie reste destinée aux usages agricoles et techniques sauf traitement conforme.</p>
          </article>
          <article className="rounded-[1.5rem] bg-cream-soft p-6">
            <h3 className="font-display text-2xl text-green-deep">Électricité</h3>
            <p className="mt-3 leading-7">Les panneaux solaires sont prévus sur le bâtiment agricole, avec batteries et onduleur dans un local technique fermé, hors accès visiteurs.</p>
          </article>
          <article className="rounded-[1.5rem] bg-cream-soft p-6">
            <h3 className="font-display text-2xl text-green-deep">Animaux</h3>
            <p className="mt-3 leading-7">Les visiteurs peuvent observer les volailles, mais l’accès aux paddocks, abris, poulaillers et zones de nourrissage reste interdit au public.</p>
          </article>
        </section>

        <section className="rounded-[2rem] border border-green-deep/10 p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Message pour les communes</h2>
          <p className="mt-4 leading-8">
            Le site est conçu pour être clair : ouverture prévue le 05/2029, terrain agricole plat recherché, accès voiture et eau indispensables, parking, toilettes publiques, aire de pique-nique barbecue et aire de jeux en zone commune, zone agricole protégée, distributeur H24 isolé et montée progressive selon les autorisations et la demande.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
