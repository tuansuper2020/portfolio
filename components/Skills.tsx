import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";

export function Skills({ lang }: { lang: Locale }) {
  const t = dict[lang].skills;
  const groups = dict[lang].skillGroups;
  const total = groups.reduce((sum, g) => sum + g.skills.length, 0);

  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#2997ff] mb-4">{t.kicker}</p>
        <h2 className="display-section mb-4 max-w-3xl">
          {total} {t.heading}
        </h2>
        <p className="text-body-apple text-white/70 max-w-2xl mb-16">{t.lead}</p>

        <div className="space-y-16">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="mb-6 pb-3 border-b border-white/10">
                <h3 className="text-subheading font-semibold">{g.title}</h3>
                <p className="text-caption text-white/50 mt-1">{g.caption}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {g.skills.map((s) => (
                  <div
                    key={s.name}
                    className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.07] transition-colors"
                  >
                    <code className="text-[0.9em] text-[#2997ff] font-mono mb-2 block">{s.name}</code>
                    <p className="text-caption text-white/75 leading-relaxed">{s.blurb}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
