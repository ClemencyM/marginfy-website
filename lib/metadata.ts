import type { Metadata } from "next";
import { SITE_URL } from "./utils";

const DEFAULT_TITLE = "Marginfy | Fractional CFO Services & Profitability Intelligence";
const DEFAULT_DESCRIPTION =
  "Marginfy helps founder-led businesses uncover profit leaks, optimise pricing and improve cash flow through Fractional CFO services, pricing strategy and profitability analysis. Melbourne, Australia.";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;

export function buildMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = title
    ? `${title} | Marginfy`
    : DEFAULT_TITLE;
  const metaDesc = description ?? DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title: fullTitle,
    description: metaDesc,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: metaDesc,
      siteName: "Marginfy",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title ?? "Marginfy — Profitability Intelligence for Growing Businesses",
        },
      ],
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDesc,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    other: {
      "geo.region": "AU-VIC",
      "geo.placename": "Melbourne",
    },
  };
}
