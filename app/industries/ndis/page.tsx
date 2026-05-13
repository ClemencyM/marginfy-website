import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";
import { ArrowRight, Heart, Shield, FileText, BarChart3 } from "lucide-react";

export const metadata = buildMetadata({
  title: "NDIS Finance Consultant | Finance Services for NDIS Providers Australia",
  description:
    "Finance services for NDIS providers: pricing compliance, participant profitability, cash flow management and finance system setup. Melbourne and Australia-wide.",
  path: "/industries/ndis",
});

const services = [
  { icon: FileText, title: "NDIS Pricing Compliance", desc: "Audit your service pricing against the NDIS Price Guide. Identify underclaiming, overclaiming and non-compliant pricing configurations." },
  { icon: BarChart3, title: "Participant Profitability Analysis", desc: "Understand which support types and participant profiles are delivering positive margins and which require attention." },
  { icon: Shield, title: "Finance System Setup", desc: "Design and implement finance systems appropriate for NDIS providers, including claims management integration and reporting." },
  { icon: Heart, title: "Fractional CFO for NDIS", desc: "Ongoing CFO support for NDIS providers: management reporting, cash flow management, funding forecasting and strategic growth advice." },
];

const faqs = [
  {
    question: "What are common financial challenges for NDIS providers?",
    answer: "NDIS providers commonly face: pricing set below the NDIS Price Guide limit (leaving funding unclaimed); poor visibility into support-line profitability; delayed or manual claims processing impacting cash flow; difficulty forecasting participant funding and plan budgets; compliance risk from incorrect pricing configurations; and limited management reporting given accounting systems not designed for NDIS.",
  },
  {
    question: "How often does the NDIS Price Guide change?",
    answer: "The NDIS Pricing Arrangements and Price Limits document is updated annually, typically in July. Support categories, price limits and claiming rules can change materially. Marginfy monitors these changes and ensures clients' pricing models remain compliant and optimised after each update.",
  },
  {
    question: "Do you work with registered and unregistered NDIS providers?",
    answer: "Yes. Marginfy works with both registered and unregistered NDIS providers. The financial management challenges differ between the two — registered providers face additional audit and governance requirements — but both benefit from rigorous pricing, profitability and cash flow management.",
  },
];

export default function NDISPage() {
  return (
    <>
      <JsonLd schema={buildServiceSchema({
        name: "NDIS Finance Services",
        description: "Finance services for NDIS providers including pricing compliance, participant profitability and fractional CFO support.",
        url: `${SITE_URL}/industries/ndis`,
      })} />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "NDIS Finance Services", url: `${SITE_URL}/industries/ndis` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Industries" }, { label: "NDIS" }]} />
          </div>
          <div className="max-w-3xl">
            <div className="inline-block text-sm font-semibold text-brand-green-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              NDIS Finance Services
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Finance Services for{" "}
              <span className="text-brand-green-400">NDIS Providers</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-8">
              NDIS providers face unique financial challenges — pricing compliance, funding
              complexity, claims management and participant-level profitability. Marginfy
              understands the NDIS funding model and delivers finance services that improve
              both compliance and commercial outcomes.
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
          <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">FAQ — NDIS Finance</h2>
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
