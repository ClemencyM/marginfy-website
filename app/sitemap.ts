import { MetadataRoute } from "next";
import { getAllBlogPosts, getAllCaseStudies } from "@/lib/mdx";
import { SITE_URL } from "@/lib/utils";

const STATIC_ROUTES: { url: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
  { url: "/", changeFrequency: "weekly", priority: 1.0 },
  { url: "/about", changeFrequency: "monthly", priority: 0.9 },
  { url: "/fractional-cfo", changeFrequency: "weekly", priority: 0.95 },
  { url: "/pricing-profitability", changeFrequency: "weekly", priority: 0.9 },
  { url: "/financial-modelling", changeFrequency: "weekly", priority: 0.9 },
  { url: "/finance-function-advisory", changeFrequency: "weekly", priority: 0.85 },
  { url: "/software", changeFrequency: "weekly", priority: 0.9 },
  { url: "/industries/hospitality", changeFrequency: "monthly", priority: 0.85 },
  { url: "/industries/ecommerce", changeFrequency: "monthly", priority: 0.85 },
  { url: "/industries/ndis", changeFrequency: "monthly", priority: 0.85 },
  { url: "/industries/events", changeFrequency: "monthly", priority: 0.85 },
  { url: "/industries/professional-services", changeFrequency: "monthly", priority: 0.85 },
  { url: "/industries/consumer-products", changeFrequency: "monthly", priority: 0.85 },
  { url: "/case-studies", changeFrequency: "weekly", priority: 0.8 },
  { url: "/blog", changeFrequency: "daily", priority: 0.85 },
  { url: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { url: "/book-a-call", changeFrequency: "monthly", priority: 0.9 },
  { url: "/profitability-health-check", changeFrequency: "monthly", priority: 0.9 },
  { url: "/pricing-calculator", changeFrequency: "monthly", priority: 0.8 },
  { url: "/methodology", changeFrequency: "monthly", priority: 0.75 },
  { url: "/manifesto", changeFrequency: "monthly", priority: 0.7 },
  { url: "/how-marginfy-works", changeFrequency: "monthly", priority: 0.75 },
  { url: "/glossary", changeFrequency: "monthly", priority: 0.75 },
  { url: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { url: "/terms-of-use", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = STATIC_ROUTES.map(({ url, changeFrequency, priority }) => ({
    url: `${SITE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  let caseStudyRoutes: MetadataRoute.Sitemap = [];

  try {
    const posts = getAllBlogPosts();
    blogRoutes = posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));
  } catch {}

  try {
    const cases = getAllCaseStudies();
    caseStudyRoutes = cases.map((cs) => ({
      url: `${SITE_URL}/case-studies/${cs.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch {}

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}
