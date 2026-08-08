"use client";

import { useEffect, useState, type ReactNode } from "react";
import NotFoundContent from "./NotFoundContent";

const VALID_HASHES = new Set([
  "inicio",
  "lore",
  "modalidades",
  "rangos",
  "guias",
  "staff",
  "reglas",
]);

export default function HomeGuard({ children }: { children: ReactNode }) {
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      let h = window.location.hash;
      if (h.startsWith("#/")) h = h.slice(2);
      else if (h.startsWith("#")) h = h.slice(1);
      try {
        h = decodeURIComponent(h);
      } catch {
        h = "";
      }
      setHash(h.toLowerCase());
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  if (hash !== null && hash !== "" && !VALID_HASHES.has(hash)) {
    return <NotFoundContent />;
  }
  return <>{children}</>;
}
