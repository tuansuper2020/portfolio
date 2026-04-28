import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { Tilt } from "./Tilt";

export function ProductChapter({ project, lang }: { project: Project; lang: Locale }) {
  const t = dict[lang].work;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="orb orb-indigo orb-anim-2" style={{ width: 380, height: 380, top: "10%", right: "-5%", opacity: 0.25 }} />
        <div className="orb orb-teal orb-anim-3" style={{ width: 320, height: 320, bottom: "5%", left: "-5%", opacity: 0.25 }} />
      </div>

      <div className="relative max-w-[1120px] mx-auto px-6">
        <Reveal className="text-center">
          <div className="flex flex-col items-center mb-12">
            <Image src="/aov-logo.png" alt="AOV logo" width={64} height={64} className="mb-5 rounded-xl ring-1 ring-[var(--border)]" />
            <span className="chip mb-4">{t.kicker}</span>
            <h2 className="display-section mb-3 max-w-3xl">{project.name}</h2>
            <p className="text-subheading text-[var(--text-soft)] max-w-2xl">{project.tagline}</p>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-body-apple text-[var(--text-soft)] max-w-3xl mx-auto mb-14 text-center">
            {project.summary}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {project.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 60}>
              <Tilt className="h-full">
                <div className="card card-glow p-6 h-full">
                  <div className="display-tile mb-2 text-gradient">
                    <Counter value={m.value} />
                  </div>
                  <div className="text-body-apple font-medium text-[var(--text)]">{m.label}</div>
                  {m.context && <p className="text-caption text-[var(--text-muted)] mt-2">{m.context}</p>}
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-soft)] mb-4">
              {t.contributions}
            </h3>
            <ul className="space-y-3">
              {project.contributions.map((c, i) => (
                <li
                  key={i}
                  className="text-body-apple text-[var(--text-soft)] pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[var(--teal-2)]"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-soft)] mb-4">
              {t.stack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
