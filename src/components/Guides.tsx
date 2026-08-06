import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { guides, type Guide } from "@/data/guides";
import { sketchRadius } from "@/lib/sketch";

const ICONS: Record<Guide["icon"], React.ReactNode> = {
  server: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z" />
      <path strokeLinecap="round" d="M7 7h.01M7 15h.01M10.5 7H17M10.5 15H17" />
    </svg>
  ),
  key: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="7.5" cy="15.5" r="4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 12 21 2m-6 6 3 3m-3-3 2 2" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
    </svg>
  ),
};

export function GuideIcon({ icon }: { icon: Guide["icon"] }) {
  return (
    <span className="flex w-12 h-12 items-center justify-center rounded border border-[#FFAA00]/30 bg-[#FFAA00]/10 text-[#FFAA00]">
      {ICONS[icon]}
    </span>
  );
}

export function GuideCard({
  guide,
  headingLevel = "h3",
}: {
  guide: Guide;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Link
      href={`/guias/${guide.slug}`}
      className="group relative flex h-full flex-col gap-4 rounded cyan-card glow-cyan sketch-card p-7 transition-all hover:-translate-y-0.5"
      style={{ borderRadius: sketchRadius(guide.slug) }}
    >
      <GuideIcon icon={guide.icon} />
      <div>
        <Heading className="text-lg font-bold tracking-tight text-white group-hover:text-[#FFAA00] transition-colors">
          {guide.title}
        </Heading>
        <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{guide.summary}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#FFAA00]">
        Leer guía
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}

export default function Guides() {
  return (
    <section id="guias" className="relative py-24 sm:py-32 section-gradient">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Guías"
          title="Todo lo que necesitas saber para jugar."
          subtitle="Preguntas frecuentes resueltas paso a paso: conexión, registro y seguridad de tu cuenta."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {guides.map((guide) => (
            <ScrollReveal key={guide.slug}>
              <GuideCard guide={guide} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
