import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE_URL } from "@/lib/utils";
import { MessageSquare, FileSearch, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "How Marginfy Works | Fractional CFO Process",
  description:
    "How Marginfy's Fractional CFO and profitability advisory process works — from discovery call to ongoing engagement. Clear, transparent and results-focused.",
  path: "/how-marginfy-works",
});

const steps = [
  {
    icon: MessageSquare,
    step: "Step 1",
    title: "Discovery Call",
    desc: "A free 30-minute call to understand your business, your challenges and your goals. No obligation. Just an honest conversation about whether Marginfy can help.",
    duration: "30 minutes",
  },
  {
    icon: FileSearch,
    step: "Step 2",
    title: "Scoping & Proposal",
    desc: "Based on the discovery call, we prepare a clear proposal: scope of work, timeline, deliverables and fixed pricing. No hourly billing surprises.",
    duration: "2–3 business days",
  },
  {
    icon: Lightbulb,
    step: "Step 3",
    title: "Engagement & Delivery",
    desc: "We get to work — accessing your financial data, conducting analysis, building models and developing recommendations. You receive regular updates throughout.",
    duration: "2–6 weeks (project) / Ongoing (retainer)",
  },
  {
    icon: TrendingUp,
    step: "Step 4",
    title: "Results & Ongoing Support",
    desc: "Findings are delivered with clear, actionable recommendations. For retainer clients, this is the start of an ongoing relationship — monthly reporting, quarterly strategy and continuous improvement.",
    duration: "Ongoing",
  },
];

export default function HowMarginfyWorksPage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "How Marginfy Works", url: `${SITE_URL}/how-marginfy-works` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "How Marginfy Works" }]} /></div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              How Marginfy Works
            </h1>
            <p className="text-lg text-white/75">
              A clear, transparent process — from first contact to measurable results.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-5 top-10 bottom-10 w-0.5 bg-brand-blue-100 hidden sm:block" />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <div key={step.step} className="relative flex gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-brand-blue-600 flex items-center justify-center text-white text-sm font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <div className="pb-2">
                    <p className="text-xs font-semibold text-brand-blue-600 uppercase tracking-wide mb-1">{step.step}</p>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">{step.desc}</p>
                    <span className="inline-block text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 text-center">
            <h3 className="text-xl font-bold text-brand-navy mb-2">Ready to get started?</h3>
            <p className="text-slate-600 mb-6">Book a free discovery call. No commitment, no hard sell.</p>
            <Button variant="cta" size="lg" asChild>
              <Link href="/book-a-call">
                Book Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
