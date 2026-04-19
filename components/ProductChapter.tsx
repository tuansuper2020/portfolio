import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";

export function ProductChapter({ project, lang }: { project: Project; lang: Locale }) {
  const t = dict[lang].work;
  const isDark = project.theme === "dark";

  return (
    <section
      className={`relative py-24 md:py-32 overflow-hidden ${
        isDark ? "bg-black text-white" : "bg-[#f5f5f7] text-[#1d1d1f]"
      }`}
    >
      {isDark && (
        <div className="absolute inset-0 opacity-30">
          <Image src="/aov-background.png" alt="" fill className="object-cover" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        </div>
      )}

      <div className="relative max-w-[980px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <Image src="/aov-logo.png" alt="AOV logo" width={72} height={72} className="mb-6 rounded-xl" />
          <p className={`text-caption uppercase tracking-[0.2em] mb-4 ${isDark ? "text-[#2997ff]" : "text-[#0066cc]"}`}>
            {t.kicker}
          </p>
          <h2 className="display-section mb-4 max-w-3xl">{project.name}</h2>
          <p className="text-subheading max-w-2xl opacity-80">{project.tagline}</p>
        </div>

        <p className="text-body-apple opacity-80 max-w-3xl mx-auto mb-16 text-center">{project.summary}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className={`rounded-xl p-6 ${isDark ? "bg-[#1d1d1f]/80 backdrop-blur" : "bg-white"}`}
              style={!isDark ? { boxShadow: "0 5px 30px rgba(0,0,0,0.08)" } : undefined}
            >
              <div className="display-tile mb-2 text-[#0071e3]">{m.value}</div>
              <div className="text-body-apple font-medium">{m.label}</div>
              {m.context && <p className="text-caption opacity-60 mt-2">{m.context}</p>}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-subheading mb-4 font-semibold">{t.contributions}</h3>
            <ul className="space-y-3">
              {project.contributions.map((c, i) => (
                <li key={i} className="text-body-apple opacity-80 pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-subheading mb-4 font-semibold">{t.stack}</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className={`px-3 py-1.5 rounded-full text-caption ${isDark ? "bg-white/10 text-white/80" : "bg-black/5 text-black/70"}`}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
