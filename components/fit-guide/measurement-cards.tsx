"use client";

import { useState } from "react";
import { Glasses, Ruler, UserRound } from "lucide-react";
import { Container } from "@/components/marketing/container";
import {
  BRIDGE_OPTIONS,
  FACE_SHAPES,
  MEASUREMENT_SUMMARY,
  type BridgeOption,
  type FaceShapeOption,
} from "@/lib/marketing/fit-guide-data";
import { cn } from "@/lib/utils";

function FaceShapeIcon({ shape, active }: { shape: FaceShapeOption["shape"]; active: boolean }) {
  const tone = active ? "border-neutral-900 bg-neutral-100" : "border-neutral-300";

  if (shape === "circle") {
    return <span className={cn("size-7 rounded-full border-2", tone)} />;
  }
  if (shape === "oval") {
    return <span className={cn("h-8 w-6 rounded-full border-2", tone)} />;
  }
  if (shape === "square") {
    return <span className={cn("size-7 rounded-md border-2", tone)} />;
  }
  if (shape === "heart") {
    return (
      <span
        className={cn(
          "relative size-7 border-2",
          tone,
          "rounded-[50%_50%_50%_50%/60%_60%_40%_40%]",
        )}
      />
    );
  }
  return (
    <span
      className={cn(
        "size-7 rotate-45 border-2",
        tone,
        "rounded-sm",
      )}
    />
  );
}

function BridgeIcon({ width, active }: { width: BridgeOption["width"]; active: boolean }) {
  const scale =
    width === "wide" ? "w-10" : width === "medium" ? "w-8" : "w-6";

  return (
    <span
      className={cn(
        "flex h-8 items-center justify-center rounded-lg border px-1",
        active ? "border-neutral-900 bg-neutral-100" : "border-neutral-200",
      )}
    >
      <span className={cn("flex items-center justify-between", scale)}>
        <span className="h-3 w-[38%] rounded-full border-2 border-neutral-700" />
        <span className="h-px w-1.5 bg-neutral-700" />
        <span className="h-3 w-[38%] rounded-full border-2 border-neutral-700" />
      </span>
    </span>
  );
}

function MetricValueCard({
  icon: Icon,
  title,
  value,
  hint,
}: {
  icon: typeof Ruler;
  title: string;
  value: string;
  hint: string;
}) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
      <span className="flex size-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
        <Icon className="size-4" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-neutral-950">{title}</h3>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
        {value}
      </p>
      <span className="mt-3 inline-flex rounded-full bg-[#F3E8D8] px-2.5 py-1 text-xs font-medium text-[#8B6914]">
        {hint}
      </span>
    </article>
  );
}

export function MeasurementCards() {
  const [faceShape, setFaceShape] = useState<string>(MEASUREMENT_SUMMARY.faceShape);
  const [bridge, setBridge] = useState<string>(MEASUREMENT_SUMMARY.bridge);

  return (
    <section id="measurements" className="bg-[#F7F7F5] py-12 sm:py-16">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <span className="flex size-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
              <UserRound className="size-4" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-neutral-950">
              Face Shape
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Determines the most flattering frame silhouette.
            </p>
            <div className="mt-5 flex flex-wrap items-end gap-3">
              {FACE_SHAPES.map((option) => {
                const active = faceShape === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFaceShape(option.id)}
                    className="flex flex-col items-center gap-1.5"
                    aria-pressed={active}
                  >
                    <FaceShapeIcon shape={option.shape} active={active} />
                    {active ? (
                      <span className="text-[11px] font-medium text-neutral-700">
                        {option.label}
                      </span>
                    ) : (
                      <span className="h-4" />
                    )}
                  </button>
                );
              })}
            </div>
          </article>

          <article className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <span className="flex size-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
              <Glasses className="size-4" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-neutral-950">
              Bridge Fit
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Ensures the bridge sits comfortably on your nose.
            </p>
            <div className="mt-5 flex flex-wrap items-end gap-3">
              {BRIDGE_OPTIONS.map((option) => {
                const active = bridge === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setBridge(option.id)}
                    className="flex flex-col items-center gap-1.5"
                    aria-pressed={active}
                  >
                    <BridgeIcon width={option.width} active={active} />
                    {active ? (
                      <span className="text-[11px] font-medium text-neutral-700">
                        {option.label}
                      </span>
                    ) : (
                      <span className="h-4" />
                    )}
                  </button>
                );
              })}
            </div>
          </article>

          <MetricValueCard
            icon={Ruler}
            title="Lens Width"
            value={`${MEASUREMENT_SUMMARY.lensWidthMm} mm`}
            hint="Recommended"
          />
          <MetricValueCard
            icon={Ruler}
            title="Temple Length"
            value={`${MEASUREMENT_SUMMARY.templeLengthMm} mm`}
            hint="Recommended"
          />
        </div>
      </Container>
    </section>
  );
}
