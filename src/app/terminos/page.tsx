import type { Metadata } from "next";
import Link from "next/link";
import { termsSections } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { sketchRadius } from "@/lib/sketch";

export const metadata: Metadata = pageMetadata({
  title: "Términos y condiciones",
  description:
    "Condiciones de uso de AstralixMC, servidor de Minecraft semi-anárquico. Al conectarte aceptas las reglas publicadas y las decisiones del staff, siempre apelables por Discord.",
  path: "/terminos",
});

export default function TerminosPage() {
  return (
    <div className="relative pt-32 sm:pt-40 pb-24 sm:pb-32">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m6-6-6 6 6 6" />
          </svg>
          Volver al inicio
        </Link>

        <div className="mt-8">
          <span className="text-xs sm:text-sm font-semibold text-[#FFAA00] uppercase tracking-[0.2em]">
            Términos y condiciones
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Condiciones de uso.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
            Texto legal básico en lenguaje claro. Al conectarte al servidor aceptas estos términos.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {termsSections.map((section) => (
            <div
              key={section.title}
              className="rounded border border-white/10 bg-[#16130D] p-6 sm:p-8 sketch-card"
              style={{ borderRadius: sketchRadius(section.title) }}
            >
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm text-[var(--muted)] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-[var(--muted)] leading-relaxed">
          Última actualización: enero de 2026. Estas condiciones pueden modificarse; los cambios se anunciarán en Discord y en esta página.
        </p>
      </div>
    </div>
  );
}
