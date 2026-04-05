"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-mi" className="border-t border-white/5 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-[11px] tracking-[2.5px] uppercase text-white/20 font-medium mb-16">
          Sobre mí
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-start">
          {/* LEFT — foto */}
          <div className="relative w-full max-w-70 mx-auto md:mx-0">
            {/* Glow detrás */}
            <div className="absolute -inset-1 rounded-2xl bg-[#7c5cfc]/20 blur-xl" />

            {/* Marco con borde violeta sutil */}
            <div className="relative rounded-2xl border border-[#7c5cfc]/25 overflow-hidden bg-white/3">
              {/* Placeholder foto — reemplazá src con tu imagen */}
              <div className="aspect-3/4 w-full bg-linear-to-br from-[#7c5cfc]/10 via-white/3 to-transparent flex items-center justify-center">
                {/* Cuando tengas la foto, reemplazá este bloque por:
                    <Image src="/tu-foto.jpg" alt="Kevin Rojo" fill className="object-cover" />
                */}
                <div className="flex flex-col items-center gap-3 select-none pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#7c5cfc]/20 border border-[#7c5cfc]/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#7c5cfc]/60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <span className="text-[11px] text-white/20 tracking-wide">
                    <Image
                      src="/images/foto.jpg"
                      alt="logo"
                      width={260}
                      height={100}
                    />
                  </span>
                </div>
              </div>

              {/* Nombre debajo de la foto */}
              <div className="px-5 py-4 border-t border-white/5">
                <p
                  className="text-sm font-bold text-white/80"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Kevin Rojo
                </p>
                <p className="text-[12px] text-white/35 mt-0.5">
                  Fullstack Developer
                </p>
              </div>
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-3 -right-3 inline-flex items-center gap-2 text-[10px] font-medium tracking-[1.5px] uppercase text-emerald-400/80 bg-[#09090f] border border-emerald-400/20 px-3 py-1.5 rounded-full shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible
            </div>
          </div>

          {/* RIGHT — texto */}
          <div className="flex flex-col gap-8">
            {/* Headline */}
            <div>
              <h2
                className="font-extrabold leading-none tracking-[-2px] text-white"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(32px, 4vw, 52px)",
                }}
              >
                Construyo cosas
                <br />
                <span className="text-[#7c5cfc]">que funcionan.</span>
              </h2>
            </div>

            {/* Párrafo placeholder */}
            <div className="space-y-4">
              <p className="text-[15px] leading-relaxed text-white/40 font-light">
                {/* Reemplazá este texto cuando quieras */}
                Soy desarrollador fullstack con foco en ecommerce y software a
                medida. Me especializo en construir productos digitales que
                combinan buen diseño con código sólido.
              </p>
              <p className="text-[15px] leading-relaxed text-white/25 font-light italic">
                {/* Placeholder para texto adicional */}
                Más sobre mí próximamente...
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/5" />

            {/* Stats rápidos */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "3+", label: "Años de\nexperiencia" },
                { value: "20+", label: "Proyectos\nentregados" },
                { value: "100%", label: "Compromiso\ncon el cliente" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <span
                    className="text-2xl font-extrabold text-white/90 tracking-tight"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {value}
                  </span>
                  <span className="text-[11px] text-white/30 leading-tight whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contacto"
                className="text-sm font-semibold bg-[#7c5cfc] text-white px-5 py-3 rounded-xl hover:bg-[#6a4aec] transition-all duration-200 hover:-translate-y-px"
              >
                Trabajemos juntos
              </a>
              <a
                href="#proyectos"
                className="text-sm text-white/45 border border-white/12 px-5 py-3 rounded-xl hover:text-white/80 hover:border-white/[0.28] transition-colors duration-200"
              >
                Ver proyectos →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
