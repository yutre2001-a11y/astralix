"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { rankGroups } from "@/data";
import { sketchRadius } from "@/lib/sketch";

const RANK_ICONS: Record<string, React.ReactNode> = {
  Ender: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <path d="M12 3l6.5 9-6.5 9-6.5-9 6.5-9Z" />
      <path d="M12 3v18M5.5 12h13" opacity={0.55} />
    </svg>
  ),
  Shadow: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <path d="M12 3c3 3.6 5.2 6.3 5.2 9a5.2 5.2 0 1 1-10.4 0C6.8 9.3 9 6.6 12 3Z" />
      <path d="M9.4 16.6a2.7 2.7 0 0 0 2.6 3" opacity={0.55} />
    </svg>
  ),
  Noctis: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <path d="M19.5 15A7.5 7.5 0 0 1 9 4.5a7.5 7.5 0 1 0 10.5 10.5Z" />
    </svg>
  ),
  Nexus: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 9.4V4.5m0 15v-4.9M9.4 12H4.5m15 0h-4.9M6.8 6.8l3 3m7.4 7.4-3-3m3-7.4-3 3m-7.4 7.4 3-3" />
    </svg>
  ),
  Abyss: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" opacity={0.6} />
      <circle cx="12" cy="12" r="1.6" />
    </svg>
  ),
  Vyper: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <path d="M13.5 3 5.5 13h5l-1 8 8-10h-5l1-8Z" />
    </svg>
  ),
  "Vyper+": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <path d="M4 17.5V16l3-5.5 4.5 4L16 8.5l4 5v4l-1.5-1h-13L4 17.5Z" />
      <path d="M4 19h16" />
    </svg>
  ),
  Guardian: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <circle cx="12" cy="11" r="2.5" />
      <path d="M12 8.5v5" opacity={0.55} />
    </svg>
  ),
  Champion: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5v1.5a3 3 0 0 0 3 3M16 6h3v1.5a3 3 0 0 1-3 3" opacity={0.55} />
      <path d="M12 13v3m-4 4h8" />
    </svg>
  ),
  Warlord: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12 5 5m14 0-7 7" />
      <path d="M5 5h4l10 10v4l-4-4m0 0-4 4" />
    </svg>
  ),
  Titan: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <path d="M4 20 12 5l8 15H4Z" />
      <path d="M10 20l2-4 2 4" opacity={0.55} />
    </svg>
  ),
  King: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <path d="M5 17.5h14l-1.2-9.5-4 4.5-1.8-5-1.8 5-4-4.5L5 17.5Z" />
      <path d="M5 20.5h14" opacity={0.55} />
    </svg>
  ),
};

const RANK_ITEMS: Record<string, string> = {
  Ender: "ender_pearl",
  Shadow: "blaze_rod",
  Noctis: "glowstone_dust",
  Nexus: "amethyst_shard",
  Abyss: "nether_star",
  Vyper: "trident",
  "Vyper+": "dragon_egg",
  Guardian: "prismarine_crystals",
  Champion: "diamond_sword",
  Warlord: "fire_charge",
  Titan: "dragon_breath",
  King: "gold_ingot",
};

function RankBadge({
  name,
  accent,
}: {
  name: string;
  accent: string;
}) {
  const [error, setError] = useState(false);
  const item = RANK_ITEMS[name];
  const glow = `drop-shadow(0 0 6px ${accent}66) drop-shadow(0 0 16px ${accent}40)`;

  return (
    <div className="w-11 h-11 flex items-center justify-center shrink-0">
      {!error && item ? (
        <Image
          src={`https://blocksitems.com/api/v1/items/minecraft:${item}/icon?size=64`}
          alt={`Item del rango ${name}`}
          width={64}
          height={64}
          unoptimized
          onError={() => setError(true)}
          className="w-8 h-8 object-contain"
          style={{ filter: glow }}
        />
      ) : (
        <span
          className="w-8 h-8 flex items-center justify-center"
          style={{ color: accent, filter: glow }}
        >
          {RANK_ICONS[name] ?? name.charAt(0)}
        </span>
      )}
    </div>
  );
}

export default function Rangos() {
  const [active, setActive] = useState(rankGroups[0].id);
  const group = rankGroups.find((g) => g.id === active) ?? rankGroups[0];

  return (
    <section id="rangos" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-96 pointer-events-none">
        <Image
          src="/ambiente5.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A07]/40 via-[#0B0A07]/80 to-[#0B0A07]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Rangos"
          title="Progresión por mérito, no por cartera."
          subtitle="Los rangos se ganan con XP, eventos y comunidad. Los boosts a nuestro Discord también desbloquean beneficios exclusivos."
        />

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-[#16130D] p-1.5">
            {rankGroups.map((g) => (
              <button
                key={g.id}
                onClick={() => setActive(g.id)}
                className={`px-5 sm:px-7 py-3 rounded text-sm font-bold transition-colors ${
                  active === g.id
                    ? "bg-[#FFAA00] text-[#171103]"
                    : "text-[var(--muted)] hover:text-white"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={group.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="mt-6 text-center text-sm text-[var(--muted)] max-w-xl mx-auto">
              {group.note}
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {group.ranks.map((rank) => {
                const isGradient = Boolean(rank.to);
                const gradient = isGradient
                  ? `linear-gradient(90deg, ${rank.color}, ${rank.to})`
                  : undefined;
                return (
                  <ScrollReveal key={rank.name}>
                    <article
                      className="group relative h-full rounded cyan-card glow-cyan sketch-card p-7 overflow-hidden"
                      style={{ borderRadius: sketchRadius(rank.name) }}
                    >
                      <div className="flex items-center gap-4">
                        <RankBadge name={rank.name} accent={rank.color} />
                        <div className="min-w-0">
                          <h3
                            className="text-lg font-bold tracking-tight"
                            style={
                              gradient
                                ? {
                                    backgroundImage: gradient,
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    color: "transparent",
                                  }
                                : { color: rank.color }
                            }
                          >
                            {rank.name}
                          </h3>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                            {rank.price && <span className="text-[#FFAA00]">{rank.price}</span>}
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 text-sm text-[var(--muted)] leading-relaxed">
                        {rank.description}
                      </p>

                      <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                        {rank.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-2.5 text-sm text-[#F2EFE9]">
                            <svg className="w-3.5 h-3.5 text-[#FFAA00] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <ScrollReveal>
          <div
            className="mt-12 flex items-start gap-4 rounded border border-[#FFAA00]/20 bg-[#16130D] p-6 sm:p-8 sketch-card"
            style={{ borderRadius: sketchRadius("aviso-rangos") }}
          >
            <span className="text-sm text-[#FFAA00] mt-0.5 font-bold">i</span>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-3xl">
              Esta sección es <span className="text-white font-medium">solo informativa</span>. La mayoría de rangos se obtienen jugando (XP, eventos oficiales y aportaciones a la comunidad), y los boosts a nuestro Discord dan acceso a beneficios exclusivos de temporada. Desconfía de cualquier oferta de rangos o ventajas a cambio de dinero fuera de los canales oficiales: es una estafa y debe reportarse al staff.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
