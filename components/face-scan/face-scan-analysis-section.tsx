import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import {
  ANALYSIS_TRAITS,
  type AnalysisTrait,
} from "@/lib/marketing/face-scan-data";

function WireframeHead() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-[2rem] bg-gradient-to-br from-neutral-100 to-neutral-50">
      <span className="absolute top-8 left-8 h-10 w-10 border-t-2 border-l-2 border-[#C08B5C]" />
      <span className="absolute top-8 right-8 h-10 w-10 border-t-2 border-r-2 border-[#C08B5C]" />
      <span className="absolute bottom-8 left-8 h-10 w-10 border-b-2 border-l-2 border-[#C08B5C]" />
      <span className="absolute right-8 bottom-8 h-10 w-10 border-r-2 border-b-2 border-[#C08B5C]" />

      <div className="relative h-[70%] w-[55%]">
        <div
          className="absolute inset-0 rounded-[45%] border border-neutral-400/50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(115,115,115,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(115,115,115,0.18) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="absolute inset-x-[18%] top-[18%] h-[22%] rounded-full border border-neutral-400/40" />
        <div className="absolute top-[48%] left-1/2 h-10 w-px -translate-x-1/2 bg-neutral-400/40" />
        <div className="absolute top-[42%] left-[22%] h-px w-[56%] bg-neutral-400/40" />
        <div className="absolute inset-x-[28%] bottom-[18%] h-8 rounded-b-[100%] border border-t-0 border-neutral-400/40" />
      </div>
    </div>
  );
}

function TraitCard({ trait }: { trait: AnalysisTrait }) {
  const Icon = trait.icon;

  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <span className="flex size-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
        <Icon className="size-4" />
      </span>
      <h3 className="mt-3 text-base font-semibold text-neutral-950">
        {trait.title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-neutral-500">
        {trait.description}
      </p>
    </article>
  );
}

export function FaceScanAnalysisSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="AI Analysis"
          title="What we analyze."
          align="center"
          className="sm:items-center"
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
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
