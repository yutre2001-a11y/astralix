import type { Metadata } from "next";

export const SITE_URL = "https://astralix.vercel.app";

const OG_IMAGE = "/ambiente4.png";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | AstralixMC`,
      description,
      url: path,
      siteName: "AstralixMC",
      locale: "es_ES",
      type: "website",
      images: [
        { url: OG_IMAGE, width: 1672, height: 941, alt: "Ambientación de AstralixMC" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AstralixMC`,
      description,
      images: [OG_IMAGE],
    },
  };
}
