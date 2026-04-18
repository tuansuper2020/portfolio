import Link from "next/link";

export function Navigation() {
  const items = [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Writings", href: "/#writings" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-center">
      <div className="flex items-center gap-8 text-white text-xs">
        <Link href="/" className="font-medium tracking-tight">
          VMT
        </Link>
        <ul className="flex items-center gap-6">
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
      </div>
    </nav>
  );
}
