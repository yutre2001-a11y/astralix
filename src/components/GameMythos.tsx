"use client";

import { useEffect, useRef } from "react";

/**
 * Monta el juego Phaser dentro de un contenedor con relación 16:9.
 * Phaser se carga solo en el cliente (import dinámico) para no romper el
 * prerenderizado estático de Next.js.
 */
export default function GameMythos() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hostRef.current) return;
    let dispose: (() => void) | null = null;

    void import("@/game").then(({ createMythosGame, destroyMythosGame }) => {
      if (!hostRef.current) return;
      createMythosGame(hostRef.current);
      dispose = destroyMythosGame;
    });

    return () => {
      if (dispose) dispose();
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div
        ref={hostRef}
        className="relative w-full max-w-[960px] aspect-[16/9] overflow-hidden rounded-xl border border-[var(--border)] shadow-2xl shadow-black/50"
      />
      <p className="max-w-[960px] text-center text-sm text-[var(--muted)]">
        Z/X atacar · C/L/Shift dash · V/I parry · E interactuar · M mapa ·
        Esc/P pausa. Conquista las cuatro bendiciones para abrir las puertas
        selladas.
      </p>
    </div>
  );
}
