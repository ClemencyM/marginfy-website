import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE_URL } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export const metadata = buildMetadata({
  title: "Marginfy Methodology | How We Improve Profitability",
  description:
    "Marginfy's structured methodology for improving profitability: diagnose, model, implement, monitor. A systematic approach to commercial financial improvement.",
  path: "/methodology",
});

const phases = [
  {
    number: "01",
    title: "Diagnose",
    subtitle: "Understand the current state",
    description:
      "We begin every engagement with a thorough diagnostic. This involves reviewing your financial statements, understanding your cost structure, analysing your pricing, and identifying the key commercial drivers of your business. We don't make recommendations without first understanding the numbers.",
    outputs: [
      "Finance function assessment",
      "Revenue and margin analysis",
      "Cost structure mapping",
      "Key risk and opportunity identification",
    ],
  },
  {
    number: "02",
    title: "Model",
    subtitle: "Quantify the opportunities",
    description:
      "Once we understand the current state, we build financial models to quantify the impact of potential changes. This removes guesswork from decision-making — every recommendation is backed by a clear, quantified financial case. Models are built to be used, updated and maintained.",
    outputs: [
      "Contribution margin analysis",
      "Pricing sensitivity models",
      "Scenario modelling",
      "Financial projections",
    ],
  },
  {
    number: "03",
    title: "Implement",
    subtitle: "Execute with precision",
    description:
      "Analysis without action has no value. Marginfy works alongside your team to implement recommendations — whether that's repricing products, redesigning finance processes, implementing a new system, or building new reporting. We stay involved until changes are embedded.",
    outputs: [
      "Pricing changes implemented",
      "Finance process improvements",
      "System configurations",
      "Team training and handover",
    ],
  },
  {
    number: "04",
    title: "Monitor",
    subtitle: "Track results and iterate",
    description:
      "Business conditions change. A good financial framework doesn't just measure outcomes — it adapts to new information. Through ongoing Fractional CFO services or periodic reviews, we track the impact of changes and continuously improve the model.",
    outputs: [
      "Monthly management reporting",
      "KPI tracking against targets",
      "Variance analysis",
      "Continuous improvement cycle",
    ],
  },
];

export default function MethodologyPage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Methodology", url: `${SITE_URL}/methodology` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Methodology" }]} /></div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              The Marginfy Methodology
            </h1>
            <p className="text-lg text-white/75 max-w-2xl">
              A systematic, four-phase approach to improving profitability. Grounded in
              commercial financial analysis, not generic advice.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-16">
            {phases.map((phase, i) => (
              <div key={phase.number} className="grid sm:grid-cols-3 gap-8 items-start">
                <div className="sm:col-span-1">
                  <div className="text-6xl font-bold text-brand-blue-100 leading-none mb-2">
                    {phase.number}
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy">{phase.title}</h2>
                  <p className="text-brand-blue-600 font-medium text-sm mt-1">{phase.subtitle}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-slate-600 leading-relaxed mb-6">{phase.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {phase.outputs.map((output) => (
                      <div key={output} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-green-500 flex-shrink-0" />
                        {output}
                      </div>
                    ))}
                  </div>
                  {i < phases.length - 1 && (
                    <div className="mt-8 h-px bg-slate-200" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
