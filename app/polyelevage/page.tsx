import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Ateliers avicoles — La Belle Poule",
  description: "La Belle Poule prévoit deux ateliers avicoles séparés : poules pondeuses et volailles de chair issues d’un noyau reproducteur, en plein air agroforestier.",
  path: "/polyelevage",
  keywords: ["poules pondeuses", "volailles de chair", "élevage plein air", "aviculture Gironde"],
});

export default function PolyelevagePage() {
  return (
    <PageShell eyebrow="Ateliers avicoles" title="Œufs et volailles de chair, en parcours séparés" intro="La Belle Poule est pensée comme une future exploitation avicole : un atelier pondeuses et un atelier volailles de chair, sans mélange libre des lots, avec ouverture prévue le 01/05/2029.">
      <div className="grid gap-6 text-text-mid">
        <h2 className="font-display text-3xl text-green-deep">Deux ateliers, une même logique</h2>
        <p className="leading-8">À l’ouverture, le projet vise 240 poules pondeuses. Pour la viande, le projet prévoit l’achat d’un noyau reproducteur de poules et coqs, puis une reproduction naturelle sur la ferme afin de monter progressivement vers environ 300 volailles de chair/an au départ.</p>
        <p className="leading-8">L’objectif à long terme est une montée progressive vers 1 000 pondeuses et 1 000 volailles de chair par an, uniquement si la demande, les autorisations, la sécurité et l’organisation suivent.</p>
        <p className="leading-8">Les deux ateliers seront organisés dans des paddocks distincts, avec des arbres, des haies, des fruitiers utiles aux volailles, de l’eau distribuée aux abreuvoirs et une séparation claire entre zone agricole et zone publique.</p>
        <p className="leading-8">La ferme n’est pas encore ouverte : les 3 premières années servent à préparer l’outil agricole avant le lancement commercial du 01/05/2029.</p>
      </div>
    </PageShell>
  );
}
