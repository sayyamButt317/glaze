"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "../../lib/formatters";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Product } from "@prisma/client";
import Image from "next/image";
import { addProduct } from "../../_actions/Drips/addproduct";
import { updateProduct } from "../../_actions/Drips/updateproducts";
import { PlusCircle, Trash } from "lucide-react";

export function ProductForm({ product }: { product?: Product | null }) {
  const [error, action] = useFormState(
    product == null ? addProduct : updateProduct.bind(null, product.id),
    {}
  );
  const [priceInCents, setpriceInCents] = useState<number | undefined>(
    product?.priceInCents
  );
  var [date, setDate] = useState(new Date())

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <form action={action} className="space-y-8 px-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={product?.name || ""}
        />
        {error.name && <div className="text-destructive ">{error.name}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price In Cents</Label>
        <Input
          type="text"
          id="priceInCents"
          name="priceInCents"
          required
          value={priceInCents}
          onChange={(e) => setpriceInCents(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
          {error.priceInCents && (
            <div className="text-destructive ">{error.priceInCents}</div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            required
            defaultValue={product?.description}
          />
          {error.description && (
            <div className="text-destructive ">{error.description}</div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Include</Label>
          <Textarea
            id="include"
            name="include"
            required
            defaultValue={product?.include}
          />
          {error.description && (
            <div className="text-destructive ">{error.description}</div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Category</Label>
          <Input
            type="text"
            id="category"
            name="category"
            required
            defaultValue={product?.category || ""}
          />
          {error.category && (
            <div className="text-destructive ">{error.category}</div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Ingredient</Label>
          <Input
            type="text"
            id="ingredients"
            name="ingredients"
            required
            defaultValue={product?.ingredients || ""}
          />
          {error.ingredients && (
            <div className="text-destructive ">{error.ingredients}</div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input
            type="file"
            id="image"
            name="image"
            required={product == null}
          />
          {product != null && (
            <Image
              src={product.imagePath}
              height="400"
              width="400"
              alt="Product Image"
            />
          )}
          {error.image && (
            <div className="text-destructive ">{error.image}</div>
          )}
        </div>
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
