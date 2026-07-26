"use client";

import { Check, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusDot } from "@/components/admin/shared/status-dot";
import { cn } from "@/lib/utils";
import type { Product, StockLevel } from "./types";

type ProductDetailPanelProps = {
  product: Product;
  onClose: () => void;
};

const STOCK_TONE: Record<StockLevel, "success" | "warning" | "danger"> = {
  in_stock: "success",
  low: "warning",
  out: "danger",
};

const STOCK_LABEL: Record<StockLevel, string> = {
  in_stock: "In Stock",
  low: "Low",
  out: "Out",
};

type PanelTab = "variants" | "details" | "images" | "seo";

const TABS: { id: PanelTab; label: string }[] = [
  { id: "variants", label: "Variants" },
  { id: "details", label: "Details" },
  { id: "images", label: "Images" },
  { id: "seo", label: "SEO" },
];

export function ProductDetailPanel({ product, onClose }: ProductDetailPanelProps) {
  const activeTab: PanelTab = "variants";
  const selectedColor = product.colors[0];
  const selectedSize = product.sizes[1]?.label ?? product.sizes[0]?.label;
  const selectedMaterial = product.materials[0];

  return (
    <aside className="flex h-full w-full max-w-[380px] flex-col border-l border-neutral-200 bg-white">
      <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
        <h2 className="text-lg font-semibold tracking-tight text-neutral-900">
          {product.name}
        </h2>
        <button
          type="button"
          aria-label="Close panel"
          onClick={onClose}
          className="flex size-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="flex gap-5 border-b border-neutral-100 px-5">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={cn(
              "relative py-3 text-sm font-medium transition-colors",
              tab.id === activeTab
                ? "text-neutral-900"
                : "text-neutral-400 hover:text-neutral-600",
            )}
          >
            {tab.label}
            {tab.id === activeTab ? (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[#C08B5C]" />
            ) : null}
          </button>
        ))}
      </div>

      <div className="min-h-0 flex-1 space-y-6 overflow-y-auto px-5 py-5">
        <section>
          <p className="mb-3 text-sm font-medium text-neutral-700">Frame Color</p>
          <div className="flex flex-wrap gap-2.5">
            {product.colors.map((color) => {
              const selected = color === selectedColor;
              return (
                <button
                  key={color}
                  type="button"
                  aria-label={`Color ${color}`}
                  className={cn(
                    "relative flex size-9 items-center justify-center rounded-xl border-2 transition-transform",
                    selected ? "border-neutral-900 scale-105" : "border-transparent",
                  )}
                  style={{ backgroundColor: color }}
                >
                  {selected ? <Check className="size-3.5 text-white drop-shadow" /> : null}
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-medium text-neutral-700">Sizes</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => {
              const selected = size.label === selectedSize;
              return (
                <button
                  key={size.label}
                  type="button"
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    selected
                      ? "border-[#C08B5C] bg-[#C08B5C]/10 text-neutral-900"
                      : "border-neutral-200 text-neutral-600 hover:border-neutral-300",
                  )}
                >
                  {size.label} ({size.qty})
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-medium text-neutral-700">Material</p>
          <div className="flex flex-wrap gap-2">
            {product.materials.map((material) => {
              const selected = material === selectedMaterial;
              return (
                <button
                  key={material}
                  type="button"
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    selected
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 text-neutral-600 hover:border-neutral-300",
                  )}
                >
                  {material}
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-medium text-neutral-700">
            Variant Inventory
          </p>
          <div className="overflow-hidden rounded-xl border border-neutral-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-50 text-xs text-neutral-500">
                <tr>
                  <th className="px-3 py-2 font-medium">Variant</th>
                  <th className="px-3 py-2 font-medium">SKU</th>
                  <th className="px-3 py-2 font-medium">Stock</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {product.variants.map((variant) => (
                  <tr key={variant.id} className="border-t border-neutral-100">
                    <td className="px-3 py-2.5 text-neutral-800">{variant.label}</td>
                    <td className="px-3 py-2.5 font-mono text-xs text-neutral-500">
                      {variant.sku}
                    </td>
                    <td className="px-3 py-2.5 text-neutral-800">{variant.stock}</td>
                    <td className="px-3 py-2.5">
                      <span className="inline-flex items-center gap-1.5 text-xs text-neutral-600">
                        <StatusDot tone={STOCK_TONE[variant.status]} />
                        {STOCK_LABEL[variant.status]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-medium text-neutral-700">Product Images</p>
          <div className="flex flex-wrap gap-2.5">
            {product.images.map((image) => (
              <div
                key={image.id}
                className={cn(
                  "relative size-16 overflow-hidden rounded-xl border border-neutral-200",
                  image.tone,
                )}
              >
                {image.label ? (
                  <span className="absolute bottom-1 left-1 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white">
                    {image.label}
                  </span>
                ) : null}
              </div>
            ))}
            <button
              type="button"
              className="flex size-16 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-neutral-300 text-neutral-400 transition-colors hover:border-neutral-400 hover:text-neutral-600"
            >
              <Plus className="size-4" />
              <span className="text-[10px] font-medium">Add</span>
            </button>
          </div>
        </section>
      </div>

      <div className="flex gap-2 border-t border-neutral-100 px-5 py-4">
        <Button
          variant="outline"
          className="h-10 flex-1 rounded-full"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button className="h-10 flex-1 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">
          Save Changes
        </Button>
      </div>
    </aside>
  );
}
