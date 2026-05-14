"use client";

import { motion } from "framer-motion";
import { TrendingDown, HelpCircle, Waves, BarChart3, Clock, Eye } from "lucide-react";

const pains = [
  {
    icon: TrendingDown,
    title: "Revenue grows, profits don't",
    description:
      "You're hitting new revenue records but margins are thinning. Growth is eating cash rather than generating it.",
  },
  {
    icon: HelpCircle,
    title: "Pricing based on gut feel",
    description:
      "Prices were set years ago and haven't changed. You're not sure if you're covering true costs or leaving money behind.",
  },
  {
    icon: Waves,
    title: "Cash flow is unpredictable",
    description:
      "You're profitable on paper but constantly watching the bank account. Timing of cash in and out is a mystery.",
  },
  {
    icon: BarChart3,
    title: "No visibility by product or channel",
    description:
      "You know overall revenue and cost — but not which products, customers or channels are actually driving profit.",
  },
  {
    icon: Clock,
    title: "Reporting looks backward",
    description:
      "Month-end reports arrive late and describe history. There's no forward-looking view to guide decisions.",
  },
  {
    icon: Eye,
    title: "No strategic finance partner",
    description:
      "Your accountant does compliance. Your bookkeeper does transactions. But no one is advising on the commercial decisions that drive growth.",
  },
];

export function PainPoints() {
  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Subtle teal glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal-400/8 rounded-full blur-3xl pointer-events-none" />
      {/* Subtle blue glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-semibold text-brand-teal-400 bg-brand-teal-400/10 border border-brand-teal-400/20 px-3 py-1 rounded-full mb-4">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Growing Revenue Doesn&apos;t Guarantee{" "}
            <span className="text-brand-teal-400">Growing Profits</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Most founder-led businesses hit a wall where top-line growth stops translating
            into bottom-line results. These are the warning signs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-teal-400/40 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-teal-400/15 border border-brand-teal-400/20 flex items-center justify-center mb-4 group-hover:bg-brand-teal-400/25 transition-colors">
                <pain.icon className="w-5 h-5 text-brand-teal-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{pain.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{pain.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-brand-teal-400/10 border border-brand-teal-400/20 max-w-2xl mx-auto text-center"
        >
          <p className="text-white/80 font-medium">
            Sound familiar? You&apos;re not alone — and the solution isn&apos;t working harder.
            It&apos;s working with better financial intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
