import type { Metadata } from "next";

export const siteName = "La Belle Poule";
export const siteUrl = "https://la-belle-poule-virid.vercel.app";
export const siteLocale = "fr_FR";
export const defaultOgImage = `${siteUrl}/images/hero-epure.png`;
export const openingDate = "01/05/2029";
export const siteDescription =
  "La Belle Poule est un projet d'exploitation avicole plein air agroforestière en préparation en Gironde : ouverture prévue le 01/05/2029, œufs, volailles de chair issues d'un noyau reproducteur, paddocks arborés et vente directe.";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

function withTrailingSlash(path: string) {
  if (path === "/" || path === "") {
    return "/";
  }

  return path.endsWith("/") ? path : `${path}/`;
}

export function absoluteUrl(path: string) {
  const normalizedPath = withTrailingSlash(path);
  return normalizedPath === "/" ? siteUrl : `${siteUrl}${normalizedPath}`;
}

export function buildPageMetadata({ title, description, path, keywords = [] }: PageMetadataInput): Metadata {
  const canonicalPath = withTrailingSlash(path);
  const canonicalUrl = absoluteUrl(canonicalPath);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      locale: siteLocale,
      type: "website",
      images: [
        {
          url: defaultOgImage,
          width: 1024,
          height: 444,
          alt: "La Belle Poule — future exploitation avicole plein air agroforestière en Gironde",
        },
      ],
    },
  };
}
