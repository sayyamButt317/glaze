import { Lock } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { FIT_PRIVACY_FEATURES } from "@/lib/marketing/fit-guide-data";

export function FitGuidePrivacy() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <Container>
        <div className="rounded-[2rem] bg-[#F3F3F1] px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-xl flex-col gap-4 sm:flex-row sm:items-start">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-950 shadow-sm">
                <Lock className="size-5" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                  Private by design.
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-base">
                  Your fit data is encrypted and processed with privacy first.
                  We never sell your information or keep unnecessary face data.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
              {FIT_PRIVACY_FEATURES.map(({ title, description, icon: Icon }) => (
                <div key={title} className="sm:max-w-[160px]">
                  <span className="flex size-10 items-center justify-center rounded-full bg-white text-neutral-800 ring-1 ring-neutral-200">
                    <Icon className="size-4" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-neutral-900">
                    {title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
