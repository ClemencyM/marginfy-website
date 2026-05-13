import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";
import { CheckCircle2, ArrowRight, LineChart, Calculator, TrendingUp, FileSpreadsheet } from "lucide-react";

export const metadata = buildMetadata({
  title: "Financial Modelling Services Melbourne | Financial Model Consultant",
  description:
    "Professional financial modelling for pricing decisions, forecasting, investment analysis and strategic planning. Dynamic, decision-ready models. From AUD $2,500. Melbourne and Australia-wide.",
  path: "/financial-modelling",
});

const modelTypes = [
  {
    icon: TrendingUp,
    title: "Three-Way Financial Models",
    desc: "Integrated P&L, balance sheet and cash flow model. Essential for funding applications, strategic planning and board reporting.",
    price: "From AUD $3,500",
  },
  {
    icon: Calculator,
    title: "Pricing Models",
    desc: "Cost-plus, value-based and competitive pricing models. Includes margin analysis, break-even modelling and price elasticity.",
    price: "From AUD $2,500",
  },
  {
    icon: LineChart,
    title: "Forecasting & Scenario Analysis",
    desc: "12–36 month rolling forecasts with multiple scenario variants (base, upside, downside). Updated for changing conditions.",
    price: "From AUD $2,500",
  },
  {
    icon: FileSpreadsheet,
    title: "Investment & Business Cases",
    desc: "ROI and NPV analysis for capital expenditure, new products, market expansion or acquisition evaluation.",
    price: "From AUD $3,500",
  },
];

const faqs = [
  {
    question: "What makes a good financial model?",
    answer: "A good financial model is clear, flexible and decision-ready. It should have logical structure, visible assumptions, scenario capability and outputs that directly address the question it was built to answer. At Marginfy, we build models that clients can actually use — not locked-down black boxes.",
  },
  {
    question: "Do you build models in Excel or another tool?",
    answer: "We primarily build models in Microsoft Excel, which provides maximum flexibility and portability. We can also build in Google Sheets on request. All models are delivered with documentation and a walkthrough session so you can maintain and update them.",
  },
  {
    question: "How long does it take to build a financial model?",
    answer: "Simple models can be delivered in 1–2 weeks. Complex three-way models or bespoke analysis typically take 2–4 weeks. Timeline depends on data availability and scope.",
  },
  {
    question: "Can you update an existing model?",
    answer: "Yes. If you have an existing model that needs updating, restructuring or extending, we can assess it and quote accordingly. We can also train your team to maintain models we build.",
  },
];

export default function FinancialModellingPage() {
  return (
    <>
      <JsonLd schema={buildServiceSchema({
        name: "Financial Modelling",
        description: "Dynamic financial models for pricing, forecasting, investment decisions and strategic planning.",
        url: `${SITE_URL}/financial-modelling`,
        price: "2500",
      })} />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Financial Modelling", url: `${SITE_URL}/financial-modelling` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Financial Modelling" }]} /></div>
          <div className="max-w-3xl">
            <div className="inline-block text-sm font-semibold text-brand-green-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              Financial Modelling
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Financial Models Built to{" "}
              <span className="text-brand-green-400">Drive Decisions</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-8">
              Dynamic, decision-ready financial models for pricing, forecasting, investment
              appraisal and strategic planning. Built to be understood, used and maintained
              — not filed away.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button variant="cta" size="lg" asChild>
                <Link href="/book-a-call">Discuss Your Requirements <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6">
              {["From AUD $2,500", "Excel or Google Sheets", "Includes walkthrough session"].map((t) => (
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
          <h2 className="text-3xl font-bold text-brand-navy mb-4 text-center">Model Types</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We build a range of financial models tailored to the decision at hand.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {modelTypes.map((m) => (
              <div key={m.title} className="p-6 rounded-xl border border-slate-200 hover:border-brand-blue-200 hover:shadow-md transition-all bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-50 flex items-center justify-center">
                    <m.icon className="w-5 h-5 text-brand-blue-600" />
                  </div>
                  <span className="text-xs font-semibold text-brand-green-700 bg-brand-green-50 px-2.5 py-1 rounded-full">
                    {m.price}
                  </span>
                </div>
                <h3 className="font-bold text-brand-navy mb-2">{m.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
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
