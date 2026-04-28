import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { getWritings } from "@/data/writings";
import { Reveal } from "./Reveal";

export function WritingsList({ lang }: { lang: Locale }) {
  const t = dict[lang].writings;
  const writings = getWritings(lang);
  return (
    <section id="writings" className="relative py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mt-4 mb-4 max-w-2xl">{t.heading}</h2>
          <p className="text-body-apple text-[var(--text-soft)] max-w-2xl mb-16">{t.lead}</p>
        </Reveal>

        <div className="space-y-4">
          {writings.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Link
                href={`/${lang}/writings/${post.slug}`}
                className="card card-glow block p-8 group"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-mono text-[var(--text-muted)] text-xs">{post.date}</span>
                  <span className="text-mono text-[var(--text-muted)] text-xs">·</span>
                  <span className="text-mono text-[var(--text-muted)] text-xs">{post.readingTime}</span>
                </div>
                <h3 className="display-tile mb-3 group-hover:text-gradient transition-colors">
                  {post.title}
                </h3>
                <p className="text-body-apple text-[var(--text-soft)]">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-[var(--teal-2)] text-caption font-medium">
                  {t.readMore} <span aria-hidden>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
