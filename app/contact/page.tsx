import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { SITE_URL } from "@/lib/utils";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Contact Marginfy | Fractional CFO Melbourne",
  description:
    "Get in touch with Marginfy. Contact Clemency Mdaya for Fractional CFO services, profitability reviews or financial modelling. Melbourne and Australia-wide.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Contact", url: `${SITE_URL}/contact` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Contact" }]} /></div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-white/75">
              Ready to improve your margins? Tell us about your business and
              we&apos;ll be in touch within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold text-brand-navy mb-6">Contact Details</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-brand-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Email</p>
                    <a href="mailto:admin@marginfy.com" className="text-brand-blue-600 hover:underline text-sm">
                      admin@marginfy.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Location</p>
                    <p className="text-sm text-slate-600">Melbourne, VIC, Australia</p>
                    <p className="text-xs text-slate-500 mt-0.5">Australia-wide service delivery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-brand-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Response Time</p>
                    <p className="text-sm text-slate-600">Within 1 business day</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-brand-blue-50 border border-brand-blue-100">
                <p className="text-sm font-semibold text-brand-navy mb-2">
                  Prefer to book directly?
                </p>
                <p className="text-sm text-slate-600 mb-3">
                  Schedule a discovery call at a time that suits you.
                </p>
                <Button variant="default" size="sm" className="w-full" asChild>
                  <Link href="/book-a-call">
                    Book a Call
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-brand-navy mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
