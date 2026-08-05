"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Pagination } from "@/components/admin/shared/pagination";
import { StatCard, StatCardGrid } from "@/components/admin/shared/stat-card";
import { ProductDetailPanel } from "./product-detail-panel";
import { ProductsFilters } from "./products-filters";
import { ProductsTable } from "./products-table";
import { PRODUCTS, PRODUCT_STATS } from "./mock-data";
import type { Product, ProductFilters } from "./types";

const INITIAL_FILTERS: ProductFilters = {
  category: "All Categories",
  frameType: "All Frame Types",
  lensType: "All Lens Types",
  stockStatus: "All Stock",
};

function matchesFilters(product: Product, filters: ProductFilters) {
  if (
    filters.category !== "All Categories" &&
    product.category !== filters.category
  ) {
    return false;
  }

  if (filters.stockStatus === "In Stock" && product.stockLevel !== "in_stock") {
    return false;
  }
  if (filters.stockStatus === "Low Stock" && product.stockLevel !== "low") {
    return false;
  }
  if (filters.stockStatus === "Out of Stock" && product.stockLevel !== "out") {
    return false;
  }

  return true;
}

function useIsXlUp() {
  const [isXlUp, setIsXlUp] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const update = () => setIsXlUp(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isXlUp;
}

export function ProductsView() {
  const isXlUp = useIsXlUp();
  const [products, setProducts] = useState(PRODUCTS);
  const [filters, setFilters] = useState<ProductFilters>(INITIAL_FILTERS);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(["1"]),
  );
  const [activeProductId, setActiveProductId] = useState<string | null>("1");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const filtered = useMemo(
    () => products.filter((product) => matchesFilters(product, filters)),
    [products, filters],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);
  const activeProduct =
    products.find((product) => product.id === activeProductId) ?? null;

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    const allSelected = pageItems.every((product) => selectedIds.has(product.id));
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allSelected) {
        pageItems.forEach((product) => next.delete(product.id));
      } else {
        pageItems.forEach((product) => next.add(product.id));
      }
      return next;
    });
  };

  const toggleAiMatch = (id: string, enabled: boolean) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, aiMatchEnabled: enabled } : product,
      ),
    );
  };

  return (
    <div className="flex h-full min-h-0">
      <div className="min-w-0 flex-1 overflow-y-auto">
        <div className="space-y-5 px-4 py-5 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#C08B5C] uppercase">
                Catalog Control
              </p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                Products & Inventory
              </h1>
            </div>
            <Link
              href="/admin/products/new"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              <Plus className="size-4" data-icon="inline-start" />
              Add Product
            </Link>
          </div>

          <StatCardGrid>
            {PRODUCT_STATS.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </StatCardGrid>

          <ProductsFilters
            filters={filters}
            onChange={(next) => {
              setFilters(next);
              setPage(1);
            }}
          />

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <ProductsTable
              products={pageItems}
              selectedIds={selectedIds}
              activeProductId={activeProductId}
              onToggleSelect={toggleSelect}
              onToggleSelectAll={toggleSelectAll}
              onToggleAiMatch={toggleAiMatch}
              onEdit={(product) => setActiveProductId(product.id)}
            />
            <Pagination
              page={page}
              totalPages={totalPages}
              totalItems={filtered.length}
              pageSize={pageSize}
              itemLabel="products"
              onPageChange={setPage}
              onPageSizeChange={(size) => {
                setPageSize(size);
                setPage(1);
              }}
            />
          </div>
        </div>
      </div>

      {activeProduct && isXlUp ? (
        <div className="h-full">
          <ProductDetailPanel
            product={activeProduct}
            onClose={() => setActiveProductId(null)}
          />
        </div>
      ) : null}

      <Sheet
        open={Boolean(activeProduct) && !isXlUp}
        onOpenChange={(open) => {
          if (!open) setActiveProductId(null);
        }}
      >
        <SheetContent
          side="right"
          showCloseButton={false}
          className="w-full max-w-[400px] p-0 sm:max-w-[400px]"
        >
          <SheetTitle className="sr-only">
            {activeProduct?.name ?? "Product details"}
          </SheetTitle>
          {activeProduct ? (
            <ProductDetailPanel
              product={activeProduct}
              onClose={() => setActiveProductId(null)}
            />
          ) : null}
        </SheetContent>
      </Sheet>
    </div>
  );
}
