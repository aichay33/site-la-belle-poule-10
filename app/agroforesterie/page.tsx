import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Agroforesterie — La Belle Poule",
  description: "Les arbres, haies, fruitiers et plantes utiles feront partie des paddocks de La Belle Poule : ombre, biodiversité, fruits tombés, insectes et bien-être animal.",
  path: "/agroforesterie",
  keywords: ["agroforesterie volailles", "poules en verger", "haies ferme avicole", "fruitiers paddocks"],
});

export default function AgroforesteriePage() {
  return (
    <PageShell eyebrow="Agroforesterie" title="Des paddocks arborés pour les volailles" intro="La Belle Poule met en avant le plein air et l’agroforesterie : les arbres et végétaux servent d’abord au bien-être, à l’ombre et à l’alimentation partielle des volailles.">
      <div className="grid gap-6 text-text-mid">
        <h2 className="font-display text-3xl text-green-deep">Le rôle des arbres</h2>
        <p className="leading-8">Les arbres apporteront de l’ombre, une protection contre le vent, des fruits tombés, des insectes, une meilleure intégration paysagère et un sol plus vivant. Les fruitiers ne sont pas l’activité principale : ils soutiennent d’abord l’élevage avicole.</p>
        <p className="leading-8">Si la production de fruits dépasse les besoins des volailles, les surplus pourront être vendus, mais le cœur du projet reste bien l’élevage de poules pondeuses et de volailles de chair.</p>
        <p className="leading-8">La ferme est en préparation et ne sera pas ouverte avant le 01/05/2029.</p>
      </div>
    </PageShell>
  );
}
