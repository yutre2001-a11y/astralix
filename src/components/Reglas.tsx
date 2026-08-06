"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { ruleGroups, siteConfig } from "@/data";
import { sketchRadius } from "@/lib/sketch";

export default function Reglas() {
  const [active, setActive] = useState(ruleGroups[0].id);
  const [open, setOpen] = useState<number>(0);
  const group = ruleGroups.find((g) => g.id === active) ?? ruleGroups[0];

  return (
    <section id="reglas" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Reglas"
          title="Un universo con normas claras."
          subtitle="Pocas reglas, bien explicadas. Pulsa cada categoría para desplegarla. Las sanciones se aplican de forma proporcional y siempre apelables."
          align="center"
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-[#16130D] p-1.5">
            {ruleGroups.map((g) => (
              <button
                key={g.id}
                onClick={() => {
                  setActive(g.id);
                  setOpen(0);
                }}
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

            <div className="mt-10 space-y-3">
              {group.categories.length === 0 ? (
                <div className="rounded border border-dashed border-white/20 bg-[#16130D] p-10 text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFAA00]">
                    En desarrollo
                  </span>
                  <span className="mt-2 block text-xs text-[var(--muted)]">
                    Las reglas del Survival Clásico se anunciarán junto a su apertura en Discord.
                  </span>
                </div>
              ) : (
                group.categories.map((cat, i) => {
                  const isOpen = open === i;
                  return (
                    <ScrollReveal key={cat.category}>
                      <div
                        className={`relative rounded border transition-colors overflow-hidden sketch-card ${
                          isOpen
                            ? "border-[#FFAA00]/40 bg-[#16130D]"
                            : "border-white/10 bg-[#16130D]/70 hover:border-[#FFAA00]/30"
                        }`}
                        style={{ borderRadius: sketchRadius(cat.category) }}
                      >
                        <button
                          onClick={() => setOpen(isOpen ? -1 : i)}
                          className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-5 text-left"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold text-[#FFAA00]">
                              {i + 1}
                            </span>
                            <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                              {cat.category}
                            </span>
                            <span className="hidden sm:inline text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)]">
                              {cat.rules.length} reglas
                            </span>
                          </div>
                          <motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                            className={`w-8 h-8 rounded border flex items-center justify-center shrink-0 transition-colors ${
                              isOpen
                                ? "border-[#FFAA00]/40 text-[#FFAA00]"
                                : "border-white/15 text-[var(--muted)]"
                            }`}
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <ol className="px-6 sm:px-8 pb-6 space-y-3">
                                {cat.rules.map((rule, j) => (
                                  <li key={j} className="flex items-start gap-3 text-sm text-[var(--muted)] leading-relaxed">
                                    <span className="text-[10px] font-semibold text-[#FFAA00] mt-1 shrink-0">
                                      {j + 1}
                                    </span>
                                    <span>{rule}</span>
                                  </li>
                                ))}
                              </ol>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </ScrollReveal>
                  );
                })
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <ScrollReveal>
          <div className="mt-8 rounded cyan-card glow-cyan sketch-card p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
            <div className="w-12 h-12 rounded bg-[#5865F2] text-white flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Discord
              </h3>
              <p className="mt-1.5 text-sm text-[var(--muted)] leading-relaxed">
                Las sanciones son apelables y las dudas se resuelven en el servidor oficial de Discord.
              </p>
            </div>
            <a
              href={siteConfig.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold btn-gradient rounded transition-all duration-300 glow-cyan shrink-0"
            >
              Unirse al Discord
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[var(--muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFAA00]" />
            Información de carácter informativo. La versión vigente se publica en Discord.
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
