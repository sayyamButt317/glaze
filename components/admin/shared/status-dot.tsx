import { cn } from "@/lib/utils";

type StatusDotProps = {
  tone: "success" | "warning" | "danger" | "muted";
  className?: string;
};

const TONE_CLASS: Record<StatusDotProps["tone"], string> = {
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
  muted: "bg-neutral-400",
};

export function StatusDot({ tone, className }: StatusDotProps) {
  return (
    <span
      aria-hidden
      className={cn("inline-block size-1.5 shrink-0 rounded-full", TONE_CLASS[tone], className)}
    />
  );
}
