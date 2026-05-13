import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";
import { ArrowRight, ShoppingCart, Package, Users, TrendingUp } from "lucide-react";

export const metadata = buildMetadata({
  title: "eCommerce Finance Consultant | Profitability Analysis for Online Retailers",
  description:
    "Profitability analysis, unit economics and Fractional CFO services for eCommerce businesses. SKU profitability, customer LTV, channel margins. Melbourne and Australia-wide.",
  path: "/industries/ecommerce",
});

const services = [
  { icon: Package, title: "SKU Profitability Analysis", desc: "True profitability by SKU including all landed costs: COGS, fulfilment, returns, marketplace fees and marketing allocation." },
  { icon: Users, title: "Customer LTV & Profitability", desc: "Customer lifetime value modelling and cohort profitability analysis to identify your most valuable customer segments." },
  { icon: ShoppingCart, title: "Channel Margin Analysis", desc: "Profitability by sales channel: DTC website, Amazon, wholesale, retail. Understand true contribution by channel." },
  { icon: TrendingUp, title: "Unit Economics Modelling", desc: "CAC, LTV:CAC ratio, payback period and contribution margin analysis. Know exactly when your acquisition spend pays back." },
];

const faqs = [
  {
    question: "What are unit economics for eCommerce?",
    answer: "Unit economics for eCommerce describes the profitability of a single unit of sale or a single customer, stripped back to the most relevant metrics. Key unit economics include: gross margin per unit, contribution margin after fulfilment and returns, customer acquisition cost (CAC), average order value (AOV), repeat purchase rate and customer lifetime value (LTV). These metrics determine whether your business model is fundamentally profitable at scale.",
  },
  {
    question: "How do you calculate true product profitability for eCommerce?",
    answer: "True product profitability for eCommerce requires a fully-loaded cost model. This means starting with COGS, then adding: inbound freight and duty, warehousing and pick-pack costs, outbound shipping costs, returns and restocking, marketplace or platform fees, and a marketing cost allocation. Only with all these costs included can you accurately determine which SKUs are driving profit and which are destroying it.",
  },
  {
    question: "My revenue is growing but margins are declining. Why?",
    answer: "This is one of the most common challenges in eCommerce. Possible causes include: growing into lower-margin product lines or channels; increasing customer acquisition costs as markets mature; higher fulfilment costs from expanded geographic reach; higher return rates on growth products; price promotions eroding average order value; or simply growing into an unprofitable mix of customers, products and channels. A profitability review diagnoses the specific cause for your business.",
  },
];

export default function EcommercePage() {
  return (
    <>
      <JsonLd schema={buildServiceSchema({
        name: "eCommerce Finance & Profitability Services",
        description: "Unit economics, SKU profitability, customer LTV and Fractional CFO services for eCommerce businesses.",
        url: `${SITE_URL}/industries/ecommerce`,
      })} />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "eCommerce", url: `${SITE_URL}/industries/ecommerce` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Industries" }, { label: "eCommerce" }]} />
          </div>
          <div className="max-w-3xl">
            <div className="inline-block text-sm font-semibold text-brand-green-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              eCommerce
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Profitability Intelligence for{" "}
              <span className="text-brand-green-400">eCommerce Businesses</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-8">
              Growing revenue doesn&apos;t mean growing profit in eCommerce. Marginfy helps
              online retailers understand their true unit economics, identify loss-making
              SKUs and channels, and build pricing strategies that actually work.
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
          <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">FAQ — eCommerce Finance</h2>
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
