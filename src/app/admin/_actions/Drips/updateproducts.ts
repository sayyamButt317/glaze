
"use server";
import db from "@/src/app/db/db";
import { notFound, redirect } from "next/navigation";
import fs from "fs/promises";
import {addSchema,imageSchema} from "../../_schema/dripschema"

const editSchema = addSchema.extend({
    image: imageSchema.optional(),
  });
  
  //update products
  export async function updateProduct(
    id: string,
    prevState: unknown,
    formData: FormData
  ) {
    const result = editSchema.safeParse(Object.fromEntries(formData.entries()));
    if (result.success === false) {
      return result.error.formErrors.fieldErrors;
    }
  
    const data = result.data;
    const product = await db.product.findUnique({
      where: {
        id,
      },
    });
    if (product == null) return notFound();
  
    //default image path
    let imagePath = product.imagePath;
    if (data.image != null && data.image.size > 0) {
      //unlink previous file
      await fs.unlink(`public${product.imagePath}`);
      //create a path of new file
      imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
      await fs.writeFile(
        `public${imagePath}`,
        Buffer.from(await data.image.arrayBuffer())
      );
    }
    //create product and redirect into new page
    await db.product.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        priceInCents: data.priceInCents,
        category:data.category,
        ingredients:data.ingredients,
        include:data.include,
        imagePath,
      },
    });
    redirect("/admin/products");
  }