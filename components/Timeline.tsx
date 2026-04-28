import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { getExperience } from "@/data/experience";
import { Reveal } from "./Reveal";

export function Timeline({ lang }: { lang: Locale }) {
  const t = dict[lang].timeline;
  const experience = getExperience(lang);
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mt-4 mb-16 max-w-2xl">{t.heading}</h2>
        </Reveal>

        <ol className="relative pl-8 space-y-10">
          <span aria-hidden className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[var(--border-strong)] to-transparent" />
          {experience.map((job, i) => (
            <Reveal as="li" delay={i * 80} key={job.start} className="relative">
              <span
                className={`absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full ring-4 ring-[var(--bg)] ${
                  job.current
                    ? "bg-gradient-to-br from-[#5a67d8] via-[#16a394] to-[#ff6bb6]"
                    : "bg-[var(--surface-2)] border border-[var(--border-strong)]"
                }`}
              />
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-3">
                <span className="text-caption text-[var(--text-muted)] text-mono tracking-wide">
                  {job.start} — {job.end}
                </span>
                {job.current && (
                  <span className="text-[11px] text-[var(--teal-2)] uppercase tracking-[0.18em] font-semibold">
                    {t.now}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 mb-4">
                {job.logo && (
                  <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center overflow-hidden ring-1 ring-[var(--border)]">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </span>
                )}
                <div>
                  <h3 className="display-tile leading-none">{job.role}</h3>
                  <p className="text-caption text-[var(--text-muted)] mt-1">
                    {job.company}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {job.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="text-body-apple text-[var(--text-soft)] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--text-muted)]"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
