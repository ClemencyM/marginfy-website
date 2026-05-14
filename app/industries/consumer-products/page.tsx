import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";
import { CheckCircle2, ArrowRight, Package, BarChart2, TrendingUp, Globe } from "lucide-react";

export const metadata = buildMetadata({
  title: "Finance Consultant for Consumer Products | Fractional CFO for Wholesale & Retail Brands",
  description:
    "Fractional CFO and profitability services for consumer product businesses. Landed cost analysis, channel profitability, wholesale pricing and margin optimisation for brands selling online and through retail partners. Melbourne and Australia-wide.",
  path: "/industries/consumer-products",
});

const services = [
  {
    icon: Package,
    title: "Landed Cost Analysis",
    desc: "Calculate the true landed cost of every SKU — purchase price, freight, duties, warehousing and FX — so you price for real profitability, not wishful thinking.",
  },
  {
    icon: BarChart2,
    title: "Channel Profitability",
    desc: "Compare margins by channel: direct-to-consumer, wholesale, marketplace and retail. Understand where your profits actually come from — and where you're losing them.",
  },
  {
    icon: TrendingUp,
    title: "Wholesale Pricing & Margin Optimisation",
    desc: "Build a wholesale pricing architecture that covers your landed costs, accounts for retailer margin expectations and protects your brand at every price point.",
  },
  {
    icon: Globe,
    title: "eCommerce & Retail Finance",
    desc: "Unit economics, customer acquisition cost, LTV and contribution margin analysis for brands selling both online and through physical retail partners.",
  },
];

const outcomes = [
  "Know your true landed cost per SKU",
  "Compare profitability across every sales channel",
  "Build a wholesale pricing model that works",
  "Understand which SKUs are actually making money",
  "Improve gross margin without sacrificing volume",
  "Forecast cash flow through seasonal demand cycles",
];

const faqs = [
  {
    question: "What is landed cost and why does it matter for consumer product brands?",
    answer:
      "Landed cost is the total cost of getting a product from the manufacturer to your warehouse — including the purchase price, freight (sea or air), customs duties, import taxes, insurance, warehousing and any currency conversion costs. Many consumer product brands price on purchase price alone and are shocked when their actual gross margin is half of what they expected. Marginfy builds landed cost models that capture every cost component so you can price accurately from day one.",
  },
  {
    question: "How do you analyse channel profitability for a consumer product business?",
    answer:
      "Channel profitability analysis compares the net margin delivered by each sales channel after accounting for all channel-specific costs: wholesale discounts, retailer co-op fees, marketplace commissions, fulfilment costs, returns and marketing. A product might generate a 60% gross margin DTC and only 20% through wholesale — but wholesale might deliver higher volume with lower acquisition costs. Marginfy helps brands understand these trade-offs and make informed decisions about channel mix.",
  },
  {
    question: "What wholesale margin should I offer retailers?",
    answer:
      "Typical wholesale margins for consumer products range from 40–60% for specialty retail and 50–60% for mass market retail (meaning retailers mark up your wholesale price by 40–60%). This means you need to build your pricing from landed cost up, ensuring that at the wholesale price point you still achieve your minimum acceptable margin. Marginfy builds wholesale pricing architectures that protect brand integrity and profitability at every level of the trade.",
  },
  {
    question: "How can a Fractional CFO help a consumer products business?",
    answer:
      "A Fractional CFO for consumer products brings financial rigour to landed cost management, pricing strategy, channel analysis and inventory planning. This includes building gross margin models by SKU and channel, cash flow forecasting (critical for inventory-heavy businesses), working capital management and financial reporting that gives founders visibility over what's actually driving profit.",
  },
];

export default function ConsumerProductsPage() {
  return (
    <>
      <JsonLd
        schema={buildServiceSchema({
          name: "Consumer Products Finance & Fractional CFO",
          description:
            "Fractional CFO, landed cost analysis, channel profitability and wholesale pricing for consumer product brands selling online and through retail.",
          url: `${SITE_URL}/industries/consumer-products`,
        })}
      />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Industries", url: `${SITE_URL}/industries/consumer-products` },
          { name: "Consumer Products", url: `${SITE_URL}/industries/consumer-products` },
        ])}
      />

      {/* Hero */}
      <section className="bg-hero pt-32 pb-20">
        <div className="hero-wave" />
        <div className="container relative">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Industries" }, { label: "Consumer Products" }]} />
          </div>
          <div className="max-w-3xl">
            <div className="inline-block text-sm font-semibold text-brand-teal-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              Consumer Products
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Fractional CFO for{" "}
              <span className="text-brand-teal-400">Consumer Product Brands</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-8">
              Consumer product brands face a unique set of financial challenges — landed cost complexity,
              channel margin pressure, inventory cash flow and wholesale pricing architecture. Marginfy
              brings deep commercial finance expertise to brands selling online and through retail partners.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link href="/book-a-call">
                Book a Discovery Call <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">
            How We Help Consumer Product Brands
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

      {/* Outcomes */}
      <section className="section-padding bg-brand-navy">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">What You Can Expect</h2>
            <p className="text-white/65 mb-10">
              Real financial outcomes for consumer product and wholesale businesses.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/85 text-sm">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-section-alt">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
            FAQ — Consumer Products Finance
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
