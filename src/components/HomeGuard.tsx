"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
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

function parseHash(raw: string): string {
  let h = raw;
  if (h.startsWith("#/")) h = h.slice(2);
  else if (h.startsWith("#")) h = h.slice(1);
  try {
    h = decodeURIComponent(h);
  } catch {
    h = "";
  }
  h = h.toLowerCase();
  const parts = h.split("#").filter(Boolean);
  return parts.length ? parts[parts.length - 1] : "";
}

export default function HomeGuard({ children }: { children: ReactNode }) {
  const [hash, setHash] = useState<string | null>(null);
  const lastRaw = useRef("");

  useEffect(() => {
    const sync = () => {
      lastRaw.current = window.location.hash;
      setHash(parseHash(window.location.hash));
    };
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    const interval = setInterval(() => {
      if (window.location.hash !== lastRaw.current) sync();
    }, 200);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (hash === null || hash === "" || !VALID_HASHES.has(hash)) return;
    const clean = "#" + hash;
    if (window.location.pathname === "/" && window.location.hash !== clean) {
      window.history.replaceState(null, "", "/" + clean);
    }
    document.getElementById(hash)?.scrollIntoView();
  }, [hash]);

  const is404 = hash !== null && hash !== "" && !VALID_HASHES.has(hash);
  if (is404) return <NotFoundContent />;
  return <>{children}</>;
}
