import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CalendlyWidget } from "@/components/CalendlyWidget";
import { SITE_URL } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export const metadata = buildMetadata({
  title: "Book a Discovery Call | Marginfy Fractional CFO",
  description:
    "Schedule a free 30-minute discovery call with Clemency Mdaya. Discuss your finance challenges and explore how Marginfy can help improve your margins.",
  path: "/book-a-call",
});

const whatToExpect = [
  "30-minute video call with Clemency Mdaya",
  "Discussion of your current finance challenges",
  "Overview of how Marginfy can help",
  "Clear next steps — no obligation",
];

export default function BookACallPage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Book a Call", url: `${SITE_URL}/book-a-call` },
      ])} />

      <section className="bg-hero pt-32 pb-16">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Book a Call" }]} /></div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Book a Discovery Call
            </h1>
            <p className="text-lg text-white/75">
              A free 30-minute call to discuss your business, your finance challenges,
              and how Marginfy can help you improve profitability.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-xl font-bold text-brand-navy mb-4">What to Expect</h2>
              <ul className="space-y-3 mb-8">
                {whatToExpect.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-brand-navy">Clemency Mdaya</span>
                  {" "}· Founder & Fractional CFO
                  <br />
                  15+ years commercial finance experience
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <CalendlyWidget />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
