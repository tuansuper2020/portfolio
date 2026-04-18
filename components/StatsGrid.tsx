import { q1Stats } from "@/data/stats";

export function StatsGrid() {
  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32">
      <div className="max-w-[980px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#0066cc] mb-4">
          Q1 2026 · By the numbers
        </p>
        <h2 className="display-section mb-4 max-w-2xl">
          A quarter of shipping, measured.
        </h2>
        <p className="text-body-apple opacity-70 max-w-2xl mb-16">
          These numbers come from my own product retrospective — one source of
          truth, not a highlight reel.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {q1Stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-8"
              style={{ boxShadow: "0 5px 30px rgba(0,0,0,0.06)" }}
            >
              <div
                className="text-[#0071e3] font-semibold"
                style={{
                  fontSize: "clamp(2.25rem, 4vw, 3rem)",
                  lineHeight: 1.07,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </div>
              <div className="text-body-apple font-semibold mt-2">
                {s.label}
              </div>
              {s.detail && (
                <p className="text-caption opacity-60 mt-2">{s.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
