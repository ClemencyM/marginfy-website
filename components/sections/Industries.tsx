"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, UtensilsCrossed, ShoppingCart, Heart, Calendar, Briefcase, Package } from "lucide-react";

const industries = [
  {
    icon: UtensilsCrossed,
    name: "Hospitality",
    description: "Menu engineering, food cost analysis, venue profitability and pricing optimisation for restaurants, cafes and accommodation.",
    href: "/industries/hospitality",
    highlight: "Menu & pricing analysis",
  },
  {
    icon: ShoppingCart,
    name: "eCommerce",
    description: "SKU profitability, customer LTV, channel margins and unit economics for online retailers and DTC brands.",
    href: "/industries/ecommerce",
    highlight: "Unit economics & LTV",
  },
  {
    icon: Heart,
    name: "NDIS Providers",
    description: "NDIS pricing compliance, funding optimisation, participant profitability and finance function setup for NDIS providers.",
    href: "/industries/ndis",
    highlight: "Pricing compliance",
  },
  {
    icon: Calendar,
    name: "Events & Entertainment",
    description: "Event-level P&L modelling, ticket pricing strategy and portfolio profitability for event organisers and entertainment businesses.",
    href: "/industries/events",
    highlight: "Event-level modelling",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Time-based pricing, project profitability, utilisation analysis and financial planning for consulting and professional services firms.",
    href: "/industries/professional-services",
    highlight: "Project profitability",
  },
  {
    icon: Package,
    name: "Consumer Products",
    description: "Landed cost analysis, channel profitability, wholesale pricing and margin optimisation for consumer brands selling online and through retail partners.",
    href: "/industries/consumer-products",
    highlight: "Wholesale margins & landed costs",
  },
];

export function Industries() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-semibold text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-full mb-4">
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy">
            Deep Sector Expertise,{" "}
            <span className="text-gradient-blue">Practical Results</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Marginfy brings specific industry knowledge to every engagement — not generic
            financial advice, but sector-relevant commercial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={industry.href}
                className="group flex flex-col h-full p-6 rounded-2xl border border-slate-200 hover:border-brand-blue-200 hover:shadow-md transition-all duration-300 bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-50 flex items-center justify-center group-hover:bg-brand-blue-100 transition-colors">
                    <industry.icon className="w-5 h-5 text-brand-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-brand-green-700 bg-brand-green-50 px-2.5 py-1 rounded-full">
                    {industry.highlight}
                  </span>
                </div>

                <h3 className="font-bold text-brand-navy text-lg mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{industry.description}</p>

                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-blue-600 group-hover:gap-2.5 transition-all">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
