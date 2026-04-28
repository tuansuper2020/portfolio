import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getArticles, articleSlugs } from "@/data/writings-content";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Contact";
import { isLocale, locales } from "@/lib/i18n";
import { dict } from "@/lib/dict";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    articleSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const article = getArticles(locale)[slug];
  if (!article) return {};
  return {
    title: `${article.title} — Vũ Mạnh Tuấn`,
    description: article.lede,
  };
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const article = getArticles(locale)[slug];
  if (!article) notFound();
  const t = dict[locale].writings;

  return (
    <>
      <Navigation lang={locale} />
      <main className="flex-1 pt-24 relative">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="orb orb-indigo orb-anim-2" style={{ width: 360, height: 360, top: "5%", left: "10%", opacity: 0.18 }} />
        </div>
        <article className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
          <Link
            href={`/${locale}#writings`}
            className="text-caption text-[var(--teal-2)] inline-flex items-center gap-1 mb-10 hover:text-[var(--text)] transition-colors"
          >
            {t.back}
          </Link>

          <header className="mb-12">
            <div className="flex items-baseline gap-3 mb-5 text-mono text-[var(--text-muted)] text-xs">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readingTime}</span>
            </div>
            <h1 className="display-section mb-5 leading-tight text-[var(--text)]">
              {article.title}
            </h1>
            <p className="text-subheading text-[var(--text-soft)]">{article.lede}</p>
          </header>

          <hr className="divider-grad mb-12" />

          <div className="prose-article">{article.body}</div>

          <div className="mt-16 pt-10 border-t border-[var(--border)]">
            <Link href={`/${locale}#writings`} className="btn btn-secondary">
              {t.more} <span aria-hidden>→</span>
            </Link>
          </div>
        </article>
      </main>
      <Footer lang={locale} />
    </>
  );
}
