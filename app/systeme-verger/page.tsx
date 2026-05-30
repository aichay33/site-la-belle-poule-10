import Image from "next/image";
import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Paddocks et poulaillers — La Belle Poule",
  description: "Organisation des paddocks de La Belle Poule : poules pondeuses, poulaillers mobiles, rotation des parcours et repos du sol.",
  path: "/systeme-verger",
  keywords: ["paddocks poules", "poules pondeuses plein air", "poulailler mobile", "ferme avicole Gironde"],
});

const paddocks = [
  ["Paddock 1", "Démarrage", "Installation progressive des poules pondeuses au lancement."],
  ["Paddock 2", "Rotation", "Repos du sol, reprise de l’herbe et déplacement des poulaillers."],
  ["Paddock 3", "Évolution", "Extension possible si les ventes et l’organisation suivent."],
  ["Paddock 4", "Sécurité", "Zone de repos, adaptation saisonnière ou extension future."],
];

export default function SystemeVergerPage() {
  return (
    <PageShell
      eyebrow="Paddocks"
      title="Des poules pondeuses en parcours organisés"
      intro="La Belle Poule prévoit des paddocks arborés, des poulaillers mobiles et une rotation progressive pour préserver l’herbe, le sol et le bien-être des poules."
    >
      <div className="grid gap-10 text-text-mid">
        <section className="overflow-hidden rounded-[2rem] border border-green-deep/10 bg-white shadow-[0_18px_60px_rgba(31,36,24,0.08)]">
          <Image src="/images/poulailler-mobile-la-belle-poule.png" alt="Poulailler mobile de 250 poules avec rotation sur paddocks dans le projet La Belle Poule" width={1600} height={1000} className="h-auto w-full" />
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Le principe retenu</h2>
          <p className="mt-4 leading-8">
            Le projet démarre avec 240 poules pondeuses. Les poulaillers mobiles permettent de déplacer les animaux, de laisser les paddocks se régénérer et de garder un système simple à gérer.
          </p>
          <p className="mt-4 leading-8">
            L’objectif long terme est de pouvoir aller jusqu’à 1 000 poules pondeuses, mais seulement si la demande locale, les installations, les autorisations et la charge de travail le permettent.
          </p>
        </section>

        <section className="rounded-[2rem] bg-cream-soft p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Répartition indicative des 4 paddocks</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {paddocks.map(([name, use, text]) => (
              <div key={name} className="rounded-2xl bg-white px-5 py-4 leading-7 shadow-[0_10px_30px_rgba(31,36,24,0.04)]">
                <p className="font-display text-xl text-green-deep">{name}</p>
                <p className="font-bold text-terracotta">{use}</p>
                <p className="mt-1">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
