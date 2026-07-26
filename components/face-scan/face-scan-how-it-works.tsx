import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { FACE_SCAN_STEPS } from "@/lib/marketing/face-scan-data";

export function FaceScanHowItWorks() {
  return (
    <section className="bg-[#F7F7F5] py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="How It Works"
          title="Simple. Fast. Accurate."
          align="center"
          className="sm:items-center"
        />

        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
          <div className="pointer-events-none absolute top-10 right-[16%] left-[16%] hidden border-t border-dashed border-neutral-300 md:block" />

          {FACE_SCAN_STEPS.map(({ title, description, icon: Icon }, index) => (
            <li key={title} className="relative text-center">
              <span className="relative z-10 mx-auto flex size-16 items-center justify-center rounded-2xl bg-white text-neutral-900 shadow-[0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-neutral-200">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-neutral-950">
                {index + 1}. {title}
              </h3>
              <p className="mx-auto mt-2 max-w-[240px] text-sm leading-relaxed text-neutral-500">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
