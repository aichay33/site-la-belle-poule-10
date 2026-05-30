import Image from "next/image";
import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Le projet — La Belle Poule",
  description: "Découvrez La Belle Poule, projet d’atelier œufs plein air en Gironde : 240 poules au démarrage, montée progressive et vente directe.",
  path: "/projet",
  keywords: ["La Belle Poule", "exploitation avicole Gironde", "œufs plein air", "poules pondeuses plein air"],
});

const progress = [
  "La ferme n’est pas ouverte avant le 05/2029 : le site présente un projet en préparation.",
  "Recherche d’un terrain agricole plat d’environ 4 hectares en Gironde, avec accès voiture et eau.",
  "Préparation des bâtiments, paddocks, clôtures, eau, solaire, sécurité et accès avant les animaux.",
  "Ouverture prévue avec 240 poules pondeuses.",
  "Un seul atelier au démarrage : les œufs plein air.",
  "Montée progressive possible vers 1 000 poules pondeuses à terme, uniquement si la demande suit.",
];

export default function ProjetPage() {
  return (
    <PageShell
      eyebrow="Le projet"
      title="La Belle Poule, future ferme d’œufs plein air"
      intro="La Belle Poule est un projet agricole en préparation : un atelier œufs plein air, 240 poules au lancement et une montée progressive si la demande locale suit."
    >
      <div className="grid gap-10 text-text-mid">
        <section className="overflow-hidden rounded-[2rem] border border-green-deep/10 bg-white shadow-[0_18px_60px_rgba(31,36,24,0.08)]">
          <Image
            src="/images/plan-prototype-terrain-la-belle-poule.png"
            alt="Prototype d’organisation du terrain La Belle Poule avec paddocks, chemin clients, bâtiment agricole, point de vente, parking et zones d’accueil"
            width={2000}
            height={1291}
            className="h-auto w-full"
            priority
          />
          <div className="border-t border-green-deep/10 bg-cream-soft px-5 py-4 text-sm leading-6 text-text-mid md:text-base">
            <strong className="text-green-deep">Prototype d’organisation du terrain.</strong> Ce schéma est indicatif et pourra évoluer selon le terrain trouvé, les autorisations, les accès, l’eau et les contraintes techniques.
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <h2 className="font-display text-3xl text-green-deep">Une activité agricole claire</h2>
            <p className="mt-4 leading-8">
              Le projet est volontairement simple : produire des œufs plein air, organiser les paddocks, sécuriser l’eau, protéger les animaux et vendre localement en direct.
            </p>
            <p className="mt-4 leading-8">
              Les 3 premières années servent à préparer le terrain, les autorisations, les clôtures, les bâtiments, le système d’eau, le solaire, le point de vente et la sécurité.
            </p>
          </div>
          <div className="rounded-[2rem] bg-cream-soft p-6">
            <h3 className="font-display text-2xl text-green-deep">Ouverture prévue</h3>
            <p className="mt-4 leading-8">
              L’ouverture est prévue en 05/2029 avec 240 poules pondeuses. L’objectif long terme est de pouvoir aller jusqu’à 1 000 poules si les ventes, l’organisation et les autorisations suivent.
            </p>
          </div>
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
