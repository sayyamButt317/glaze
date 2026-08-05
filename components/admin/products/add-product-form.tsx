"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleSwitch } from "@/components/admin/shared/toggle-switch";
import {
  FormField,
  FormInput,
  FormSection,
  FormSelect,
  FormTextarea,
} from "@/components/admin/shared/form-field";
import {
  ADD_PRODUCT_DEFAULTS,
  addProductSchema,
  FRAME_TYPES,
  LENS_TYPES,
  MATERIALS,
  PRODUCT_CATEGORIES,
  SIZES,
  type AddProductFormValues,
} from "./add-product-schema";
import { cn } from "@/lib/utils";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function AddProductForm() {
  const router = useRouter();
  const [colorInput, setColorInput] = useState("#111111");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AddProductFormValues>({
    resolver: zodResolver(addProductSchema),
    defaultValues: ADD_PRODUCT_DEFAULTS,
  });

  const name = watch("name");
  const colors = watch("colors");
  const sizes = watch("sizes");
  const aiMatchEnabled = watch("aiMatchEnabled");
  const price = watch("price");
  const status = watch("status");

  const toggleSize = (size: (typeof SIZES)[number]) => {
    const next = sizes.includes(size)
      ? sizes.filter((item) => item !== size)
      : [...sizes, size];
    setValue("sizes", next, { shouldValidate: true });
  };

  const addColor = () => {
    if (!colors.includes(colorInput)) {
      setValue("colors", [...colors, colorInput], { shouldValidate: true });
    }
  };

  const removeColor = (color: string) => {
    setValue(
      "colors",
      colors.filter((item) => item !== color),
      { shouldValidate: true },
    );
  };

  const onSubmit = async (data: AddProductFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("Product created:", data);
    router.push("/admin/products");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          <FormSection
            title="Basic Information"
            description="Core product details shown in the catalog."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                label="Product Name"
                htmlFor="name"
                error={errors.name?.message}
                className="sm:col-span-2"
              >
                <FormInput
                  id="name"
                  placeholder="Apex Black"
                  error={Boolean(errors.name)}
                  {...register("name", {
                    onChange: (event) => {
                      const value = event.target.value;
                      if (!watch("slug")) {
                        setValue("slug", slugify(value));
                      }
                      if (!watch("metaTitle")) {
                        setValue("metaTitle", value);
                      }
                    },
                  })}
                />
              </FormField>

              <FormField
                label="Subtitle"
                htmlFor="subtitle"
                error={errors.subtitle?.message}
                className="sm:col-span-2"
              >
                <FormInput
                  id="subtitle"
                  placeholder="Matte Black · Acetate"
                  error={Boolean(errors.subtitle)}
                  {...register("subtitle")}
                />
              </FormField>

              <FormField
                label="SKU"
                htmlFor="sku"
                error={errors.sku?.message}
              >
                <FormInput
                  id="sku"
                  placeholder="GLZ-APX-BLK-52"
                  error={Boolean(errors.sku)}
                  {...register("sku")}
                />
              </FormField>

              <FormField
                label="Category"
                htmlFor="category"
                error={errors.category?.message}
              >
                <FormSelect
                  id="category"
                  error={Boolean(errors.category)}
                  {...register("category")}
                >
                  {PRODUCT_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </FormSelect>
              </FormField>

              <FormField
                label="Price (PKR)"
                htmlFor="price"
                error={errors.price?.message}
              >
                <FormInput
                  id="price"
                  type="number"
                  min={0}
                  step={100}
                  placeholder="8500"
                  error={Boolean(errors.price)}
                  {...register("price", { valueAsNumber: true })}
                />
              </FormField>

              <FormField
                label="Status"
                htmlFor="status"
                error={errors.status?.message}
              >
                <FormSelect
                  id="status"
                  error={Boolean(errors.status)}
                  {...register("status")}
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                  <option value="out_of_stock">Out of Stock</option>
                </FormSelect>
              </FormField>
            </div>
          </FormSection>

          <FormSection
            title="Frame Details"
            description="Specifications used for fit and filtering."
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <FormField
                label="Frame Type"
                htmlFor="frameType"
                error={errors.frameType?.message}
              >
                <FormSelect
                  id="frameType"
                  error={Boolean(errors.frameType)}
                  {...register("frameType")}
                >
                  {FRAME_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </FormSelect>
              </FormField>

              <FormField
                label="Lens Type"
                htmlFor="lensType"
                error={errors.lensType?.message}
              >
                <FormSelect
                  id="lensType"
                  error={Boolean(errors.lensType)}
                  {...register("lensType")}
                >
                  {LENS_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </FormSelect>
              </FormField>

              <FormField
                label="Material"
                htmlFor="material"
                error={errors.material?.message}
              >
                <FormSelect
                  id="material"
                  error={Boolean(errors.material)}
                  {...register("material")}
                >
                  {MATERIALS.map((material) => (
                    <option key={material} value={material}>
                      {material}
                    </option>
                  ))}
                </FormSelect>
              </FormField>
            </div>
          </FormSection>

          <FormSection
            title="Variants"
            description="Configure colors and available sizes."
          >
            <div className="space-y-5">
              <div>
                <p className="mb-2 text-sm font-medium text-neutral-800">
                  Frame Colors
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => removeColor(color)}
                      className="group relative size-9 rounded-xl border-2 border-neutral-200"
                      style={{ backgroundColor: color }}
                      aria-label={`Remove color ${color}`}
                    >
                      <span className="absolute -top-1.5 -right-1.5 flex size-4 items-center justify-center rounded-full bg-neutral-900 text-white opacity-0 transition-opacity group-hover:opacity-100">
                        <X className="size-2.5" />
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-3 flex gap-2">
                  <FormInput
                    type="color"
                    value={colorInput}
                    onChange={(event) => setColorInput(event.target.value)}
                    className="h-10 w-14 cursor-pointer px-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 rounded-xl"
                    onClick={addColor}
                  >
                    <Plus className="size-4" data-icon="inline-start" />
                    Add Color
                  </Button>
                </div>
                {errors.colors ? (
                  <p className="mt-1.5 text-xs text-rose-600">
                    {errors.colors.message}
                  </p>
                ) : null}
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-neutral-800">
                  Sizes
                </p>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((size) => {
                    const active = sizes.includes(size);
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => toggleSize(size)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                          active
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : "border-neutral-200 text-neutral-600 hover:border-neutral-300",
                        )}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
                {errors.sizes ? (
                  <p className="mt-1.5 text-xs text-rose-600">
                    {errors.sizes.message}
                  </p>
                ) : null}
              </div>
            </div>
          </FormSection>

          <FormSection
            title="Inventory"
            description="Track stock levels for this product."
          >
            <FormField
              label="Stock Quantity"
              htmlFor="stock"
              error={errors.stock?.message}
              className="max-w-xs"
            >
              <FormInput
                id="stock"
                type="number"
                min={0}
                step={1}
                placeholder="48"
                error={Boolean(errors.stock)}
                  {...register("stock", { valueAsNumber: true })}
              />
            </FormField>
          </FormSection>

          <FormSection title="Description" description="Optional product copy.">
            <FormField
              label="Description"
              htmlFor="description"
              error={errors.description?.message}
            >
              <FormTextarea
                id="description"
                placeholder="Premium acetate frames with a matte black finish..."
                error={Boolean(errors.description)}
                {...register("description")}
              />
            </FormField>
          </FormSection>

          <FormSection title="SEO" description="Search and sharing metadata.">
            <div className="grid gap-4">
              <FormField
                label="Meta Title"
                htmlFor="metaTitle"
                error={errors.metaTitle?.message}
              >
                <FormInput
                  id="metaTitle"
                  placeholder="Apex Black | GLAZE"
                  error={Boolean(errors.metaTitle)}
                  {...register("metaTitle")}
                />
              </FormField>

              <FormField
                label="Meta Description"
                htmlFor="metaDescription"
                error={errors.metaDescription?.message}
              >
                <FormTextarea
                  id="metaDescription"
                  placeholder="Shop Apex Black prescription frames..."
                  error={Boolean(errors.metaDescription)}
                  {...register("metaDescription")}
                />
              </FormField>

              <FormField
                label="URL Slug"
                htmlFor="slug"
                error={errors.slug?.message}
                hint="Used in the product URL"
              >
                <FormInput
                  id="slug"
                  placeholder="apex-black"
                  error={Boolean(errors.slug)}
                  {...register("slug")}
                />
              </FormField>
            </div>
          </FormSection>
        </div>

        <aside className="space-y-5">
          <div className="sticky top-24 space-y-5">
            <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-semibold text-neutral-900">Preview</p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200">
                <div
                  className="flex aspect-[4/3] items-center justify-center"
                  style={{ backgroundColor: colors[0] ?? "#111111" }}
                >
                  <span className="flex w-[55%] items-center justify-between text-white/85">
                    <span className="h-7 w-[42%] rounded-full border-[3px] border-current" />
                    <span className="mx-1 h-0.5 w-2.5 bg-current" />
                    <span className="h-7 w-[42%] rounded-full border-[3px] border-current" />
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-neutral-950">
                    {name || "Product Name"}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    {price ? `PKR ${Number(price).toLocaleString("en-PK")}` : "PKR 0"}
                  </p>
                  <p className="mt-2 inline-flex rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium capitalize text-neutral-700">
                    {status.replace("_", " ")}
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    AI Match
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-500">
                    Enable style recommendations
                  </p>
                </div>
                <ToggleSwitch
                  checked={aiMatchEnabled}
                  onCheckedChange={(checked) =>
                    setValue("aiMatchEnabled", checked)
                  }
                  aria-label="Enable AI Match"
                />
              </div>
            </section>

            <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <p className="mb-3 text-sm font-semibold text-neutral-900">
                Product Images
              </p>
              <button
                type="button"
                className="flex h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-neutral-300 text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-700"
              >
                <Plus className="size-5" />
                <span className="text-sm font-medium">Upload Images</span>
              </button>
              <p className="mt-2 text-xs text-neutral-500">
                PNG, JPG up to 5MB. First image becomes the main photo.
              </p>
            </section>

            <div className="flex flex-col gap-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-11 rounded-full bg-neutral-900 text-white hover:bg-neutral-800"
              >
                {isSubmitting ? "Saving..." : "Save Product"}
              </Button>
              <Link
                href="/admin/products"
                className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-200 bg-white px-4 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
              >
                Cancel
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </form>
  );
}
