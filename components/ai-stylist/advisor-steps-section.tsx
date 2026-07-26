import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { ADVISOR_STEPS } from "@/lib/marketing/ai-stylist-data";

export function AdvisorStepsSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {ADVISOR_STEPS.map(({ number, title, description, icon: Icon, href }) => (
            <article
              key={number}
              className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-[#F7F7F5] p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-neutral-900 ring-1 ring-neutral-200">
                  <Icon className="size-[18px]" />
                </span>
                <span className="text-sm font-semibold text-neutral-400">
                  {number}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-neutral-950">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
                {description}
              </p>
              <div className="mt-5 flex justify-end">
                <Link
                  href={href}
                  aria-label={`Go to ${title}`}
                  className="flex size-10 items-center justify-center rounded-full bg-neutral-950 text-white transition-transform hover:scale-105"
                >
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
