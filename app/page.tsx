import { buildPageMetadata } from "../lib/seo";
import HomePage from "../components/HomePage";

export const metadata = buildPageMetadata({
  title: "La Belle Poule | Exploitation avicole plein air agroforestière en préparation",
  description:
    "La Belle Poule est un projet de future exploitation avicole en Gironde : ouverture prévue le 01/05/2029, terrain agricole plat recherché, 240 poules pondeuses, volailles de chair par reproduction naturelle, paddocks plein air agroforestiers et vente directe.",
  path: "/",
  keywords: [
    "volailles plein air Gironde",
    "exploitation avicole agroforestière",
    "poules pondeuses plein air",
    "La Belle Poule",
  ],
});

export default function Page() {
  return <HomePage />;
}
