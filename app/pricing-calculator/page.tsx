"use client";

import { useState } from "react";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowRight, Calculator, TrendingUp, AlertCircle } from "lucide-react";

// Note: metadata export must be in a server component — for a "use client" page,
// put metadata in a parent layout or use a wrapper pattern. Shown here for reference.

export default function PricingCalculatorPage() {
  const [cogs, setCogs] = useState<number | "">("");
  const [overhead, setOverhead] = useState<number | "">("");
  const [targetMargin, setTargetMargin] = useState<number | "">(30);
  const [currentPrice, setCurrentPrice] = useState<number | "">("");

  const totalCost = (Number(cogs) || 0) + (Number(overhead) || 0);
  const suggestedPrice =
    totalCost > 0 && Number(targetMargin) > 0 && Number(targetMargin) < 100
      ? totalCost / (1 - Number(targetMargin) / 100)
      : null;
  const actualMargin =
    currentPrice && totalCost > 0
      ? ((Number(currentPrice) - totalCost) / Number(currentPrice)) * 100
      : null;
  const pricingGap = suggestedPrice && currentPrice
    ? Number(currentPrice) - suggestedPrice
    : null;

  return (
    <>
      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Pricing Calculator" }]} /></div>
          <div className="max-w-2xl">
            <div className="inline-block text-sm font-semibold text-brand-green-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              Free Tool
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Pricing Calculator
            </h1>
            <p className="text-lg text-white/75">
              Enter your costs and target margin to calculate the right price for your
              product or service.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-brand-navy">Enter Your Numbers</h2>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Direct Cost (COGS) per Unit — AUD</label>
                <Input
                  type="number"
                  placeholder="e.g. 45.00"
                  min={0}
                  value={cogs}
                  onChange={(e) => setCogs(e.target.value === "" ? "" : Number(e.target.value))}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Allocated Overhead per Unit — AUD</label>
                <Input
                  type="number"
                  placeholder="e.g. 15.00"
                  min={0}
                  value={overhead}
                  onChange={(e) => setOverhead(e.target.value === "" ? "" : Number(e.target.value))}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Target Gross Margin — %</label>
                <Input
                  type="number"
                  placeholder="e.g. 30"
                  min={0}
                  max={99}
                  value={targetMargin}
                  onChange={(e) => setTargetMargin(e.target.value === "" ? "" : Number(e.target.value))}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Current Selling Price — AUD (optional)</label>
                <Input
                  type="number"
                  placeholder="e.g. 89.00"
                  min={0}
                  value={currentPrice}
                  onChange={(e) => setCurrentPrice(e.target.value === "" ? "" : Number(e.target.value))}
                />
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-brand-navy">Your Results</h2>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-medium text-slate-500 mb-1">Total Cost per Unit</p>
                <p className="text-2xl font-bold text-brand-navy">
                  {totalCost > 0 ? `$${totalCost.toFixed(2)}` : "—"}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-brand-blue-50 border border-brand-blue-200">
                <div className="flex items-center gap-2 mb-1">
                  <Calculator className="w-4 h-4 text-brand-blue-600" />
                  <p className="text-xs font-medium text-brand-blue-700">Suggested Selling Price</p>
                </div>
                <p className="text-3xl font-bold text-brand-blue-700">
                  {suggestedPrice ? `$${suggestedPrice.toFixed(2)}` : "—"}
                </p>
                {suggestedPrice && (
                  <p className="text-xs text-brand-blue-600 mt-1">
                    To achieve {targetMargin}% gross margin
                  </p>
                )}
              </div>

              {actualMargin !== null && (
                <div className={`p-5 rounded-xl border ${actualMargin < 0 ? "bg-red-50 border-red-200" : actualMargin < 20 ? "bg-amber-50 border-amber-200" : "bg-brand-green-50 border-brand-green-200"}`}>
                  <div className="flex items-center gap-2 mb-1">
                    {actualMargin < 20 ? (
                      <AlertCircle className={`w-4 h-4 ${actualMargin < 0 ? "text-red-500" : "text-amber-500"}`} />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-brand-green-600" />
                    )}
                    <p className="text-xs font-medium text-slate-600">Your Actual Gross Margin</p>
                  </div>
                  <p className={`text-3xl font-bold ${actualMargin < 0 ? "text-red-600" : actualMargin < 20 ? "text-amber-600" : "text-brand-green-700"}`}>
                    {actualMargin.toFixed(1)}%
                  </p>
                </div>
              )}

              {pricingGap !== null && (
                <div className="p-4 rounded-xl bg-slate-100 text-sm text-slate-600">
                  {pricingGap < -1 ? (
                    <p>Your current price is <strong className="text-red-600">${Math.abs(pricingGap).toFixed(2)} below</strong> the suggested price for your target margin.</p>
                  ) : pricingGap > 1 ? (
                    <p>Your current price is <strong className="text-brand-green-600">${pricingGap.toFixed(2)} above</strong> the minimum required for your target margin.</p>
                  ) : (
                    <p>Your current price is on target for your margin goal.</p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 text-center">
            <p className="text-brand-navy font-semibold mb-2">
              Want a complete pricing analysis across your whole product range?
            </p>
            <p className="text-slate-600 text-sm mb-4">
              A Marginfy Pricing & Profitability Review covers every product, channel and
              customer segment — giving you a complete picture.
            </p>
            <Button variant="cta" asChild>
              <Link href="/pricing-profitability">
                Learn About Pricing Reviews
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
