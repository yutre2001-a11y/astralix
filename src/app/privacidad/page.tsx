import type { Metadata } from "next";
import Link from "next/link";
import { privacySections, siteConfig } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { sketchRadius } from "@/lib/sketch";

export const metadata: Metadata = pageMetadata({
  title: "Política de privacidad",
  description:
    "Política de privacidad de AstralixMC: qué datos recopilamos en el servidor de Minecraft, cómo los usamos, tus derechos y cómo solicitarlos al staff.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
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
            Política de privacidad
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Política de privacidad.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
            Última actualización: 6/08/2026
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {privacySections.map((section, sIndex) => (
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
                    {sIndex === privacySections.length - 1 && i === section.paragraphs.length - 1 ? (
                      <>
                        {p}{" "}
                        <Link
                          href={siteConfig.discordInvite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#FFAA00] hover:underline underline-offset-4"
                        >
                          {siteConfig.discordInvite}
                        </Link>
                      </>
                    ) : (
                      p
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
