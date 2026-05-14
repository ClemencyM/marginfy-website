"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, TrendingUp, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
  { icon: Building2, label: "Australian Grand Prix Corporation", role: "Division Manager – Finance (Financial Controller)" },
  { icon: TrendingUp, label: "$200M+ Annual Revenue", role: "Commercial finance management" },
  { icon: Award, label: "15+ Years Experience", role: "Commercial finance, pricing & strategic CFO" },
];

const highlights = [
  "Managed finance across $200M+ revenue operations",
  "Board, CFO and executive reporting",
  "ERP implementation leader (Sage Intacct)",
  "Deep expertise across hospitality, eCommerce, events and NDIS",
];

export function FounderSection() {
  return (
    <section className="section-padding" style={{ background: "linear-gradient(135deg, #f8faff 0%, #f0fdf9 100%)" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block text-sm font-semibold text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-full mb-4">
              Founder &amp; Lead Advisor
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-2">
              Meet Clemency Mdaya
            </h2>
            <p className="text-brand-blue-600 font-semibold mb-5">
              Founder &amp; Fractional CFO · Melbourne, Australia
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Clemency is a senior finance executive with 15+ years of experience in
              commercial finance, pricing strategy, profitability analysis and strategic
              planning. Most recently Division Manager – Finance at the Australian Grand
              Prix Corporation, where he managed finance across $200M+ in annual revenue.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Marginfy was founded to give founder-led businesses access to the same
              calibre of financial leadership that large corporations enjoy — at a
              fraction of the cost, and with a far deeper commercial focus.
            </p>

            <div className="space-y-2.5 mb-8">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{h}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button variant="default" asChild>
                <Link href="/about">
                  Learn More About Clemency
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/book-a-call">Book a Call</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right — founder photo */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-2xl">
              <Image
                src="/images/clemency-mdaya.jpg"
                alt="Clemency Mdaya — Founder & Fractional CFO, Marginfy"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 480px"
                priority
              />
              {/* Subtle gradient overlay at bottom for card */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-navy/80 to-transparent" />

              {/* Name card overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-teal-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">CM</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Clemency Mdaya</p>
                    <p className="text-white/70 text-xs">Founder &amp; Fractional CFO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative teal accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10 opacity-40"
              style={{ background: "linear-gradient(135deg, #3ECBA0, #3D55D6)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
