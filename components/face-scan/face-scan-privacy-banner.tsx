import { Lock } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { PRIVACY_POINTS } from "@/lib/marketing/face-scan-data";

export function FaceScanPrivacyBanner() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <Container>
        <div className="rounded-[2rem] bg-[#F3F3F1] px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-950 shadow-sm">
                <Lock className="size-6" />
              </span>
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                  Private by design.
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-base">
                  Your privacy is our priority. Your face scan is processed on
                  your device and never stored or shared.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-neutral-300">
              {PRIVACY_POINTS.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 sm:flex-col sm:items-center sm:px-6 sm:text-center"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-white text-neutral-800 ring-1 ring-neutral-200">
                    <Icon className="size-4" />
                  </span>
                  <p className="text-sm font-medium text-neutral-800">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
