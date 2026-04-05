import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/data/projects";
import ImageSlider from "@/components/ImageSlider";
import type { Metadata } from "next";

// Generamos las rutas estáticas para cada proyecto
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Metadata dinámica por proyecto
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Kevin Rojo`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#09090f]">
      {/* Glow de fondo */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7c5cfc]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
        {/* Back */}
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-[13px] text-white/35 hover:text-white/70 transition-colors duration-200 mb-12 group"
        >
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Volver a proyectos
        </Link>

        {/* Header del proyecto */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Icono + tipo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#7c5cfc]/15 border border-[#7c5cfc]/25 flex items-center justify-center text-2xl shrink-0">
              {project.icon}
            </div>
            <span className="text-[11px] font-medium tracking-[2px] uppercase text-white/25">
              {project.type === "demo" ? "Proyecto con demo" : "Proyecto"}
            </span>
          </div>

          {/* Título */}
          <h1
            className="font-extrabold leading-[0.95] tracking-[-2.5px] text-white"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(32px, 5vw, 60px)",
            }}
          >
            {project.name}
          </h1>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-white/40 border border-white/[0.07]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-12" />

        {/* Slider */}
        <div className="mb-12">
          <ImageSlider images={project.images} projectName={project.name} />
        </div>

        {/* Descripción + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start">
          {/* Descripción */}
          <div className="flex flex-col gap-4">
            <p className="text-[11px] tracking-[2.5px] uppercase text-white/20 font-medium">
              Sobre el proyecto
            </p>
            <p className="text-[15px] leading-relaxed text-white/50 font-light max-w-xl">
              {project.description}
            </p>
          </div>

          {/* CTA — solo si tiene demo */}
          {project.type === "demo" && project.demoUrl && (
            <div className="shrink-0">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-[#7c5cfc] text-white px-5 py-3 rounded-xl hover:bg-[#6a4aec] transition-all duration-200 hover:-translate-y-px whitespace-nowrap"
              >
                Ver demo
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>

        {/* Footer de la página — volver */}
        <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-between">
          <Link
            href="/#proyectos"
            className="text-[13px] text-white/30 hover:text-white/60 transition-colors duration-200"
          >
            ← Todos los proyectos
          </Link>
          <Link
            href="/#contacto"
            className="text-[13px] text-[#a48dfd]/60 hover:text-[#a48dfd] transition-colors duration-200"
          >
            ¿Hablamos? →
          </Link>
        </div>
      </div>
    </main>
  );
}
