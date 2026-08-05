import { z } from "zod";

export const PRODUCT_CATEGORIES = [
  "Prescription Glasses",
  "Everyday Wear",
  "Luxury Frames",
  "Blue Light",
  "Sunglasses",
] as const;

export const FRAME_TYPES = ["Full Rim", "Semi Rimless", "Rimless"] as const;

export const LENS_TYPES = ["Single Vision", "Progressive", "Blue Light"] as const;

export const MATERIALS = ["Acetate", "Titanium", "Metal", "TR90"] as const;

export const SIZES = ["S", "M", "L"] as const;

export const addProductSchema = z.object({
  name: z.string().trim().min(2, "Product name is required"),
  subtitle: z.string().trim().min(2, "Subtitle is required"),
  sku: z.string().trim().min(3, "SKU is required"),
  category: z.enum(PRODUCT_CATEGORIES, {
    error: "Select a category",
  }),
  frameType: z.enum(FRAME_TYPES, {
    error: "Select a frame type",
  }),
  lensType: z.enum(LENS_TYPES, {
    error: "Select a lens type",
  }),
  material: z.enum(MATERIALS, {
    error: "Select a material",
  }),
  price: z.number().positive("Price must be greater than 0"),
  stock: z.number().int().min(0, "Stock cannot be negative"),
  status: z.enum(["active", "draft", "out_of_stock"]),
  aiMatchEnabled: z.boolean(),
  colors: z.array(z.string()).min(1, "Add at least one frame color"),
  sizes: z.array(z.enum(SIZES)).min(1, "Select at least one size"),
  description: z.string().trim().optional(),
  metaTitle: z.string().trim().optional(),
  metaDescription: z.string().trim().optional(),
  slug: z
    .string()
    .trim()
    .regex(/^[a-z0-9-]*$/, "Use lowercase letters, numbers, and hyphens only")
    .optional(),
});

export type AddProductFormValues = z.infer<typeof addProductSchema>;

export const ADD_PRODUCT_DEFAULTS: AddProductFormValues = {
  name: "",
  subtitle: "",
  sku: "",
  category: "Prescription Glasses",
  frameType: "Full Rim",
  lensType: "Single Vision",
  material: "Acetate",
  price: 0,
  stock: 0,
  status: "draft",
  aiMatchEnabled: true,
  colors: ["#111111"],
  sizes: ["M"],
  description: "",
  metaTitle: "",
  metaDescription: "",
  slug: "",
};
