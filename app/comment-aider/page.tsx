import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Comment aider le projet — La Belle Poule",
  description: "Aider La Belle Poule : proposer un terrain agricole plat en Gironde, transmettre une mise en relation ou conseiller le projet.",
  path: "/comment-aider",
  keywords: ["aider projet agricole", "terrain agricole Gironde", "mise en relation agricole", "exploitation avicole"],
});

const needs = [
  "Un terrain agricole uniquement en Gironde, idéalement 4 hectares, plat, avec accès voiture et eau.",
  "Une mise en relation avec un propriétaire, une commune, un agriculteur ou un acteur local.",
  "Des conseils agricoles, fonciers, techniques, urbanisme, sécurité, eau ou administratifs.",
  "Des contacts pour l’eau, les clôtures, les paddocks, le solaire, le noyau reproducteur chair, l’abattoir partenaire ou la vente directe.",
  "Du matériel de récupération utile : bois, tôles, cuves IBC, grillage, roues, portails ou mobilier extérieur.",
];

export default function CommentAiderPage() {
  return (
    <PageShell
      eyebrow="Comment aider"
      title="Chaque piste sérieuse peut aider La Belle Poule"
      intro="Le projet est en préparation et l’ouverture est prévue le 01/05/2029. L’aide la plus importante aujourd’hui est la recherche d’un terrain agricole plat adapté en Gironde, mais les mises en relation, les conseils et le matériel peuvent aussi faire avancer l’installation."
    >
      <div className="grid gap-10 text-text-mid">
        <section>
          <h2 className="font-display text-3xl text-green-deep">Les besoins actuels</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {needs.map((need) => (
              <li key={need} className="rounded-2xl bg-cream-soft px-5 py-4 leading-7"><span className="font-bold text-terracotta">•</span> {need}</li>
            ))}
          </ul>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-[1.5rem] border border-green-deep/10 p-6">
            <h3 className="font-display text-2xl text-green-deep">Vous avez un terrain ?</h3>
            <p className="mt-3 leading-7">La recherche porte sur un terrain agricole uniquement, plat, avec accès voiture et eau, idéalement 4 hectares, pour préparer une exploitation avicole plein air agroforestière avant ouverture.</p>
          </article>
          <article className="rounded-[1.5rem] border border-green-deep/10 p-6">
            <h3 className="font-display text-2xl text-green-deep">Vous connaissez quelqu’un ?</h3>
            <p className="mt-3 leading-7">Une simple mise en relation avec un propriétaire, une mairie, la Chambre d’agriculture ou une personne du monde agricole peut être très utile.</p>
          </article>
          <article className="rounded-[1.5rem] border border-green-deep/10 p-6">
            <h3 className="font-display text-2xl text-green-deep">Vous avez du matériel ?</h3>
            <p className="mt-3 leading-7">Bois, tôles, cuves, grillage, roues, palettes ou mobilier extérieur peuvent aider à construire une ferme simple, propre et sécurisée.</p>
          </article>
        </section>
      </div>
    </PageShell>
  );
}
