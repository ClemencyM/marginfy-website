import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getBlogPost, getAllBlogPosts } from "@/lib/mdx";
import { formatDate, SITE_URL } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd schema={buildArticleSchema({
        title: post.title,
        description: post.description,
        url: `${SITE_URL}/blog/${slug}`,
        datePublished: post.date,
      })} />
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Blog", url: `${SITE_URL}/blog` },
        { name: post.title, url: `${SITE_URL}/blog/${slug}` },
      ])} />

      {/* Hero */}
      <section className="bg-hero pt-32 pb-16">
        <div className="container max-w-4xl">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          </div>
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Article */}
            <article className="lg:col-span-3">
              <div className="prose prose-slate prose-lg max-w-none">
                <MDXRemote source={post.content} />
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-slate-200">
                  <p className="text-sm font-medium text-slate-500 mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-brand-blue-600 hover:text-brand-blue-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-5">
                <div className="p-5 rounded-xl bg-brand-blue-50 border border-brand-blue-100">
                  <h3 className="font-bold text-brand-navy mb-2 text-sm">About the Author</h3>
                  <p className="text-xs text-slate-600 mb-3">
                    <strong>Clemency Mdaya</strong> is the founder of Marginfy and a senior
                    finance executive with 15+ years experience.
                  </p>
                  <Link
                    href="/about"
                    className="text-xs font-semibold text-brand-blue-600 hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
                <div className="p-5 rounded-xl bg-brand-green-50 border border-brand-green-100">
                  <h3 className="font-bold text-brand-navy mb-2 text-sm">
                    Get a Free Profitability Review
                  </h3>
                  <p className="text-xs text-slate-600 mb-3">
                    Ready to apply these insights to your business?
                  </p>
                  <Link
                    href="/profitability-health-check"
                    className="text-xs font-semibold text-brand-green-700 hover:underline"
                  >
                    Book free review →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
