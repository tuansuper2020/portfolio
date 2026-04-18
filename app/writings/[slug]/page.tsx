import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/data/writings-content";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Contact";

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: `${article.title} — Vũ Mạnh Tuấn`,
    description: article.lede,
  };
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <Navigation />
      <main className="flex-1 bg-[#f5f5f7] text-[#1d1d1f] pt-24">
        <article className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
          <Link
            href="/#writings"
            className="text-caption text-[#0066cc] inline-block mb-10 hover:underline"
          >
            ‹ Back to writings
          </Link>

          <header className="mb-12">
            <div className="flex items-baseline gap-4 mb-4 text-caption text-black/50 font-mono">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readingTime}</span>
            </div>
            <h1 className="display-section mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-subheading opacity-70">{article.lede}</p>
          </header>

          <div
            className="prose-article text-body-apple"
            style={{ lineHeight: 1.6 }}
          >
            {article.body}
          </div>

          <div className="mt-16 pt-10 border-t border-black/10">
            <Link
              href="/#writings"
              className="pill pill-outline-light"
            >
              More writings
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
