import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";

const tech = [
  { slug: "shopify", name: "Shopify" },
  { slug: "react", name: "React" },
  { slug: "nextdotjs", name: "Next.js" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "tailwindcss", name: "Tailwind" },
  { slug: "firebase", name: "Firebase" },
  { slug: "googlecloud", name: "BigQuery" },
  { slug: "nodedotjs", name: "Node.js" },
  { slug: "hono", name: "Hono" },
  { slug: "notion", name: "Notion" },
  { slug: "figma", name: "Figma" },
  { slug: "mixpanel", name: "Mixpanel" },
  { slug: "posthog", name: "PostHog" },
  { slug: "anthropic", name: "Claude API" },
  { slug: "vercel", name: "Vercel" },
];

export function StackStrip({ lang }: { lang: Locale }) {
  const t = dict[lang].stack;
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <p className="text-caption uppercase tracking-[0.2em] text-[#2997ff] mb-3">{t.kicker}</p>
        <h2 className="display-tile text-white mb-12 max-w-2xl mx-auto">{t.heading}</h2>

        <ul className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-4">
          {tech.map((x) => (
            <li
              key={x.slug}
              className="group relative flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
              title={x.name}
            >
              <span className="relative w-9 h-9 flex items-center justify-center">
                <Image
                  src={`/logos/tech/${x.slug}.svg`}
                  alt={x.name}
                  width={32}
                  height={32}
                  className="object-contain"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
                />
              </span>
              <span className="text-[11px] text-white/60 tracking-wide">{x.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
