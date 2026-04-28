import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { Reveal } from "./Reveal";

function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i} className="text-[var(--text)]">{p.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

export function Bots({ lang }: { lang: Locale }) {
  const t = dict[lang].bots;
  const wiring = dict[lang].hermesWiring;
  const rules = dict[lang].playbookRules;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="orb orb-violet orb-anim-1" style={{ width: 460, height: 460, top: "20%", left: "-10%", opacity: 0.2 }} />
      </div>
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mt-4 mb-4 max-w-3xl">{t.heading}</h2>
          <p className="text-body-apple text-[var(--text-soft)] max-w-2xl mb-20">{t.lead}</p>
        </Reveal>

        {/* HERMES */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start mb-10">
            <Reveal>
              <p className="text-mono text-[var(--teal-2)] text-xs mb-3 tracking-wider uppercase">{t.hermesSubtitle}</p>
              <h3 className="display-tile mb-4 text-[var(--text)]">Hermes</h3>
              <p className="text-body-apple text-[var(--text-soft)] mb-4">{t.hermesBody1}</p>
              <p className="text-body-apple text-[var(--text-soft)]">{t.hermesBody2}</p>
            </Reveal>
            <Reveal delay={120}>
              <div className="card p-2 overflow-hidden">
                <Image
                  src="/screenshots/telegram-bot.jpg"
                  alt="Hermes Telegram bot screenshot"
                  width={1154}
                  height={843}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <Reveal>
              <div className="card bg-white p-3">
                <Image
                  src="/diagrams/hermes-bot-architecture.png"
                  alt="Hermes architecture diagram"
                  width={1090}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-[var(--text)]">{t.howItsWired}</h4>
                <dl className="space-y-3 text-body-apple text-[var(--text-soft)]">
                  {wiring.map((w) => (
                    <div key={w.term} className="flex gap-3">
                      <dt className="text-mono text-[var(--teal-2)] text-xs w-28 shrink-0 pt-1 uppercase tracking-wider">{w.term}</dt>
                      <dd>{w.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>

        {/* VICTOR */}
        <div>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start mb-10">
            <Reveal className="order-2 lg:order-1">
              <div className="card bg-white p-3">
                <Image
                  src="/screenshots/crisp-bot.jpg"
                  alt="Victor Crisp bot screenshot"
                  width={1792}
                  height={1583}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="order-1 lg:order-2">
              <p className="text-mono text-[var(--pink)] text-xs mb-3 tracking-wider uppercase">{t.victorSubtitle}</p>
              <h3 className="display-tile mb-4 text-[var(--text)]">Victor</h3>
              <p className="text-body-apple text-[var(--text-soft)] mb-4">{t.victorBody1}</p>
              <p className="text-body-apple text-[var(--text-soft)]">{t.victorBody2}</p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
            <Reveal>
              <h4 className="text-base font-semibold text-[var(--text)] mb-4">{t.playbookTitle}</h4>
              <ul className="space-y-3 text-body-apple text-[var(--text-soft)]">
                {rules.map((r, i) => (
                  <li key={i} className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[var(--pink)]">
                    {renderBold(r)}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="card bg-white p-3">
                <Image
                  src="/diagrams/architecture.png"
                  alt="Victor Crisp bot architecture diagram"
                  width={1570}
                  height={830}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
