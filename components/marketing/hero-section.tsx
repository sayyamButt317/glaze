import Link from "next/link";
import { ScanLine } from "lucide-react";
import { Container } from "@/components/marketing/container";

const INSIGHTS = [
  {
    label: "Face Shape",
    value: "Oval",
    meta: "98% Match",
  },
  {
    label: "AI Recommendation",
    value: "Matte Black",
    meta: "Professional Look",
  },
  {
    label: "Lens Suggestion",
    value: "Blue Light Filter",
    meta: "Recommended",
  },
] as const;

const AVATARS = ["#1c1917", "#78716c", "#a8a29e", "#44403c"] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5F2]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(192,139,92,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.05),transparent_40%)]" />

      <Container className="relative grid min-h-[calc(100vh-72px)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-0">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C08B5C] uppercase">
            AI-Powered Eyewear
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Find the frames
            <br />
            made for you.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg">
            Advanced AI recommendations, virtual try-on and premium eyewear
            crafted to perfection.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/face-scan"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              <ScanLine className="size-4" />
              Start AI Scan
            </Link>
            <Link
              href="/curated-shop"
              className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 transition-opacity hover:opacity-70"
            >
              Browse Collection
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {AVATARS.map((tone) => (
                <span
                  key={tone}
                  className="size-9 rounded-full border-2 border-[#F6F5F2]"
                  style={{ backgroundColor: tone }}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-neutral-700">
              25,000+ Happy Customers
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-neutral-300 via-neutral-200 to-stone-100 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.35))]" />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]" />

            {/* Stylized model silhouette with frames */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[78%] w-[62%]">
                <div className="absolute inset-x-[18%] top-[8%] h-[28%] rounded-full bg-neutral-500/35 blur-[1px]" />
                <div className="absolute inset-x-[12%] top-[32%] h-[55%] rounded-[40%] bg-neutral-600/25" />
                <div className="absolute top-[38%] left-1/2 flex w-[72%] -translate-x-1/2 items-center justify-between">
                  <span className="h-7 w-[42%] rounded-full border-[3px] border-neutral-900/80 bg-neutral-900/20" />
                  <span className="mx-1 h-0.5 w-3 bg-neutral-900/70" />
                  <span className="h-7 w-[42%] rounded-full border-[3px] border-neutral-900/80 bg-neutral-900/20" />
                </div>
              </div>
            </div>

            <div className="absolute top-5 right-4 left-4 space-y-2.5 sm:top-8 sm:right-auto sm:left-6 sm:w-[240px]">
              {INSIGHTS.map((insight, index) => (
                <div
                  key={insight.label}
                  className="rounded-2xl border border-white/70 bg-white/95 p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-sm"
                  style={{ transform: `translateX(${index * 8}px)` }}
                >
                  <p className="text-[11px] font-medium tracking-wide text-neutral-400 uppercase">
                    {insight.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-neutral-900">
                    {insight.value}
                  </p>
                  <p className="text-xs text-[#C08B5C]">{insight.meta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
