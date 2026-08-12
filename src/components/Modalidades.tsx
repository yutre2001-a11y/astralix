import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { modalities } from "@/data";
import { sketchRadius } from "@/lib/sketch";

const icons: Record<string, React.ReactNode> = {
  pickaxe: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5l-6 6M21 3l-3 3m-8 8l-3 3m0 0H4l-1 1 2 2 1-1v-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4l9 9M11 4c-2.5 0-5 1-7 3l6 6c2-2 3-4.5 3-7z" opacity={0.6} />
    </svg>
  ),
  island: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v6m0 0c-2.2 0-4 1.8-4 4v4h8v-4c0-2.2-1.8-4-4-4zm-8 16h16" />
    </svg>
  ),
  sword: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 4l-9 9m-2 2l-3 3m6 0l3-3m-9-6l3 3" opacity={0.6} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 4l-1 6-5 5h-4l-2-2v-4l5-5h7z" />
    </svg>
  ),
  games: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2.5" y="7.5" width="19" height="9" rx="2" />
      <circle cx="6.5" cy="10.5" r="0.8" fill="currentColor" />
      <circle cx="9" cy="13" r="0.8" fill="currentColor" />
      <path strokeLinecap="round" d="M14 11h4M16 9v4" />
    </svg>
  ),
  blocks: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" opacity={0.5} />
      <rect x="3" y="13" width="8" height="8" rx="1.5" opacity={0.5} />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  ),
  event: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.5 5.5 6 .5-4.5 4 1.3 5.9L12 15.5l-5.3 2.9L8 13 3.5 9l6-.5L12 3z" />
    </svg>
  ),
};

const sizeClasses: Record<string, string> = {
  large: "lg:col-span-2 lg:row-span-2 sm:col-span-2",
  medium: "sm:col-span-1",
  tall: "sm:col-span-1 lg:row-span-2",
  small: "sm:col-span-1 lg:col-span-1",
};

export default function Modalidades() {
  return (
    <section id="modalidades" className="relative py-24 sm:py-32 section-gradient">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Modalidades"
          title="Elige tu forma de sobrevivir."
          subtitle="AstralMix lidera la isla: un survival custom con mundo Oasis y dungeons, junto a la Semi-Anárquica original de siempre."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(180px,auto)]">
          {modalities.map((mod) => (
            <ScrollReveal
              key={mod.name}
              className={sizeClasses[mod.size]}
            >
              <article
                className={`group relative h-full rounded cyan-card glow-cyan sketch-card p-6 sm:p-8 overflow-hidden ${
                  mod.size === "large" ? "flex flex-col justify-between" : "flex flex-col"
                } ${mod.comingSoon ? "opacity-90" : ""}`}
                style={{ borderRadius: sketchRadius(mod.name) }}
              >
                <div className="relative">
                  <div
                    className={`relative w-full overflow-hidden rounded border border-white/10 ${
                      mod.comingSoon ? "grayscale opacity-60" : ""
                    }`}
                    style={{ aspectRatio: mod.image === "/semianarquico.png" ? "1024 / 111" : "20 / 7" }}
                  >
                    <Image
                      src={mod.image}
                      alt={`Captura de ${mod.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    {mod.comingSoon && (
                      <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded bg-[#FFAA00] text-[#171103]">
                        Próximamente
                      </span>
                    )}
                  </div>
                </div>

                <div className="relative flex flex-col flex-1 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded bg-[#FFAA00] text-[#171103] flex items-center justify-center">
                      {icons[mod.icon]}
                    </div>
                    {!mod.comingSoon && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded border border-white/15 text-[var(--muted)]">
                        {mod.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-lg sm:text-xl font-bold text-white tracking-tight">
                    {mod.name}
                  </h3>
                  <p className={`mt-3 text-sm text-[var(--muted)] leading-relaxed ${mod.size === "large" ? "max-w-md" : ""}`}>
                    {mod.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[#F2EFE9]">
                        <span className="w-1.5 h-1.5 rounded-sm bg-[#FFAA00] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
