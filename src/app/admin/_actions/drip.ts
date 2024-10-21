"use server";
import db from "../../db/db";



//check function product is available for purchase
export async function toggleProductAvailability(
  id: string,
  isAvailableForPurchase: boolean
) {
  await db.product.update({
    where: { id },
    data: {
      isAvailableForPurchase,
    },
  });
}
