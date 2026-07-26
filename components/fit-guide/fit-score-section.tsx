import { Check } from "lucide-react";
import { Container } from "@/components/marketing/container";
import {
  FIT_HIGHLIGHTS,
  FIT_METRICS,
  MEASUREMENT_SUMMARY,
} from "@/lib/marketing/fit-guide-data";

function FitScoreRing({ score }: { score: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);

  return (
    <div className="relative mx-auto flex size-40 items-center justify-center sm:size-44">
      <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 128 128">
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="10"
        />
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke="#2563EB"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="text-center">
        <p className="text-3xl font-semibold tracking-tight text-neutral-950">
          {score}%
        </p>
        <p className="text-xs font-medium text-neutral-500">Fit Score</p>
      </div>
    </div>
  );
}

export function FitScoreSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-[#F7F7F5]">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-neutral-200 p-6 sm:p-8 lg:border-r lg:border-b-0">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                How your fit score works
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
                We compare 100+ facial data points against frame geometry to
                estimate comfort, balance, coverage, and style match.
              </p>

              <div className="mt-8">
                <FitScoreRing score={MEASUREMENT_SUMMARY.fitScore} />
              </div>

              <ul className="mt-8 space-y-3">
                {FIT_HIGHLIGHTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-neutral-800"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 bg-white p-6 sm:p-8">
              {FIT_METRICS.map(({ id, title, description, value, icon: Icon }) => (
                <div key={id} className="rounded-2xl border border-neutral-100 p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Icon className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-semibold text-neutral-950">{title}</h3>
                        <span className="text-sm font-semibold text-blue-600">
                          {value}%
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-neutral-500">{description}</p>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                        <div
                          className="h-full rounded-full bg-blue-600"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
