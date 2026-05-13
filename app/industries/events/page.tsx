import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";
import { ArrowRight, Calendar, BarChart3, DollarSign, TrendingUp } from "lucide-react";

export const metadata = buildMetadata({
  title: "Events Finance Consultant | Fractional CFO for Events Companies",
  description:
    "Finance services for events and entertainment businesses. Event-level P&L, ticket pricing strategy, portfolio profitability. Fractional CFO for event organisers. Melbourne and Australia-wide.",
  path: "/industries/events",
});

const services = [
  { icon: BarChart3, title: "Event-Level P&L Modelling", desc: "Build an event-by-event profitability model. Understand which events drive profit and which absorb overhead without adequate return." },
  { icon: DollarSign, title: "Ticket Pricing Strategy", desc: "Data-driven ticket pricing analysis including tier structure, early bird optimisation, capacity modelling and revenue maximisation." },
  { icon: Calendar, title: "Portfolio Profitability", desc: "Analyse your event portfolio as a whole. Identify cross-subsidisation, concentration risk and strategic reallocation opportunities." },
  { icon: TrendingUp, title: "Fractional CFO for Events", desc: "Ongoing CFO support: event budgeting, post-event P&L, cash flow management across the event cycle and annual portfolio planning." },
];

const faqs = [
  {
    question: "What does event-level financial modelling involve?",
    answer: "Event-level financial modelling involves building a P&L for each event that captures all associated revenues (ticket sales, sponsorship, food & beverage, merchandise) and costs (venue, production, talent/artists, staffing, marketing, logistics, administration). The model allows comparison across events, identification of loss-making events, and scenario testing for pricing and cost changes.",
  },
  {
    question: "How should tickets be priced for maximum profitability?",
    answer: "Ticket pricing should be set using a combination of cost-floor analysis (minimum price to cover costs and achieve target margin), demand analysis (willingness to pay at different capacity levels) and competitive benchmarking. A tiered pricing structure — early bird, standard, late and premium — is typically most effective for maximising revenue across different buyer segments and timeframes.",
  },
];

export default function EventsPage() {
  return (
    <>
      <JsonLd schema={buildServiceSchema({
        name: "Events & Entertainment Finance Services",
        description: "Event-level P&L modelling, ticket pricing strategy and fractional CFO services for event organisers.",
        url: `${SITE_URL}/industries/events`,
      })} />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Events & Entertainment", url: `${SITE_URL}/industries/events` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Industries" }, { label: "Events & Entertainment" }]} />
          </div>
          <div className="max-w-3xl">
            <div className="inline-block text-sm font-semibold text-brand-green-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              Events & Entertainment
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Finance Services for{" "}
              <span className="text-brand-green-400">Events Businesses</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-8">
              Events businesses have unique financial dynamics — project-based revenue, high
              fixed costs, seasonal cash flow and complex cost structures. Marginfy brings
              event industry finance expertise to every engagement, including direct
              experience at the Australian Grand Prix Corporation.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link href="/book-a-call">Book a Discovery Call <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
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
          <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">FAQ</h2>
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
