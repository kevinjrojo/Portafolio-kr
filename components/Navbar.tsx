"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Stack", href: "#stack" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="relative z-50 border-b border-white/5">
      <div className="flex items-center justify-between py-4">
        {/* Logo — siempre visible */}
        <span
          className="text-white font-semibold text-base tracking-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          KR<span className="text-[#7c5cfc]">.</span>DEV
        </span>

        {/* Desktop: links centrados */}
        <ul className="hidden md:flex items-center gap-10 list-none absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-xm text-white/30 hover:text-white/70 transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: CTA derecha */}
        <Link
          href="#contacto"
          className="hidden md:inline-flex text-xs font-medium text-[#a48dfd] bg-[#7c5cfc]/15 border border-[#7c5cfc]/30 px-4 py-2 rounded-lg hover:bg-[#7c5cfc]/25 transition-colors duration-200"
        >
          CV
        </Link>

        {/* Mobile: hamburger derecha */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1 ml-auto"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white/60 transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white/60 transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white/60 transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#0d0d14] border-b border-white/5 px-0 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setOpen(false)}
            className="text-xs font-medium text-[#a48dfd] bg-[#7c5cfc]/15 border border-[#7c5cfc]/30 px-4 py-2 rounded-lg text-center hover:bg-[#7c5cfc]/25 transition-colors w-fit"
          >
            CV
          </Link>
        </div>
      )}
    </nav>
  );
}
