import db from "@/src/app/db/db";
import { notFound } from "next/navigation";
import Stripe from "stripe";
import { CheckoutForm } from "./_Components/CheckoutForm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
export default async function PurchasePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({
    where: { id },
  });
  if (product == null) return notFound();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: product.priceInCents,
    currency: "USD", 
    payment_method_types: ["card", "affirm", "cashapp", "klarna", "afterpay_clearpay", "us_bank_account"],
    metadata: { productId: product.id },
  });
  ;
  

  if (paymentIntent.client_secret == null) {
    throw Error("Stripe failed to create Payment intent");
  }
  return (
    <CheckoutForm
      product={product}
      clientSecret={paymentIntent.client_secret}
    />
  );
}
