import { buildPageMetadata } from "../lib/seo";
import HomePage from "../components/HomePage";

export const metadata = buildPageMetadata({
  title: "La Belle Poule — ferme avicole plein air en Gironde",
  description:
    "La Belle Poule est un projet de ferme avicole plein air en Gironde : atelier œufs, 240 poules pondeuses au démarrage, paddocks arborés, vente directe et recherche de terrain agricole.",
  path: "/",
  keywords: [
    "œufs plein air Gironde",
    "ferme avicole Gironde",
    "exploitation avicole agroforestière",
    "poules pondeuses plein air",
    "La Belle Poule",
  ],
});

export default function Page() {
  return <HomePage />;
}
