import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getCaseStudy, getAllCaseStudies } from "@/lib/mdx";
import { SITE_URL } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "next-mdx-remote/rsc";
import { TrendingUp, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const cases = getAllCaseStudies();
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return buildMetadata({
    title: cs.title,
    description: cs.description,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Case Studies", url: `${SITE_URL}/case-studies` },
        { name: cs.title, url: `${SITE_URL}/case-studies/${slug}` },
      ])} />

      <section className="bg-hero pt-32 pb-16">
        <div className="container max-w-4xl">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Case Studies", href: "/case-studies" }, { label: cs.industry }]} />
          </div>
          <Badge variant="secondary" className="mb-4">{cs.industry}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {cs.title}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">{cs.description}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          {/* Metrics */}
          {cs.metrics.length > 0 && (
            <div className="grid sm:grid-cols-3 gap-4 mb-12 p-6 rounded-2xl bg-brand-blue-50 border border-brand-blue-100">
              {cs.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-3xl font-bold text-brand-blue-600 mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-600">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Challenge / Outcome quick summary */}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            <div className="p-5 rounded-xl bg-red-50 border border-red-100">
              <h3 className="font-semibold text-red-700 mb-2 text-sm uppercase tracking-wide">The Challenge</h3>
              <p className="text-slate-700 text-sm">{cs.challenge}</p>
            </div>
            <div className="p-5 rounded-xl bg-brand-green-50 border border-brand-green-100">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-brand-green-600" />
                <h3 className="font-semibold text-brand-green-700 text-sm uppercase tracking-wide">The Outcome</h3>
              </div>
              <p className="text-slate-700 text-sm">{cs.outcome}</p>
            </div>
          </div>

          {/* MDX Content */}
          <article className="prose prose-slate prose-lg max-w-none">
            <MDXRemote source={cs.content} />
          </article>

          <div className="mt-10">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-brand-blue-600 hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
