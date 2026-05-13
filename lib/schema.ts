import { SITE_URL } from "./utils";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
  name: "Marginfy",
  url: SITE_URL,
  logo: `${SITE_URL}/images/marginfy-logo.svg`,
  description:
    "Fractional CFO Services and Profitability Intelligence for Growing Businesses. Melbourne, Australia.",
  email: "admin@marginfy.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  founder: {
    "@type": "Person",
    name: "Clemency Mdaya",
    jobTitle: "Founder & Fractional CFO",
    url: `${SITE_URL}/about`,
  },
  sameAs: [
    "https://www.linkedin.com/company/marginfy",
    "https://twitter.com/marginfy",
  ],
  priceRange: "$$",
  serviceType: [
    "Fractional CFO Services",
    "Pricing Strategy Consulting",
    "Profitability Analysis",
    "Financial Modelling",
    "Finance Function Advisory",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Marginfy",
  description: "Profitability Intelligence for Growing Businesses",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Clemency Mdaya",
  jobTitle: "Founder & Fractional CFO",
  description:
    "Senior finance executive with 15+ years experience in commercial finance, pricing, profitability analysis and strategic finance. Former Division Manager – Finance at Australian Grand Prix Corporation.",
  url: `${SITE_URL}/about`,
  worksFor: {
    "@type": "Organization",
    name: "Marginfy",
    url: SITE_URL,
  },
  knowsAbout: [
    "Fractional CFO Services",
    "Pricing Strategy",
    "Profitability Analysis",
    "Financial Modelling",
    "Cash Flow Management",
    "ERP Implementation",
    "Board Reporting",
    "Finance Transformation",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
};

export function buildServiceSchema({
  name,
  description,
  url,
  price,
}: {
  name: string;
  description: string;
  url: string;
  price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Marginfy",
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "Australia" },
    ...(price ? { offers: { "@type": "Offer", price, priceCurrency: "AUD" } } : {}),
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: image ?? `${SITE_URL}/opengraph-image`,
    author: {
      "@type": "Person",
      name: "Clemency Mdaya",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Marginfy",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/marginfy-logo.svg`,
      },
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
