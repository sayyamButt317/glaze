import Link from "next/link";
import { Camera } from "lucide-react";
import { Container } from "@/components/marketing/container";

export function TryOnBanner() {
  return (
    <section className="bg-neutral-950 py-16 text-white sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-[#C08B5C] uppercase">
            Virtual Try-On
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Try before you buy.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-400">
            Launch our AR try-on experience and see every frame on your face in
            real time—no appointment needed.
          </p>
          <Link
            href="/virtual-try"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
          >
            <Camera className="size-4" />
            Launch Try-On
          </Link>
        </div>

        <div className="relative grid grid-cols-[1.2fr_0.8fr] items-end gap-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-700 to-neutral-900">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.45))]" />
            <div className="absolute inset-x-[18%] top-[18%] h-[28%] rounded-full bg-neutral-500/40" />
            <div className="absolute inset-x-[12%] top-[42%] h-[48%] rounded-[42%] bg-neutral-500/25" />
            <div className="absolute top-[48%] left-1/2 flex w-[70%] -translate-x-1/2 items-center justify-between">
              <span className="h-6 w-[42%] rounded-full border-2 border-white/80" />
              <span className="h-px w-2 bg-white/70" />
              <span className="h-6 w-[42%] rounded-full border-2 border-white/80" />
            </div>
            <div className="absolute inset-x-8 top-1/2 h-px bg-[#C08B5C]/80 shadow-[0_0_20px_rgba(192,139,92,0.8)]" />
          </div>

          <div className="relative mb-6 h-64 overflow-hidden rounded-[1.6rem] border-[3px] border-neutral-700 bg-neutral-900 shadow-2xl">
            <div className="absolute inset-x-2 top-2 bottom-2 rounded-[1.2rem] bg-neutral-800 p-3">
              <p className="text-[10px] tracking-wide text-neutral-400 uppercase">
                Try Frames
              </p>
              <div className="mt-3 space-y-2">
                {["Apex Black", "Orbit Clear", "Nova Gold"].map((name, index) => (
                  <div
                    key={name}
                    className={`rounded-xl px-3 py-2 text-xs ${
                      index === 0
                        ? "bg-white text-neutral-950"
                        : "bg-neutral-700/60 text-neutral-300"
                    }`}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
