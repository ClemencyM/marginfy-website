"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Building2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
  { icon: Building2, label: "Australian Grand Prix Corporation", role: "Division Manager – Finance (Financial Controller)" },
  { icon: TrendingUp, label: "$200M+ Annual Revenue", role: "Commercial finance management" },
  { icon: Award, label: "15+ Years Experience", role: "Commercial finance, pricing & strategic CFO" },
];

export function FounderSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue-800 to-brand-blue-600 aspect-[4/5] max-w-md mx-auto lg:mx-0 flex items-end">
              {/* Placeholder for founder photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/40">
                  <div className="w-24 h-24 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/60">CM</span>
                  </div>
                  <p className="text-sm">Add founder photo here</p>
                </div>
              </div>

              {/* Credential card overlay */}
              <div className="relative z-10 m-6 p-5 rounded-xl bg-white shadow-xl">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-full bg-brand-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">CM</span>
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy text-sm">Clemency Mdaya</p>
                    <p className="text-xs text-slate-500">Founder & Fractional CFO</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block text-sm font-semibold text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-full mb-4">
              Meet the Founder
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Clemency Mdaya
            </h2>
            <p className="text-brand-blue-600 font-semibold mb-6">
              Founder & Fractional CFO · Melbourne, Australia
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Clemency is a senior finance executive with 15+ years of experience in
              commercial finance, pricing strategy, profitability analysis and strategic
              planning. Most recently Division Manager – Finance at the Australian Grand
              Prix Corporation, where she managed finance across $200M+ in annual revenue.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Marginfy was founded to give founder-led businesses access to the same
              calibre of financial leadership that large corporations enjoy — at a
              fraction of the cost, and with a far deeper commercial focus.
            </p>

            <div className="space-y-4 mb-8">
              {credentials.map((cred) => (
                <div key={cred.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <cred.icon className="w-4 h-4 text-brand-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy text-sm">{cred.label}</p>
                    <p className="text-xs text-slate-500">{cred.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button variant="default" asChild>
                <Link href="/about">
                  Full Profile
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/book-a-call">Book a Call</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
