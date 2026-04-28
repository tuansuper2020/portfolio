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

        <div className="relative">
          <div aria-hidden className="absolute left-6 top-0 bottom-0 w-px pipeline-track" />
          <ol className="space-y-8">
            {steps.map((s, i) => (
              <li
                key={s.label}
                className="relative pl-16 pipeline-step"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <span className="absolute left-[18px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-[#5a67d8] to-[#16a394] ring-4 ring-[var(--bg)]" />
                <span className="pipeline-pulse absolute left-[14px] top-[-3px] w-6 h-6 rounded-full" />
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-mono text-[var(--text-muted)] text-xs w-6">0{i + 1}</span>
                  <h3 className="display-tile">{s.label}</h3>
                </div>
                <p className="text-body-apple text-[var(--text-soft)] pl-10">{s.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
