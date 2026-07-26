import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import {
  ANALYSIS_TRAITS,
  type AnalysisTrait,
} from "@/lib/marketing/face-scan-data";

function WireframeHead() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
      <span className="absolute top-6 left-6 h-10 w-10 border-t-2 border-l-2 border-[#C08B5C]" />
      <span className="absolute top-6 right-6 h-10 w-10 border-t-2 border-r-2 border-[#C08B5C]" />
      <span className="absolute bottom-6 left-6 h-10 w-10 border-b-2 border-l-2 border-[#C08B5C]" />
      <span className="absolute right-6 bottom-6 h-10 w-10 border-r-2 border-b-2 border-[#C08B5C]" />

      <div className="relative h-[72%] w-[58%]">
        <div
          className="absolute inset-0 rounded-[45%] border border-neutral-300"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(163,163,163,0.25) 1px, transparent 1px), linear-gradient(rgba(163,163,163,0.25) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="absolute inset-x-[18%] top-[12%] h-[28%] rounded-full border border-neutral-400/60" />
        <div className="absolute top-[48%] left-1/2 h-10 w-8 -translate-x-1/2 rounded-b-full border border-neutral-400/50" />
        <div className="absolute inset-x-[22%] bottom-[18%] h-8 rounded-b-[50%] border border-neutral-400/50" />
        <div className="absolute top-[42%] left-[18%] size-2 rounded-full bg-neutral-400/70" />
        <div className="absolute top-[42%] right-[18%] size-2 rounded-full bg-neutral-400/70" />
      </div>
    </div>
  );
}

function TraitCard({ trait }: { trait: AnalysisTrait }) {
  const Icon = trait.icon;

  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-5">
      <span className="flex size-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
        <Icon className="size-4" />
      </span>
      <h3 className="mt-3 text-base font-semibold text-neutral-950">
        {trait.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
        {trait.description}
      </p>
    </article>
  );
}

export function FaceScanAnalysis() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="AI Analysis"
          title="What we analyze."
          align="center"
          className="sm:items-center"
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <WireframeHead />
          <div className="grid gap-3 sm:grid-cols-2">
            {ANALYSIS_TRAITS.map((trait) => (
              <TraitCard key={trait.title} trait={trait} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
