import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";
import { contact } from "@/data/writings";

export function Contact({ lang }: { lang: Locale }) {
  const t = dict[lang].contact;
  return (
    <section id="contact" className="bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <p className="text-caption uppercase tracking-[0.2em] text-[#0066cc] mb-4">{t.kicker}</p>
        <h2 className="display-section mb-6 max-w-2xl mx-auto">{t.heading}</h2>
        <p className="text-body-apple opacity-70 max-w-xl mx-auto mb-12">{t.lead}</p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <a
            href={`mailto:${contact.email}`}
            className="bg-white rounded-2xl p-6 hover:bg-white/80 transition-colors block"
            style={{ boxShadow: "0 5px 30px rgba(0,0,0,0.06)" }}
          >
            <p className="text-caption uppercase tracking-[0.15em] text-black/50 mb-2">{t.emailLabel}</p>
            <p className="text-body-apple break-all">{contact.email}</p>
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="bg-white rounded-2xl p-6 hover:bg-white/80 transition-colors block"
            style={{ boxShadow: "0 5px 30px rgba(0,0,0,0.06)" }}
          >
            <p className="text-caption uppercase tracking-[0.15em] text-black/50 mb-2">{t.phoneLabel}</p>
            <p className="text-body-apple">{contact.phone}</p>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-6 hover:bg-white/80 transition-colors block"
            style={{ boxShadow: "0 5px 30px rgba(0,0,0,0.06)" }}
          >
            <p className="text-caption uppercase tracking-[0.15em] text-black/50 mb-2">{t.linkedinLabel}</p>
            <p className="text-body-apple">{contact.linkedinDisplay}</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="bg-black text-white/50 py-10 text-center">
      <p className="text-caption">
        © {new Date().getFullYear()} Vũ Mạnh Tuấn. {dict[lang].footer}
      </p>
    </footer>
  );
}
