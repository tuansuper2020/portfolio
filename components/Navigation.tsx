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
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50 h-14 flex items-center">
      <div className="max-w-[1200px] w-full mx-auto px-6 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#5a67d8] via-[#16a394] to-[#ff6bb6] flex items-center justify-center text-[11px] font-bold text-white tracking-tight">
            V
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Vũ Mạnh Tuấn
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-[13px]">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-3 py-2 rounded-lg text-[var(--text-soft)] hover:text-[var(--text)] hover:bg-white/5 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 text-[11px] tracking-wide font-medium">
          <Link
            href={`/${lang}`}
            aria-current="page"
            className="px-2.5 py-1 rounded-md bg-white/10 text-[var(--text)]"
          >
            {dict[lang].langSwitch[lang].toUpperCase()}
          </Link>
          <Link
            href={`/${other}`}
            className="px-2.5 py-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-white/5 transition-colors"
          >
            {dict[lang].langSwitch[other].toUpperCase()}
          </Link>
        </div>
      </div>
    </nav>
  );
}
