"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { label: "Fractional CFO Services", href: "/fractional-cfo", description: "Ongoing strategic finance support" },
  { label: "Pricing & Profitability Reviews", href: "/pricing-profitability", description: "Uncover margin leaks" },
  { label: "Financial Modelling", href: "/financial-modelling", description: "Dynamic models for growth decisions" },
  { label: "Finance Function Advisory", href: "/finance-function-advisory", description: "Finance transformation" },
  { label: "Marginfy Software", href: "/software", description: "Profitability intelligence platform" },
];

const industries = [
  { label: "Hospitality", href: "/industries/hospitality" },
  { label: "eCommerce", href: "/industries/ecommerce" },
  { label: "NDIS Providers", href: "/industries/ndis" },
  { label: "Events & Entertainment", href: "/industries/events" },
];

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Methodology", href: "/methodology" },
  { label: "How Marginfy Works", href: "/how-marginfy-works" },
  { label: "Glossary", href: "/glossary" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              scrolled ? "text-brand-navy" : "text-white"
            )}>
              Marginfy
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <NavDropdown
            label="Services"
            items={services}
            scrolled={scrolled}
            isOpen={activeDropdown === "services"}
            onToggle={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
            onClose={() => setActiveDropdown(null)}
          />
          <NavDropdown
            label="Industries"
            items={industries}
            scrolled={scrolled}
            isOpen={activeDropdown === "industries"}
            onToggle={() => setActiveDropdown(activeDropdown === "industries" ? null : "industries")}
            onClose={() => setActiveDropdown(null)}
          />
          <NavDropdown
            label="Resources"
            items={resources}
            scrolled={scrolled}
            isOpen={activeDropdown === "resources"}
            onToggle={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
            onClose={() => setActiveDropdown(null)}
          />
          <NavLink href="/about" scrolled={scrolled}>About</NavLink>
          <NavLink href="/contact" scrolled={scrolled}>Contact</NavLink>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="secondary" size="sm" asChild>
            <Link href="/book-a-call">Book a Call</Link>
          </Button>
          <Button variant="cta" size="sm" asChild>
            <Link href="/profitability-health-check">
              Free Health Check
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className={cn("w-5 h-5", scrolled ? "text-slate-700" : "text-white")} />
          ) : (
            <Menu className={cn("w-5 h-5", scrolled ? "text-slate-700" : "text-white")} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="container py-4 space-y-1">
              <MobileSection title="Services" items={services} />
              <MobileSection title="Industries" items={industries} />
              <MobileSection title="Resources" items={resources} />
              <MobileSingleLink href="/about" label="About" />
              <MobileSingleLink href="/contact" label="Contact" />
              <div className="pt-4 space-y-2 border-t border-slate-100">
                <Button className="w-full" variant="secondary" asChild>
                  <Link href="/book-a-call">Book a Discovery Call</Link>
                </Button>
                <Button className="w-full" variant="cta" asChild>
                  <Link href="/profitability-health-check">
                    Free Profitability Health Check
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  children,
  scrolled,
}: {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
        scrolled
          ? "text-slate-600 hover:text-brand-blue-600 hover:bg-slate-50"
          : "text-white/90 hover:text-white hover:bg-white/10"
      )}
    >
      {children}
    </Link>
  );
}

function NavDropdown({
  label,
  items,
  scrolled,
  isOpen,
  onToggle,
  onClose,
}: {
  label: string;
  items: { label: string; href: string; description?: string }[];
  scrolled: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative" onMouseLeave={onClose}>
      <button
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
          scrolled
            ? "text-slate-600 hover:text-brand-blue-600 hover:bg-slate-50"
            : "text-white/90 hover:text-white hover:bg-white/10"
        )}
        onMouseEnter={onToggle}
        onClick={onToggle}
      >
        {label}
        <ChevronDown
          className={cn("w-3.5 h-3.5 transition-transform", isOpen && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 bg-white rounded-xl border border-slate-200 shadow-xl p-2 min-w-[240px]"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 rounded-lg hover:bg-brand-blue-50 group"
                onClick={onClose}
              >
                <div className="text-sm font-medium text-slate-800 group-hover:text-brand-blue-600">
                  {item.label}
                </div>
                {item.description && (
                  <div className="text-xs text-slate-500 mt-0.5">{item.description}</div>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileSection({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-brand-blue-600"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden pl-4"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileSingleLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-brand-blue-600"
    >
      {label}
    </Link>
  );
}
