"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Search, LineChart, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Users,
    title: "Fractional CFO Services",
    description:
      "CFO-level strategic finance expertise on a flexible retainer. Monthly reporting, forecasting, cash flow management, board reporting and strategic advice — without the full-time cost.",
    href: "/fractional-cfo",
    price: "From AUD $1,500/month",
    highlights: ["Monthly management reporting", "Cash flow management", "Board reporting", "Strategic finance advice"],
    accent: "blue" as const,
  },
  {
    icon: Search,
    title: "Pricing & Profitability Reviews",
    description:
      "A deep-dive commercial analysis of your pricing, product profitability and unit economics. Identify exactly where you make and lose money — then optimise.",
    href: "/pricing-profitability",
    price: "From AUD $3,500",
    highlights: ["Pricing strategy", "Product & channel profitability", "Margin optimisation", "Scenario modelling"],
    accent: "teal" as const,
  },
  {
    icon: LineChart,
    title: "Financial Modelling",
    description:
      "Dynamic, decision-ready financial models for pricing, forecasting, investment appraisal and strategic planning. Built to be used, not filed away.",
    href: "/financial-modelling",
    price: "From AUD $2,500",
    highlights: ["Three-way financial models", "Pricing models", "Scenario analysis", "Investment cases"],
    accent: "blue" as const,
  },
  {
    icon: Cog,
    title: "Finance Function Advisory",
    description:
      "Transform your finance function from a compliance activity into a strategic asset. ERP implementation, process redesign, controls improvement and reporting enhancement.",
    href: "/finance-function-advisory",
    price: "Project-based",
    highlights: ["ERP implementation", "Process redesign", "Controls & governance", "Reporting enhancement"],
    accent: "teal" as const,
  },
];

const accentMap = {
  blue: {
    iconBg:    "bg-brand-blue-50",
    iconColor: "text-brand-blue-600",
    badge:     "text-brand-blue-600 bg-brand-blue-50",
    border:    "hover:border-brand-blue-200",
    dot:       "bg-brand-blue-500",
    check:     "text-brand-blue-500",
    topBar:    "bg-brand-blue-500",
  },
  teal: {
    iconBg:    "bg-brand-teal-50",
    iconColor: "text-brand-teal-500",
    badge:     "text-brand-teal-600 bg-brand-teal-50",
    border:    "hover:border-brand-teal-200",
    dot:       "bg-brand-teal-400",
    check:     "text-brand-teal-500",
    topBar:    "bg-brand-teal-400",
  },
};

export function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-semibold text-brand-teal-600 bg-brand-teal-50 px-3 py-1 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy">
            Everything You Need to{" "}
            <span className="text-gradient-teal">Improve Profitability</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From one-off pricing reviews to ongoing Fractional CFO support, Marginfy
            delivers CFO-level expertise scaled to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const a = accentMap[service.accent];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`group relative p-8 rounded-2xl border border-slate-200 bg-white ${a.border} hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${a.topBar}`} />

                <div className="flex items-start justify-between mb-6 pt-2">
                  <div className={`w-12 h-12 rounded-xl ${a.iconBg} flex items-center justify-center`}>
                    <service.icon className={`w-6 h-6 ${a.iconColor}`} />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${a.badge}`}>
                    {service.price}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.dot}`} />
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${a.iconColor} hover:opacity-80 group/link`}
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Standard advisory rate: AUD $200/hr · Minimum engagement: AUD $2,500
          </p>
          <Button variant="default" size="lg" asChild>
            <Link href="/book-a-call">
              Schedule a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
