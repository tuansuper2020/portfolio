import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";

export function Pipeline({ lang }: { lang: Locale }) {
  const t = dict[lang].pipeline;
  const steps = dict[lang].pipelineSteps;
  return (
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#2997ff] mb-4">{t.kicker}</p>
        <h2 className="display-section mb-4 max-w-2xl">{t.heading}</h2>
        <p className="text-body-apple text-white/70 max-w-2xl mb-16">{t.lead}</p>

        <div className="relative">
          <div aria-hidden className="absolute left-6 top-0 bottom-0 w-px pipeline-track" />
          <ol className="space-y-8">
            {steps.map((s, i) => (
              <li
                key={s.label}
                className="relative pl-16 pipeline-step"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span className="pipeline-dot absolute left-[18px] top-1 w-4 h-4 rounded-full bg-[#0071e3] ring-4 ring-black" />
                <span className="pipeline-pulse absolute left-[14px] top-[-3px] w-6 h-6 rounded-full" />
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-caption text-white/40 font-mono w-6">0{i + 1}</span>
                  <h3 className="display-tile">{s.label}</h3>
                </div>
                <p className="text-body-apple text-white/60 pl-10">{s.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
