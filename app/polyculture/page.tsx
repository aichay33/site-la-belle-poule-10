import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Végétaux utiles — La Belle Poule",
  description: "La Belle Poule intègre arbres, arbustes, haies et plantes utiles dans les paddocks pour améliorer les parcours des poules pondeuses.",
  path: "/polyculture",
  keywords: ["végétaux paddocks poules", "autonomie alimentaire poules", "paddocks fruitiers", "céréales poules"],
});

export default function PolyculturePage() {
  return (
    <PageShell eyebrow="Végétaux utiles" title="Des végétaux utiles dans les paddocks" intro="La Belle Poule ne crée pas une production fruitière principale : les végétaux sont intégrés aux parcours pour soutenir le bien-être des poules pondeuses.">
      <div className="grid gap-6 text-text-mid">
        <h2 className="font-display text-3xl text-green-deep">Une autonomie partielle</h2>
        <p className="leading-8">Les paddocks pourront accueillir des fruitiers, arbustes, mûriers, haies, bandes mellifères, céréales et plantes fourragères. Leur objectif : ombre, insectes, fruits tombés, couverture du sol et complément alimentaire naturel pour les poules pondeuses.</p>
        <p className="leading-8">Les surplus éventuels pourront être vendus, mais le métier principal reste l’aviculture : œufs plein air en plein air agroforestier.</p>
      </div>
    </PageShell>
  );
}
