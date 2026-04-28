import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { Reveal } from "./Reveal";

export function Pipeline({ lang }: { lang: Locale }) {
  const t = dict[lang].pipeline;
  const steps = dict[lang].pipelineSteps;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mt-4 mb-4 max-w-2xl">{t.heading}</h2>
          <p className="text-body-apple text-[var(--text-soft)] max-w-2xl mb-16">{t.lead}</p>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Center vertical track */}
          <div
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, var(--indigo) 15%, var(--teal) 50%, var(--pink) 85%, transparent 100%)",
            }}
          />
          {/* Animated traveling glow */}
          <div
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full hidden md:block pipeline-glow"
            style={{
              background: "var(--teal-2)",
              boxShadow: "0 0 16px var(--teal-2), 0 0 32px var(--indigo)",
              top: 0,
            }}
          />

          {/* Mobile vertical track */}
          <div
            aria-hidden
            className="absolute left-5 top-0 bottom-0 w-px md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, var(--indigo), var(--teal), var(--pink))",
            }}
          />

          <ol className="relative space-y-10 md:space-y-16">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal as="li" key={s.label} delay={i * 80}>
                  <div className="relative grid md:grid-cols-2 md:gap-12 items-center">
                    {/* Center node — desktop only */}
                    <span
                      aria-hidden
                      className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ring-4 ring-[var(--bg)] z-10"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--indigo), var(--teal))",
                      }}
                    />
                    <span
                      aria-hidden
                      className="hidden md:block absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full pipeline-pulse"
                    />

                    {/* Mobile node */}
                    <span
                      aria-hidden
                      className="md:hidden absolute left-5 -translate-x-1/2 w-3 h-3 rounded-full ring-4 ring-[var(--bg)] mt-2"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--indigo), var(--teal))",
                      }}
                    />

                    {/* Card — alternates side on desktop, full width on mobile */}
                    <div
                      className={`pl-12 md:pl-0 ${
                        left ? "md:col-start-1" : "md:col-start-2"
                      }`}
                    >
                      <div className="card p-6">
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="text-mono text-[var(--text-muted)] text-xs">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="display-tile">{s.label}</h3>
                        </div>
                        <p className="text-body-apple text-[var(--text-soft)]">
                          {s.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
