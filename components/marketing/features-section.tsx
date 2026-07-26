import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { FEATURES, type FeatureItem } from "@/lib/marketing/home-data";
import { cn } from "@/lib/utils";

function FeatureVisual({ type }: { type: FeatureItem["visual"] }) {
  if (type === "scan") {
    return (
      <div className="relative flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50">
        <div className="relative size-28 rounded-full border border-dashed border-neutral-400/70">
          <div className="absolute inset-3 rounded-full border border-neutral-300" />
          <div className="absolute top-1/2 left-1/2 h-16 w-12 -translate-x-1/2 -translate-y-1/2 rounded-[40%] border border-neutral-500/40" />
          <span className="absolute top-2 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-[#C08B5C]" />
          <span className="absolute bottom-2 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-[#C08B5C]" />
        </div>
      </div>
    );
  }

  if (type === "tryon") {
    return (
      <div className="relative flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-stone-100 to-neutral-50">
        <div className="relative h-36 w-[72px] rounded-[1.4rem] border-[3px] border-neutral-900 bg-white shadow-lg">
          <div className="absolute inset-x-2 top-3 bottom-3 overflow-hidden rounded-[1rem] bg-gradient-to-b from-neutral-200 to-neutral-100">
            <div className="mx-auto mt-5 h-10 w-10 rounded-full bg-neutral-400/40" />
            <div className="mx-auto mt-2 flex w-10 items-center justify-between">
              <span className="h-2.5 w-4 rounded-full border border-neutral-800" />
              <span className="h-2.5 w-4 rounded-full border border-neutral-800" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 to-neutral-50">
      <div className="flex -space-x-4">
        {["bg-neutral-900", "bg-stone-300", "bg-amber-200"].map((tone) => (
          <div
            key={tone}
            className={cn(
              "flex h-20 w-16 items-center justify-center rounded-xl border border-white shadow-md",
              tone,
            )}
          >
            <span className="flex w-10 items-center justify-between">
              <span className="h-2.5 w-[38%] rounded-full border border-white/70" />
              <span className="h-px w-1 bg-white/70" />
              <span className="h-2.5 w-[38%] rounded-full border border-white/70" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ feature }: { feature: FeatureItem }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
      <FeatureVisual type={feature.visual} />
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-semibold text-neutral-950">{feature.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
          {feature.description}
        </p>
        <div className="mt-5 flex justify-end">
          <Link
            href={feature.href}
            aria-label={`Explore ${feature.title}`}
            className="flex size-10 items-center justify-center rounded-full bg-neutral-950 text-white transition-transform group-hover:translate-x-0.5"
          >
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-[#F7F7F5] py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="AI Experience"
          title="The smartest way to buy glasses."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
