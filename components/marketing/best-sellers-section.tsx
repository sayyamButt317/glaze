"use client";

import Link from "next/link";
import { useRef } from "react";
import { ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { BEST_SELLERS, type ProductItem } from "@/lib/marketing/home-data";
import { cn } from "@/lib/utils";

function ProductCard({ product }: { product: ProductItem }) {
  return (
    <Link
      href="/product-details"
      className="group min-w-[240px] snap-start sm:min-w-[260px]"
    >
      <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-shadow hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
        <div
          className={cn(
            "relative flex aspect-[4/3] items-center justify-center",
            product.tone,
          )}
        >
          <span className="flex w-[55%] items-center justify-between text-white/90">
            <span className="h-7 w-[42%] rounded-full border-[3px] border-current opacity-80" />
            <span className="mx-1 h-0.5 w-2.5 bg-current opacity-70" />
            <span className="h-7 w-[42%] rounded-full border-[3px] border-current opacity-80" />
          </span>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-neutral-950">{product.name}</h3>
              <p className="mt-1 text-sm text-neutral-500">{product.price}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600">
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              {product.rating.toFixed(1)} ({product.reviews})
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              {product.match}% Match
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function BestSellersSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    scrollerRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4 sm:mb-12">
          <SectionHeader
            eyebrow="Best Sellers"
            title="Frames everyone is loving."
            className="mb-0"
          />
          <button
            type="button"
            aria-label="Scroll products"
            onClick={scrollNext}
            className="mb-1 flex size-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {BEST_SELLERS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
