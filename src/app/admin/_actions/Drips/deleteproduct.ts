"use server";
import db from "@/src/app/db/db";
import { notFound } from "next/navigation";
import fs from "fs/promises";

export async function deleteProduct(id: string) {
    const product = await db.product.delete({ where: { id } });
    if (product == null) return notFound();
    await fs.unlink(`public${product.imagePath}`);
  }
  