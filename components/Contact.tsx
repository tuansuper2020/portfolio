import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { contact } from "@/data/writings";
import { Reveal } from "./Reveal";

export function Contact({ lang }: { lang: Locale }) {
  const t = dict[lang].contact;
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="orb orb-pink orb-anim-1" style={{ width: 400, height: 400, bottom: "10%", left: "20%", opacity: 0.25 }} />
        <div className="orb orb-indigo orb-anim-3" style={{ width: 360, height: 360, top: "10%", right: "15%", opacity: 0.25 }} />
      </div>
      <div className="max-w-[1120px] mx-auto px-6 text-center">
        <Reveal>
          <span className="chip mb-4">{t.kicker}</span>
          <h2 className="display-section mt-4 mb-6 max-w-2xl mx-auto">{t.heading}</h2>
          <p className="text-body-apple text-[var(--text-soft)] max-w-xl mx-auto mb-12">{t.lead}</p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <Reveal>
            <a
              href={`mailto:${contact.email}`}
              className="card card-glow p-6 block text-left h-full"
            >
              <p className="text-mono text-[var(--teal-2)] text-xs uppercase tracking-[0.15em] mb-2">
                {t.emailLabel}
              </p>
              <p className="text-body-apple text-[var(--text)] break-all">{contact.email}</p>
            </a>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="card card-glow p-6 block text-left h-full"
            >
              <p className="text-mono text-[var(--teal-2)] text-xs uppercase tracking-[0.15em] mb-2">
                {t.phoneLabel}
              </p>
              <p className="text-body-apple text-[var(--text)]">{contact.phone}</p>
            </a>
          </Reveal>
          <Reveal delay={160}>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-glow p-6 block text-left h-full"
            >
              <p className="text-mono text-[var(--teal-2)] text-xs uppercase tracking-[0.15em] mb-2">
                {t.linkedinLabel}
              </p>
              <p className="text-body-apple text-[var(--text)]">{contact.linkedinDisplay}</p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="border-t border-[var(--border)] py-10 text-center">
      <p className="text-caption text-[var(--text-muted)]">
        © {new Date().getFullYear()} Vũ Mạnh Tuấn. {dict[lang].footer}
      </p>
    </footer>
  );
}
