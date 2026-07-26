import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { HOW_IT_WORKS } from "@/lib/marketing/home-data";

export function HowItWorksSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="How GLAZE Works"
          title="Four steps to your perfect pair."
          align="center"
          className="sm:items-center"
        />

        <ol className="relative grid gap-8 md:grid-cols-4 md:gap-4">
          <div className="pointer-events-none absolute top-8 right-[12%] left-[12%] hidden border-t border-dashed border-neutral-300 md:block" />
          {HOW_IT_WORKS.map(({ title, description, icon: Icon }, index) => (
            <li key={title} className="relative text-center">
              <span className="relative z-10 mx-auto flex size-16 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-sm">
                <Icon className="size-5" />
              </span>
              <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-[#C08B5C] uppercase">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-neutral-950">
                {title}
              </h3>
              <p className="mx-auto mt-2 max-w-[200px] text-sm leading-relaxed text-neutral-500">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
