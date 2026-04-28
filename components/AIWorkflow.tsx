import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { Reveal } from "./Reveal";

export function AIWorkflow({ lang }: { lang: Locale }) {
  const t = dict[lang].aiWorkflow;
  const researchPhases = dict[lang].researchPhases;
  const auditCriteria = dict[lang].auditCriteria;
  const psychologyLenses = dict[lang].psychologyLenses;
  const bfsCategories = dict[lang].bfsCategories;
  const translationExample = dict[lang].translationExample;
  const aovWarnings = dict[lang].aovWarnings;

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mt-4 mb-4 max-w-3xl">{t.heading}</h2>
          <p className="text-body-apple text-[var(--text-soft)] max-w-2xl mb-20">{t.intro}</p>
        </Reveal>

        {/* Research */}
        <div className="mb-24">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-5">
              <span className="text-mono text-[var(--text-muted)] text-sm">01</span>
              <h3 className="display-tile">{t.researchTitle}</h3>
            </div>
            <p className="text-body-apple text-[var(--text-soft)] max-w-3xl mb-10">{t.researchLead}</p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {researchPhases.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="card p-6 h-full">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-mono text-[var(--teal-2)] text-sm">{String(i + 1).padStart(2, "0")}</span>
                    <h4 className="text-base font-semibold text-[var(--text)]">{p.title}</h4>
                  </div>
                  <p className="text-caption text-[var(--text-soft)] leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="card p-6 border-l-2" style={{ borderLeftColor: "var(--teal)" }}>
              <p className="text-mono text-[var(--teal-2)] text-xs uppercase tracking-[0.15em] mb-3">{t.exampleTitle}</p>
              <ul className="text-body-apple text-[var(--text-soft)] space-y-2">
                {translationExample.map((line, i) => (
                  <li key={i} className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[var(--teal-2)]">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* UX Audit */}
        <div className="mb-24">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-5">
              <span className="text-mono text-[var(--text-muted)] text-sm">02</span>
              <h3 className="display-tile">{t.uxTitle}</h3>
            </div>
            <p className="text-body-apple text-[var(--text-soft)] max-w-3xl mb-10">{t.uxLead}</p>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-3 mb-10">
            {auditCriteria.map((c, i) => (
              <Reveal key={c.letter} delay={i * 50}>
                <div className="card p-5 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#5a67d8] to-[#16a394] text-white flex items-center justify-center font-semibold text-sm">
                      {c.letter}
                    </span>
                    <h4 className="text-sm font-semibold text-[var(--text)]">{c.title}</h4>
                  </div>
                  <p className="text-caption text-[var(--text-soft)] leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="card p-8" style={{ background: "linear-gradient(135deg, rgba(90,103,216,0.08), rgba(22,163,148,0.08), rgba(255,107,182,0.08))" }}>
              <p className="text-mono text-[var(--teal-2)] text-xs uppercase tracking-[0.15em] mb-6">{t.psychologyTitle}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {psychologyLenses.map((lens) => (
                  <div key={lens.law}>
                    <p className="text-body-apple font-semibold text-[var(--text)] mb-1">{lens.law}</p>
                    <p className="text-caption text-[var(--text-soft)] leading-relaxed">{lens.cue}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* BFS */}
        <div>
          <Reveal>
            <div className="flex items-baseline gap-4 mb-5">
              <span className="text-mono text-[var(--text-muted)] text-sm">03</span>
              <h3 className="display-tile">{t.bfsTitle}</h3>
            </div>
            <p className="text-body-apple text-[var(--text-soft)] max-w-3xl mb-10">{t.bfsLead}</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {bfsCategories.map((c, i) => (
              <Reveal key={c.title} delay={i * 40}>
                <div className="card p-6 h-full">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-mono text-[var(--teal-2)] text-sm">{String(i + 1).padStart(2, "0")}</span>
                    <h4 className="text-base font-semibold text-[var(--text)]">{c.title}</h4>
                  </div>
                  <p className="text-caption text-[var(--text-soft)] leading-relaxed">{c.cues}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="card p-6 border-l-2" style={{ borderLeftColor: "var(--pink)" }}>
              <p className="text-mono text-[var(--pink)] text-xs uppercase tracking-[0.15em] mb-3">{t.warningsTitle}</p>
              <ul className="text-body-apple text-[var(--text-soft)] space-y-2">
                {aovWarnings.map((line, i) => (
                  <li key={i} className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[var(--pink)]">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
