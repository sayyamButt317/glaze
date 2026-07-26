"use client";

import { LayoutList, Settings2 } from "lucide-react";
import { FilterSelect } from "@/components/admin/shared/filter-select";
import { FILTER_OPTIONS } from "./mock-data";
import type { ProductFilters } from "./types";

type ProductsFiltersProps = {
  filters: ProductFilters;
  onChange: (filters: ProductFilters) => void;
};

export function ProductsFilters({ filters, onChange }: ProductsFiltersProps) {
  const update = <K extends keyof ProductFilters>(key: K, value: ProductFilters[K]) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <FilterSelect
          value={filters.category}
          options={FILTER_OPTIONS.category}
          onChange={(value) => update("category", value)}
        />
        <FilterSelect
          value={filters.frameType}
          options={FILTER_OPTIONS.frameType}
          onChange={(value) => update("frameType", value)}
        />
        <FilterSelect
          value={filters.lensType}
          options={FILTER_OPTIONS.lensType}
          onChange={(value) => update("lensType", value)}
        />
        <FilterSelect
          value={filters.stockStatus}
          options={FILTER_OPTIONS.stockStatus}
          onChange={(value) => update("stockStatus", value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          <Settings2 className="size-4" />
          More Filters
        </button>
        <button
          type="button"
          aria-label="List view"
          className="flex size-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          <LayoutList className="size-4" />
        </button>
      </div>
    </div>
  );
}
