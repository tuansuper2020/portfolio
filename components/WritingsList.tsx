import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { getWritings } from "@/data/writings";

export function WritingsList({ lang }: { lang: Locale }) {
  const t = dict[lang].writings;
  const writings = getWritings(lang);
  return (
    <section id="writings" className="bg-black text-white py-24 md:py-32">
      <div className="max-w-[980px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#2997ff] mb-4">{t.kicker}</p>
        <h2 className="display-section mb-4 max-w-2xl">{t.heading}</h2>
        <p className="text-body-apple text-white/70 max-w-2xl mb-16">{t.lead}</p>

        <div className="space-y-6">
          {writings.map((post) => (
            <Link
              key={post.slug}
              href={`/${lang}/writings/${post.slug}`}
              className="block group rounded-2xl p-8 bg-[#1d1d1f] hover:bg-[#272729] transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-caption text-white/40 font-mono">{post.date}</span>
                <span className="text-caption text-white/40">·</span>
                <span className="text-caption text-white/40">{post.readingTime}</span>
              </div>
              <h3 className="display-tile mb-3 group-hover:text-[#2997ff] transition-colors">{post.title}</h3>
              <p className="text-body-apple text-white/70">{post.excerpt}</p>
              <span className="inline-block mt-4 text-[#2997ff] text-caption arrow-chev">{t.readMore}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
