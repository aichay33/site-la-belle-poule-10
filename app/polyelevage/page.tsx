import Image from "next/image";
import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Poules pondeuses — La Belle Poule",
  description: "La Belle Poule démarre avec un seul atelier : les œufs plein air, 240 poules pondeuses au lancement et une montée progressive vers 1 000 poules à terme.",
  path: "/polyelevage",
  keywords: ["poules pondeuses", "œufs plein air", "aviculture Gironde", "paddocks"],
});

export default function PolyelevagePage() {
  return (
    <PageShell eyebrow="Poules pondeuses" title="Un atelier œufs clair et progressif" intro="La Belle Poule démarre avec un seul atelier : les œufs plein air. Le lancement est prévu avec 240 poules pondeuses, puis une montée progressive si la demande locale suit.">
      <div className="grid gap-8 text-text-mid">
        <section className="overflow-hidden rounded-[2rem] border border-green-deep/10 bg-white shadow-[0_18px_60px_rgba(31,36,24,0.08)]">
          <Image src="/images/poulailler-mobile-la-belle-poule.png" alt="Poulailler mobile de 250 poules avec rotation sur paddocks dans le projet La Belle Poule" width={1600} height={1000} className="h-auto w-full" />
        </section>
        <section className="grid gap-6 md:grid-cols-3">
          {["240 poules au démarrage", "Objectif 1 000 poules à terme", "Rotation sur paddocks"].map((item) => (
            <div key={item} className="rounded-2xl bg-cream-soft px-5 py-4 text-center font-bold text-green-deep">{item}</div>
          ))}
        </section>
        <p className="leading-8">Le projet reste volontairement simple : produire des œufs, organiser les paddocks, sécuriser l’eau, protéger les animaux et augmenter le cheptel uniquement si les ventes, le temps de travail et les autorisations suivent.</p>
      </div>
    </PageShell>
  );
}
