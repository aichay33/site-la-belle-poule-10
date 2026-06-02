import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-green-deep/10 bg-cream-soft">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[1fr_1.1fr_0.9fr] md:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/images/logo-poule.png" alt="Logo La Belle Poule" width={92} height={92} className="h-16 w-16 object-contain" />
            <span className="font-display text-2xl text-green-deep">La Belle Poule</span>
          </Link>
          <p className="mt-4 text-sm leading-7 text-text-mid">Projet de future exploitation avicole plein air agroforestière en Gironde. La ferme n’est pas encore ouverte : ouverture prévue le 05/2029 après préparation du terrain, des accès, de l’eau, des paddocks, du parking, des toilettes publiques, de l’aire de pique-nique barbecue, de l’aire de jeux et de la sécurité.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-deep">Gironde</span>
            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-deep">Terrain agricole plat 4 ha</span>
            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-deep">Ouverture 05/2029</span>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-[0_15px_40px_rgba(31,36,24,0.05)] md:text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">Recherche de terrain</p>
          <p className="mt-3 font-display text-3xl leading-tight text-green-deep">Vous connaissez un terrain agricole plat avec accès voiture et eau ?</p>
          <p className="mt-3 text-sm leading-7 text-text-mid">La Belle Poule recherche un terrain agricole uniquement en Gironde, idéalement 4 hectares, pour préparer une ferme avicole avant ouverture : œufs, poules pondeuses, paddocks arborés et vente directe.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/recherche-terrain" className="rounded-full bg-green-deep px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-terracotta">Voir les critères</Link>
            <Link href="/contact" className="rounded-full border border-green-deep/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-green-deep transition hover:border-terracotta hover:text-terracotta">Contacter Aïcha</Link>
          </div>
          <div className="mt-5 grid gap-2 text-sm text-text-mid">
            <span className="rounded-2xl bg-cream-soft px-4 py-3"><strong className="text-green-deep">Univers illustré :</strong> future BD La Belle Poule en préparation.</span>
            <a href="https://www.linkedin.com/in/a%C3%AFcha-yassine-880678407" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-cream-soft px-4 py-3 font-bold text-green-deep transition hover:text-terracotta"><strong>LinkedIn :</strong> profil Aïcha Yassine</a>
          </div>
        </div>

        <div className="md:text-right">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">Navigation</p>
          <div className="mt-4 grid gap-2 text-sm text-text-mid">
            <Link href="/projet" className="hover:text-terracotta">Projet</Link>
            <Link href="/actualites" className="hover:text-terracotta">Actualités</Link>
            <Link href="/recherche-terrain" className="hover:text-terracotta">Recherche terrain</Link>
            <Link href="/systeme-verger" className="hover:text-terracotta">Paddocks & rotation</Link>
            <Link href="/plan-3-ans" className="hover:text-terracotta">Plan de préparation</Link>
            <Link href="/systeme-eau" className="hover:text-terracotta">Système d’eau</Link>
            <Link href="/securite" className="hover:text-terracotta">Sécurité</Link>
            <Link href="/vente-directe" className="hover:text-terracotta">Vente directe</Link>
            <Link href="/dossier-projet" className="hover:text-terracotta">Dossier projet</Link>
            <Link href="/mairies-chambre-agriculture" className="hover:text-terracotta">Mairies & Chambre d’agriculture</Link>
            <Link href="/comment-aider" className="hover:text-terracotta">Comment aider</Link>
            <Link href="/mentions-legales" className="hover:text-terracotta">Mentions légales</Link>
            <a href="mailto:labellepoule33@outlook.fr" className="hover:text-terracotta">labellepoule33@outlook.fr</a>
          </div>
        </div>
      </div>
      <div className="border-t border-green-deep/10 py-5 text-center text-xs text-text-mid">© 2026 La Belle Poule — Projet en préparation, ouverture prévue le 05/2029</div>
    </footer>
  );
}
