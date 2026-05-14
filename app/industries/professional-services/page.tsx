import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";
import { CheckCircle2, ArrowRight, Clock, BarChart2, TrendingUp, Users } from "lucide-react";

export const metadata = buildMetadata({
  title: "Finance Consultant for Professional Services | Fractional CFO for Consulting Firms",
  description:
    "Fractional CFO and profitability services for consulting, advisory and professional services firms. Project profitability, utilisation analysis, time-based pricing and financial planning. Melbourne and Australia-wide.",
  path: "/industries/professional-services",
});

const services = [
  {
    icon: Clock,
    title: "Time-Based Pricing Strategy",
    desc: "Build a pricing model that reflects the true cost of delivering your services — including utilisation rates, overhead recovery and target margins.",
  },
  {
    icon: BarChart2,
    title: "Project & Engagement Profitability",
    desc: "Analyse profitability by client, project, service line and team member. Understand which engagements drive your margins and which consume them.",
  },
  {
    icon: Users,
    title: "Utilisation & Capacity Analysis",
    desc: "Track billable vs. non-billable hours, identify capacity constraints and optimise your team structure for sustainable profitability.",
  },
  {
    icon: TrendingUp,
    title: "Financial Planning & Forecasting",
    desc: "Build rolling forecasts, revenue pipelines and scenario models that support confident decisions on hiring, investment and business development.",
  },
];

const outcomes = [
  "Know your real cost per hour, per project and per client",
  "Identify your most and least profitable service lines",
  "Build pricing that covers costs and delivers target margins",
  "Improve utilisation without burning out your team",
  "Forecast revenue and cash flow with confidence",
  "Create a financial reporting rhythm that supports growth",
];

const faqs = [
  {
    question: "How do you calculate project profitability for a consulting firm?",
    answer:
      "Project profitability is calculated by comparing the revenue earned on an engagement against the fully-loaded cost of delivering it — including direct labour (at true cost, not invoice rate), allocated overhead and any direct expenses. The key metrics are gross margin per project, contribution margin by service line and revenue per billable hour by consultant level. Most firms are surprised to find that their highest-revenue clients are often not their most profitable ones.",
  },
  {
    question: "What is a good utilisation rate for a professional services firm?",
    answer:
      "Target utilisation rates vary by role and firm type. For client-facing consultants, 65–75% billable utilisation is typical for a healthy firm. Rates above 80% can indicate over-servicing risk and staff burnout; below 60% usually signals a pricing or pipeline problem. The more important metric is 'effective utilisation' — billable hours billed and collected as a proportion of available time.",
  },
  {
    question: "How should a consulting firm price its services?",
    answer:
      "Effective pricing for professional services starts with understanding your cost base — salary on-costs, overhead, desired profit margin — then benchmarking against market rates and adjusting for your firm's positioning and expertise. Common models include hourly rates, day rates, fixed-fee projects, retainer arrangements and value-based pricing. Marginfy helps firms build pricing frameworks that support both competitiveness and commercial sustainability.",
  },
  {
    question: "What does a Fractional CFO do for a professional services firm?",
    answer:
      "A Fractional CFO for professional services provides financial leadership without the cost of a full-time hire. This includes management reporting, cash flow management, pricing reviews, project profitability analysis, capacity planning and financial modelling. For growing firms, a Fractional CFO also helps prepare for investment, acquisitions or hiring decisions with credible financial analysis.",
  },
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <JsonLd
        schema={buildServiceSchema({
          name: "Professional Services Finance & Fractional CFO",
          description:
            "Fractional CFO, project profitability, utilisation analysis and time-based pricing for consulting and professional services firms.",
          url: `${SITE_URL}/industries/professional-services`,
        })}
      />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Industries", url: `${SITE_URL}/industries/professional-services` },
          { name: "Professional Services", url: `${SITE_URL}/industries/professional-services` },
        ])}
      />

      {/* Hero */}
      <section className="bg-hero pt-32 pb-20">
        <div className="hero-wave" />
        <div className="container relative">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Industries" }, { label: "Professional Services" }]} />
          </div>
          <div className="max-w-3xl">
            <div className="inline-block text-sm font-semibold text-brand-teal-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              Professional Services
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Fractional CFO & Finance for{" "}
              <span className="text-brand-teal-400">Professional Services Firms</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-8">
              Consulting, advisory, legal, engineering and services firms face a distinct set of financial
              challenges — time-based revenue, utilisation pressure, project overruns and unpredictable
              cash flow. Marginfy brings commercial finance expertise tailored to how professional services
              businesses actually work.
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
            How We Help Professional Services Firms
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
              Tangible financial outcomes for consulting and professional services businesses.
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
            FAQ — Professional Services Finance
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
