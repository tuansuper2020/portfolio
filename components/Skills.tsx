import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { Reveal } from "./Reveal";

export function Skills({ lang }: { lang: Locale }) {
  const t = dict[lang].skills;
  const groups = dict[lang].skillGroups;
  const total = groups.reduce((sum, g) => sum + g.skills.length, 0);

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mt-4 mb-4 max-w-3xl">
            <span className="text-gradient">{total}</span> {t.heading}
          </h2>
          <p className="text-body-apple text-[var(--text-soft)] max-w-2xl mb-16">{t.lead}</p>
        </Reveal>

        <div className="space-y-14">
          {groups.map((g) => (
            <Reveal key={g.title}>
              <div className="mb-5 flex items-baseline justify-between gap-4 pb-3 border-b border-[var(--border)]">
                <div>
                  <h3 className="text-base font-semibold text-[var(--text)]">{g.title}</h3>
                  <p className="text-caption text-[var(--text-muted)] mt-1">{g.caption}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {g.skills.map((s) => (
                  <div key={s.name} className="card card-glow p-5">
                    <code className="text-mono text-[0.85em] text-[var(--teal-2)] mb-2 block">
                      {s.name}
                    </code>
                    <p className="text-caption text-[var(--text-soft)] leading-relaxed">
                      {s.blurb}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
