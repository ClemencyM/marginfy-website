"use client";

import { useEffect } from "react";
import { Loader2 } from "lucide-react";

interface CalendlyWidgetProps {
  url?: string;
  className?: string;
}

export function CalendlyWidget({
  url = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/marginfy/discovery-call",
  className = "",
}: CalendlyWidgetProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`relative min-h-[650px] ${className}`}>
      <div
        className="calendly-inline-widget w-full"
        data-url={`${url}?hide_gdpr_banner=1&primary_color=1B4FE4`}
        style={{ minWidth: "320px", height: "650px" }}
      />
      {/* Loading fallback */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center bg-slate-50 rounded-xl">
        <div className="text-center text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
          <p className="text-sm">Loading calendar…</p>
        </div>
      </div>
    </div>
  );
}
