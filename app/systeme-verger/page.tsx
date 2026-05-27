import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Paddocks et parcours — La Belle Poule",
  description: "Organisation des paddocks La Belle Poule : pondeuses et volailles de chair séparées, parcours plein air agroforestiers, fruitiers nourriciers et repos du sol.",
  path: "/systeme-verger",
  keywords: ["paddocks volailles", "poules plein air agroforesterie", "volailles de chair parcours", "ferme avicole"],
});

const rotation = [
  ["Pondeuses", "Les poules pondeuses sont prévues dans un paddock dédié au démarrage, avec rotation et repos du sol selon l’état de la végétation."],
  ["Volailles de chair", "Les volailles de chair sont prévues dans un paddock complet séparé. Le démarrage se fait avec un noyau reproducteur de poules et coqs, puis reproduction naturelle sur la ferme."],
  ["Repos du sol", "Les paddocks non utilisés se régénèrent : herbe, haies, fruitiers, insectes, couverture végétale et décomposition des fientes."],
  ["Évolution", "Le système démarre avec 240 pondeuses et un atelier chair reproducteur, puis augmente seulement si les ventes et l’organisation suivent."],
];

const paddocks = [
  ["Paddock 1", "Pondeuses à l’ouverture", "Parcours principal des 240 poules pondeuses au démarrage."],
  ["Paddock 2", "Repos / rotation", "Zone de repos, de reprise végétale ou de rotation future."],
  ["Paddock 3", "Volailles de chair", "Noyau reproducteur et lots chair en parcours distinct des pondeuses."],
  ["Paddock 4", "Repos / adaptation", "Zone de repos, sécurité, rotation saisonnière ou extension future."],
];

export default function SystemeVergerPage() {
  return (
    <PageShell
      eyebrow="Paddocks agroforestiers"
      title="4 paddocks, deux ateliers avicoles et des lots séparés"
      intro="Le projet prévoit des parcours plein air arborés : les pondeuses et les volailles de chair utilisent des paddocks distincts, sans mélange libre, avec des arbres utiles pour l’ombre, la biodiversité et l’alimentation partielle des volailles."
    >
      <div className="grid gap-10 text-text-mid">
        <section>
          <h2 className="font-display text-3xl text-green-deep">Le principe retenu</h2>
          <p className="mt-4 leading-8">
            Le système ne repose pas sur des sous-zones compliquées. À l’ouverture prévue le 01/05/2029, les pondeuses peuvent être installées dans le paddock 1, et les volailles de chair dans le paddock 3. Les autres paddocks servent au repos, à la rotation, à la régénération de la végétation ou à l’augmentation progressive de l’activité.
          </p>
          <p className="mt-4 leading-8">
            Les fruitiers, haies, arbustes, bandes mellifères et végétaux autonomes sont intégrés aux parcours pour améliorer le bien-être animal. Ils servent surtout à nourrir partiellement les volailles, créer de l’ombre, attirer les insectes et protéger le sol. Les surplus de fruits pourront être vendus si la production le permet.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {rotation.map(([title, text]) => (
            <article key={title} className="rounded-[1.5rem] border border-green-deep/10 bg-white p-6 shadow-[0_12px_40px_rgba(31,36,24,0.05)]">
              <h3 className="font-display text-2xl text-green-deep">{title}</h3>
              <p className="mt-3 leading-7">{text}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] bg-cream-soft p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Répartition indicative des 4 paddocks</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {paddocks.map(([name, use, text]) => (
              <div key={name} className="rounded-2xl bg-white px-5 py-4 leading-7 shadow-[0_10px_30px_rgba(31,36,24,0.04)]">
                <strong className="text-green-deep">{name}</strong> — {use}. <span className="text-text-mid">{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Montée progressive</h2>
          <p className="mt-4 leading-8">
            L’objectif long terme est de pouvoir aller jusqu’à 1 000 poules pondeuses et 1 000 volailles de chair par an, mais seulement si la demande, les installations, la réglementation et la charge de travail le permettent. Le site présente donc un projet sérieux, progressif et préparé avant ouverture.
          </p>
        </section>

        <section className="rounded-[2rem] border border-green-deep/10 p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Accès public sécurisé</h2>
          <p className="mt-4 leading-8">
            Les parties communes seront prévues en accès libre de 10h à 19h, mais les paddocks restent des zones agricoles. Les visiteurs pourront observer les animaux depuis un parcours balisé, sans entrer dans les zones d’élevage, sans nourrir les animaux et sans ouvrir les portillons.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
