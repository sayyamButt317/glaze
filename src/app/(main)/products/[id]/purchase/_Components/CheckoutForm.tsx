"use client";
import { formatCurrency } from "@/src/app/admin/lib/formatters";

import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import Link from "next/link";

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

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export function CheckoutForm({ product, clientSecret }: CheckFormProps) {
  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <div className="max-w-5xl w-full mx-auto space-y-8">
      <div className="flex items-center">
        <div className="relative w-full h-96">
          <Image
            src={product.imagePath}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col text-2xl font-sans   ">
          <div className="text-4xl tracking-widest	"> {product.name}</div>

          <div>
            {" "}
            <span className="text-sm font-semibold">IV Treatment</span>
          </div>
          <div className="text-sm font-medium text-cyan-400">
            {product.category}
          </div>
          <div className="text-2xl font-semibold">
            {formatCurrency(product.priceInCents / 100)}
          </div>

          <button className="text-sm font-semibold w-1/4 h-[40px] bg-[#ffa9f9] text-white font-sm ">
            {" "}
            {/* <Link href={`/products/${product.id}/appointment`}>Book now</Link> */}
            <button>
              <Link
                href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6L0e4YbNHKUlTQbEsf1af878yDh27sqGfzsPutzAyUm9FATSJaAO5Ba3ZIlH8afVXudgnLWatlpayldQ3yfZvEyIbF4iQq1MPNKdJln5rXiJVV8vImZiQzq5jGDh1OkChCx/wml8Ytx0PNp7kYhbnfykAmv+u3ZN130RvOzn77rdz7+ibGI8+Lv5IaP6wPT9dv7dsn3aosKxc5hn4plB2Jp5T2EQTcyjtO08IzvkH6fzWNigQqQnR5g4Q6m5nc6QQ9ayEx2y8r2j64SQsDZIHLdmlLiw+syZHFq1uJimdrs+ZD6ddkw2mDEHMf1GjLu0GHFNnY+bPcPGO/2adHXNvB2tw5aFRGrJ7CFJOK4aaKvQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Book
              </Link>
            </button>
          </button>
          <div className="line-clamp-3 text-sm text-muted-foreground mb-4">
            {product.include}
          </div>

          <div className="flex flex-row text-sm font-bold text-cyan-400">
            INGREDIENTS :{" "}
            <div className="text-sm text-black font-light">
              {"  "}
              {product.ingredients}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
