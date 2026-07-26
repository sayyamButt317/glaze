import Link from "next/link";
import { ArrowRight, Upload } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { StyleQuizPreview } from "@/components/ai-stylist/style-quiz-preview";

export function AiStylistHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,139,92,0.10),transparent_45%)]" />

      <Container className="relative grid items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:py-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C08B5C] uppercase">
            AI Style Advisor
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl sm:leading-[1.08]">
            Your personal eyewear stylist.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg">
            Answer a few style questions and get frame recommendations tailored
            to your lifestyle, face, wardrobe, and color palette.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#quiz"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Start Style Quiz
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/outfit-matching"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              <Upload className="size-4" />
              Upload Outfit
            </Link>
          </div>
        </div>

        <StyleQuizPreview />
      </Container>
    </section>
  );
}
