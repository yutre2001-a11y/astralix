const SKETCH_RADII = [
  "16px 7px 15px 6px / 9px 15px 6px 14px",
  "7px 16px 6px 15px / 15px 8px 14px 6px",
  "15px 6px 17px 8px / 7px 16px 9px 15px",
  "6px 14px 8px 16px / 14px 7px 15px 8px",
  "17px 8px 14px 7px / 8px 14px 7px 16px",
];

export function sketchRadius(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return SKETCH_RADII[h % SKETCH_RADII.length];
}
