import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { getStats } from "@/data/stats";
import { Reveal } from "./Reveal";

export function StatsGrid({ lang }: { lang: Locale }) {
  const t = dict[lang].stats;
  const stats = getStats(lang);
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mt-4 mb-4 max-w-2xl">{t.heading}</h2>
          <p className="text-body-apple text-[var(--text-soft)] max-w-2xl mb-16">{t.lead}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="card card-glow p-7 h-full">
                <div
                  className="text-gradient font-semibold"
                  style={{
                    fontSize: "clamp(2.25rem, 4vw, 3rem)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-base font-semibold text-[var(--text)] mt-3">{s.label}</div>
                {s.detail && <p className="text-caption text-[var(--text-muted)] mt-2">{s.detail}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
