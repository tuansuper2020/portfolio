import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";

export function AIWorkflow({ lang }: { lang: Locale }) {
  const t = dict[lang].aiWorkflow;
  const researchPhases = dict[lang].researchPhases;
  const auditCriteria = dict[lang].auditCriteria;
  const psychologyLenses = dict[lang].psychologyLenses;
  const bfsCategories = dict[lang].bfsCategories;
  const translationExample = dict[lang].translationExample;
  const aovWarnings = dict[lang].aovWarnings;

  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#0066cc] mb-4">{t.kicker}</p>
        <h2 className="display-section mb-4 max-w-3xl">{t.heading}</h2>
        <p className="text-body-apple opacity-75 max-w-2xl mb-20">{t.intro}</p>

        {/* PRD Research */}
        <div className="mb-24">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-caption font-mono text-[#0066cc]">01</span>
            <h3 className="display-tile">{t.researchTitle}</h3>
          </div>
          <p className="text-body-apple opacity-80 max-w-3xl mb-10">{t.researchLead}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {researchPhases.map((p, i) => (
              <div key={p.title} className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-caption font-mono text-[#0071e3]">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="text-subheading font-semibold">{p.title}</h4>
                </div>
                <p className="text-caption opacity-75 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 border-l-4 border-[#0071e3]" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}>
            <p className="text-caption text-[#0066cc] uppercase tracking-[0.15em] mb-3">{t.exampleTitle}</p>
            <ul className="text-body-apple opacity-80 space-y-2">
              {translationExample.map((line, i) => (
                <li key={i} className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* UX Audit */}
        <div className="mb-24">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-caption font-mono text-[#0066cc]">02</span>
            <h3 className="display-tile">{t.uxTitle}</h3>
          </div>
          <p className="text-body-apple opacity-80 max-w-3xl mb-10">{t.uxLead}</p>

          <div className="grid md:grid-cols-5 gap-3 mb-10">
            {auditCriteria.map((c) => (
              <div key={c.letter} className="bg-white rounded-2xl p-5" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#0071e3] text-white flex items-center justify-center font-semibold text-sm">
                    {c.letter}
                  </span>
                  <h4 className="text-body-apple font-semibold">{c.title}</h4>
                </div>
                <p className="text-caption opacity-75 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1d1d1f] text-white rounded-2xl p-8">
            <p className="text-caption uppercase tracking-[0.15em] text-[#2997ff] mb-6">{t.psychologyTitle}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {psychologyLenses.map((lens) => (
                <div key={lens.law}>
                  <p className="text-body-apple font-semibold mb-1">{lens.law}</p>
                  <p className="text-caption text-white/70 leading-relaxed">{lens.cue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BFS check */}
        <div>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-caption font-mono text-[#0066cc]">03</span>
            <h3 className="display-tile">{t.bfsTitle}</h3>
          </div>
          <p className="text-body-apple opacity-80 max-w-3xl mb-10">{t.bfsLead}</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {bfsCategories.map((c, i) => (
              <div key={c.title} className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-caption font-mono text-[#0071e3]">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="text-body-apple font-semibold">{c.title}</h4>
                </div>
                <p className="text-caption opacity-75 leading-relaxed">{c.cues}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 border-l-4 border-[#0071e3]" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}>
            <p className="text-caption text-[#0066cc] uppercase tracking-[0.15em] mb-3">{t.warningsTitle}</p>
            <ul className="text-body-apple opacity-80 space-y-2">
              {aovWarnings.map((line, i) => (
                <li key={i} className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
