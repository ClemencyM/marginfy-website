"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart2, Target, Zap, Brain, TrendingUp, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: BarChart2, label: "Product Profitability Analysis" },
  { icon: Target, label: "Customer Profitability Scoring" },
  { icon: PieChart, label: "Margin Diagnostics" },
  { icon: TrendingUp, label: "Pricing Optimisation" },
  { icon: Zap, label: "Scenario Modelling" },
  { icon: Brain, label: "AI-Generated Insights" },
];

export function SoftwareSection() {
  return (
    <section className="section-padding bg-hero relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue-400/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block text-sm font-semibold text-brand-green-400 bg-white/10 px-3 py-1 rounded-full mb-4 border border-white/20">
              Marginfy Software
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Profitability Intelligence Software Built for{" "}
              <span className="text-brand-green-400">Decision-Makers</span>
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Stop waiting for month-end reports. Marginfy Software gives you
              real-time visibility into your margins, customer profitability and
              pricing performance — with AI-generated insights that tell you exactly
              what to do next.
            </p>
            <p className="text-white/60 text-base mb-8 italic">
              &quot;Your CFO in your pocket.&quot;
            </p>
            <div className="flex gap-3">
              <Button variant="cta" size="lg" asChild>
                <Link href="/software">
                  Explore the Platform
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link href="/book-a-call">Request a Demo</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="p-5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-colors"
              >
                <feature.icon className="w-6 h-6 text-brand-green-400 mb-3" />
                <p className="text-white font-medium text-sm">{feature.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
