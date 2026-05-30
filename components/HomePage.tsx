import Image from "next/image";
import Link from "next/link";
import { LeafIcon, LocationIcon, PeopleIcon, SproutIcon } from "./Icons";

const focusCards = [
  {
    href: "/projet",
    title: "Une exploitation avicole en préparation",
    text: "La ferme n’est pas encore ouverte : l’ouverture est prévue le 05/2029, après 3 années de préparation.",
    icon: <LeafIcon className="h-7 w-7" />,
  },
  {
    href: "/recherche-terrain",
    title: "Recherche terrain agricole 4 hectares",
    text: "Terrain agricole uniquement, plat, avec accès voiture et eau, en Gironde, pour créer les parcours plein air.",
    icon: <LocationIcon className="h-7 w-7" />,
  },
  {
    href: "/systeme-verger",
    title: "Paddocks séparés",
    text: "Pondeuses et poules pondeuses sont prévues dans des paddocks distincts, sans mélange libre des lots.",
    icon: <SproutIcon className="h-7 w-7" />,
  },
  {
    href: "/plan-3-ans",
    title: "Plan de préparation sur 3 ans",
    text: "Année 1 : terrain et bases. Année 2 : bâtiments et parcours. Année 3 : sécurité, clients et ouverture.",
    icon: <LeafIcon className="h-7 w-7" />,
  },
  {
    href: "/systeme-eau",
    title: "Eau et autonomie",
    text: "Pluie, stockage, filtration, distribution vers paddocks, accueil, habitat et abreuvoirs.",
    icon: <SproutIcon className="h-7 w-7" />,
  },
  {
    href: "/securite",
    title: "Sécurité et zones séparées",
    text: "Parties communes accessibles, parking, toilettes publiques, aire de pique-nique barbecue, aire de jeux, zones agricoles fermées et signalétique claire.",
    icon: <PeopleIcon className="h-7 w-7" />,
  },
];

const highlights = ["Ouverture 05/2029", "Préparation 3 ans", "Terrain agricole plat 4 ha", "Plein air • Agroforesterie"];

export default function HomePage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white">
        <h1 className="sr-only">La Belle Poule — Future exploitation avicole plein air agroforestière en préparation en Gironde</h1>
        <div className="mx-auto max-w-[1800px]">
          <Image
            src="/images/recherche-terrain-cover.png"
            alt="La Belle Poule, future exploitation avicole plein air agroforestière en préparation, recherche de terrain en Gironde"
            width={1672}
            height={941}
            priority
            className="block h-auto w-full"
          />
        </div>
      </section>

      <section className="relative px-5 py-8 md:px-8 md:py-10">
        <div className="mx-auto -mt-6 max-w-6xl rounded-[2rem] border border-green-deep/10 bg-white p-5 shadow-[0_24px_70px_rgba(31,36,24,0.08)] md:-mt-8 md:p-7">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {highlights.map((item) => (
              <span key={item} className="rounded-full bg-cream-soft px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-green-deep">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">Ferme en préparation — ouverture prévue le 05/2029</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-green-deep md:text-6xl">Une future ferme avicole plein air agroforestière</h2>
            <p className="mt-6 text-lg leading-8 text-text-mid">
              La Belle Poule est un projet d’exploitation avicole en Gironde, spécialisé dans un atelier principal : les œufs de poules pondeuses, élevés en plein air dans des parcours arborés.
            </p>
            <p className="mt-5 text-base leading-8 text-text-mid">
              La ferme n’est pas ouverte aujourd’hui. L’ouverture est prévue le 05/2029. Les 3 premières années servent à préparer le terrain, les bâtiments, l’eau, les paddocks, la sécurité, la vente directe et les autorisations avant toute activité commerciale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/recherche-terrain" className="inline-flex justify-center rounded-full bg-green-deep px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-terracotta">
                Proposer un terrain adapté
              </Link>
              <Link href="/projet" className="inline-flex justify-center rounded-full border border-green-deep/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-green-deep transition hover:border-terracotta hover:text-terracotta">
                Découvrir le projet
              </Link>
              <a href="/dossier-projet-la-belle-poule.pdf" className="inline-flex justify-center rounded-full border border-green-deep/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-green-deep transition hover:border-terracotta hover:text-terracotta">
                Télécharger le dossier PDF
              </a>
            </div>
          </div>
          <div className="grid gap-4 rounded-[2rem] bg-[linear-gradient(135deg,#fffaf2_0%,#f8f0e2_100%)] p-6 shadow-[0_22px_80px_rgba(31,36,24,0.08)] md:p-8">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-[0_10px_40px_rgba(31,36,24,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">L’essentiel</p>
              <ul className="mt-4 space-y-3 leading-7 text-text-mid">
                <li><strong className="text-green-deep">Ouverture prévue le 05/2029</strong> : le site est d’abord préparé proprement et sérieusement.</li>
                <li><strong className="text-green-deep">240 poules pondeuses à l’ouverture</strong>, puis augmentation progressive selon la demande.</li>
                <li><strong className="text-green-deep">Poules pondeuses</strong> : démarrage avec un montée progressive du cheptel, puis reproduction naturelle sur la ferme.</li>
                <li><strong className="text-green-deep">Objectif long terme</strong> : jusqu’à 1 000 poules pondeuses à terme si les ventes, l’organisation et les autorisations suivent.</li>
                <li><strong className="text-green-deep">Parties communes prévues</strong> : parking, toilettes publiques, aire de pique-nique barbecue, aire de jeux pour enfants et parcours balisé.</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-white p-5 text-center shadow-[0_10px_40px_rgba(31,36,24,0.05)]">
                <p className="font-display text-4xl text-green-deep">2029</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-text-mid">Ouverture visée</p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-5 text-center shadow-[0_10px_40px_rgba(31,36,24,0.05)]">
                <p className="font-display text-4xl text-green-deep">240</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-text-mid">Pondeuses ouverture</p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-5 text-center shadow-[0_10px_40px_rgba(31,36,24,0.05)]">
                <p className="font-display text-4xl text-green-deep">4 ha</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-text-mid">Terrain agricole plat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-green-deep p-7 text-white shadow-[0_25px_80px_rgba(24,58,34,0.18)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">Pour les mairies et la Chambre d’agriculture</p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Un projet agricole préparé, sécurisé et lisible</h2>
              <p className="mt-5 leading-8 text-white/80">
                La Belle Poule ne sera pas ouverte avant le 05/2029. Cette période sert à sécuriser le terrain, organiser les paddocks, créer le système d’eau, préparer les installations, séparer les zones publiques et agricoles et construire une exploitation lisible avant l’arrivée des animaux.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Projet avicole professionnel, pas une ferme de loisirs",
                "Terrain agricole uniquement, plat, avec accès voiture et eau",
                "Œufs plein air en ateliers séparés",
                "Paddocks distincts, pas de mélange libre des lots",
                "Parties communes 10h-19h avec parking, toilettes publiques, pique-nique barbecue et aire de jeux",
                "Distributeur œufs/boissons H24 prévu sur zone sécurisée",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 px-5 py-4 text-sm font-semibold leading-6 text-white/90">✓ {item}</div>
              ))}
            </div>
          </div>
          <Link href="/mairies-chambre-agriculture" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-green-deep transition hover:bg-cream-soft">
            Voir la page du projet
          </Link>
        </div>
      </section>

      <section className="px-5 pb-16 pt-6 md:px-8 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">Les repères du projet</p>
            <h2 className="mt-3 font-display text-4xl text-green-deep md:text-5xl">Les pages essentielles du projet</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {focusCards.map((card) => (
              <Link key={card.title} href={card.href} className="group rounded-[2rem] border border-green-deep/10 bg-white p-6 shadow-[0_18px_60px_rgba(31,36,24,0.06)] transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-[0_25px_80px_rgba(31,36,24,0.09)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream-soft text-green-deep ring-1 ring-green-deep/10 transition group-hover:bg-terracotta group-hover:text-white">
                  {card.icon}
                </span>
                <h3 className="mt-6 font-display text-2xl text-green-deep">{card.title}</h3>
                <p className="mt-3 min-h-[5rem] text-[0.98rem] leading-7 text-text-mid">{card.text}</p>
                <span className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.18em] text-terracotta">Découvrir</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-green-deep/10 bg-cream-soft shadow-[0_22px_80px_rgba(31,36,24,0.08)]">
            <Image src="/images/portrait-aicha.png" alt="Portrait d’Aïcha Yassine, porteuse du projet La Belle Poule" width={820} height={1100} className="h-full w-full object-cover" />
          </div>
          <div className="rounded-[2rem] border border-green-deep/10 bg-white p-7 shadow-[0_18px_60px_rgba(31,36,24,0.06)] md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">Porteuse du projet</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-green-deep md:text-5xl">Une vision portée par Aïcha</h2>
            <p className="mt-6 text-xl leading-9 text-text-dark">
              “Moi aussi, j’ai un rêve : devenir éleveuse de volailles avec La Belle Poule.”
            </p>
            <p className="mt-6 leading-8 text-text-mid">
              Je prépare La Belle Poule avec sérieux avant toute ouverture. Le site sert aujourd’hui à présenter une future exploitation avicole plein air agroforestière, à rechercher un terrain agricole adapté et à construire une communauté locale autour du projet.
            </p>
            <div className="mt-8 grid gap-3 text-sm font-bold uppercase tracking-[0.16em] text-green-deep sm:grid-cols-2">
              <span className="rounded-full bg-cream-soft px-5 py-3">Poules pondeuses</span>
              <span className="rounded-full bg-cream-soft px-5 py-3">Poules pondeuses</span>
              <span className="rounded-full bg-cream-soft px-5 py-3">Plein air</span>
              <span className="rounded-full bg-cream-soft px-5 py-3">Agroforesterie</span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <span className="rounded-2xl border border-green-deep/10 px-5 py-4 text-sm text-text-mid"><strong className="text-green-deep">Univers illustré :</strong> la future BD La Belle Poule est en préparation.</span>
              <a href="https://www.linkedin.com/in/a%C3%AFcha-yassine-880678407" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-green-deep/10 px-5 py-4 text-sm font-bold text-green-deep transition hover:border-terracotta hover:text-terracotta"><strong>LinkedIn :</strong> www.linkedin.com/in/aïcha-yassine-880678407</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
