"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import {
  LIFESTYLE_OPTIONS,
  QUIZ_MATCHES,
} from "@/lib/marketing/ai-stylist-data";
import { cn } from "@/lib/utils";

const STEPS = [1, 2, 3, 4] as const;

export function StyleQuizPreview() {
  const [selected, setSelected] = useState<string[]>(["professional", "minimal"]);
  const currentStep = 2;

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div
      id="quiz"
      className="overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-[#F3F3F1] shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
    >
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-neutral-900">
              Your Style Quiz
            </p>
            <p className="text-xs text-neutral-500">
              Step {currentStep} of {STEPS.length}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            {STEPS.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex size-7 items-center justify-center rounded-full text-xs font-semibold",
                    step <= currentStep
                      ? "bg-neutral-950 text-white"
                      : "bg-white text-neutral-400 ring-1 ring-neutral-200",
                  )}
                >
                  {step}
                </span>
                {index < STEPS.length - 1 ? (
                  <span
                    className={cn(
                      "hidden h-px w-6 sm:block",
                      step < currentStep ? "bg-neutral-900" : "bg-neutral-300",
                    )}
                  />
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-neutral-950">
              Your Lifestyle
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Select all that apply
            </p>
          </div>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {LIFESTYLE_OPTIONS.map(({ id, label, icon: Icon }) => {
              const active = selected.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggle(id)}
                  aria-pressed={active}
                  className={cn(
                    "flex items-center gap-2.5 rounded-2xl border px-3.5 py-3 text-left text-sm font-medium transition-colors",
                    active
                      ? "border-[#C08B5C] bg-white text-neutral-950 shadow-sm"
                      : "border-transparent bg-white/70 text-neutral-700 hover:bg-white",
                  )}
                >
                  <Icon className="size-4 shrink-0 text-neutral-600" />
                  <span className="flex-1">{label}</span>
                  {active ? (
                    <Check className="size-4 text-[#C08B5C]" strokeWidth={2.5} />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="mt-auto pt-6">
            <div className="flex items-center gap-2.5 rounded-2xl border border-neutral-200 bg-white px-4 py-3">
              <Sparkles className="size-4 text-[#C08B5C]" />
              <p className="text-sm text-neutral-600">
                AI is analyzing your style...
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-neutral-300 via-neutral-200 to-stone-200 lg:min-h-full">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.35))]" />
          <div className="absolute inset-x-[18%] top-[14%] h-[30%] rounded-full bg-neutral-500/35" />
          <div className="absolute inset-x-[12%] top-[38%] h-[52%] rounded-[42%] bg-neutral-600/25" />
          <div className="absolute top-[42%] left-1/2 flex w-[62%] -translate-x-1/2 items-center justify-between">
            <span className="h-7 w-[42%] rounded-full border-[3px] border-neutral-900/85 bg-neutral-900/15" />
            <span className="h-0.5 w-2.5 bg-neutral-900/70" />
            <span className="h-7 w-[42%] rounded-full border-[3px] border-neutral-900/85 bg-neutral-900/15" />
          </div>

          <div className="absolute top-5 right-4 left-4 space-y-2 sm:left-auto sm:w-[200px]">
            {QUIZ_MATCHES.map((match, index) => (
              <div
                key={match.name}
                className="rounded-2xl border border-white/70 bg-white/95 px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm"
                style={{ transform: `translateX(${index * 6}px)` }}
              >
                <div className="flex items-center gap-2.5">
                  <span className={cn("size-8 rounded-lg", match.tone)} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-neutral-900">
                      {match.name}
                    </p>
                    <p className="text-xs font-medium text-emerald-600">
                      {match.match}% Match
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
