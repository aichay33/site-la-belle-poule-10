import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Vente directe — La Belle Poule",
  description: "La Belle Poule prévoit la vente directe d’œufs et de volailles de chair après 3 ans de préparation, avec ouverture prévue le 01/05/2029, parties communes 10h-19h et distributeurs H24.",
  path: "/vente-directe",
  keywords: ["vente directe œufs", "volailles de chair Gironde", "œufs plein air vente directe", "ferme avicole vente directe"],
});

export default function VenteDirectePage() {
  return (
    <PageShell
      eyebrow="Vente directe"
      title="Œufs et volailles vendus directement à la ferme"
      intro="La vente directe est prévue seulement après les 3 années de préparation, avec ouverture visée le 01/05/2029. Le site sert aujourd’hui à présenter le projet, rechercher un terrain et préparer la future clientèle."
    >
      <div className="grid gap-10 text-text-mid">
        <section>
          <h2 className="font-display text-3xl text-green-deep">À l’ouverture</h2>
          <p className="mt-4 leading-8">
            La Belle Poule prévoit une ouverture avec 240 poules pondeuses et un premier atelier de volailles de chair basé sur un noyau reproducteur de poules et coqs. Les volailles de chair seront élevées en parcours séparé, avec montée progressive par reproduction naturelle sur la ferme.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Ouverture 01/05/2029", "240 pondeuses", "Chair par reproduction naturelle", "Objectif 1 000 + 1 000"].map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-cream-soft p-5 text-center font-bold text-green-deep">{item}</div>
          ))}
        </section>

        <section className="rounded-[2rem] border border-green-deep/10 p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Parties communes 10h-19h et distributeurs H24</h2>
          <p className="mt-4 leading-8">
            Les parties communes pourront être ouvertes en accès libre de 10h à 19h : parking, point de vente, aire de pique-nique avec espace barbecue encadré, aire de jeux pour enfants, toilettes publiques/sanitaires clients et parcours balisé. Un distributeur automatique d’œufs et de boissons est prévu en accès H24, selon autorisations et organisation du site.
          </p>
        </section>

        <section className="rounded-[2rem] bg-cream-soft p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Ce qui reste protégé</h2>
          <p className="mt-4 leading-8">
            Les paddocks, poulaillers, abris de volailles de chair, bâtiment agricole, réserve d’eau, batteries, stockage aliment et zone privée restent fermés au public. Les visiteurs observent la ferme depuis le parcours prévu, sans entrer dans les espaces de travail agricole.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
