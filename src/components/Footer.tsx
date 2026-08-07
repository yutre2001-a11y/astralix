"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data";

const footerColumns = [
  {
    title: "Comunidad",
    links: [
      { label: "Reglas", href: "/#reglas" },
      { label: "Discord", href: "https://discord.gg/YTBcMWEx2c", external: true },
      { label: "Staff", href: "/#staff" },
    ],
  },
  {
    title: "Servidor",
    links: [
      { label: "Cómo unirse", href: "/#inicio" },
      { label: "Rangos", href: "/#rangos" },
      { label: "Modalidades", href: "/#modalidades" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Preguntas frecuentes", href: "https://discord.gg/YTBcMWEx2c", external: true },
      { label: "Reportar un problema", href: "https://discord.gg/YTBcMWEx2c", external: true },
      { label: "Contacto", href: "https://discord.gg/YTBcMWEx2c", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos de servicio", href: "/terminos" },
      { label: "Política de privacidad", href: "/privacidad" },
    ],
  },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/AstralixINC",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@astralismc",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.907 4.113c-1.116-.655-2.666-1.022-4.675-1.022-2.415 0-4.392.762-5.752 2.25-1.276 1.396-1.958 3.392-1.958 5.732 0 4.65 3.373 8.431 8.468 8.431 1.17 0 2.3-.183 3.341-.383l-.036-.006c-.506-.104-.972-.207-1.395-.327-2.607-.732-4.065-2.482-4.395-5.215l-.012-.098h3.458l.015.147c.066.808.306 1.455.723 1.943.337.394.76.66 1.271.798.568.153 1.195.202 1.903.153.875-.06 1.681-.306 2.329-.704.954-.585 1.531-1.503 1.707-2.7.098-.67.062-1.404-.106-2.177-.199-.916-.574-1.78-1.078-2.485-.796-1.114-1.907-1.952-3.253-2.45zm.505 8.016h-3.317l.007-.14c.065-1.191.422-2.054 1.089-2.636.628-.547 1.474-.824 2.512-.824.611 0 1.159.101 1.627.3.656.279 1.105.722 1.361 1.343.201.486.286 1.007.259 1.558-.024.436-.139.816-.341 1.13-.198.31-.456.532-.77.66-.31.127-.665.194-1.058.194-.511 0-.96-.113-1.333-.334-.399-.237-.6-.574-.647-1.019l-.009-.132z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/astralismc/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: siteConfig.discordInvite,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
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
    <footer className="relative border-t border-white/10 bg-[var(--background)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/ambiente1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A07] via-[#0B0A07]/70 to-[#0B0A07]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/#inicio" className="inline-flex items-center gap-2.5">
              <span className="relative w-9 h-9 shrink-0">
                <Image src="/logo.png" alt="Logo de AstralisMC" fill sizes="36px" className="object-contain" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                Astralis<span className="text-[#FFAA00]">MC</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-[var(--muted)]">
              AstralisMC © {new Date().getFullYear()}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex items-center justify-center p-2.5 text-[var(--muted)] hover:text-[#FFAA00] transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2 footer-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm font-sans font-medium tracking-wide text-[var(--muted)] hover:text-[#FFAA00] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={copyIp}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#16130D] border border-white/10 hover:border-[#FFAA00]/40 transition-colors glow-cyan"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFAA00]" />
            <span className="text-sm text-white">{siteConfig.ip}</span>
            <span className="text-xs text-[#FFAA00]">{copied ? "Copiada" : "copiar"}</span>
          </button>
          <p className="text-xs text-[var(--muted)]/80 text-center sm:text-right max-w-md">
            Servidor de Minecraft no oficial. No afiliado a Mojang Studios ni a Microsoft. Los rangos se ganan jugando; los boosts a Discord aportan beneficios extra.
          </p>
        </div>
      </div>
    </footer>
  );
}
