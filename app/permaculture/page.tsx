import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Sobriété et bon sens — La Belle Poule",
  description: "La Belle Poule s’inspire d’une logique sobre : observation du terrain, haies, eau, sols couverts, récupération et installation progressive.",
  path: "/permaculture",
  keywords: ["ferme sobre Gironde", "biodiversité ferme", "gestion eau ferme", "installation progressive"],
});

export default function PermaculturePage() {
  return (
    <PageShell eyebrow="Sobriété" title="Construire lentement, proprement et avec bon sens" intro="La Belle Poule est préparée sur 3 ans afin d’éviter l’improvisation : eau, accès, sols, haies, bâtiments et paddocks sont pensés avant l’ouverture.">
      <div className="grid gap-6 text-text-mid">
        <h2 className="font-display text-3xl text-green-deep">Un projet progressif</h2>
        <p className="leading-8">Le projet avance étape par étape : recherche du terrain, validation avec la mairie, construction des infrastructures, puis ouverture avec des ateliers avicoles dimensionnés selon les capacités réelles.</p>
        <p className="leading-8">Cette préparation permet de limiter les risques, de protéger le terrain et de présenter aux partenaires un projet sérieux, lisible et optimisé.</p>
      </div>
    </PageShell>
  );
}
