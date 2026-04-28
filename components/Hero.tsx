import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";

export function Hero({ lang }: { lang: Locale }) {
  const t = dict[lang].hero;
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="orb orb-indigo orb-anim-1" style={{ width: 520, height: 520, top: "15%", left: "8%" }} />
        <div className="orb orb-teal orb-anim-2" style={{ width: 460, height: 460, top: "30%", right: "5%" }} />
        <div className="orb orb-pink orb-anim-3" style={{ width: 380, height: 380, bottom: "5%", left: "30%" }} />
      </div>
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.18]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent -z-10" />

      <div className="relative z-10 max-w-[980px] w-full px-6 py-32 flex flex-col items-center text-center">
        <span className="chip chip-dot mb-8">
          {t.kicker}
        </span>

        <h1 className="display-hero max-w-4xl">
          <span className="text-[var(--text)]">{t.title}</span>
          <br />
          <span className="text-gradient">{t.subtitle}</span>
        </h1>

        <p className="text-subheading text-[var(--text-soft)] mt-7 max-w-xl">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-9">
          <Link href={`/${lang}#work`} className="btn btn-primary">
            {t.ctaWork}
            <span aria-hidden>→</span>
          </Link>
          <Link href={`/${lang}#contact`} className="btn btn-secondary">
            {t.ctaContact}
          </Link>
        </div>

        {/* Code-mock feel below CTAs */}
        <div className="mt-14 w-full max-w-md mx-auto code-mock text-left">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div>
            <span className="prompt">$</span>
            <span className="cmd">cat ~/career/q1-2026.json</span>
          </div>
          <div className="text-[var(--text-muted)] mt-1 text-[0.85em]">
            {"{ prds: 64, mockups: 70, commits: 869, rank: \"#2\" }"}
          </div>
        </div>

        {/* Portrait floats below */}
        <div className="mt-12 relative">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#5a67d8] via-[#16a394] to-[#ff6bb6] blur-xl opacity-50" />
          <Image
            src="/portrait.jpg"
            alt="Portrait of Vũ Mạnh Tuấn"
            width={84}
            height={84}
            priority
            className="relative rounded-full object-cover ring-2 ring-white/10"
            style={{ width: 84, height: 84 }}
          />
        </div>
      </div>
    </section>
  );
}
