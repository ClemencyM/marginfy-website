import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured: boolean;
  content: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  industry: string;
  challenge: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  featured: boolean;
  content: string;
}

function getFiles(dir: string): string[] {
  const fullDir = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs
    .readdirSync(fullDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

export function getAllBlogPosts(): BlogPost[] {
  const files = getFiles("blog");
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const filePath = path.join(CONTENT_DIR, "blog", file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const rt = readingTime(content);
      return {
        slug,
        title: data.title ?? "",
        description: data.description ?? "",
        date: data.date ?? "",
        author: data.author ?? "Clemency Mdaya",
        category: data.category ?? "Finance",
        tags: data.tags ?? [],
        readingTime: data.readingTime ?? rt.text,
        featured: data.featured ?? false,
        content,
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, "blog", `${slug}.mdx`);
  const fallback = path.join(CONTENT_DIR, "blog", `${slug}.md`);
  const fp = fs.existsSync(filePath) ? filePath : fs.existsSync(fallback) ? fallback : null;
  if (!fp) return null;
  const raw = fs.readFileSync(fp, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);
  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    author: data.author ?? "Clemency Mdaya",
    category: data.category ?? "Finance",
    tags: data.tags ?? [],
    readingTime: data.readingTime ?? rt.text,
    featured: data.featured ?? false,
    content,
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  const files = getFiles("case-studies");
  return files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const filePath = path.join(CONTENT_DIR, "case-studies", file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title ?? "",
      description: data.description ?? "",
      industry: data.industry ?? "",
      challenge: data.challenge ?? "",
      outcome: data.outcome ?? "",
      metrics: data.metrics ?? [],
      featured: data.featured ?? false,
      content,
    } as CaseStudy;
  });
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const filePath = path.join(CONTENT_DIR, "case-studies", `${slug}.mdx`);
  const fallback = path.join(CONTENT_DIR, "case-studies", `${slug}.md`);
  const fp = fs.existsSync(filePath) ? filePath : fs.existsSync(fallback) ? fallback : null;
  if (!fp) return null;
  const raw = fs.readFileSync(fp, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    industry: data.industry ?? "",
    challenge: data.challenge ?? "",
    outcome: data.outcome ?? "",
    metrics: data.metrics ?? [],
    featured: data.featured ?? false,
    content,
  };
}
