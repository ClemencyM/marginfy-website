import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";
import { CheckCircle2, ArrowRight, UtensilsCrossed, TrendingUp, Calculator, BarChart2 } from "lucide-react";

export const metadata = buildMetadata({
  title: "Hospitality Finance Consultant | Fractional CFO for Restaurants & Cafes",
  description:
    "Fractional CFO and profitability services for hospitality businesses. Menu engineering, food cost analysis, venue profitability and pricing strategy. Melbourne and Australia-wide.",
  path: "/industries/hospitality",
});

const services = [
  { icon: Calculator, title: "Menu Engineering", desc: "Contribution margin analysis across your full menu. Identify Stars, Plowhorses, Puzzles and Dogs. Price for profitability." },
  { icon: TrendingUp, title: "Food & Beverage Cost Analysis", desc: "Track food cost percentage, wastage and purchase price variances. Build a system to manage food costs in real time." },
  { icon: BarChart2, title: "Venue Profitability Analysis", desc: "P&L by venue, trading period, event type or service. Understand which parts of your business drive profit." },
  { icon: UtensilsCrossed, title: "Pricing Strategy", desc: "Market-anchored pricing strategy that covers your real costs and delivers sustainable margins." },
];

const faqs = [
  {
    question: "What is menu engineering?",
    answer: "Menu engineering is a profitability analysis that examines the contribution margin and popularity of each menu item. Items are classified as Stars (high profit, high popularity), Plowhorses (low margin, high popularity), Puzzles (high margin, low popularity) or Dogs (low margin, low popularity). This analysis drives strategic decisions about pricing, positioning and menu design.",
  },
  {
    question: "What is a healthy food cost percentage for a restaurant?",
    answer: "Typical food cost percentages vary by concept: fine dining restaurants often target 28–32%; casual dining 30–35%; fast casual 25–30%; cafes 25–35%. However, food cost percentage alone is a poor measure — what matters is contribution margin and total profitability after labour and overheads.",
  },
  {
    question: "How can a Fractional CFO help a hospitality business?",
    answer: "A Fractional CFO for hospitality provides ongoing management reporting, cash flow management, forecasting and strategic financial advice. In the hospitality context, this includes labour cost analysis, trading period profitability, pricing reviews, COGS optimisation and financial modelling for new venues or concepts.",
  },
];

export default function HospitalityPage() {
  return (
    <>
      <JsonLd schema={buildServiceSchema({
        name: "Hospitality Finance & Fractional CFO Services",
        description: "Fractional CFO, menu engineering, food cost analysis and venue profitability for hospitality businesses.",
        url: `${SITE_URL}/industries/hospitality`,
      })} />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Industries", url: `${SITE_URL}/industries/hospitality` },
        { name: "Hospitality", url: `${SITE_URL}/industries/hospitality` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Industries" }, { label: "Hospitality" }]} />
          </div>
          <div className="max-w-3xl">
            <div className="inline-block text-sm font-semibold text-brand-green-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              Hospitality
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Fractional CFO & Finance Services for{" "}
              <span className="text-brand-green-400">Hospitality Businesses</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-8">
              Restaurants, cafes, bars and accommodation businesses face unique financial
              challenges — high food costs, complex labour, thin margins and seasonal cash
              flow. Marginfy brings deep hospitality sector knowledge to every engagement.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link href="/book-a-call">Book a Discovery Call <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
            How We Help Hospitality Businesses
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                <div className="w-10 h-10 rounded-lg bg-brand-blue-50 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-brand-blue-600" />
                </div>
                <h3 className="font-bold text-brand-navy mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">FAQ — Hospitality Finance</h2>
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
