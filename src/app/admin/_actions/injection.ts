"use server";
import db from "@/src/app/db/db";
import { z } from "zod";
import fs from "fs/promises";
import { notFound, redirect } from "next/navigation";

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

const addSchema = z.object({
  name: z.string().min(1),
  priceInCents: z.coerce.number().int().min(1),
  description: z.string().min(1),
  points: z.string().min(1),
  image: imageSchema.refine((file) => file.size > 0, "Required"),
});

export async function addInjection(prevState: unknown, formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await fs.mkdir("public/Injections", { recursive: true });
  const imagePath = `/Injections/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await data.image.arrayBuffer())
  );

  await db.injection.create({
    data: {
      name: data.name,
      priceInCents: data.priceInCents,
      description: data.description,
      points: data.points,
      imagePath,
    },
  });
  redirect("/admin/products/Injections");
}

const editSchema = addSchema.extend({
  image: imageSchema.optional(),
});

export async function updateInjection(
  id: string,
  prevState: unknown,
  formData: FormData
) {
  const result = editSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return result.error.formErrors.formErrors;
  }

  const data = result.data;
  const product = await db.injection.findUnique({
    where: {
      id,
    },
  });
  if (product === null) return notFound(); 


  let imagePath = product.imagePath;
  if (data.image && data.image.size > 0) {
    await fs.unlink(`public${product.imagePath}`); 
    imagePath = `/Injections/${crypto.randomUUID()}-${data.image.name}`; 
    await fs.writeFile(
      `public${imagePath}`,
      Buffer.from(await data.image.arrayBuffer())
    );
  }
  
  await db.injection.update({
    where: { id },
    data: {
      name: data.name,
      priceInCents: data.priceInCents,
      description: data.description,
      points: data.points,
      imagePath,
    },
  });
  redirect("/admin/products/Injections");
}

//check function product is available for purchase
export async function toggleProductAvailability(
  id: string,
  isAvailableForPurchase: boolean
) {
  await db.injection.update({
    where: { id },
    data: {
      isAvailableForPurchase,     
    },
  });
}
//delete the products
export async function deleteProduct(id: string) {
  const product = await db.injection.delete({ where: { id } });
  if (product == null) return notFound();
  await fs.unlink(`public${product.imagePath}`);
}

