import { buildMetadata } from "@/lib/metadata";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata = buildMetadata({
  title: "Terms of Use | Marginfy",
  description: "Marginfy terms of use — the terms governing use of the Marginfy website and services.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <>
      <section className="bg-hero pt-32 pb-16">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Terms of Use" }]} /></div>
          <h1 className="text-4xl font-bold text-white">Terms of Use</h1>
          <p className="text-white/60 mt-2">Last updated: January 2025</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              These Terms of Use govern your use of the Marginfy website at{" "}
              <a href="https://www.marginfy.com">www.marginfy.com</a>. By accessing
              this website, you agree to these terms.
            </p>

            <h2>Use of Website</h2>
            <p>
              This website is provided for informational purposes. Content on this site
              does not constitute financial, legal or professional advice. Always seek
              qualified professional advice for your specific circumstances.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website — including text, images, graphics and tools —
              is the property of Marginfy or its licensors and is protected by Australian
              and international copyright laws. You may not reproduce or distribute
              content without written permission.
            </p>

            <h2>Pricing Calculator</h2>
            <p>
              The pricing calculator tool is provided as a general guide only. Results
              are indicative and should not be relied upon as financial advice. Marginfy
              accepts no liability for business decisions made based on calculator outputs.
            </p>

            <h2>Links</h2>
            <p>
              This site may contain links to third-party websites. Marginfy is not
              responsible for the content or privacy practices of those sites.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the extent permitted by law, Marginfy excludes all liability for any
              loss or damage arising from use of this website or reliance on its content.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of Victoria, Australia.
            </p>

            <h2>Contact</h2>
            <p>
              For enquiries:{" "}
              <a href="mailto:admin@marginfy.com">admin@marginfy.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
