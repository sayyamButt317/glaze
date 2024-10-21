"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { formatCurrency } from "@/src/app/admin/lib/formatters";
import Stripe from "stripe";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

type CheckFormProps = {
  product: {
    id: string;
    imagePath: string;
    name: string;
    description: string;
    priceInCents: number;
    category: string;
    ingredients: string;
    include: string;
  };
  clientSecret: string;
};

export default function StripePayment({
  product,
  clientSecret,
}: CheckFormProps) {
  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  <Elements options={{ clientSecret }} stripe={stripePromise}>
    <Form priceInCents={product.priceInCents} />
  </Elements>;
}

function Form({ priceInCents }: { priceInCents: number }) {
  const stripe = useStripe();
  const elements = useElements();
  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          <CardDescription className="text-destructive">Error</CardDescription>
        </CardHeader>
        <CardContent>
          <PaymentElement />
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            size="lg"
            disabled={stripe == null || elements == null}
          >
            Purchase-{formatCurrency(priceInCents / 100)}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
