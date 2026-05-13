"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustItems = [
  "15+ Years Experience",
  "$200M+ Revenue Managed",
  "Board-Level Reporting",
  "CFO-Level Expertise",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-green-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10 py-32 pt-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 mb-8 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-400 animate-pulse" />
            Fractional CFO Services & Profitability Intelligence
          </motion.div>

          {/* H1 */}
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Increase Your Margins{" "}
            <span className="text-brand-green-400">Without Hiring</span>
            {" "}a Full-Time CFO
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Marginfy helps founder-led businesses uncover profit leaks, optimise
            pricing and improve cash flow — through Fractional CFO services,
            pricing strategy and profitability analysis.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Button variant="cta" size="xl" asChild>
              <Link href="/profitability-health-check">
                Book Free Profitability Review
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <Link href="/fractional-cfo">Explore Services</Link>
            </Button>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-green-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 max-w-3xl mx-auto"
        >
          {[
            { stat: "15+", label: "Years in Finance" },
            { stat: "$200M+", label: "Revenue Managed" },
            { stat: "4", label: "Core Service Areas" },
            { stat: "100%", label: "Founder-Focused" },
          ].map(({ stat, label }) => (
            <div
              key={stat}
              className="text-center p-5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-white">{stat}</div>
              <div className="text-sm text-white/60 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
