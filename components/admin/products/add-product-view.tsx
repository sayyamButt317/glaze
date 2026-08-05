import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AddProductForm } from "./add-product-form";

export function AddProductView() {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto">
      <div className="space-y-6 px-4 py-5 sm:px-6">
        <div>
          <Link
            href="/admin/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft className="size-4" />
            Back to Products
          </Link>

          <div className="mt-4">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#C08B5C] uppercase">
              Catalog Control
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Add Product
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-neutral-500">
              Create a new frame listing with variants, inventory, and SEO
              settings.
            </p>
          </div>
        </div>

        <AddProductForm />
      </div>
    </div>
  );
}
