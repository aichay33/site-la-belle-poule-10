import Link from "next/link";
import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Mairies et Chambre d’agriculture — La Belle Poule",
  description: "Présentation optimisée de La Belle Poule pour les mairies, propriétaires et la Chambre d’agriculture de Gironde : projet avicole en préparation avant ouverture prévue le 05/2029.",
  path: "/mairies-chambre-agriculture",
  keywords: ["projet agricole mairie", "Chambre agriculture Gironde", "installation avicole", "ferme plein air agroforesterie"],
});

const guarantees = [
  "La ferme n’est pas ouverte aujourd’hui : ouverture prévue le 05/2029.",
  "Recherche d’un terrain agricole uniquement, plat, avec accès voiture et eau, environ 4 hectares en Gironde.",
  "Préparation progressive des accès, de l’eau, des clôtures, des paddocks, de la sécurité et des bâtiments avant l’arrivée des animaux.",
  "Un seul atelier agricole au démarrage : les œufs plein air.",
  "Poules pondeuses : achat d’une montée progressive du cheptel, puis reproduction naturelle sur la ferme.",
  "Accueil public prévu uniquement dans les parties communes, de 10h à 19h : parking, toilettes publiques, aire de pique-nique barbecue, aire de jeux et parcours balisé ; zone agricole fermée au public.",
  "Distributeur d’œufs et boissons prévu en H24, sur une zone séparée et selon autorisations.",
  "Projet documenté : plan 3 ans, système d’eau, gestion des paddocks, sécurité, vente directe et dossier de présentation.",
];

const benefits = [
  {
    title: "Pour la commune",
    items: ["Une activité agricole locale", "Une vente directe alimentaire", "Un projet rural visible et positif", "Une installation progressive", "Un terrain agricole entretenu"],
  },
  {
    title: "Pour la Chambre d’agriculture",
    items: ["Un projet avicole spécialisé", "Une montée en charge progressive", "Un atelier identifiés", "Une logique plein air agroforestière", "Un besoin d’accompagnement structuré"],
  },
  {
    title: "Pour les habitants",
    items: ["Des œufs locaux", "Des œufs locaux en vente directe", "Un lieu propre et encadré", "Un parking, des toilettes publiques, une aire de pique-nique barbecue, une aire de jeux et un parcours d’observation", "Un projet porté par une personne identifiée"],
  },
];

export default function MairiesChambrePage() {
  return (
    <PageShell
      eyebrow="Mairies & Chambre d’agriculture"
      title="Un projet avicole préparé, sécurisé et optimisé"
      intro="Cette page présente La Belle Poule pour les communes, propriétaires, partenaires et structures agricoles : une future exploitation avicole plein air agroforestière, préparée pendant 3 ans avant l’ouverture prévue le 05/2029."
    >
      <div className="grid gap-10 text-text-mid">
        <section className="rounded-[2rem] bg-green-deep p-7 text-white md:p-9">
          <h2 className="font-display text-3xl">Message central</h2>
          <p className="mt-4 leading-8 text-white/85">
            La Belle Poule n’est pas une ferme ouverte aujourd’hui. C’est un projet en préparation, pensé pour devenir une exploitation avicole spécialisée, avec œufs, poules pondeuses, paddocks plein air agroforestiers, vente directe et accueil encadré des parties communes.
          </p>
        </section>

        <section className="rounded-[2rem] border border-green-deep/10 bg-white p-7 md:p-9 shadow-[0_12px_40px_rgba(31,36,24,0.05)]">
          <h2 className="font-display text-3xl text-green-deep">Dossier projet à télécharger</h2>
          <p className="mt-4 leading-8">
            Pour faciliter l’étude du projet par une mairie, un propriétaire, la Chambre d’agriculture ou une structure d’accompagnement, un PDF de synthèse est disponible. Il présente la ferme comme un projet en préparation, avec une ouverture agricole seulement lorsque les installations seront prêtes.
          </p>
          <a href="/dossier-projet-la-belle-poule.pdf" className="mt-6 inline-flex rounded-full bg-green-deep px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-terracotta">
            Télécharger le PDF du projet
          </a>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Garanties présentées</h2>
          <ul className="mt-5 grid gap-3">
            {guarantees.map((item) => (
              <li key={item} className="rounded-2xl bg-cream-soft px-5 py-4 leading-7"><span className="font-bold text-green-deep">✓</span> {item}</li>
            ))}
          </ul>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {benefits.map((block) => (
            <article key={block.title} className="rounded-[1.5rem] border border-green-deep/10 p-6 shadow-[0_12px_40px_rgba(31,36,24,0.05)]">
              <h3 className="font-display text-2xl text-green-deep">{block.title}</h3>
              <ul className="mt-4 space-y-2 leading-7">
                {block.items.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] bg-cream-soft p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Chiffres de travail</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Ouverture</p><p className="mt-2 text-xl font-bold text-green-deep">05/2029</p></div>
            <div className="rounded-2xl bg-white p-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Pondeuses</p><p className="mt-2 text-xl font-bold text-green-deep">240</p></div>
            <div className="rounded-2xl bg-white p-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Objectif</p><p className="mt-2 text-xl font-bold text-green-deep">1 000 à terme</p></div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-4">
          <Link href="/plan-3-ans" className="rounded-2xl bg-white p-5 leading-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]"><strong className="text-green-deep">Plan 3 ans</strong><br />Voir la préparation avant ouverture.</Link>
          <Link href="/systeme-verger" className="rounded-2xl bg-white p-5 leading-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]"><strong className="text-green-deep">Paddocks</strong><br />Voir l’organisation des parcours.</Link>
          <Link href="/systeme-eau" className="rounded-2xl bg-white p-5 leading-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]"><strong className="text-green-deep">Système d’eau</strong><br />Voir la gestion de l’eau de pluie.</Link>
          <Link href="/securite" className="rounded-2xl bg-white p-5 leading-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]"><strong className="text-green-deep">Sécurité</strong><br />Voir les zones et accès.</Link>
        </section>
      </div>
    </PageShell>
  );
}
