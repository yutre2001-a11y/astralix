import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ label, title, subtitle, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <ScrollReveal>
      <div className={centered ? "text-center" : ""}>
        <span className="text-xs sm:text-sm font-semibold text-[#FFAA00] uppercase tracking-[0.2em]">
          {label}
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed ${centered ? "mx-auto" : ""} max-w-2xl`}>
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
