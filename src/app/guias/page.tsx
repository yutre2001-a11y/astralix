import type { Metadata } from "next";
import Link from "next/link";
import { GuideCard } from "@/components/Guides";
import { guides } from "@/data/guides";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Guías",
  description:
    "Guías de AstralixMC: cómo entrar al servidor, registrarte y loguearte, y proteger tu cuenta y tu base en el modo Semi-Anárquico.",
  path: "/guias",
});

export default function GuiasPage() {
  return (
    <div className="relative pt-32 sm:pt-40 pb-24 sm:pb-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#guias"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m6-6-6 6 6 6" />
          </svg>
          Volver al inicio
        </Link>

        <div className="mt-8">
          <span className="text-xs sm:text-sm font-semibold text-[#FFAA00] uppercase tracking-[0.2em]">
            Guías
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Guías de AstralixMC
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
            Todo lo que necesitas saber para jugar: conexión, registro y seguridad de tu cuenta.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} headingLevel="h2" />
          ))}
        </div>
      </div>
    </div>
  );
}
