import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/dict";

export function Navigation({ lang }: { lang: Locale }) {
  const t = dict[lang].nav;
  const items = [
    { label: t.work, href: `/${lang}#work` },
    { label: t.about, href: `/${lang}#about` },
    { label: t.writings, href: `/${lang}#writings` },
    { label: t.contact, href: `/${lang}#contact` },
  ];
  const other: Locale = lang === "en" ? "vi" : "en";

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-center">
      <div className="flex items-center gap-6 text-white text-xs">
        <Link href={`/${lang}`} className="font-medium tracking-tight">
          VMT
        </Link>
        <ul className="flex items-center gap-5">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1 ml-2 text-[10px] tracking-wide">
          <Link
            href={`/${lang}`}
            aria-current="page"
            className="px-2 py-0.5 rounded-full bg-white/15 text-white"
          >
            {dict[lang].langSwitch[lang].toUpperCase()}
          </Link>
          <Link
            href={`/${other}`}
            className="px-2 py-0.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            {dict[lang].langSwitch[other].toUpperCase()}
          </Link>
        </div>
      </div>
    </nav>
  );
}
