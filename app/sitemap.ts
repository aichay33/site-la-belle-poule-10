import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { absoluteUrl } from "../lib/seo";

const routes = [
  "/",
  "/projet",
  "/recherche-terrain",
  "/plan-3-ans",
  "/systeme-verger",
  "/systeme-eau",
  "/securite",
  "/vente-directe",
  "/agroforesterie",
  "/polyelevage",
  "/permaculture",
  "/polyculture",
  "/dossier-projet",
  "/mairies-chambre-agriculture",
  "/comment-aider",
  "/contact",
  "/mentions-legales",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
