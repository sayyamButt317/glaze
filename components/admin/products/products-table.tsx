"use client";

import { MoreVertical, Pencil } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusDot } from "@/components/admin/shared/status-dot";
import { ToggleSwitch } from "@/components/admin/shared/toggle-switch";
import { cn } from "@/lib/utils";
import { formatPkr } from "./mock-data";
import type { Product, ProductStatus, StockLevel } from "./types";

type ProductsTableProps = {
  products: Product[];
  selectedIds: Set<string>;
  activeProductId: string | null;
  onToggleSelect: (id: string) => void;
  onToggleSelectAll: () => void;
  onToggleAiMatch: (id: string, enabled: boolean) => void;
  onEdit: (product: Product) => void;
};

const STOCK_TONE: Record<StockLevel, "success" | "warning" | "danger"> = {
  in_stock: "success",
  low: "warning",
  out: "danger",
};

const STATUS_META: Record<
  ProductStatus,
  { label: string; tone: "success" | "warning" | "danger" | "muted" }
> = {
  active: { label: "Active", tone: "success" },
  draft: { label: "Draft", tone: "muted" },
  out_of_stock: { label: "Out of Stock", tone: "danger" },
};

export function ProductsTable({
  products,
  selectedIds,
  activeProductId,
  onToggleSelect,
  onToggleSelectAll,
  onToggleAiMatch,
  onEdit,
}: ProductsTableProps) {
  const allSelected =
    products.length > 0 && products.every((product) => selectedIds.has(product.id));

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <Table>
        <TableHeader>
          <TableRow className="border-neutral-100 hover:bg-transparent">
            <TableHead className="w-10 pl-4">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={onToggleSelectAll}
                aria-label="Select all products"
                className="size-4 rounded border-neutral-300 accent-neutral-900"
              />
            </TableHead>
            <TableHead className="w-14">Image</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>AI Match</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="pr-4 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const selected = selectedIds.has(product.id);
            const active = activeProductId === product.id;
            const status = STATUS_META[product.status];

            return (
              <TableRow
                key={product.id}
                data-state={selected || active ? "selected" : undefined}
                className={cn(
                  "border-neutral-100",
                  (selected || active) && "bg-[#F7F1EA]/70",
                )}
              >
                <TableCell className="pl-4">
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => onToggleSelect(product.id)}
                    aria-label={`Select ${product.name}`}
                    className="size-4 rounded border-neutral-300 accent-[#C08B5C]"
                  />
                </TableCell>
                <TableCell>
                  <div
                    className={cn(
                      "size-10 rounded-xl border border-neutral-200",
                      product.imageTone,
                    )}
                  />
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium text-neutral-900">{product.name}</p>
                    <p className="text-xs text-neutral-500">{product.subtitle}</p>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-xs text-neutral-500">
                  {product.sku}
                </TableCell>
                <TableCell className="text-neutral-600">{product.category}</TableCell>
                <TableCell className="font-medium text-neutral-900">
                  {formatPkr(product.price)}
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-2 text-sm text-neutral-800">
                    <StatusDot tone={STOCK_TONE[product.stockLevel]} />
                    {product.stock}
                  </span>
                </TableCell>
                <TableCell>
                  <ToggleSwitch
                    checked={product.aiMatchEnabled}
                    onCheckedChange={(checked) =>
                      onToggleAiMatch(product.id, checked)
                    }
                    aria-label={`AI Match for ${product.name}`}
                  />
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700">
                    <StatusDot tone={status.tone} />
                    {status.label}
                  </span>
                </TableCell>
                <TableCell className="pr-4">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      type="button"
                      aria-label={`Edit ${product.name}`}
                      onClick={() => onEdit(product)}
                      className="flex size-8 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                    >
                      <Pencil className="size-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label={`More actions for ${product.name}`}
                      className="flex size-8 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                    >
                      <MoreVertical className="size-3.5" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
