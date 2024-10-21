"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "../../lib/formatters";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Injection, Product } from "@prisma/client";
import Image from "next/image";
import { updateInjection, addInjection } from "../../_actions/injection";

export function InjectionForm({ injection }: { injection?: Injection | null }) {
  const [error, action] = useFormState(injection == null ? addInjection : updateInjection.bind(null,injection.id), {});
  const [priceInCents, setpriceInCents] = useState<number | undefined>(
    injection?.priceInCents
  );
  var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        } });

  return (
    <form action={action} className="space-y-8 px-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={injection?.name || ""}
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
            defaultValue={injection?.description}
          />
          {error.description && (
            <div className="text-destructive ">{error.description}</div>
          )}
        </div>
        <div className="space-y-2">
        <Label htmlFor="title">Points</Label>
        <Input
          type="text"
          id="points"
          name="points"
          required
          defaultValue={injection?.points || ""}
        />
        {error.points && <div className="text-destructive ">{error.points}</div>}
      </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input
            type="file"
            id="image"
            name="image"
            required={injection == null}
          />
          {injection != null && (
            <Image
              src={injection.imagePath}
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

function  SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
