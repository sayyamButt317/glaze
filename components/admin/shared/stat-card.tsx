import type { ReactNode } from "react";
import {
  Ban,
  LineChart,
  ShoppingBag,
  TriangleAlert,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductStat } from "@/components/admin/products/types";

const ICON_MAP = {
  bag: ShoppingBag,
  alert: TriangleAlert,
  ban: Ban,
  chart: LineChart,
} as const;

const TONE_STYLES = {
  neutral: {
    icon: "bg-neutral-100 text-neutral-700",
    change: "text-emerald-600",
    hint: "text-neutral-500",
  },
  warning: {
    icon: "bg-amber-50 text-amber-700",
    change: "text-amber-600",
    hint: "text-amber-700",
  },
  danger: {
    icon: "bg-rose-50 text-rose-600",
    change: "text-rose-600",
    hint: "text-rose-600",
  },
  success: {
    icon: "bg-emerald-50 text-emerald-700",
    change: "text-emerald-600",
    hint: "text-neutral-500",
  },
} as const;

type StatCardProps = {
  stat: ProductStat;
  className?: string;
};

export function StatCard({ stat, className }: StatCardProps) {
  const Icon = ICON_MAP[stat.icon];
  const tone = TONE_STYLES[stat.tone];

  return (
    <article
      className={cn(
        "rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-full",
            tone.icon,
          )}
        >
          <Icon className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-neutral-500">{stat.label}</p>
          <div className="mt-1 flex items-baseline gap-2">
            <p className="text-2xl font-semibold tracking-tight text-neutral-900">
              {stat.value}
            </p>
            <span className={cn("text-xs font-medium", tone.change)}>
              {stat.change}
            </span>
          </div>
          <p className={cn("mt-1 text-xs", tone.hint)}>{stat.hint}</p>
        </div>
      </div>
    </article>
  );
}

type StatCardGridProps = {
  children: ReactNode;
  className?: string;
};

export function StatCardGrid({ children, className }: StatCardGridProps) {
  return (
    <div
      className={cn(
        "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
