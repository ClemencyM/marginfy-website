import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";
import { CheckCircle2, ArrowRight, Cog, Database, Shield, BarChart3 } from "lucide-react";

export const metadata = buildMetadata({
  title: "Finance Function Advisory | Finance Transformation Consultant Australia",
  description:
    "Finance transformation and operational improvement for growing businesses. ERP implementation, process redesign, controls and governance. Melbourne and Australia-wide.",
  path: "/finance-function-advisory",
});

const areas = [
  {
    icon: Database,
    title: "ERP & Systems Implementation",
    desc: "Selection, implementation and optimisation of ERP and accounting systems. Experience with Sage Intacct, Xero, MYOB, NetSuite and more.",
  },
  {
    icon: Cog,
    title: "Finance Process Redesign",
    desc: "Streamline month-end close, accounts payable/receivable, payroll and reporting processes to reduce manual effort and improve accuracy.",
  },
  {
    icon: Shield,
    title: "Controls & Governance",
    desc: "Design and implement financial controls frameworks, approval workflows and governance structures appropriate for a growing business.",
  },
  {
    icon: BarChart3,
    title: "Reporting Enhancement",
    desc: "Build management reporting packs, dashboards and KPI frameworks that give leadership real-time visibility into business performance.",
  },
];

const faqs = [
  {
    question: "What does finance function advisory cover?",
    answer: "Finance function advisory encompasses everything involved in improving the operational effectiveness of your finance team and systems. This includes ERP selection and implementation, process redesign, controls design, reporting improvement and team capability building.",
  },
  {
    question: "Do you implement ERP systems?",
    answer: "Yes. Marginfy has hands-on experience implementing Sage Intacct (including at the Australian Grand Prix Corporation) and has worked across Xero, MYOB and other platforms. We can advise on system selection and lead or support implementation projects.",
  },
  {
    question: "How is finance advisory priced?",
    answer: "Finance function advisory engagements are project-based. We scope the work, provide a fixed-price proposal and deliver against agreed milestones. Our advisory rate is AUD $200/hour with a minimum engagement fee of AUD $2,500.",
  },
];

export default function FinanceFunctionAdvisoryPage() {
  return (
    <>
      <JsonLd schema={buildServiceSchema({
        name: "Finance Function Advisory",
        description: "Finance transformation and operational improvement including ERP implementation, process redesign and reporting enhancement.",
        url: `${SITE_URL}/finance-function-advisory`,
      })} />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Finance Function Advisory", url: `${SITE_URL}/finance-function-advisory` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Finance Function Advisory" }]} /></div>
          <div className="max-w-3xl">
            <div className="inline-block text-sm font-semibold text-brand-green-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              Finance Function Advisory
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Turn Your Finance Function Into a{" "}
              <span className="text-brand-green-400">Strategic Asset</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-8">
              Most SME finance functions are set up to comply, not to perform. Marginfy
              helps you transform your finance operation — from manual, slow and reactive
              to automated, real-time and commercially focused.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link href="/book-a-call">Discuss Your Finance Function <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {areas.map((a) => (
              <div key={a.title} className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                <div className="w-10 h-10 rounded-lg bg-brand-blue-50 flex items-center justify-center mb-4">
                  <a.icon className="w-5 h-5 text-brand-blue-600" />
                </div>
                <h3 className="font-bold text-brand-navy mb-2">{a.title}</h3>
                <p className="text-sm text-slate-600">{a.desc}</p>
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
