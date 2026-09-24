import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/content/resources";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { LinkButton } from "@/components/ui/LinkButton";

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
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishDate,
      modifiedTime: article.updatedDate || article.publishDate,
      authors: [article.author?.name || "Souryodipto Debnath"],
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
    <main className="min-h-screen bg-white text-[#1F2937]">
      {/* 1. Header & Breadcrumbs */}
      <Section background="white" className="pt-8 pb-10 border-b border-[#E2E8F0]">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: article.title, href: `/resources/${article.slug}` },
            ]}
            className="mb-6"
          />

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#5B6B7F] mb-4">
              <Badge variant="blue" size="sm">
                {article.category.toUpperCase()}
              </Badge>
              <span>&bull;</span>
              <span>Published: {article.publishDate}</span>
              {article.updatedDate && (
                <>
                  <span>&bull;</span>
                  <span>Updated: {article.updatedDate}</span>
                </>
              )}
              <span>&bull;</span>
              <span>{article.readTime}</span>
              <span>&bull;</span>
              <span className="font-mono text-[11px] text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                {article.funnelStage}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.15] mb-6">
              {article.h1}
            </h1>

            {/* 2. Quotable Short Answer Box */}
            <div className="p-6 rounded-2xl bg-[#F7F9FC] border border-[#E2E8F0] shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Short Answer (Direct Summary)
              </span>
              <p className="text-base text-[#0B1F3A] font-medium leading-relaxed">
                {article.shortAnswer}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Main Content & Table of Contents Grid */}
      <Section background="white" className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Table of Contents (Sticky on Desktop) */}
            {article.toc && article.toc.length > 0 && (
              <aside className="lg:col-span-4 order-2 lg:order-1">
                <div className="sticky top-24 bg-[#F7F9FC] border border-[#E2E8F0] rounded-2xl p-6 shadow-xs">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-4 pb-2 border-b border-[#E2E8F0]">
                    Table of Contents
                  </h2>
                  <nav className="space-y-2 text-xs">
                    {article.toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-[#5B6B7F] hover:text-[#2563EB] hover:underline transition-colors py-0.5"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Article Body */}
            <div
              className={`${
                article.toc && article.toc.length > 0 ? "lg:col-span-8" : "lg:col-span-12 max-w-3xl"
              } order-1 lg:order-2 space-y-10`}
            >
              {article.contentSections && article.contentSections.length > 0 ? (
                article.contentSections.map((sec) => (
                  <section key={sec.id} id={sec.id} className="scroll-mt-24 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] tracking-tight border-b border-[#E2E8F0] pb-2">
                      {sec.title}
                    </h2>
                    {sec.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="text-sm sm:text-base text-[#1F2937] leading-relaxed">
                        {para}
                      </p>
                    ))}
                    {sec.subsections && sec.subsections.length > 0 && (
                      <div className="space-y-4 pt-2">
                        {sec.subsections.map((sub, sIdx) => (
                          <div key={sIdx} className="bg-[#F7F9FC] p-4 sm:p-5 rounded-xl border border-[#E2E8F0]">
                            <h3 className="text-sm font-bold text-[#0B1F3A] mb-2">{sub.subtitle}</h3>
                            <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed">{sub.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))
              ) : (
                <div className="space-y-4 text-base text-[#1F2937] leading-relaxed">
                  <p>{article.shortSummary}</p>
                </div>
              )}

              {/* 4. Key Takeaways Block */}
              {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                <div id="key-takeaways" className="p-6 sm:p-8 rounded-2xl bg-blue-50/50 border border-blue-200">
                  <h2 className="text-lg font-extrabold text-[#0B1F3A] mb-4 flex items-center gap-2">
                    <span className="text-base text-[#2563EB]">✓</span> Key Takeaways for Security Teams
                  </h2>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#1F2937]">
                    {article.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#2563EB] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 5. Genuinely Useful FAQ */}
              {article.faqs && article.faqs.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-[#E2E8F0]">
                  <h2 className="text-xl font-extrabold text-[#0B1F3A] tracking-tight">
                    Frequently Asked Questions
                  </h2>
                  <Accordion
                    items={article.faqs.map((faq) => ({
                      question: faq.question,
                      answer: <p className="text-xs sm:text-sm text-[#5B6B7F] leading-relaxed">{faq.answer}</p>,
                    }))}
                    allowMultiple={false}
                  />
                </div>
              )}

              {/* 6. Author Box */}
              {article.author && (
                <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center font-bold text-base flex-shrink-0">
                    SD
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-extrabold text-sm text-[#0B1F3A]">{article.author.name}</span>
                      <span className="text-[11px] text-[#2563EB] font-medium">({article.author.role})</span>
                    </div>
                    <p className="text-xs text-[#5B6B7F] leading-relaxed">{article.author.bio}</p>
                  </div>
                </div>
              )}

              {/* 7. Related Solutions & Articles */}
              <div className="space-y-6 pt-6 border-t border-[#E2E8F0]">
                {article.relatedSolutions && article.relatedSolutions.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
                      Related Modular Solutions
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {article.relatedSolutions.map((sol, idx) => (
                        <Link
                          key={idx}
                          href={sol.href}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E2E8F0] bg-[#F7F9FC] text-[#2563EB] hover:border-[#2563EB] hover:bg-white transition shadow-xs"
                        >
                          {sol.title} &rarr;
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {article.relatedArticles && article.relatedArticles.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
                      Related Guides &amp; Comparisons
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {article.relatedArticles.map((artRel, idx) => (
                        <Link
                          key={idx}
                          href={artRel.href}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-[#1F2937] hover:text-[#2563EB] hover:border-[#2563EB] transition shadow-xs"
                        >
                          {artRel.title} &rarr;
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 8. Stage-Appropriate CTA */}
              <div className="p-8 rounded-2xl bg-[#0B1F3A] text-white space-y-4">
                <h3 className="text-xl font-extrabold text-white">
                  {article.cta?.headline || "Evaluate AI Video Intelligence on Your Feeds"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {article.cta?.text ||
                    "Connect our software layer to 3 to 5 camera streams in a controlled pilot evaluation."}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <LinkButton
                    href={article.cta?.primaryButton.href || "/request-pilot"}
                    variant="primary"
                    size="md"
                  >
                    {article.cta?.primaryButton.label || "Request a Pilot"}
                  </LinkButton>
                  {article.cta?.secondaryButton && (
                    <LinkButton
                      href={article.cta.secondaryButton.href}
                      variant="secondary"
                      size="md"
                      className="text-slate-900 border-slate-300 hover:bg-slate-100"
                    >
                      {article.cta.secondaryButton.label}
                    </LinkButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
