import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";
import { CheckCircle2, ArrowRight, Search, TrendingUp, DollarSign, Target } from "lucide-react";

export const metadata = buildMetadata({
  title: "Pricing & Profitability Reviews | Pricing Strategy Consultant Australia",
  description:
    "Commercial pricing and profitability analysis for growing businesses. Identify margin leaks, optimise pricing and improve unit economics. From AUD $3,500. Melbourne and Australia-wide.",
  path: "/pricing-profitability",
});

const scope = [
  { icon: DollarSign, title: "Pricing Strategy Review", desc: "Assess current pricing against market, cost and value benchmarks. Identify mis-priced products and services." },
  { icon: Search, title: "Product & Channel Profitability", desc: "Build contribution margin analysis by product, channel, customer segment or service line." },
  { icon: TrendingUp, title: "Margin Optimisation", desc: "Identify specific margin improvement opportunities and quantify the financial impact of changes." },
  { icon: Target, title: "Scenario Modelling", desc: "Model the P&L impact of pricing changes, volume shifts and cost reduction scenarios." },
];

const faqs = [
  {
    question: "What does a pricing and profitability review involve?",
    answer: "A Marginfy pricing and profitability review is a structured commercial analysis of your business. We review your pricing, product/service mix, cost structure and customer data to build a clear picture of where you make and lose money. The output is a written report with specific, quantified recommendations for improving margins.",
  },
  {
    question: "How long does a pricing review take?",
    answer: "Most pricing and profitability reviews take 2–4 weeks depending on complexity and data availability. The process involves a discovery session, data collection, analysis and a presentation of findings and recommendations.",
  },
  {
    question: "What data do you need from us?",
    answer: "We typically need access to your financial accounts (Xero, MYOB, QuickBooks or similar), a product/service listing with pricing and costs, and sales data by product, channel or customer. We'll send a detailed data request after your discovery call.",
  },
  {
    question: "What does it cost?",
    answer: "Pricing reviews are priced from AUD $3,500 to $10,000+ depending on the scope and complexity of your business. Our standard advisory rate is AUD $200/hour with a minimum engagement fee of AUD $2,500. We provide a fixed-price proposal after an initial discovery call.",
  },
];

export default function PricingProfitabilityPage() {
  return (
    <>
      <JsonLd schema={buildServiceSchema({
        name: "Pricing & Profitability Reviews",
        description: "Commercial analysis to assess pricing, product profitability and unit economics for growing businesses.",
        url: `${SITE_URL}/pricing-profitability`,
        price: "3500",
      })} />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Pricing & Profitability Reviews", url: `${SITE_URL}/pricing-profitability` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Pricing & Profitability Reviews" }]} /></div>
          <div className="max-w-3xl">
            <div className="inline-block text-sm font-semibold text-brand-green-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              Pricing & Profitability
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Find Exactly Where You{" "}
              <span className="text-brand-green-400">Make and Lose Money</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-8">
              A deep-dive commercial analysis of your pricing, product profitability and
              unit economics. Delivered as a clear, actionable report with specific
              recommendations to improve your margins.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button variant="cta" size="lg" asChild>
                <Link href="/book-a-call">Book a Discovery Call <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6">
              {["AUD $3,500–$10,000+", "2–4 week turnaround", "Fixed-price engagement"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-400" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-navy mb-4 text-center">What&apos;s Included</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Each review is tailored to your business. Typical scope includes:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {scope.map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                <div className="w-10 h-10 rounded-lg bg-brand-blue-50 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-brand-blue-600" />
                </div>
                <h3 className="font-bold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Frequently Asked Questions</h2>
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
