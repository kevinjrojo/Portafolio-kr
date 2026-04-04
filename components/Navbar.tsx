import Link from "next/link";

export default function Navbar() {
  const links = [
    { label: "Stack", href: "#stack" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-white/5">
      <span
        className="text-white font-bold text-base tracking-tight"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Tu<span className="text-[#7c5cfc]">.</span>dev
      </span>

      <ul className="hidden md:flex items-center gap-6 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-xs text-white/30 hover:text-white/70 transition-colors duration-200"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contacto"
        className="text-xs font-medium text-[#a48dfd] bg-[#7c5cfc]/15 border border-[#7c5cfc]/30 px-4 py-2 rounded-lg hover:bg-[#7c5cfc]/25 transition-colors duration-200"
      >
        Hablemos
      </Link>
    </nav>
  );
}
