import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { Reveal } from "./Reveal";

export function DevDashboard({ lang }: { lang: Locale }) {
  const t = dict[lang].devDashboard;
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mt-4 mb-4 max-w-3xl">{t.heading}</h2>
          <p className="text-body-apple text-[var(--text-soft)] max-w-2xl mb-16">{t.lead}</p>
        </Reveal>

        <div className="space-y-12">
          {[
            {
              path: "/sprint",
              src: "/screenshots/dev-dashboard-sprint.png",
              title: t.sprintTitle,
              caption: t.sprintCaption,
            },
            {
              path: "/analytics",
              src: "/screenshots/dev-dashboard-analytics.png",
              title: t.analyticsTitle,
              caption: t.analyticsCaption,
            },
          ].map((view) => (
            <Reveal key={view.path}>
              <figure className="card overflow-hidden">
                <div className="p-3 bg-[var(--bg-soft)] border-b border-[var(--border)] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-mono text-[var(--text-muted)] text-xs">
                    {view.path}
                  </span>
                </div>
                <Image
                  src={view.src}
                  alt={`Dev Dashboard ${view.title}`}
                  width={1440}
                  height={1300}
                  sizes="(max-width: 1024px) 100vw, 1120px"
                  className="w-full h-auto"
                />
                <figcaption className="p-6 border-t border-[var(--border)]">
                  <p className="text-base font-semibold text-[var(--text)] mb-2">{view.title}</p>
                  <p className="text-caption text-[var(--text-soft)]">{view.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <Reveal>
            <div className="card p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--teal-2)] mb-2">{t.stackTitle}</h4>
              <p className="text-caption text-[var(--text-soft)] leading-relaxed">{t.stackBody}</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--pink)] mb-2">{t.whyTitle}</h4>
              <p className="text-caption text-[var(--text-soft)] leading-relaxed">{t.whyBody}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
