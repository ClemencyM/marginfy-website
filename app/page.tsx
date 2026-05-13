import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { SoftwareSection } from "@/components/sections/SoftwareSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { founderSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Fractional CFO Services & Profitability Intelligence",
  description:
    "Marginfy helps founder-led businesses uncover profit leaks, optimise pricing and improve cash flow. Fractional CFO services, pricing strategy and profitability analysis. Melbourne, Australia.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd schema={founderSchema} />
      <Hero />
      <PainPoints />
      <Services />
      <Industries />
      <SoftwareSection />
      <FounderSection />
      <FinalCTA />
    </>
  );
}
