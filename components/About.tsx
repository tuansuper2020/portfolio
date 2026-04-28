import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { education, certifications } from "@/data/experience";
import { Reveal } from "./Reveal";

export function About({ lang }: { lang: Locale }) {
  const t = dict[lang].about;
  const ed = education[lang];
  const certs = certifications[lang];
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mb-12 max-w-2xl mt-4">{t.heading}</h2>
        </Reveal>

        <div className="grid md:grid-cols-[0.9fr_1.5fr] gap-12 items-start">
          <Reveal>
            <div className="relative card p-2 overflow-hidden">
              <Image
                src="/portrait-alt.png"
                alt="Portrait of Vũ Mạnh Tuấn"
                width={500}
                height={500}
                className="rounded-[12px] w-full h-auto object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5 text-body-apple text-[var(--text-soft)]">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>

              <div className="pt-7 grid sm:grid-cols-2 gap-6 border-t border-[var(--border)]">
                <div>
                  <h3 className="text-[var(--text)] text-sm font-semibold mb-2 tracking-wide uppercase">
                    {t.educationTitle}
                  </h3>
                  <p className="text-caption text-[var(--text-soft)]">
                    {ed.school}
                    <br />
                    {ed.program}
                    <br />
                    {ed.years} · GPA {ed.gpa}
                  </p>
                </div>
                <div>
                  <h3 className="text-[var(--text)] text-sm font-semibold mb-2 tracking-wide uppercase">
                    {t.certsTitle}
                  </h3>
                  <ul className="text-caption text-[var(--text-soft)] space-y-1">
                    {certs.map((cert) => (
                      <li key={cert}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
