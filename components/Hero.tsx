import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { Magnetic } from "./Magnetic";

export function Hero({ lang }: { lang: Locale }) {
  const t = dict[lang].hero;

  const orbitChips =
    lang === "vi"
      ? [
          { label: "$53.7k", caption: "doanh thu T4" },
          { label: "962", caption: "shop trả phí" },
          { label: "#2", caption: "App Store" },
          { label: "65.1%", caption: "trial→trả phí" },
        ]
      : [
          { label: "$53.7k", caption: "Apr revenue" },
          { label: "962", caption: "paying shops" },
          { label: "#2", caption: "App Store" },
          { label: "65.1%", caption: "trial→paid" },
        ];

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="orb orb-indigo orb-anim-1" style={{ width: 520, height: 520, top: "10%", left: "-10%" }} />
        <div className="orb orb-teal orb-anim-2" style={{ width: 460, height: 460, top: "30%", right: "-5%" }} />
        <div className="orb orb-pink orb-anim-3" style={{ width: 380, height: 380, bottom: "-5%", left: "30%" }} />
      </div>
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.18]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent -z-10" />

      <div className="relative max-w-[1200px] w-full mx-auto px-6 grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
        {/* LEFT — copy */}
        <div className="relative">
          <span className="chip chip-dot mb-7">{t.kicker}</span>

          <h1 className="display-hero">
            <span className="text-[var(--text)]">{t.title}</span>
            <br />
            <span className="text-gradient">{t.subtitle}</span>
          </h1>

          <p className="text-subheading text-[var(--text-soft)] mt-6 max-w-xl">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Magnetic>
              <Link href={`/${lang}#work`} className="btn btn-primary">
                {t.ctaWork}
                <span aria-hidden>→</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href={`/${lang}#contact`} className="btn btn-secondary">
                {t.ctaContact}
              </Link>
            </Magnetic>
          </div>

          {/* Code-mock */}
          <div className="mt-10 max-w-md code-mock">
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div>
              <span className="prompt">$</span>
              <span className="cmd">cat ~/career/q1-2026.json</span>
            </div>
            <div className="text-[var(--text-muted)] mt-1 text-[0.85em] caret">
              {"{ prds: 64, mockups: 70, commits: 869, rank: \"#2\" }"}
            </div>
          </div>
        </div>

        {/* RIGHT — orbiting portrait */}
        <div className="relative h-[440px] lg:h-[520px] flex items-center justify-center">
          {/* Faint concentric rings */}
          <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[260, 360, 460].map((d, i) => (
              <span
                key={d}
                className="absolute rounded-full border border-[var(--border)]"
                style={{ width: d, height: d, opacity: 0.5 - i * 0.12 }}
              />
            ))}
          </div>

          {/* Glow behind portrait */}
          <div className="absolute w-[220px] h-[220px] rounded-full bg-gradient-to-br from-[#5a67d8] via-[#16a394] to-[#ff6bb6] blur-3xl opacity-40" />

          {/* Portrait */}
          <Image
            src="/portrait.jpg"
            alt="Portrait of Vũ Mạnh Tuấn"
            width={200}
            height={200}
            priority
            className="relative rounded-full object-cover ring-2 ring-white/10 shadow-2xl"
            style={{ width: 200, height: 200 }}
          />

          {/* Orbiting metric chips */}
          {orbitChips.map((c, i) => {
            const radius = i % 2 === 0 ? 200 : 230;
            const delay = -(i * 5.5);
            return (
              <span
                key={c.label}
                className={`orbit ${i % 2 ? "orbit-rev" : ""}`}
                style={{
                  ["--r" as never]: `${radius}px`,
                  animationDelay: `${delay}s`,
                  top: "50%",
                  left: "50%",
                  marginTop: -22,
                  marginLeft: -52,
                }}
              >
                <span
                  className="orbit-counter inline-block"
                  style={{ animationDelay: `${delay}s` }}
                >
                  <span className="card px-3 py-2 inline-flex items-center gap-2 backdrop-blur-md bg-white/[0.06]">
                    <span className="text-mono text-[12px] font-semibold text-gradient">
                      {c.label}
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                      {c.caption}
                    </span>
                  </span>
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
