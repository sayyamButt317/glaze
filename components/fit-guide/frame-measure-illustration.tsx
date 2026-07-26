const CALLOUTS = [
  { label: "Lens Width", top: "34%", left: "18%" },
  { label: "Bridge", top: "40%", left: "48%" },
  { label: "Temple", top: "48%", left: "78%" },
  { label: "Frame Width", top: "72%", left: "42%" },
] as const;

export function FrameMeasureIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-neutral-100 to-stone-50" />

      <div className="absolute inset-[12%] rounded-full border border-dashed border-neutral-300/80" />

      {/* Face wireframe */}
      <div className="absolute inset-x-[24%] top-[18%] h-[58%]">
        <div
          className="absolute inset-0 rounded-[45%] border border-neutral-400/50"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(163,163,163,0.2) 1px, transparent 1px), linear-gradient(rgba(163,163,163,0.2) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="absolute inset-x-[16%] top-[8%] h-[26%] rounded-full border border-neutral-400/40" />
        <div className="absolute top-[40%] left-[20%] size-1.5 rounded-full bg-neutral-500/60" />
        <div className="absolute top-[40%] right-[20%] size-1.5 rounded-full bg-neutral-500/60" />
        <div className="absolute top-[48%] left-1/2 h-8 w-6 -translate-x-1/2 rounded-b-full border border-neutral-400/40" />
        <div className="absolute inset-x-[24%] bottom-[12%] h-6 rounded-b-[50%] border border-neutral-400/40" />
      </div>

      {/* Glasses */}
      <div className="absolute top-[38%] left-1/2 flex w-[58%] -translate-x-1/2 items-center justify-between">
        <span className="h-12 w-[44%] rounded-full border-[3px] border-neutral-900" />
        <span className="h-0.5 w-3 bg-neutral-900" />
        <span className="h-12 w-[44%] rounded-full border-[3px] border-neutral-900" />
      </div>
      <span className="absolute top-[42%] left-[16%] h-0.5 w-8 -rotate-12 bg-neutral-900" />
      <span className="absolute top-[42%] right-[16%] h-0.5 w-8 rotate-12 bg-neutral-900" />

      {/* Measurement callouts */}
      {CALLOUTS.map((item) => (
        <div
          key={item.label}
          className="absolute"
          style={{ top: item.top, left: item.left }}
        >
          <span className="absolute -top-3 left-0 h-3 w-px bg-[#C08B5C]/70" />
          <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium tracking-wide text-[#8B6914] shadow-sm ring-1 ring-[#C08B5C]/25">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
