import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { getAllCaseStudies } from "@/lib/mdx";
import { SITE_URL } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export const metadata = buildMetadata({
  title: "Case Studies | Marginfy Client Results",
  description:
    "Real results from Marginfy client engagements. See how we've helped hospitality, eCommerce, NDIS and events businesses improve profitability.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Case Studies", url: `${SITE_URL}/case-studies` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Case Studies" }]} /></div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Client Results
            </h1>
            <p className="text-lg text-white/75">
              Real-world examples of how Marginfy has helped founder-led businesses
              improve profitability, optimise pricing and build stronger finance functions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          {caseStudies.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="group block rounded-2xl border border-slate-200 hover:border-brand-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white"
                >
                  <div className="h-2 bg-gradient-to-r from-brand-blue-600 to-brand-green-500" />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{cs.industry}</Badge>
                      <TrendingUp className="w-5 h-5 text-brand-green-500" />
                    </div>
                    <h2 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue-600 transition-colors leading-snug">
                      {cs.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{cs.description}</p>

                    {cs.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {cs.metrics.map((metric) => (
                          <div key={metric.label} className="text-center p-3 rounded-lg bg-slate-50 border border-slate-200">
                            <div className="text-lg font-bold text-brand-blue-600">{metric.value}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-blue-600 group-hover:gap-2.5 transition-all">
                      Read case study <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-500">Case studies coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
