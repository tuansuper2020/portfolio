import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { getStats } from "@/data/stats";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { Tilt } from "./Tilt";

const SHAPE = [
  // 5 cells in a 6-col grid
  { col: 4, row: 2 }, // big featured (2 rows tall)
  { col: 2, row: 1 },
  { col: 2, row: 1 },
  { col: 3, row: 1 },
  { col: 3, row: 1 },
];

export function StatsGrid({ lang }: { lang: Locale }) {
  const t = dict[lang].stats;
  const stats = getStats(lang);

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mt-4 mb-4 max-w-2xl">{t.heading}</h2>
          <p className="text-body-apple text-[var(--text-soft)] max-w-2xl mb-12">{t.lead}</p>
        </Reveal>

        <div className="bento">
          {stats.map((s, i) => {
            const shape = SHAPE[i] ?? { col: 3, row: 1 };
            const isFeatured = i === 0;
            const colCls = `b-${shape.col}`;
            const rowCls = shape.row === 2 ? "b-row-2" : "";
            const valueSize = isFeatured
              ? "clamp(3rem, 7vw, 5.25rem)"
              : "clamp(1.85rem, 3.6vw, 2.75rem)";

            return (
              <Reveal
                key={s.label}
                delay={i * 60}
                className={`${colCls} ${rowCls}`}
              >
                <Tilt className="h-full">
                  <div className="card card-glow p-7 h-full flex flex-col justify-between min-h-[180px]">
                    <div>
                      <div className="text-mono text-[var(--text-muted)] text-[11px] uppercase tracking-[0.18em] mb-3">
                        {String(i + 1).padStart(2, "0")} / {stats.length}
                      </div>
                      <div
                        className="text-gradient font-semibold leading-[1.02]"
                        style={{ fontSize: valueSize, letterSpacing: "-0.04em" }}
                      >
                        <Counter value={s.value} />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-base font-semibold text-[var(--text)]">{s.label}</div>
                      {s.detail && (
                        <p className="text-caption text-[var(--text-muted)] mt-1.5">
                          {s.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
