import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { loreChapters } from "@/data";
import { sketchRadius } from "@/lib/sketch";

const ambienteShots = [
  { src: "/ambiente.png", alt: "Ambiente del mundo de AstralixMC" },
  { src: "/ambiente1.png", alt: "Ambiente del mundo de AstralixMC" },
  { src: "/ambiente2.png", alt: "Ambiente del mundo de AstralixMC" },
];

export default function Lore() {
  return (
    <section id="lore" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/ambiente2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A07] via-[#0B0A07]/60 to-[#0B0A07]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Lore"
          title="La historia de Astralix."
          subtitle="Cuatro capítulos, uno por temporada. El relato del Núcleo Astral avanza con cada apertura."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {loreChapters.map((chapter) => (
            <ScrollReveal key={chapter.title}>
              <article
                className="group relative h-full rounded bg-[#16130D] border border-white/10 p-8 sm:p-10 hover:border-[#FFAA00]/40 transition-colors sketch-card"
                style={{ borderRadius: sketchRadius(chapter.title) }}
              >
                <span className="text-xs font-semibold text-[#FFAA00] uppercase tracking-[0.2em]">
                  {chapter.chapter}
                </span>
                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {chapter.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  {chapter.text}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold text-[#FFAA00] uppercase tracking-[0.2em]">
                Ambiente
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              {ambienteShots.map((shot) => (
                <div
                  key={shot.src}
                  className="group relative overflow-hidden rounded border border-white/10 hover:border-[#FFAA00]/40 transition-colors sketch-card"
                  style={{ borderRadius: sketchRadius(shot.src) }}
                >
                  <div style={{ aspectRatio: "1920 / 1009" }}>
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="relative mt-12 rounded border border-[#FFAA00]/25 bg-[#16130D] overflow-hidden sketch-card"
            style={{ borderRadius: sketchRadius("lore-cta") }}
          >
            <div className="grid lg:grid-cols-2 items-stretch">
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[280px] lg:[mask-image:linear-gradient(to_right,black_55%,transparent_97%)]">
                <Image
                  src="/ip.jpg"
                  alt="Conecta a astralis.mcsh.io"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16130D] via-transparent to-transparent lg:hidden" />
                <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent via-[#16130D]/20 via-50% to-[#16130D]" />
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <div className="relative w-12 h-12 mb-4">
                  <Image
                    src="/Ender_Pearl.webp"
                    alt="Perla del Ender"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <p className="text-lg sm:text-xl font-medium text-white">
                  El siguiente capítulo lo escribes tú.
                </p>
                <p className="mt-2 text-sm text-[var(--muted)] max-w-sm">
                  Conéctate, elige tu bando y deja huella en la historia de la temporada.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
