import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/projet", label: "Projet" },
  { href: "/plan-3-ans", label: "Plan 3 ans" },
  { href: "/systeme-verger", label: "Paddocks" },
  { href: "/systeme-eau", label: "Eau" },
  { href: "/securite", label: "Sécurité" },
  { href: "/mairies-chambre-agriculture", label: "Mairies" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-deep/10 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Retour à l'accueil La Belle Poule">
          <Image src="/images/logo-poule.png" alt="Logo La Belle Poule" width={96} height={96} className="h-14 w-14 rounded-full object-contain md:h-16 md:w-16" priority />
          <div className="leading-tight">
            <p className="font-display text-xl font-semibold text-green-deep md:text-2xl">La Belle Poule</p>
            <p className="hidden text-[0.65rem] font-bold uppercase tracking-[0.18em] text-terracotta sm:block">Plein air • Agroforesterie</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-green-deep transition hover:bg-cream-soft hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/recherche-terrain"
            className="rounded-full px-3 py-2 text-sm font-semibold text-green-deep transition hover:bg-cream-soft hover:text-terracotta"
          >
            Terrain
          </Link>
          <Link
            href="/contact"
            className="ml-1 inline-flex items-center rounded-full bg-green-deep px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-terracotta"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
