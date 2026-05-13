import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  services: [
    { label: "Fractional CFO Services", href: "/fractional-cfo" },
    { label: "Pricing & Profitability Reviews", href: "/pricing-profitability" },
    { label: "Financial Modelling", href: "/financial-modelling" },
    { label: "Finance Function Advisory", href: "/finance-function-advisory" },
    { label: "Marginfy Software", href: "/software" },
  ],
  industries: [
    { label: "Hospitality", href: "/industries/hospitality" },
    { label: "eCommerce", href: "/industries/ecommerce" },
    { label: "NDIS Providers", href: "/industries/ndis" },
    { label: "Events & Entertainment", href: "/industries/events" },
    { label: "Professional Services", href: "/industries/hospitality" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Profitability Health Check", href: "/profitability-health-check" },
    { label: "Pricing Calculator", href: "/pricing-calculator" },
    { label: "Methodology", href: "/methodology" },
    { label: "How Marginfy Works", href: "/how-marginfy-works" },
    { label: "Manifesto", href: "/manifesto" },
    { label: "Glossary", href: "/glossary" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Discovery Call", href: "/book-a-call" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Ready to Find Your Profit Leaks?
              </h3>
              <p className="text-slate-300 mt-1">
                Book a free profitability review and start improving margins this quarter.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button variant="hero" asChild>
                <Link href="/profitability-health-check">
                  Free Profitability Review
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/book-a-call">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-white">Marginfy</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Fractional CFO Services and Profitability Intelligence for
              growing, founder-led businesses. Melbourne, Australia.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-blue-400" />
                <span>Melbourne, VIC, Australia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue-400" />
                <a
                  href="mailto:admin@marginfy.com"
                  className="hover:text-white transition-colors"
                >
                  admin@marginfy.com
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <FooterColumn title="Services" links={footerLinks.services} />
          <FooterColumn title="Industries" links={footerLinks.industries} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
          <FooterColumn title="Company" links={footerLinks.company} />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Marginfy. All rights reserved. ABN: XX XXX XXX XXX
          </p>
          <p className="text-slate-500 text-sm">
            Fractional CFO Services · Melbourne, Australia · Australia-wide service delivery
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
