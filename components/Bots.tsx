import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";

function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i}>{p.slice(2, -2)}</strong>
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
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#2997ff] mb-4">{t.kicker}</p>
        <h2 className="display-section mb-4 max-w-3xl">{t.heading}</h2>
        <p className="text-body-apple text-white/70 max-w-2xl mb-20">{t.lead}</p>

        {/* HERMES */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start mb-10">
            <div>
              <p className="text-caption text-[#2997ff] mb-3 tracking-wide">{t.hermesSubtitle}</p>
              <h3 className="display-tile mb-4">Hermes</h3>
              <p className="text-body-apple text-white/80 mb-4">{t.hermesBody1}</p>
              <p className="text-body-apple text-white/80">{t.hermesBody2}</p>
            </div>
            <div className="rounded-2xl overflow-hidden bg-white/[0.04] p-4" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
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
          </div>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <div className="rounded-2xl bg-white p-4" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
              <Image
                src="/diagrams/hermes-bot-architecture.png"
                alt="Hermes architecture diagram"
                width={1090}
                height={600}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-subheading font-semibold">{t.howItsWired}</h4>
              <dl className="space-y-3 text-body-apple text-white/80">
                {wiring.map((w) => (
                  <div key={w.term} className="flex gap-3">
                    <dt className="text-caption text-[#2997ff] w-28 shrink-0 pt-1">{w.term}</dt>
                    <dd>{w.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* VICTOR */}
        <div>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start mb-10">
            <div className="rounded-2xl overflow-hidden bg-white p-4 order-2 lg:order-1" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
              <Image
                src="/screenshots/crisp-bot.jpg"
                alt="Victor Crisp live-chat bot screenshot"
                width={1792}
                height={1583}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-caption text-[#2997ff] mb-3 tracking-wide">{t.victorSubtitle}</p>
              <h3 className="display-tile mb-4">Victor</h3>
              <p className="text-body-apple text-white/80 mb-4">{t.victorBody1}</p>
              <p className="text-body-apple text-white/80">{t.victorBody2}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
            <div className="space-y-4">
              <h4 className="text-subheading font-semibold">{t.playbookTitle}</h4>
              <ul className="space-y-3 text-body-apple text-white/80">
                {rules.map((r, i) => (
                  <li key={i} className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#2997ff]">
                    {renderBold(r)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-4" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
              <Image
                src="/diagrams/architecture.png"
                alt="Victor Crisp bot architecture diagram"
                width={1570}
                height={830}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
