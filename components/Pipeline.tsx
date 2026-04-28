import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { Reveal } from "./Reveal";

export function Pipeline({ lang }: { lang: Locale }) {
  const t = dict[lang].pipeline;
  const steps = dict[lang].pipelineSteps;

  // Build a sinuous SVG path with one bend per step
  const W = 800;
  const STEP_H = 160;
  const H = STEP_H * (steps.length - 1);
  // Path: x oscillates between two columns to create a flowing feel
  const xs = steps.map((_, i) => (i % 2 === 0 ? 80 : 720));
  let d = `M ${xs[0]} 0`;
  for (let i = 1; i < steps.length; i++) {
    const y = i * STEP_H;
    const cx1 = xs[i - 1];
    const cy1 = y - STEP_H / 2;
    const cx2 = xs[i];
    const cy2 = y - STEP_H / 2;
    d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${xs[i]} ${y}`;
  }

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mt-4 mb-4 max-w-2xl">{t.heading}</h2>
          <p className="text-body-apple text-[var(--text-soft)] max-w-2xl mb-16">{t.lead}</p>
        </Reveal>

        <div className="relative">
          {/* SVG path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="pipe-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#5a67d8" />
                <stop offset="50%" stopColor="#16a394" />
                <stop offset="100%" stopColor="#ff6bb6" />
              </linearGradient>
              <radialGradient id="dot-glow">
                <stop offset="0%" stopColor="#4cd0bc" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>

            <path
              d={d}
              stroke="url(#pipe-grad)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d={d}
              stroke="url(#pipe-grad)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              className="svg-line"
            />

            {/* Traveling dot */}
            <circle r="6" fill="#4cd0bc" className="svg-glow-dot" style={{ offsetPath: `path("${d}")` }} />
            <circle r="2.5" fill="white" className="svg-glow-dot" style={{ offsetPath: `path("${d}")` }} />
          </svg>

          {/* Steps */}
          <ol className="relative space-y-10 md:space-y-0">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal as="li" key={s.label} delay={i * 80}>
                  <div
                    className={`relative flex md:items-center md:gap-6 md:min-h-[${STEP_H}px] ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{ minHeight: `${STEP_H}px` }}
                  >
                    {/* Number badge */}
                    <div
                      className={`shrink-0 z-10 ${isLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"}`}
                    >
                      <span className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--bg-soft)] border border-[var(--border-strong)] text-mono text-sm text-gradient font-semibold">
                        0{i + 1}
                        <span className="pipeline-pulse absolute inset-0 rounded-2xl" />
                      </span>
                    </div>

                    {/* Card */}
                    <div
                      className={`card p-6 md:max-w-md flex-1 ${
                        isLeft ? "md:ml-6" : "md:mr-6"
                      }`}
                    >
                      <h3 className="display-tile mb-2">{s.label}</h3>
                      <p className="text-body-apple text-[var(--text-soft)]">
                        {s.detail}
                      </p>
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
