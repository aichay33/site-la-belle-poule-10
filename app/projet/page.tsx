import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Le projet — La Belle Poule",
  description: "Découvrez La Belle Poule, projet d’exploitation avicole plein air agroforestière en Gironde : ouverture prévue le 01/05/2029, œufs, volailles de chair et vente directe.",
  path: "/projet",
  keywords: ["La Belle Poule", "exploitation avicole Gironde", "œufs plein air", "volailles de chair plein air"],
});

const progress = [
  "La ferme n’est pas ouverte avant le 01/05/2029 : le site présente un projet en préparation.",
  "Recherche d’un terrain agricole uniquement, plat, avec accès voiture et eau, d’environ 4 hectares en Gironde.",
  "Préparation des bâtiments, paddocks, clôtures, eau, solaire, sécurité et accès avant les animaux.",
  "Ouverture prévue avec 240 poules pondeuses.",
  "Atelier volailles de chair : achat d’un noyau reproducteur de poules et coqs puis reproduction naturelle sur la ferme.",
  "Montée progressive possible vers 1 000 pondeuses et 1 000 volailles de chair par an selon la demande.",
  "Les arbres fruitiers servent d’abord au confort, à l’ombre et à l’alimentation partielle des volailles ; les surplus pourront être vendus si disponibles.",
];

export default function ProjetPage() {
  return (
    <PageShell
      eyebrow="Le projet"
      title="La Belle Poule, future exploitation avicole plein air agroforestière"
      intro="La Belle Poule est un projet agricole en préparation : une future exploitation spécialisée en volailles, avec un atelier œufs et un atelier volailles de chair, en parcours plein air agroforestiers."
    >
      <div className="grid gap-10 text-text-mid">
        <section className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <h2 className="font-display text-3xl text-green-deep">Une activité agricole claire</h2>
            <p className="mt-4 leading-8">
              Le projet est recentré sur l’aviculture : produire des œufs et des volailles de chair en plein air, avec des paddocks arborés, des haies, des fruitiers utiles aux animaux, une gestion de l’eau et une vente directe locale.
            </p>
            <p className="mt-4 leading-8">
              La ferme n’est pas ouverte aujourd’hui. Les 3 premières années sont des années de préparation : terrain, autorisations, clôtures, bâtiments, eau, solaire, point de vente, parcours clients, sécurité et organisation sanitaire.
            </p>
          </div>
          <div className="rounded-[2rem] bg-cream-soft p-6">
            <h3 className="font-display text-2xl text-green-deep">Ouverture prévue</h3>
            <p className="mt-4 leading-8">
              L’ouverture est prévue le 01/05/2029. Le projet vise 240 poules pondeuses et un atelier volailles de chair basé sur un noyau reproducteur. L’augmentation se fera uniquement si les ventes, le temps de travail, les autorisations et l’organisation suivent.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Deux ateliers séparés</h2>
          <p className="mt-4 leading-8">
            Les pondeuses et les volailles de chair ne seront pas mélangées librement. Le principe prévu est simple : des paddocks distincts, par exemple les pondeuses dans le paddock 1 et les volailles de chair dans le paddock 3 au démarrage, avec une rotation organisée ensuite selon l’état du sol et les saisons.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Aïcha, porteuse du projet</h2>
          <p className="mt-4 leading-8">
            Je m’appelle Aïcha Yassine. Je prépare La Belle Poule avec la volonté de devenir agricultrice, éleveuse de volailles, et de construire un projet sérieux, local, lisible et rassurant pour les communes, les partenaires agricoles et les futurs clients.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">État d’avancement</h2>
          <ul className="mt-5 grid gap-3">
            {progress.map((item) => (
              <li key={item} className="rounded-2xl bg-cream-soft px-5 py-4 leading-7"><span className="font-bold text-green-deep">✓</span> {item}</li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
