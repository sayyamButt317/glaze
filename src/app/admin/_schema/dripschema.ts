import { z } from "zod";

//validation for file and image
const fileSchema = z.instanceof(File, { message: "Required" });
export const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);
const iconSchema = fileSchema.refine(
  (file) => file.size > 0 && file.type.startsWith("icon/")
);
//schema validation using zod
export const addSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  ingredients: z.string().min(1),
  include:z.string().min(1),
  priceInCents: z.coerce.number().int().min(1),
  image: imageSchema.refine((file) => file.size > 0, "Required"),
});