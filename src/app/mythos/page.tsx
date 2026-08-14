import type { Metadata } from "next";
import GameMythos from "@/components/GameMythos";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "MYTHOS LAND",
  description:
    "MYTHOS LAND: un metroidvania de fantasía griega. Recorre templos y abismos, obtén las bendiciones de Zeus, Apolo, Artemisa y Hades y derrota al Titán Caído.",
  path: "/mythos",
});

export default function MythosPage() {
  return (
    <div className="relative pt-28 sm:pt-32 pb-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="text-xs sm:text-sm font-semibold text-[#FFAA00] uppercase tracking-[0.2em]">
            Mini-juego
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            MYTHOS LAND
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Un metroidvania de fantasía griega: rompe sellos, despierta
            bendiciones divinas y enfréntate al Titán en las profundidades.
          </p>
        </div>

        <GameMythos />
      </div>
    </div>
  );
}
