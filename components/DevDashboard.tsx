import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";

export function DevDashboard({ lang }: { lang: Locale }) {
  const t = dict[lang].devDashboard;
  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#0066cc] mb-4">{t.kicker}</p>
        <h2 className="display-section mb-4 max-w-3xl">{t.heading}</h2>
        <p className="text-body-apple opacity-75 max-w-2xl mb-16">{t.lead}</p>

        <div className="space-y-12">
          <figure className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
            <div className="p-3 bg-[#fafafa] border-b border-black/5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-caption text-black/50 font-mono">/sprint</span>
            </div>
            <Image
              src="/screenshots/dev-dashboard-sprint.png"
              alt="Dev Dashboard sprint page"
              width={1440}
              height={1300}
              sizes="(max-width: 1024px) 100vw, 1120px"
              className="w-full h-auto"
            />
            <figcaption className="p-6 border-t border-black/5">
              <p className="text-subheading font-semibold mb-2">{t.sprintTitle}</p>
              <p className="text-caption opacity-70">{t.sprintCaption}</p>
            </figcaption>
          </figure>

          <figure className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
            <div className="p-3 bg-[#fafafa] border-b border-black/5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-caption text-black/50 font-mono">/analytics</span>
            </div>
            <Image
              src="/screenshots/dev-dashboard-analytics.png"
              alt="Dev Dashboard analytics page"
              width={1440}
              height={1300}
              sizes="(max-width: 1024px) 100vw, 1120px"
              className="w-full h-auto"
            />
            <figcaption className="p-6 border-t border-black/5">
              <p className="text-subheading font-semibold mb-2">{t.analyticsTitle}</p>
              <p className="text-caption opacity-70">{t.analyticsCaption}</p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}>
            <h4 className="text-subheading font-semibold mb-2">{t.stackTitle}</h4>
            <p className="text-caption opacity-70 leading-relaxed">{t.stackBody}</p>
          </div>
          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}>
            <h4 className="text-subheading font-semibold mb-2">{t.whyTitle}</h4>
            <p className="text-caption opacity-70 leading-relaxed">{t.whyBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
