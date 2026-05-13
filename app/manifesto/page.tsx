import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SITE_URL } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "The Marginfy Manifesto | Why Profitability Intelligence Matters",
  description:
    "The Marginfy Manifesto: why founder-led businesses deserve better financial intelligence, and what Marginfy is doing about it.",
  path: "/manifesto",
});

export default function ManifestoPage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Manifesto", url: `${SITE_URL}/manifesto` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Manifesto" }]} /></div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">The Marginfy Manifesto</h1>
            <p className="text-white/70">Why we exist. What we believe. What we&apos;re building.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <article className="prose prose-slate prose-lg max-w-none">
            <h2>Every Founder Deserves a CFO</h2>
            <p>
              Running a business is hard enough without having to be your own CFO.
              Yet that&apos;s exactly what most founders are doing — making critical pricing,
              cash flow and profitability decisions with incomplete information, insufficient
              analysis and no strategic finance partner in their corner.
            </p>
            <p>
              Large corporations have finance teams. They have CFOs. They have analysts
              who model every significant decision before it&apos;s made. They understand their
              margins by product, by customer, by channel and by geography. They know where
              they make money and where they lose it.
            </p>
            <p>
              Most founder-led businesses don&apos;t have any of this.
            </p>

            <h2>The Profitability Problem</h2>
            <p>
              Here&apos;s the reality we see at Marginfy: business after business generating
              strong revenue but failing to translate that into sustainable profit. Growing
              businesses that are somehow getting poorer as they grow.
            </p>
            <p>
              The causes are almost always the same:
            </p>
            <ul>
              <li>Pricing set by intuition, not by analysis</li>
              <li>No visibility into which products, customers or channels are actually profitable</li>
              <li>Costs growing faster than they should because no one is watching them</li>
              <li>Cash flow managed reactively, not proactively</li>
              <li>Financial reporting that describes the past but never shapes the future</li>
            </ul>
            <p>
              These aren&apos;t character flaws. They&apos;re resource constraints. Founders build
              businesses around their core expertise — whether that&apos;s cooking, technology,
              hospitality or healthcare. They shouldn&apos;t also have to be world-class financial
              analysts.
            </p>

            <h2>What We Believe</h2>
            <p>
              We believe every founder-led business — regardless of size — deserves access to
              the same quality of financial thinking that large enterprises take for granted.
            </p>
            <p>
              We believe profitability is not a mystery. It&apos;s a function of pricing, cost
              structure, customer mix and operational decisions — and every one of those
              variables can be understood, modelled and optimised.
            </p>
            <p>
              We believe finance should drive decisions, not just document them. A P&amp;L
              that arrives two weeks after month end and tells you what already happened is
              better than nothing — but barely. What founders need is financial intelligence:
              forward-looking, actionable and commercially focused.
            </p>
            <p>
              We believe the Fractional CFO model is the right answer for the majority of
              growing businesses. A full-time CFO is too expensive. An accountant isn&apos;t
              commercial enough. A Fractional CFO brings the expertise without the overhead.
            </p>

            <h2>What We&apos;re Building</h2>
            <p>
              Marginfy is building two things simultaneously: a world-class fractional CFO
              advisory practice, and a software platform that delivers profitability
              intelligence to growing businesses at scale.
            </p>
            <p>
              The advisory practice serves clients directly — with deep, hands-on engagement
              that produces measurable commercial outcomes. The software platform will make
              the same intelligence available to every founder, automatically.
            </p>
            <p>
              Together, they represent our answer to the profitability problem. Not generic
              financial advice. Not spreadsheets sent twice a year. Real, decision-ready
              financial intelligence — available to every founder who needs it.
            </p>

            <h2>The Promise</h2>
            <p>
              Marginfy promises one thing: to help businesses understand exactly where they
              make money, where they lose money, and what actions will improve profitability.
            </p>
            <p>
              If we&apos;re doing our job, our clients make better decisions with more confidence.
              Their margins improve. Their cash flow becomes predictable. Their pricing
              reflects the true value they deliver. And their growth becomes sustainable.
            </p>
            <p>
              That&apos;s the point. That&apos;s why Marginfy exists.
            </p>
          </article>

          <div className="mt-12 flex gap-4">
            <Button variant="cta" asChild>
              <Link href="/profitability-health-check">
                Book Free Health Check
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/about">Meet the Founder</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
