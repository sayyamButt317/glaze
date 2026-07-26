"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FilterSelectProps = {
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  className?: string;
};

export function FilterSelect({
  value,
  options,
  onChange,
  className,
}: FilterSelectProps) {
  return (
    <div className={cn("relative min-w-[140px]", className)}>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 w-full appearance-none rounded-xl border border-neutral-200 bg-white px-3 pr-9 text-sm text-neutral-700 outline-none transition-colors hover:border-neutral-300 focus:border-neutral-400"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-neutral-400" />
    </div>
  );
}
