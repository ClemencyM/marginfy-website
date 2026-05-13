import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SITE_URL } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Finance & Profitability Glossary | Marginfy",
  description:
    "Plain-English definitions of key finance and profitability terms. Gross margin, contribution margin, unit economics, CAC, LTV, EBITDA and more.",
  path: "/glossary",
});

const terms = [
  {
    term: "Gross Margin",
    definition: "The percentage of revenue remaining after deducting the direct cost of goods or services sold (COGS). Calculated as: (Revenue − COGS) ÷ Revenue × 100. Gross margin measures the efficiency of production and pricing before overhead costs.",
  },
  {
    term: "Contribution Margin",
    definition: "Revenue minus all variable costs associated with a product or service. Contribution margin shows how much each unit of sale contributes toward fixed costs and profit. It is a more precise profitability measure than gross margin when fixed cost allocation is complex.",
  },
  {
    term: "EBITDA",
    definition: "Earnings Before Interest, Tax, Depreciation and Amortisation. A common measure of operating profitability that removes the impact of financing decisions, tax structures and non-cash accounting charges. Widely used in business valuation and performance benchmarking.",
  },
  {
    term: "Unit Economics",
    definition: "The direct revenues and costs associated with a single unit of business — a product sold, a customer acquired, or a service delivered. Good unit economics means each unit is profitable before overheads. Poor unit economics means scale makes the problem worse, not better.",
  },
  {
    term: "Customer Acquisition Cost (CAC)",
    definition: "The total cost of acquiring a new customer, including all marketing and sales expenses divided by the number of new customers acquired in a given period. A critical metric for assessing the sustainability of a customer acquisition strategy.",
  },
  {
    term: "Customer Lifetime Value (LTV)",
    definition: "The total net profit expected from a customer over the entire duration of the relationship. The LTV:CAC ratio (typically expressed as a multiple) is a key indicator of business model health. A ratio of 3:1 or higher is generally considered healthy.",
  },
  {
    term: "Fractional CFO",
    definition: "An experienced Chief Financial Officer who works with a business on a part-time or retained basis rather than as a full-time employee. A Fractional CFO provides CFO-level strategy, reporting, forecasting and commercial advice at a fraction of the cost of a full-time executive.",
  },
  {
    term: "Three-Way Financial Model",
    definition: "An integrated financial model comprising a Profit & Loss statement, Balance Sheet and Cash Flow statement — all linked and driven by the same assumptions. The three-way model is the gold standard for financial planning and is typically required for bank funding, investor due diligence and board reporting.",
  },
  {
    term: "Working Capital",
    definition: "Current assets minus current liabilities. Working capital measures a business's short-term liquidity — its ability to meet obligations as they fall due. Poor working capital management is a leading cause of business failure even in profitable businesses.",
  },
  {
    term: "Cash Flow Forecast",
    definition: "A forward projection of cash inflows and outflows over a defined period (typically 13 weeks, 12 months, or 3 years). A cash flow forecast is the single most important tool for preventing cash crises and planning for growth.",
  },
  {
    term: "Menu Engineering",
    definition: "A profitability analysis methodology applied to restaurant and food service menus. Items are classified by contribution margin (profitability) and popularity, then organised into four quadrants: Stars (high profit, high popularity), Plowhorses (low profit, high popularity), Puzzles (high profit, low popularity) and Dogs (low profit, low popularity).",
  },
  {
    term: "Pricing Strategy",
    definition: "The approach a business takes to setting prices for its products or services. Common pricing strategies include cost-plus pricing, value-based pricing, competitive pricing, penetration pricing and skimming pricing. An effective pricing strategy balances volume, margin and market positioning.",
  },
  {
    term: "ERP (Enterprise Resource Planning)",
    definition: "An integrated software system that manages core business processes including finance, inventory, purchasing, payroll and reporting. Common ERP systems for SMEs include Xero, MYOB, Sage Intacct and NetSuite. ERP implementation is a significant undertaking that, when done well, dramatically improves financial visibility.",
  },
  {
    term: "NDIS Price Guide",
    definition: "The document published by the NDIS Quality and Safeguards Commission that sets maximum prices for NDIS-funded supports. Registered NDIS providers must price their supports at or below these limits. The Price Guide is updated annually and affects the revenue potential and business model of every NDIS provider.",
  },
  {
    term: "Price Elasticity",
    definition: "A measure of how sensitive consumer demand is to changes in price. Products with high price elasticity see significant volume changes when prices change. Products with low elasticity (inelastic demand) can sustain price increases with minimal volume impact. Understanding price elasticity is critical for pricing decisions.",
  },
];

const faqSchema = buildFAQSchema(
  terms.slice(0, 10).map((t) => ({ question: `What is ${t.term}?`, answer: t.definition }))
);

export default function GlossaryPage() {
  const grouped = terms.reduce<Record<string, typeof terms>>((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  }, {});

  const letters = Object.keys(grouped).sort();

  return (
    <>
      <JsonLd schema={faqSchema} />
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Glossary", url: `${SITE_URL}/glossary` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Glossary" }]} /></div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Finance & Profitability Glossary
            </h1>
            <p className="text-lg text-white/75">
              Plain-English definitions of key finance and profitability terms for
              founder-led businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {letters.map((letter) => (
              <div key={letter} id={letter}>
                <h2 className="text-3xl font-bold text-brand-blue-200 mb-4">{letter}</h2>
                <div className="space-y-6">
                  {grouped[letter].map((term) => (
                    <div key={term.term} className="border-b border-slate-100 pb-6 last:border-0">
                      <h3 className="font-bold text-brand-navy text-lg mb-2">{term.term}</h3>
                      <p className="text-slate-600 leading-relaxed">{term.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
