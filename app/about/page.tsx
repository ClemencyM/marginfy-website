import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { founderSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";
import {
  CheckCircle2,
  Award,
  Building2,
  BarChart3,
  Shield,
  Cpu,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "About Clemency Mdaya — Fractional CFO Melbourne",
  description:
    "Meet Clemency Mdaya, founder of Marginfy. 15+ years senior finance experience including $200M+ revenue management at the Australian Grand Prix Corporation. Fractional CFO, Melbourne.",
  path: "/about",
});

const credentials = [
  {
    icon: Building2,
    title: "Australian Grand Prix Corporation",
    detail: "Division Manager – Finance (Financial Controller)",
    desc: "Led finance function for Australia's largest annual sporting event. Managed $200M+ in annual revenue across ticketing, hospitality, sponsorship and operations.",
  },
  {
    icon: BarChart3,
    title: "Commercial Finance Leadership",
    detail: "Pricing, profitability and strategic planning",
    desc: "Deep expertise in pricing strategy, product profitability analysis, contribution margin modelling and commercial decision support.",
  },
  {
    icon: Shield,
    title: "Board, Audit & Governance",
    detail: "Board reporting, audit and compliance leadership",
    desc: "Extensive experience preparing board-level financial reporting, managing external audit relationships, and leading internal controls frameworks.",
  },
  {
    icon: Cpu,
    title: "Finance Systems & ERP",
    detail: "Sage Intacct & Martus implementation",
    desc: "Led end-to-end ERP implementation (Sage Intacct) and forecasting systems rollout (Martus), delivering real-time financial visibility and process efficiency.",
  },
  {
    icon: Users,
    title: "Cross-Sector Experience",
    detail: "Hospitality, eCommerce, NDIS, events, charities",
    desc: "Experience across diverse industries gives Marginfy deep sector intelligence — not just accounting knowledge, but real commercial judgment.",
  },
];

const values = [
  {
    title: "Commercial Focus",
    desc: "Finance should drive decisions, not just describe them. Every engagement is anchored in commercial outcomes.",
  },
  {
    title: "Clarity Over Complexity",
    desc: "Complex financials should be made simple. We translate numbers into clear, actionable insights.",
  },
  {
    title: "Founder-Friendly",
    desc: "We work alongside founders, not above them. Our role is to make you smarter about your own business.",
  },
  {
    title: "Results-Oriented",
    desc: "We measure success by margin improvement, cash flow clarity and strategic confidence — not hours billed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={founderSchema} />
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "About", url: `${SITE_URL}/about` },
        ])}
      />

      {/* Hero */}
      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "About" }]} />
          </div>
          <div className="max-w-3xl">
            <div className="inline-block text-sm font-semibold text-brand-green-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              About the Founder
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Clemency Mdaya
            </h1>
            <p className="text-xl text-white/80 mb-4 font-medium">
              Founder & Fractional CFO · Melbourne, Australia
            </p>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Senior finance executive with 15+ years of experience in commercial finance,
              pricing strategy, profitability analysis and strategic financial leadership.
              Founder of Marginfy — bringing CFO-level expertise to founder-led businesses
              without the full-time cost.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 mb-6">
                  <h3 className="font-bold text-brand-navy mb-4">Quick Facts</h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      ["Experience", "15+ years"],
                      ["Revenue Managed", "$200M+"],
                      ["Location", "Melbourne, VIC"],
                      ["Service Area", "Australia-wide"],
                      ["Specialisation", "Profitability & Pricing"],
                    ].map(([label, value]) => (
                      <li key={label} className="flex justify-between">
                        <span className="text-slate-500">{label}</span>
                        <span className="font-semibold text-slate-800">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="cta" className="w-full" asChild>
                  <Link href="/book-a-call">
                    Book a Discovery Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Main */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">About Marginfy</h2>
              <div className="prose prose-slate max-w-none mb-10">
                <p>
                  Marginfy was founded on a simple but powerful observation: most founder-led
                  businesses don&apos;t have access to the quality of financial thinking that
                  drives better decisions. They have accountants for tax and bookkeepers for
                  transactions — but no one in their corner thinking strategically about
                  pricing, margins, cash flow and growth.
                </p>
                <p>
                  The result? Revenue grows but profits don&apos;t. Cash flow remains
                  unpredictable. Pricing decisions are made on instinct. And the founder is
                  left managing the business without a clear picture of where the money
                  actually comes from.
                </p>
                <p>
                  Marginfy changes that. Through a combination of Fractional CFO services,
                  pricing and profitability consulting, financial modelling and proprietary
                  software, Marginfy delivers the commercial financial intelligence that
                  growing businesses need — at a price point that makes sense.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-brand-navy mb-6">
                Experience & Credentials
              </h2>
              <div className="space-y-5 mb-12">
                {credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-50 flex items-center justify-center flex-shrink-0">
                      <cred.icon className="w-5 h-5 text-brand-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy">{cred.title}</h3>
                      <p className="text-sm text-brand-blue-600 font-medium mb-1">{cred.detail}</p>
                      <p className="text-sm text-slate-600">{cred.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-brand-navy mb-6">Our Values</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {values.map((v) => (
                  <div key={v.title} className="p-5 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green-600" />
                      <h3 className="font-semibold text-brand-navy">{v.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
