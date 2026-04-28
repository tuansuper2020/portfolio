import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { Reveal } from "./Reveal";

/**
 * Pipeline — wavy SVG curve threading through alternating badge/card pairs.
 *
 * Coordinates are normalized: viewBox is 0..100 (x %) by N*STEP_H (y px).
 * Badges are absolutely positioned at the same xPct% so they sit on the curve.
 * Cards are absolutely positioned in the opposite half of the container so the
 * curve weaves between them.
 */
export function Pipeline({ lang }: { lang: Locale }) {
  const t = dict[lang].pipeline;
  const steps = dict[lang].pipelineSteps;

  const STEP_H = 200; // px
  const totalH = steps.length * STEP_H;
  const xLeft = 22;
  const xRight = 78;
  const xs = steps.map((_, i) => (i % 2 === 0 ? xLeft : xRight));
  const ys = steps.map((_, i) => i * STEP_H + STEP_H / 2);

  // Build smooth bezier curve through (xs[i], ys[i])
  let d = `M ${xs[0]} ${ys[0]}`;
  for (let i = 1; i < steps.length; i++) {
    const x0 = xs[i - 1];
    const x1 = xs[i];
    const y0 = ys[i - 1];
    const y1 = ys[i];
    const cy = (y0 + y1) / 2;
    d += ` C ${x0} ${cy}, ${x1} ${cy}, ${x1} ${y1}`;
  }

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mt-4 mb-4 max-w-2xl">{t.heading}</h2>
          <p className="text-body-apple text-[var(--text-soft)] max-w-2xl mb-16">{t.lead}</p>
        </Reveal>

        {/* DESKTOP — wavy curve */}
        <div
          className="relative max-w-3xl mx-auto hidden md:block"
          style={{ height: totalH }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={`0 0 100 ${totalH}`}
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="pipe-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5a67d8" />
                <stop offset="50%" stopColor="#16a394" />
                <stop offset="100%" stopColor="#ff6bb6" />
              </linearGradient>
            </defs>

            {/* Faint base curve */}
            <path
              d={d}
              stroke="url(#pipe-grad)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              opacity="0.35"
            />
            {/* Animated dashed overlay */}
            <path
              d={d}
              stroke="url(#pipe-grad)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="svg-line"
            />
            {/* Glowing dot riding the path */}
            <circle r="6" fill="#4cd0bc" className="svg-glow-dot" style={{ offsetPath: `path("${d}")` }} />
            <circle r="2.5" fill="white" className="svg-glow-dot" style={{ offsetPath: `path("${d}")` }} />
          </svg>

          {/* Badges + cards (absolutely positioned) */}
          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            const xPct = xs[i];
            const y = ys[i];
            // Card sits on the OPPOSITE side from the badge so the curve weaves between them
            const cardStyle: React.CSSProperties = isLeft
              ? { top: y - 70, left: "calc(50% + 28px)", right: "0" }
              : { top: y - 70, right: "calc(50% + 28px)", left: "0" };

            return (
              <div key={s.label}>
                {/* Badge sits exactly on the curve */}
                <div
                  className="absolute z-20"
                  style={{
                    top: y - 28,
                    left: `calc(${xPct}% - 28px)`,
                  }}
                >
                  <span
                    className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--bg-soft)] border border-[var(--border-strong)] backdrop-blur-md"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-2xl pipeline-pulse-ring"
                    />
                    <span className="text-mono text-sm font-semibold text-gradient relative">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                </div>

                {/* Card */}
                <Reveal delay={i * 80} className="absolute z-10" style={cardStyle}>
                  <div className="card p-5">
                    <h3 className="display-tile mb-2">{s.label}</h3>
                    <p className="text-body-apple text-[var(--text-soft)]">{s.detail}</p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* MOBILE — simple left rail */}
        <ol className="relative space-y-8 md:hidden max-w-md mx-auto">
          <span
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px"
            style={{
              background: "linear-gradient(to bottom, var(--indigo), var(--teal), var(--pink))",
            }}
          />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 80} className="relative pl-12">
              <span
                aria-hidden
                className="absolute left-5 -translate-x-1/2 top-2 w-3 h-3 rounded-full ring-4 ring-[var(--bg)]"
                style={{ background: "linear-gradient(135deg, var(--indigo), var(--teal))" }}
              />
              <div className="card p-5">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-mono text-[var(--text-muted)] text-xs">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display-tile">{s.label}</h3>
                </div>
                <p className="text-body-apple text-[var(--text-soft)]">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
