"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center rounded-3xl bg-hero p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-green-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-block text-sm font-semibold text-brand-green-400 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              Get Started Today
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Find Your{" "}
              <span className="text-brand-green-400">Profit Leaks?</span>
            </h2>
            <p className="text-white/75 text-lg mb-10 leading-relaxed">
              Book a free profitability review. In 30 minutes, we&apos;ll identify
              your biggest margin opportunities and outline exactly how Marginfy can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link href="/profitability-health-check">
                  Book Free Profitability Review
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link href="/contact">Send Us a Message</Link>
              </Button>
            </div>
            <p className="text-white/50 text-sm mt-6">
              No commitment. No hard sell. Just a clear picture of your profitability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
