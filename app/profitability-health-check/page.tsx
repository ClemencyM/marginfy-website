import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { SITE_URL } from "@/lib/utils";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Free Profitability Health Check | Marginfy",
  description:
    "Book a free profitability health check with Marginfy. In 30 minutes, identify your biggest margin opportunities and get a clear picture of your profitability.",
  path: "/profitability-health-check",
});

const includes = [
  "30-minute call with Clemency Mdaya",
  "Review of your current revenue and cost structure",
  "Identification of key margin improvement opportunities",
  "Honest assessment of your pricing strategy",
  "Clear recommendations for next steps",
  "No obligation — genuinely free",
];

export default function ProfitabilityHealthCheckPage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Profitability Health Check", url: `${SITE_URL}/profitability-health-check` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Profitability Health Check" }]} /></div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-400 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green-400 animate-pulse" />
              Free — No Obligation
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Free Profitability Health Check
            </h1>
            <p className="text-xl text-white/80 mb-4">
              In 30 minutes, we&apos;ll identify your biggest margin opportunities.
            </p>
            <p className="text-lg text-white/65 max-w-2xl">
              A free, no-obligation conversation with Clemency Mdaya. You&apos;ll walk
              away with a clear picture of where your profits are going — and what to do about it.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-6">What&apos;s Included</h2>
              <ul className="space-y-3 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 rounded-xl bg-brand-blue-50 border border-brand-blue-100">
                <p className="font-semibold text-brand-navy mb-2">Prefer to book a time directly?</p>
                <Button variant="default" asChild className="w-full">
                  <Link href="/book-a-call">
                    Book via Calendar
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-6">
                Tell Us About Your Business
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
