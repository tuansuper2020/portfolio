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
  // Duplicate for seamless marquee
  const items = [...tech, ...tech];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 text-center mb-10">
        <span className="chip mb-4">{t.kicker}</span>
        <h2 className="display-tile mt-4 max-w-2xl mx-auto">{t.heading}</h2>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        <ul className="flex gap-3 marquee-track" style={{ width: "fit-content" }}>
          {items.map((x, i) => (
            <li
              key={`${x.slug}-${i}`}
              className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-[var(--border)]"
              title={x.name}
            >
              <Image
                src={`/logos/tech/${x.slug}.svg`}
                alt={x.name}
                width={20}
                height={20}
                className="object-contain"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
              />
              <span className="text-[12px] text-[var(--text-soft)] tracking-wide whitespace-nowrap">
                {x.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
