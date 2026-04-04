export default function Hero() {
  return (
    <div className="flex flex-col justify-between h-full p-7 border-r border-white/5">
      {/* Badge disponible */}
      <div>
        <div className="inline-flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-emerald-400/80 bg-emerald-400/[0.07] border border-emerald-400/20 px-3 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Disponible para proyectos
        </div>

        <h1
          className="text-[42px] font-extrabold leading-none tracking-[-2px] text-white mb-2"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          KEVIN JAVIER
          <br />
          RO<span className="text-[#7c5cfc]">JO.</span>
        </h1>

        <p className="text-xs text-white/35 mb-4">
          Fullstack Developer — Next.js &amp; React
        </p>

        <p className="text-xs text-white/35 font-light leading-relaxed max-w-xs mb-5">
          Construyo ecommerce y software a medida. Trabajo con empresas y
          emprendedores que quieren resultados reales.
        </p>

        {/* Público objetivo */}
        <div className="flex flex-wrap gap-2 mb-7">
          {[
            "🏢 Empresas",
            "🛍 Emprendedores",
            "Ecommerce",
            "Software a medida",
          ].map((tag, i) => (
            <span
              key={tag}
              className={`text-[10px] px-2.5 py-1 rounded-md border ${
                i < 2
                  ? "bg-[#7c5cfc]/10 text-[#a48dfd]/80 border-[#7c5cfc]/25"
                  : "bg-white/[0.04] text-white/35 border-white/[0.08]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-2">
        <a
          href="#proyectos"
          className="text-xs font-medium bg-[#7c5cfc] text-white px-5 py-2.5 rounded-lg hover:bg-[#6a4aec] transition-colors duration-200"
        >
          Ver proyectos
        </a>
        <a
          href="#contacto"
          className="text-xs text-white/30 border border-white/10 px-5 py-2.5 rounded-lg hover:text-white/60 hover:border-white/20 transition-colors duration-200"
        >
          Hablemos →
        </a>
      </div>
    </div>
  );
}
