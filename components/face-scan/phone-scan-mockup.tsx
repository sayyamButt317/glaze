export function PhoneScanMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[2.4rem] border-[10px] border-neutral-950 bg-neutral-950 shadow-[0_40px_80px_rgba(0,0,0,0.25)]">
        <div className="absolute inset-0 overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-neutral-300 via-neutral-200 to-stone-300">
          {/* Face silhouette */}
          <div className="absolute inset-x-[18%] top-[16%] h-[42%] rounded-full bg-neutral-500/35" />
          <div className="absolute inset-x-[12%] top-[42%] h-[48%] rounded-[45%] bg-neutral-600/30" />

          {/* Mesh overlay */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.75) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
              maskImage:
                "radial-gradient(ellipse 45% 55% at 50% 42%, black 30%, transparent 70%)",
            }}
          />

          {/* Corner brackets */}
          <span className="absolute top-[18%] left-[14%] h-8 w-8 border-t-2 border-l-2 border-white" />
          <span className="absolute top-[18%] right-[14%] h-8 w-8 border-t-2 border-r-2 border-white" />
          <span className="absolute bottom-[28%] left-[14%] h-8 w-8 border-b-2 border-l-2 border-white" />
          <span className="absolute right-[14%] bottom-[28%] h-8 w-8 border-r-2 border-b-2 border-white" />

          {/* Scan line */}
          <div className="absolute inset-x-[16%] top-[48%] h-0.5 bg-sky-400/90 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />

          {/* Top copy */}
          <div className="absolute inset-x-0 top-8 px-5 text-center">
            <p className="text-sm font-semibold text-white drop-shadow">
              Scanning your face
            </p>
            <p className="mt-1 text-xs text-white/80">Please look straight</p>
          </div>

          {/* Progress */}
          <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-3">
            <div className="relative flex size-16 items-center justify-center">
              <svg className="absolute inset-0 size-16 -rotate-90" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  fill="none"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="5"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 26}`}
                  strokeDashoffset={`${2 * Math.PI * 26 * (1 - 0.68)}`}
                />
              </svg>
              <span className="text-sm font-semibold text-white">68%</span>
            </div>
            <p className="text-xs text-white/85">Keep your face in the frame</p>
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-2 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-950" />
      </div>
    </div>
  );
}
