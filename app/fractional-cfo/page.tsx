import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";
import { CheckCircle2, ArrowRight, Clock, TrendingUp, Shield, FileText, BarChart3, DollarSign } from "lucide-react";

export const metadata = buildMetadata({
  title: "Fractional CFO Services Melbourne | Outsourced CFO Australia",
  description:
    "Fractional CFO services for growing businesses. CFO-level strategy, forecasting, board reporting and cash flow management from AUD $1,500/month. Melbourne and Australia-wide.",
  path: "/fractional-cfo",
});

const tiers = [
  {
    name: "Starter",
    price: "AUD $1,500–$2,500",
    period: "per month",
    desc: "For businesses getting finance under control",
    features: [
      "Monthly management accounts review",
      "Cash flow reporting",
      "Quarterly forecasting",
      "Email support",
      "4–8 hrs/month",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "AUD $3,000–$5,000",
    period: "per month",
    desc: "For businesses scaling and needing strategic finance",
    features: [
      "Everything in Starter",
      "Monthly CFO advisory session",
      "Annual budgeting",
      "KPI dashboard design",
      "Board reporting pack",
      "8–16 hrs/month",
    ],
    highlight: true,
  },
  {
    name: "Strategic",
    price: "AUD $6,000+",
    period: "per month",
    desc: "For businesses with complex finance requirements",
    features: [
      "Everything in Growth",
      "Weekly availability",
      "Finance team oversight",
      "Investor/bank reporting",
      "M&A and capital advisory",
      "16+ hrs/month",
    ],
    highlight: false,
  },
];

const deliverables = [
  { icon: FileText, label: "Monthly Management Reports" },
  { icon: BarChart3, label: "Forecasts & Budgets" },
  { icon: DollarSign, label: "Cash Flow Modelling" },
  { icon: TrendingUp, label: "KPI Dashboards" },
  { icon: Shield, label: "Board Reporting Packs" },
  { icon: Clock, label: "Strategic Finance Advice" },
];

const faqs = [
  {
    question: "What is a Fractional CFO?",
    answer:
      "A Fractional CFO is an experienced Chief Financial Officer who works with your business on a part-time or retained basis. You get CFO-level strategic finance expertise — including management reporting, forecasting, cash flow management, board reporting and commercial decision support — without the cost of a full-time executive. Typically, businesses paying $150K–$300K+ for a full-time CFO can access equivalent expertise for $1,500–$6,000/month through a Fractional CFO model.",
  },
  {
    question: "How is a Fractional CFO different from an accountant?",
    answer:
      "An accountant primarily handles compliance — tax returns, financial statements, BAS lodgements. A Fractional CFO works forward-looking: forecasting revenue and cash flow, analysing profitability by product or channel, building financial models for growth decisions, and advising on the commercial strategy of the business. Marginfy complements your existing accountant — we don't replace them.",
  },
  {
    question: "How many hours per month does a Fractional CFO engagement involve?",
    answer:
      "This depends on the tier. Starter engagements typically involve 4–8 hours per month; Growth engagements 8–16 hours; Strategic engagements 16+ hours. Hours are allocated to the highest-value activities each month — reporting, forecasting, advisory sessions and strategic projects.",
  },
  {
    question: "Does Marginfy work with businesses outside Melbourne?",
    answer:
      "Yes. Marginfy delivers services Australia-wide. All engagements can be conducted remotely via video call. We have experience working with businesses in Melbourne, Sydney, Brisbane, Adelaide and regional areas.",
  },
  {
    question: "What size businesses does Marginfy work with?",
    answer:
      "Marginfy primarily serves founder-led businesses generating between $1M and $50M in annual revenue. At this stage, businesses typically need CFO-level support but cannot justify a full-time hire. We also work with early-stage businesses preparing to scale, and larger businesses seeking specialist expertise in pricing, profitability or finance transformation.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "After an initial discovery call and proposal acceptance, most engagements can commence within 1–2 weeks. The onboarding process involves a finance function review, system access and scoping the first deliverables.",
  },
];

export default function FractionalCFOPage() {
  return (
    <>
      <JsonLd schema={buildServiceSchema({
        name: "Fractional CFO Services",
        description: "CFO-level strategic finance expertise for growing businesses. Monthly reporting, forecasting, cash flow management and board reporting from AUD $1,500/month.",
        url: `${SITE_URL}/fractional-cfo`,
        price: "1500",
      })} />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Fractional CFO Services", url: `${SITE_URL}/fractional-cfo` },
      ])} />

      {/* Hero */}
      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Fractional CFO Services" }]} />
          </div>
          <div className="max-w-3xl">
            <div className="inline-block text-sm font-semibold text-brand-green-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              Fractional CFO Services
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              CFO-Level Strategic Finance,{" "}
              <span className="text-brand-green-400">Without the Full-Time Cost</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-8">
              Marginfy delivers ongoing Fractional CFO services to founder-led businesses.
              Monthly reporting, forecasting, cash flow management, board reporting and
              strategic commercial advice — from AUD $1,500 per month.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild>
                <Link href="/book-a-call">
                  Schedule a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link href="/profitability-health-check">Free Health Check</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              What a Marginfy Fractional CFO Delivers
            </h2>
            <p className="text-slate-600">
              Every engagement is scoped to the specific needs of your business. Typical
              deliverables include:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {deliverables.map((d) => (
              <div key={d.label} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="w-9 h-9 rounded-lg bg-brand-blue-50 flex items-center justify-center flex-shrink-0">
                  <d.icon className="w-4.5 h-4.5 text-brand-blue-600" />
                </div>
                <span className="font-medium text-slate-700 text-sm">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              Fractional CFO Retainer Packages
            </h2>
            <p className="text-slate-600">
              Transparent, value-based pricing. All retainers are month-to-month with
              no lock-in contracts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-8 rounded-2xl border transition-all ${
                  tier.highlight
                    ? "border-brand-blue-600 bg-brand-blue-600 text-white shadow-xl scale-105"
                    : "border-slate-200 bg-white"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-1 ${tier.highlight ? "text-white" : "text-brand-navy"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-4 ${tier.highlight ? "text-white/70" : "text-slate-500"}`}>
                  {tier.desc}
                </p>
                <div className="mb-6">
                  <span className={`text-3xl font-bold ${tier.highlight ? "text-white" : "text-brand-navy"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ml-1 ${tier.highlight ? "text-white/70" : "text-slate-500"}`}>
                    {tier.period}
                  </span>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${tier.highlight ? "text-brand-green-400" : "text-brand-green-600"}`} />
                      <span className={tier.highlight ? "text-white/90" : "text-slate-700"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.highlight ? "hero" : "default"}
                  className="w-full"
                  asChild
                >
                  <Link href="/book-a-call">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            All pricing in AUD excluding GST. Packages are flexible and can be adjusted
            as your needs change.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
