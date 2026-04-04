import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="flex flex-col gap-3 p-6">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] tracking-[1.5px] uppercase text-white/20">
          Proyectos
        </span>
        <span className="text-[10px] text-[#7c5cfc]/60 cursor-pointer hover:text-[#7c5cfc] transition-colors">
          Ver todos →
        </span>
      </div>

      {projects.map((project, i) => (
        <div
          key={project.id}
          className={`rounded-xl p-4 border flex flex-col gap-3 ${
            i === 0
              ? "bg-[#7c5cfc]/[0.05] border-[#7c5cfc]/25"
              : "bg-white/[0.03] border-white/[0.07]"
          }`}
        >
          <div className="flex items-center justify-between">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${
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
                className="text-[9px] font-medium px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400/80 border border-emerald-400/20 hover:bg-emerald-400/20 transition-colors"
              >
                Demo disponible →
              </a>
            ) : (
              <span className="text-[9px] font-medium px-2.5 py-1 rounded-full bg-white/[0.05] text-white/30 border border-white/[0.1]">
                Ver capturas →
              </span>
            )}
          </div>

          <div>
            <p className="text-sm font-medium text-white/85 mb-1">
              {project.name}
            </p>
            <p className="text-[11px] text-white/30 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-[9px] px-2 py-0.5 rounded bg-white/[0.04] text-white/20 border border-white/[0.06]"
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
