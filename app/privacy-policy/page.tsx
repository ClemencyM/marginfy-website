import { buildMetadata } from "@/lib/metadata";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata = buildMetadata({
  title: "Privacy Policy | Marginfy",
  description: "Marginfy privacy policy — how we collect, use and protect your personal information.",
  path: "/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-hero pt-32 pb-16">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Privacy Policy" }]} /></div>
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/60 mt-2">Last updated: January 2025</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              Marginfy (ABN: to be confirmed) (&quot;Marginfy&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed
              to protecting your privacy in accordance with the Privacy Act 1988 (Cth) and
              the Australian Privacy Principles.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect personal information that you provide to us, including:</p>
            <ul>
              <li>Name and contact details (email, phone)</li>
              <li>Business name and revenue information</li>
              <li>Industry type</li>
              <li>Information you provide in contact forms or discovery calls</li>
            </ul>
            <p>We may also collect technical information via analytics tools (see Analytics section).</p>

            <h2>How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Respond to enquiries and provide our services</li>
              <li>Send service-related communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Analytics</h2>
            <p>
              Our website uses Google Analytics 4 and Microsoft Clarity to understand
              how visitors use our site. These tools may collect anonymised usage data.
              You can opt out of Google Analytics tracking via{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google&apos;s opt-out browser add-on
              </a>.
            </p>

            <h2>Email Communications</h2>
            <p>
              Contact form submissions are processed via Resend. Your data is used only
              to respond to your enquiry and is not sold to third parties.
            </p>

            <h2>Data Security</h2>
            <p>
              We take reasonable steps to protect personal information from misuse,
              interference, loss, and unauthorised access. Our website uses HTTPS
              encryption.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to access, correct or delete your personal information
              held by us. To make a request, contact us at{" "}
              <a href="mailto:admin@marginfy.com">admin@marginfy.com</a>.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy-related enquiries, contact:{" "}
              <a href="mailto:admin@marginfy.com">admin@marginfy.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
