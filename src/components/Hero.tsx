"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig, stats } from "@/data";

const DISCORD_SVG = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </svg>
);

function useLivePlayers() {
  const [players, setPlayers] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.mcsrvstat.us/3/${siteConfig.ip}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (!data.offline && typeof data.players?.online === "number") {
          setPlayers(data.players.online);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return players;
}

export default function Hero() {
  const players = useLivePlayers();
  const [copied, setCopied] = useState(false);

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.ip);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/ambiente4.png"
          alt="Ambientación de AstralixMC"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A07]/85 via-[#0B0A07]/70 to-[#0B0A07]" />
        <div className="absolute inset-0 hero-gradient opacity-70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-[#16130D]/90">
            <span className="w-2 h-2 rounded-full bg-[#FFAA00]" />
            <span className="text-xs sm:text-sm font-medium text-white">
              Servidor en línea
              {players !== null && (
                <span className="text-[var(--muted)]">
                  {" "}
                  · {players} jugadores ahora
                </span>
              )}
            </span>
            <span className="hidden sm:inline text-xs text-[var(--muted)]">
              {siteConfig.versions}
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-8 overflow-hidden">
              <Image
                src="/logo.png"
                alt="Logo de AstralixMC"
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[0.95]">
              ASTRALIX<span className="text-[#FFAA00]">MC</span>
            </h1>
            <p className="mt-6 text-base sm:text-xl text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={copyIp}
              className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 text-base font-bold btn-gradient rounded transition-all duration-300 w-full sm:w-auto glow-cyan"
            >
              Play Now
              {copied && <span className="text-sm">· IP copiada</span>}
            </button>
            <a
              href={siteConfig.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-[#FFAA00] bg-transparent border border-[#FFAA00]/40 hover:bg-[#FFAA00]/10 rounded transition-all duration-300 w-full sm:w-auto glow-cyan"
            >
              {DISCORD_SVG}
              Discord
            </a>
          </div>

          <button
            onClick={copyIp}
            className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors cursor-pointer"
          >
            <span>Server IP »</span>
            <span className="font-semibold text-white underline underline-offset-4 decoration-[#FFAA00]/50">
              {siteConfig.ip}
            </span>
            <span className="text-xs">({copied ? "copiada" : "clic para copiar"})</span>
          </button>

          <p className="mt-3 text-xs text-[var(--muted)]">{siteConfig.ipHint}</p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded bg-[#16130D]/90 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-[#FFAA00]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[var(--muted)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
