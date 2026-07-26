import Link from "next/link";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { CATEGORIES, type CategoryItem } from "@/lib/marketing/home-data";
import { cn } from "@/lib/utils";

function CategoryCard({ category }: { category: CategoryItem }) {
  const isDark = category.id === "ltd";

  return (
    <Link
      href={category.href}
      className="group relative block overflow-hidden rounded-3xl border border-neutral-200 bg-white"
    >
      <div
        className={cn(
          "relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:scale-[1.02]",
          category.tone,
        )}
      >
        <div className="flex w-[58%] items-center justify-center">
          <span
            className={cn(
              "flex w-full items-center justify-between",
              isDark ? "text-white/90" : "text-neutral-900/80",
            )}
          >
            <span
              className={cn(
                "h-8 w-[42%] rounded-full border-[3px]",
                isDark ? "border-white/80" : "border-neutral-900/80",
              )}
            />
            <span
              className={cn(
                "mx-1 h-0.5 w-3",
                isDark ? "bg-white/80" : "bg-neutral-900/70",
              )}
            />
            <span
              className={cn(
                "h-8 w-[42%] rounded-full border-[3px]",
                isDark ? "border-white/80" : "border-neutral-900/80",
              )}
            />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="text-base font-semibold text-neutral-950">
          {category.title}
        </h3>
        <span className="text-neutral-400 transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </Link>
  );
}

export function CollectionsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Explore Collections"
          title="Curated for every you."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
