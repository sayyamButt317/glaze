import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { BENEFITS } from "@/lib/marketing/home-data";

export function BenefitsSection() {
  return (
    <section className="bg-[#F7F7F5] py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Why Choose GLAZE"
          title="Built for better vision days."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
                <Icon className="size-[18px]" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-neutral-950">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
