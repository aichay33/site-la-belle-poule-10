import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Actualités du projet agricole en Gironde — La Belle Poule",
  description:
    "Suivre les actualités de La Belle Poule : projet de ferme avicole plein air en Gironde, recherche de terrain, rendez-vous agricoles et préparation de l'atelier œufs.",
  path: "/actualites",
  keywords: [
    "actualités La Belle Poule",
    "projet agricole Gironde",
    "ferme avicole Gironde",
    "œufs plein air Gironde",
    "recherche terrain agricole Gironde",
  ],
});

const updates = [
  {
    date: "2 juin 2026",
    title: "Deuxième rendez-vous avec la Chambre d’agriculture de la Gironde",
    text: "Une nouvelle étape pour présenter le projet, vérifier sa cohérence agricole et avancer sur la recherche de terrain.",
  },
  {
    date: "11 mai 2026",
    title: "Rendez-vous Point Accueil Installation",
    text: "Échange autour du parcours d’installation, des étapes administratives et de la structuration du projet agricole.",
  },
  {
    date: "28 avril 2026",
    title: "Premier échange avec la Chambre d’agriculture de Charente-Maritime",
    text: "Premier rendez-vous agricole pour confronter le projet au terrain et avancer vers un modèle plus réaliste.",
  },
  {
    date: "4 mai 2026",
    title: "Rencontre avec un paysan à La Sauve",
    text: "Temps d’échange concret autour de l’agriculture, du terrain, des contraintes réelles et de la construction progressive du projet.",
  },
  {
    date: "Avril 2026",
    title: "Lancement officiel de la construction du projet",
    text: "Début de la structuration : formation, business plan, premiers échanges agricoles et recherche de solutions foncières.",
  },
];

export default function ActualitesPage() {
  return (
    <PageShell
      eyebrow="Actualités"
      title="Les avancées du projet La Belle Poule"
      intro="Cette page rassemble les principales étapes du projet : rendez-vous agricoles, recherche de terrain, préparation du dossier et construction progressive de la future ferme d’œufs plein air en Gironde."
    >
      <div className="grid gap-10 text-text-mid">
        <section className="rounded-[2rem] bg-cream-soft p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Un projet en construction</h2>
          <p className="mt-4 leading-8">
            La Belle Poule n’est pas encore ouverte. Le projet avance étape par étape : échanges avec les acteurs agricoles, recherche d’un terrain adapté, préparation technique et clarification du modèle autour des œufs plein air.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Journal des avancées</h2>
          <div className="mt-6 grid gap-5">
            {updates.map((item) => (
              <article key={`${item.date}-${item.title}`} className="rounded-[1.75rem] border border-green-deep/10 bg-white p-6 shadow-[0_12px_40px_rgba(31,36,24,0.05)]">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">{item.date}</p>
                <h3 className="mt-3 font-display text-2xl text-green-deep">{item.title}</h3>
                <p className="mt-3 leading-7">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-green-deep/10 p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Objectif actuel</h2>
          <p className="mt-4 leading-8">
            La priorité reste la recherche d’un terrain agricole plat en Gironde, avec accès voiture et eau, pour préparer l’exploitation avant l’ouverture prévue le 05/2029.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
