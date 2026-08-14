"use client";

import { useState } from "react";
import Image from "next/image";

export default function ItemIcon({
  item,
  color,
  name,
}: {
  item: string;
  color: string;
  name: string;
}) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const glow = `drop-shadow(0 0 6px ${color}66) drop-shadow(0 0 16px ${color}40)`;

  return (
    <div className="w-12 h-12 flex items-center justify-center shrink-0">
      {!error && (
        <Image
          src={`https://blocksitems.com/api/v1/items/minecraft:${item}/icon?size=64`}
          alt={`Icono de ${name}`}
          width={64}
          height={64}
          unoptimized
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-10 h-10 object-contain transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: glow }}
        />
      )}
      {!loaded && !error && (
        <span className="w-10 h-10 flex items-center justify-center text-xl font-bold" style={{ color, filter: glow }}>
          {name.charAt(0)}
        </span>
      )}
      {error && (
        <span className="w-10 h-10 flex items-center justify-center text-xl font-bold" style={{ color, filter: glow }}>
          {name.charAt(0)}
        </span>
      )}
    </div>
  );
}