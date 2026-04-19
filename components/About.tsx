import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { education, certifications } from "@/data/experience";

export function About({ lang }: { lang: Locale }) {
  const t = dict[lang].about;
  const ed = education[lang];
  const certs = certifications[lang];
  return (
    <section id="about" className="bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32">
      <div className="max-w-[980px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#0066cc] mb-4">
          {t.kicker}
        </p>
        <h2 className="display-section mb-12 max-w-2xl">{t.heading}</h2>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div className="relative">
            <Image
              src="/portrait-alt.png"
              alt="Portrait of Vũ Mạnh Tuấn"
              width={500}
              height={500}
              className="rounded-[12px] w-full h-auto object-cover"
              style={{ boxShadow: "0 5px 30px rgba(0,0,0,0.22)" }}
            />
          </div>

          <div className="space-y-6 text-body-apple">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>

            <div className="pt-6 grid sm:grid-cols-2 gap-6 border-t border-black/10">
              <div>
                <h3 className="text-subheading mb-2">{t.educationTitle}</h3>
                <p className="text-caption text-black/70">
                  {ed.school}
                  <br />
                  {ed.program}
                  <br />
                  {ed.years} · GPA {ed.gpa}
                </p>
              </div>
              <div>
                <h3 className="text-subheading mb-2">{t.certsTitle}</h3>
                <ul className="text-caption text-black/70 space-y-1">
                  {certs.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
