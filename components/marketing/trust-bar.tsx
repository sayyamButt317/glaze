import { Container } from "@/components/marketing/container";
import { TRUST_STATS } from "@/lib/marketing/home-data";

export function TrustBar() {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <Container className="grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-4 md:py-10">
        {TRUST_STATS.map(({ value, label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-3 sm:justify-center">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-800">
              <Icon className="size-[18px]" />
            </span>
            <div>
              <p className="text-lg font-semibold tracking-tight text-neutral-950">
                {value}
              </p>
              <p className="text-sm text-neutral-500">{label}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
