"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().min(1, "Company name is required"),
  revenue: z.string().min(1, "Please select your revenue range"),
  industry: z.string().min(1, "Please select your industry"),
  message: z.string().min(10, "Please tell us a bit more"),
});

type FormData = z.infer<typeof schema>;

const revenueRanges = [
  "Under $500K",
  "$500K – $1M",
  "$1M – $3M",
  "$3M – $10M",
  "$10M – $25M",
  "$25M – $50M",
  "Over $50M",
];

const industries = [
  "Hospitality",
  "eCommerce",
  "NDIS / Disability Services",
  "Events & Entertainment",
  "Professional Services",
  "Retail",
  "Manufacturing",
  "Healthcare",
  "Not-for-Profit / Charity",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please email admin@marginfy.com directly.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-8 rounded-2xl bg-brand-green-50 border border-brand-green-200">
        <CheckCircle2 className="w-12 h-12 text-brand-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-brand-navy mb-2">Message Received</h3>
        <p className="text-slate-600">
          Thank you for reaching out. Clemency will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="Full Name" error={errors.name?.message}>
          <Input placeholder="Jane Smith" {...register("name")} />
        </FormField>
        <FormField label="Email Address" error={errors.email?.message}>
          <Input type="email" placeholder="jane@company.com.au" {...register("email")} />
        </FormField>
      </div>

      <FormField label="Company Name" error={errors.company?.message}>
        <Input placeholder="Acme Pty Ltd" {...register("company")} />
      </FormField>

      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="Annual Revenue" error={errors.revenue?.message}>
          <Select onValueChange={(v) => setValue("revenue", v, { shouldValidate: true })}>
            <SelectTrigger className={errors.revenue ? "border-red-400" : ""}>
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              {revenueRanges.map((r) => (
                <SelectItem key={r} value={r}>{r}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>

        <FormField label="Industry" error={errors.industry?.message}>
          <Select onValueChange={(v) => setValue("industry", v, { shouldValidate: true })}>
            <SelectTrigger className={errors.industry ? "border-red-400" : ""}>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((ind) => (
                <SelectItem key={ind} value={ind}>{ind}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
      </div>

      <FormField label="How can we help?" error={errors.message?.message}>
        <Textarea
          placeholder="Tell us about your business and what you're trying to achieve..."
          rows={5}
          {...register("message")}
        />
      </FormField>

      {serverError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" variant="cta" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
