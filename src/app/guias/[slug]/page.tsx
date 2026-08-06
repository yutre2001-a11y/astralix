import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideIcon } from "@/components/Guides";
import { guides, type GuideStep } from "@/data/guides";
import { pageMetadata } from "@/lib/seo";
import { sketchRadius } from "@/lib/sketch";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) {
    return { title: "Guía no encontrada" };
  }
  return pageMetadata({
    title: guide.title,
    description: guide.summary,
    path: `/guias/${guide.slug}`,
  });
}

function StepBlock({ step }: { step: GuideStep }) {
  if (step.type === "command") {
    return (
      <code className="block w-fit max-w-full rounded bg-[#0E0C08] border border-[#FFAA00]/20 px-4 py-2.5 font-mono text-sm text-[#FFC04D] select-all whitespace-pre-wrap break-words">
        {step.text}
      </code>
    );
  }

  if (step.type === "warning") {
    return (
      <div className="flex items-start gap-3 rounded border border-[#FFAA00]/30 bg-[#FFAA00]/5 p-4">
        <svg className="w-5 h-5 text-[#FFAA00] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
        </svg>
        <p className="text-sm font-bold text-[#FFC04D] leading-relaxed">{step.text}</p>
      </div>
    );
  }

  return (
    <p className="text-[15px] text-[#F2EFE9] leading-relaxed">{step.text}</p>
  );
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) {
    notFound();
  }

  return (
    <div className="relative pt-32 sm:pt-40 pb-24 sm:pb-32">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/guias"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m6-6-6 6 6 6" />
          </svg>
          Todas las guías
        </Link>

        <div className="mt-8 flex items-start gap-5">
          <GuideIcon icon={guide.icon} />
          <div>
            <span className="text-xs sm:text-sm font-semibold text-[#FFAA00] uppercase tracking-[0.2em]">
              Guía
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {guide.title}
            </h1>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          {guide.sections.map((section) => (
            <section
              key={section.title}
              className="rounded cyan-card sketch-card p-6 sm:p-8"
              style={{ borderRadius: sketchRadius(section.title) }}
            >
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.steps.map((step, i) => (
                  <StepBlock key={i} step={step} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/guias"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold btn-gradient rounded transition-all glow-cyan"
          >
            Ver todas las guías
          </Link>
        </div>
      </div>
    </div>
  );
}
