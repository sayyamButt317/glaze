"use server";
import db from "@/src/app/db/db";
import { redirect } from "next/navigation";
import fs from "fs/promises";
import { addSchema } from "../../_schema/dripschema"
export async function addProduct(prevState: unknown, formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
    if (result.success === false) {
        return result.error.formErrors.fieldErrors;
    }

    const data = result.data;
    //make directory and assign random id to products


    await fs.mkdir("public/products", { recursive: true });
    const imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
    await fs.writeFile(
        `public${imagePath}`,
        Buffer.from(await data.image.arrayBuffer())
    );

    //create product and redirect into new page
    await db.product.create({
        data: {
            name: data.name,
            category: data.category,
            ingredients: data.ingredients,
            description: data.description,
            include: data.include,
            priceInCents: data.priceInCents,
            imagePath,
            isAvailableForPurchase: false,
        },
    });
    redirect("/admin/products");
}
