import Link from "next/link";
import { ScanLine } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { FrameMeasureIllustration } from "@/components/fit-guide/frame-measure-illustration";

export function FitGuideHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(192,139,92,0.08),transparent_45%)]" />

      <Container className="relative grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C08B5C] uppercase">
            Fit Guide
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl sm:leading-[1.08]">
            Find your perfect frame size.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg">
            We analyze face shape, bridge, lens width, and temple fit so every
            pair feels made for you.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/face-scan"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              <ScanLine className="size-4" />
              Start Face Scan
            </Link>
            <Link
              href="#measurements"
              className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 transition-opacity hover:opacity-70"
            >
              Measure manually
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <FrameMeasureIllustration />
      </Container>
    </section>
  );
}
