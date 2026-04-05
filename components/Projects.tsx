import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 py-16 pr-2 pl-2 overflow-y-auto m-auto ">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[15px] tracking-[2.5px] uppercase text-white/20 font-medium">
          Proyectos
        </span>
        <a
          href="#"
          className="text-[15px] text-[#7c5cfc]/60 hover:text-[#7c5cfc] transition-colors"
        >
          Ver todos →
        </a>
      </div>

      {projects.map((project, i) => (
        <div
          key={project.id}
          className={`rounded-[18px] p-5.5 border flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5 ${
            i === 0
              ? "bg-[#7c5cfc]/5 border-[#7c5cfc]/20 hover:border-[#7c5cfc]/38"
              : "bg-white/2.5 border-white/[0.07] hover:border-white/[0.14]"
          }`}
        >
          {/* Top */}
          <div className="flex items-center justify-between">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                i === 0 ? "bg-[#7c5cfc]/15" : "bg-emerald-400/10"
              }`}
            >
              {project.icon}
            </div>

            {project.type === "demo" ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-medium px-3 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400/85 border border-emerald-400/20 hover:bg-emerald-400/20 transition-colors whitespace-nowrap"
              >
                Demo disponible →
              </a>
            ) : (
              <span className="text-[10px] font-medium px-3 py-1.5 rounded-full bg-white/5 text-white/30 border border-white/10 whitespace-nowrap">
                Ver capturas →
              </span>
            )}
          </div>

          {/* Info */}
          <div>
            <p
              className="text-base font-bold text-white/90 mb-1.5"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {project.name}
            </p>
            <p className="text-[13px] text-white/35 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-white/30 border border-white/[0.07]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
