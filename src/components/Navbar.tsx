"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data";

const TAB_RADII = [
  "14px 6px 13px 5px / 8px 13px 5px 12px",
  "6px 14px 5px 13px / 12px 7px 13px 6px",
  "12px 5px 14px 7px / 6px 14px 8px 12px",
  "5px 12px 6px 14px / 13px 5px 12px 7px",
];

const TILTS = ["-0.3deg", "0.35deg", "-0.25deg", "0.3deg"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const ids = navLinks
      .filter((l) => l.href.startsWith("/#"))
      .map((l) => l.href.slice(2));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (pathname.startsWith("/guias")) return href === "/#guias";
    if (pathname === "/terminos") return href === "/terminos";
    if (pathname !== "/") return false;
    if (href === "/terminos") return false;
    return active === href.slice(2);
  };

  const tabStyle = (index: number) => ({
    borderRadius: TAB_RADII[index % TAB_RADII.length],
    transform: `rotate(${TILTS[index % TILTS.length]})`,
  });

  return (
    <nav className="fixed inset-x-0 top-3 z-50 px-3 sm:px-4">
      <div className="mx-auto max-w-7xl sketch-navbar flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4">
        <Link href="/#inicio" className="relative flex items-center gap-2.5 group">
          <span className="relative w-9 h-9 shrink-0">
            <Image src="/logo.png" alt="Logo de AstralixMC" fill sizes="36px" className="object-contain" />
          </span>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
            Astralix<span className="text-[#FFAA00]">MC</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-[3px]">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={tabStyle(i)}
              className={`px-3 py-1.5 text-sm font-medium sketch-tab ${
                isActiveLink(link.href) ? "sketch-tab-active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/#inicio"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold btn-gradient rounded transition-all glow-cyan"
          >
            Unirse
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded sketch-tab"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-current rounded-full transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current rounded-full transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current rounded-full transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="mx-auto max-w-7xl mt-2 sketch-navbar lg:hidden p-3 space-y-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={tabStyle(i)}
              className={`block px-4 py-3 text-sm font-medium sketch-tab ${
                isActiveLink(link.href) ? "sketch-tab-active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-1">
            <Link
              href="/#inicio"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-5 py-3 text-sm font-bold btn-gradient rounded transition-all glow-cyan"
            >
              Unirse al servidor
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
