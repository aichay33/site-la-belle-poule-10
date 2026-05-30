import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Plan de préparation sur 3 ans — La Belle Poule",
  description: "Plan de préparation de La Belle Poule : 3 ans avant ouverture le 05/2029 pour préparer le terrain, l’eau, le solaire, les paddocks, les bâtiments, la sécurité et l’atelier œufs.",
  path: "/plan-3-ans",
  keywords: ["plan ferme 3 ans", "préparation exploitation avicole", "La Belle Poule", "ouverture 2029"],
});

const years = [
  {
    title: "Année 1 — Sécuriser le terrain et poser les bases",
    text: "La ferme n’est pas ouverte. Cette première année sert à trouver le terrain agricole plat, valider le cadre avec la mairie et poser les bases du site sans activité commerciale.",
    items: ["Recherche terrain agricole 4 hectares en Gironde", "Accès voiture, eau et terrain plat vérifiés", "Dossier mairie et urbanisme", "Tipi / habitat temporaire si autorisé", "Bâtiment agricole et stockage", "Chemin principal, parking et accès", "Premières clôtures, haies, eau et solaire"],
  },
  {
    title: "Année 2 — Construire les parcours et préparer les ateliers",
    text: "La deuxième année sert à structurer l’outil agricole : paddocks, abris, stockage aliment, point de vente, distributeur et séparation claire entre zone publique et zone agricole.",
    items: ["4 paddocks agroforestiers", "Zone poules pondeuses organisée", "Abris / poulaillers adaptés", "Point de vente, toilettes publiques, aire de pique-nique barbecue, aire de jeux et distributeur œufs/boissons", "Parcours client 10h-19h", "Préparation des fournisseurs de poules pondeuses"],
  },
  {
    title: "Année 3 — Finaliser avant ouverture",
    text: "La troisième année sert à peaufiner les détails avant l’ouverture prévue le 05/2029 : sécurité, eau, signalétique, organisation sanitaire, clients, commandes et partenaires.",
    items: ["Tests techniques sans ouverture commerciale", "Finalisation du système d’eau", "Signalétique et séparation des zones", "Distributeur H24 sécurisé", "Liste de futurs clients", "Lien LinkedIn intégré et futur lien BD à ajouter", "Préparation ouverture avec 240 poules pondeuses"],
  },
];

export default function PlanTroisAnsPage() {
  return (
    <PageShell
      eyebrow="Plan de préparation"
      title="3 ans pour préparer la ferme avant l’ouverture du 05/2029"
      intro="La Belle Poule ne sera pas ouverte avant le 05/2029. Cette période permet de construire une exploitation avicole propre, sécurisée, organisée et prête à fonctionner avant l’arrivée des animaux et des clients."
    >
      <div className="grid gap-10 text-text-mid">
        <section className="rounded-[2rem] bg-green-deep p-7 text-white md:p-9">
          <h2 className="font-display text-3xl">La règle principale</h2>
          <p className="mt-4 leading-8 text-white/85">
            Avant le 05/2029, La Belle Poule est une ferme en préparation. Cette information doit rassurer les mairies : le site n’est pas présenté comme déjà ouvert, et l’activité agricole n’est lancée qu’une fois les installations prêtes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Pourquoi 3 ans de préparation ?</h2>
          <p className="mt-4 leading-8">
            Le projet ne démarre pas dans la précipitation. Les 3 années de préparation servent à éviter une installation improvisée : le terrain est aménagé, l’eau est sécurisée, les paddocks sont prêts, le point de vente est organisé, les zones sont séparées et les démarches administratives sont préparées avant l’ouverture.
          </p>
        </section>

        <section className="grid gap-6">
          {years.map((year) => (
            <article key={year.title} className="rounded-[2rem] border border-green-deep/10 bg-white p-6 shadow-[0_15px_50px_rgba(31,36,24,0.06)]">
              <h3 className="font-display text-3xl text-green-deep">{year.title}</h3>
              <p className="mt-3 leading-8">{year.text}</p>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {year.items.map((item) => (
                  <li key={item} className="rounded-2xl bg-cream-soft px-5 py-4 leading-7"><span className="font-bold text-terracotta">•</span> {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] bg-cream-soft p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Objectif à l’ouverture</h2>
          <p className="mt-4 leading-8">
            À l’ouverture prévue le 05/2029, La Belle Poule vise 240 poules pondeuses, un atelier œufs uniquement, une vente directe prête, un distributeur d’œufs et de boissons en H24, un parking, des toilettes publiques, une aire de pique-nique barbecue, une aire de jeux pour enfants et un accueil des parties communes de 10h à 19h.
          </p>
          <p className="mt-4 leading-8">
            L’objectif final de 1 000 poules pondeuses à terme est une perspective de maturité, pas un départ immédiat. L’augmentation se fera uniquement si la demande client, l’organisation, les autorisations et la sécurité le permettent.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
