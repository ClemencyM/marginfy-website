import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { getAllBlogPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { SITE_URL } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Finance & Profitability Blog | Marginfy",
  description:
    "Expert insights on fractional CFO services, pricing strategy, profitability analysis and financial management for growing businesses. By Clemency Mdaya.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Blog", url: `${SITE_URL}/blog` },
      ])} />

      <section className="bg-hero pt-32 pb-20">
        <div className="container">
          <div className="mb-6"><Breadcrumb items={[{ label: "Blog" }]} /></div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Finance & Profitability Insights
            </h1>
            <p className="text-lg text-white/75">
              Practical guides and insights on pricing strategy, profitability analysis,
              cash flow and financial management — from a CFO&apos;s perspective.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          {featured.length > 0 && (
            <div className="mb-16">
              <h2 className="text-sm font-semibold text-brand-blue-600 uppercase tracking-wider mb-6">
                Featured
              </h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {featured.slice(0, 2).map((post) => (
                  <BlogCard key={post.slug} post={post} featured />
                ))}
              </div>
            </div>
          )}

          {posts.length > 0 ? (
            <div>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
                All Articles
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(featured.length > 0 ? rest : posts).map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg mb-4">Blog posts coming soon.</p>
              <p className="text-slate-400 text-sm">
                In the meantime,{" "}
                <Link href="/book-a-call" className="text-brand-blue-600 hover:underline">
                  book a discovery call
                </Link>{" "}
                to speak with Clemency directly.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function BlogCard({
  post,
  featured = false,
}: {
  post: ReturnType<typeof getAllBlogPosts>[0];
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-slate-200 hover:border-brand-blue-200 hover:shadow-md transition-all duration-300 overflow-hidden bg-white"
    >
      {/* Category colour bar */}
      <div className="h-1 bg-gradient-to-r from-brand-blue-600 to-brand-blue-400" />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <Clock className="w-3 h-3" />
            {post.readingTime}
          </div>
        </div>
        <h3 className={`font-bold text-brand-navy mb-2 group-hover:text-brand-blue-600 transition-colors leading-snug ${featured ? "text-xl" : "text-base"}`}>
          {post.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">{post.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue-600 group-hover:gap-2 transition-all">
            Read more <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
