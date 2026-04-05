"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  projectName: string;
}

export default function ImageSlider({ images, projectName }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  // Sin imágenes todavía — placeholder
  if (images.length === 0) {
    return (
      <div className="w-full aspect-video rounded-2xl border border-white/8 bg-white/2 flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-[#7c5cfc]/15 border border-[#7c5cfc]/25 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-[#7c5cfc]/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3 9.75h18M3 5.25h18"
            />
          </svg>
        </div>
        <p className="text-[12px] text-white/25 tracking-wide">
          Capturas próximamente
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Imagen principal */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/8 bg-white/2 group">
        <Image
          src={images[current]}
          alt={`${projectName} — captura ${current + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 200vw, 80vw"
        />

        {/* Overlay degradado sutil abajo */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        {/* Contador */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] text-white/60 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
          {current + 1} / {images.length}
        </div>

        {/* Flechas — aparecen en hover */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
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
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Miniaturas / dots si hay más de 1 */}
      {images.length > 1 && (
        <div className="flex items-center gap-2 justify-center">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              className="relative w-12 h-8 rounded-lg overflow-hidden border transition-all duration-200"
              style={{
                borderColor:
                  i === current
                    ? "rgba(124,92,252,0.6)"
                    : "rgba(255,255,255,0.08)",
                opacity: i === current ? 1 : 0.45,
              }}
            >
              <Image
                src={src}
                alt={`miniatura ${i + 1}`}
                fill
                className="object-cover"
                sizes="48px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
