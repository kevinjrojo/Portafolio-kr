export default function Hero() {
  return (
    /* Este div ocupa toda la altura y tiene el border-r — NO se toca */
    <div
      className="flex flex-col border-r border-white/[0.06]"
      style={{ minHeight: "calc(100vh - 61px)" }}
    >
      {/* Este div interno es el que se centra verticalmente */}
      <div className="flex flex-col gap-8 py-16 pr-12 my-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 w-fit text-[10px] font-medium tracking-[2px] uppercase text-emerald-400/80 bg-emerald-400/[0.06] border border-emerald-400/20 px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Disponible para proyectos
        </div>

        {/* Name */}
        <div>
          <h1
            className="font-extrabold leading-[0.88] tracking-[-3px] text-white"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(52px, 6vw, 80px)",
            }}
          >
            KEVIN
            <br />
            RO<span className="text-[#7c5cfc]">JO</span>
          </h1>
          <p className="text-sm text-white/35 mt-3 tracking-wide">
            Fullstack Developer — Next.js &amp; React
          </p>
        </div>

        {/* Description */}
        <p className="text-[15px] leading-relaxed text-white/40 font-light max-w-[360px]">
          Construyo ecommerce y software a medida. Trabajo con empresas y
          emprendedores que quieren resultados reales.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {[
            { label: "🏢 Empresas", purple: true },
            { label: "🛍 Emprendedores", purple: true },
            { label: "Ecommerce", purple: false },
            { label: "Software a medida", purple: false },
          ].map(({ label, purple }) => (
            <span
              key={label}
              className={`text-xs px-3.5 py-1.5 rounded-lg border ${
                purple
                  ? "bg-[#7c5cfc]/10 text-[#a48dfd]/85 border-[#7c5cfc]/25"
                  : "bg-white/[0.04] text-white/35 border-white/[0.08]"
              }`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="text-sm font-semibold bg-[#7c5cfc] text-white px-7 py-3.5 rounded-xl hover:bg-[#6a4aec] transition-all duration-200 hover:-translate-y-px"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="text-sm text-white/45 border border-white/[0.12] px-7 py-3.5 rounded-xl hover:text-white/80 hover:border-white/[0.28] transition-colors duration-200"
          >
            Hablemos →
          </a>
        </div>
      </div>
    </div>
  );
}
