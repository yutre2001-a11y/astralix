import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ItemIcon from "@/components/ItemIcon";
import { modalities } from "@/data";
import { sketchRadius } from "@/lib/sketch";

const MOD_ITEMS: Record<string, string> = {
  AstralMix: "diamond_pickaxe",
  "Semi-Anárquico": "netherite_sword",
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
                    <ItemIcon item={MOD_ITEMS[mod.name]} color={mod.color} name={mod.name} />
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
