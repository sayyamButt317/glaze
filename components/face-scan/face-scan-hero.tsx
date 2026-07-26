import Link from "next/link";
import { Lock, ScanLine } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { PhoneScanMockup } from "@/components/face-scan/phone-scan-mockup";

export function FaceScanHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,139,92,0.10),transparent_45%)]" />

      <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C08B5C] uppercase">
            AI Face Scan
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl sm:leading-[1.08]">
            Let AI find the perfect frames for your face.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg">
            Our AI analyzes your facial features and recommends frames that
            truly suit you.
          </p>

          <Link
            id="start-scan"
            href="/analysis-complete"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            <ScanLine className="size-4" />
            Start Face Scan
          </Link>

          <div className="mt-6 flex items-start gap-2.5">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-800">
              <Lock className="size-3.5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                100% Private & Secure
              </p>
              <p className="text-sm text-neutral-500">
                Your scan never leaves your device
              </p>
            </div>
          </div>
        </div>

        <PhoneScanMockup />
      </Container>
    </section>
  );
}
