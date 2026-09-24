import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/content/resources";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/resources/${article.slug}`,
    },
  };
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <Link href="/resources" className="hover:text-blue-600">
          Resources
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">
          {article.title}
        </span>
      </nav>

      <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
        <span className="uppercase font-semibold tracking-wider text-blue-600">
          {article.category}
        </span>
        <span>&bull;</span>
        <span>{article.publishDate}</span>
        <span>&bull;</span>
        <span>{article.readTime}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {article.h1}
      </h1>

      <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">
          Executive Summary &amp; Direct Answer
        </h2>
        <p className="text-base text-slate-800 leading-relaxed font-normal">
          {article.shortSummary}
        </p>
      </div>

      <div className="mt-10 pt-8 border-t border-slate-200">
        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4">
          Related Solutions &amp; Evaluation
        </h3>
        <div className="flex flex-wrap gap-3">
          {article.relatedSlugs.map((relSlug) => (
            <Link
              key={relSlug}
              href={`/${relSlug}`}
              className="text-xs font-medium px-3 py-1.5 rounded border border-slate-200 bg-white hover:border-blue-300 hover:text-blue-600 transition"
            >
              Explore {relSlug.split("/").pop()?.replace(/-/g, " ")} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
