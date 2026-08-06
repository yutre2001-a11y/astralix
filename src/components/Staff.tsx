"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { staff } from "@/data";
import { sketchRadius } from "@/lib/sketch";

const roleColors: Record<string, { color: string; chipText: string }> = {
  Owner: { color: "#F93636", chipText: "#ffffff" },
  Admin: { color: "#22d3ee", chipText: "#06242e" },
  Dev: { color: "#34d399", chipText: "#ffffff" },
};

function StaffAvatar({
  skin,
  initials,
  roleColor,
}: {
  skin: string;
  initials: string;
  roleColor: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="mx-auto w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold"
        style={{ background: roleColor, color: "#ffffff" }}
      >
        {initials}
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-14 h-14 rounded-full overflow-hidden border border-white/10 bg-[#16130D]">
      <Image
        src={`https://mc-heads.net/head/${skin}/128`}
        alt={`Skin de ${initials}`}
        width={128}
        height={128}
        unoptimized
        onError={() => setError(true)}
        className="w-full h-full"
      />
    </div>
  );
}

export default function Staff() {
  return (
    <section id="staff" className="relative py-24 sm:py-32 section-gradient">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Staff"
          title="El equipo tras el universo."
          subtitle="Personas reales cuidando el servidor, organizadas por jerarquía. Los colores corresponden al rango en Discord."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {staff.map((member) => {
            const role = roleColors[member.role] ?? { color: "#FFAA00", chipText: "#171103" };
            return (
              <ScrollReveal key={member.name}>
                <article
                  className="group relative h-full rounded cyan-card sketch-card p-6 text-center overflow-hidden"
                  style={{ borderRadius: sketchRadius(member.name) }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: role.color }} />
                  <StaffAvatar skin={member.skin} initials={member.initials} roleColor={role.color} />
                  <h3 className="mt-4 text-base font-bold text-white">{member.name}</h3>
                  <div className="mt-1.5 flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: role.color }} />
                    <span className="text-xs font-bold" style={{ color: role.color }}>
                      {member.role}
                    </span>
                  </div>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                    {member.group}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <p className="mt-10 text-center text-xs text-[var(--muted)]">
            ¿Quieres unirte al equipo? Las solicitudes se abren cada temporada en Discord.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
