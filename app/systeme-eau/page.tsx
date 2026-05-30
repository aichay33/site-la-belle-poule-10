import Image from "next/image";
import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Système d’eau — La Belle Poule",
  description: "Système d’eau de La Belle Poule : récupération de pluie, stockage, cuves, distribution gravitaire et gestion sans mare obligatoire.",
  path: "/systeme-eau",
  keywords: ["récupération eau ferme", "eau de pluie volailles", "stockage d’eau", "ferme agroforestière eau"],
});

const blocks = [
  ["Captation", "Les toitures du bâtiment agricole, du point de vente, des sanitaires et des auvents servent à récupérer l’eau de pluie."],
  ["Filtration", "Crépines, filtres feuilles, séparateur de premières eaux et préfiltration protègent les cuves et les abreuvoirs."],
  ["Stockage", "Cuves IBC et citernes sont prévues progressivement pour sécuriser l’eau pendant les périodes sèches."],
  ["Distribution", "Une cuve haute gravitaire alimente les abreuvoirs, le point d’accueil, le lavage mains et l’arrosage ciblé des jeunes plantations."],
  ["Stockage d’eau", "Les cuves, filtres et trop-pleins sont pensés pour sécuriser les usages agricoles et techniques."],
  ["Sans mare obligatoire", "Les trop-pleins sont dirigés vers des noues, haies et zones d’infiltration, sans création de mare si le PLU ne le permet pas."],
];

export default function SystemeEauPage() {
  return (
    <PageShell
      eyebrow="Système d’eau"
      title="Un système d’eau sobre pour préparer l’exploitation"
      intro="Pendant les 3 années de préparation, La Belle Poule prévoit de construire un système d’eau performant avant l’ouverture : récupération de pluie, stockage, distribution et infiltration sans mare obligatoire."
    >
      <div className="grid gap-10 text-text-mid">
        <section className="overflow-hidden rounded-[2rem] border border-green-deep/10 bg-white shadow-[0_18px_60px_rgba(31,36,24,0.08)]">
          <Image src="/images/systeme-eau-la-belle-poule.png" alt="Schéma du système d'eau de La Belle Poule avec récupération d'eau de pluie, filtration, stockage, sécurisation et distribution" width={1600} height={1000} className="h-auto w-full" />
        </section>
        <section>
          <h2 className="font-display text-3xl text-green-deep">Objectif</h2>
          <p className="mt-4 leading-8">
            Le système d’eau doit alimenter les poules, les abreuvoirs des paddocks, les plantations utiles aux parcours, la zone d’accueil, le lavage des mains, les usages techniques et la zone d’habitation. L’eau de pluie, le stockage et la distribution sécurisée sont la base du dispositif.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map(([title, text]) => (
            <article key={title} className="rounded-[1.5rem] border border-green-deep/10 bg-white p-6 shadow-[0_12px_40px_rgba(31,36,24,0.05)]">
              <h3 className="font-display text-2xl text-green-deep">{title}</h3>
              <p className="mt-3 leading-7">{text}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] bg-cream-soft p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Volumes visés</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {["Année 1 : 10 000 à 15 000 L", "Année 2 : 25 000 à 35 000 L", "Année 3 : 40 000 à 60 000 L", "Objectif : 50 000 à 60 000 L minimum"].map((item) => (
              <div key={item} className="rounded-2xl bg-white px-5 py-4 text-center font-bold text-green-deep shadow-[0_10px_30px_rgba(31,36,24,0.04)]">{item}</div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Solaire et bâtiment agricole</h2>
          <p className="mt-4 leading-8">
            Les panneaux solaires sont prévus sur le toit du bâtiment agricole. La base recommandée est de 4 kWc, avec batteries de 10 à 15 kWh, pour alimenter l’éclairage, les portiers, une petite pompe, l’accueil, les outils légers, les distributeurs et la communication.
          </p>
        </section>

        <section className="rounded-[2rem] border border-green-deep/10 p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Point de prudence</h2>
          <p className="mt-4 leading-8">
            L’eau de pluie récupérée est prévue pour les usages agricoles et techniques. Pour boire, cuisiner et garantir l’hygiène, le projet devra prévoir une solution d’eau potable conforme : apport d’eau potable, raccordement, forage autorisé ou traitement validé.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
