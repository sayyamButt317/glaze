"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Container } from "@/components/marketing/container";
import {
  RECOMMENDED_FRAMES,
  STYLE_DNA_SUMMARY,
  STYLE_DNA_TAGS,
  type RecommendedFrame,
} from "@/lib/marketing/ai-stylist-data";
import { cn } from "@/lib/utils";

function FrameCard({
  frame,
  liked,
  onToggleLike,
}: {
  frame: RecommendedFrame;
  liked: boolean;
  onToggleLike: () => void;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
      <div className={cn("relative flex aspect-[4/3] items-center justify-center", frame.tone)}>
        <button
          type="button"
          aria-label={liked ? `Remove ${frame.name} from wishlist` : `Save ${frame.name}`}
          onClick={onToggleLike}
          className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-sm backdrop-blur-sm transition-colors hover:text-rose-500"
        >
          <Heart
            className={cn("size-4", liked && "fill-rose-500 text-rose-500")}
          />
        </button>
        <span className="flex w-[58%] items-center justify-between text-white/90">
          <span className="h-8 w-[42%] rounded-full border-[3px] border-current opacity-85" />
          <span className="mx-1 h-0.5 w-2.5 bg-current opacity-70" />
          <span className="h-8 w-[42%] rounded-full border-[3px] border-current opacity-85" />
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-neutral-950">{frame.name}</h3>
            <p className="mt-1 text-xs text-neutral-500">{frame.tags}</p>
          </div>
          <p className="text-sm font-semibold text-neutral-900">{frame.price}</p>
        </div>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          {frame.match}% Match
        </div>
      </div>
    </article>
  );
}

function PersonalityCard() {
  const [activeTags, setActiveTags] = useState<string[]>([
    "Confident",
    "Modern",
    "Minimalist",
    "Professional",
  ]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };

  return (
    <aside className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
      <p className="text-xs font-semibold tracking-[0.16em] text-[#C08B5C] uppercase">
        Glasses Personality
      </p>
      <h3 className="mt-2 text-xl font-semibold text-neutral-950">
        Your style DNA.
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {STYLE_DNA_TAGS.map((tag) => {
          const active = activeTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              aria-pressed={active}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                active
                  ? "border-[#C08B5C] bg-[#C08B5C]/10 text-neutral-900"
                  : "border-neutral-200 text-neutral-600 hover:border-neutral-300",
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-start gap-2.5 rounded-2xl bg-[#F7F7F5] p-4">
        <Sparkles className="mt-0.5 size-4 shrink-0 text-[#C08B5C]" />
        <p className="text-sm leading-relaxed text-neutral-600">
          {STYLE_DNA_SUMMARY}
        </p>
      </div>
    </aside>
  );
}

export function RecommendationsSection() {
  const [liked, setLiked] = useState<Set<string>>(() => new Set());

  const toggleLike = (id: string) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="recommendations" className="bg-[#F7F7F5] py-12 sm:py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
            Recommended for you
          </h2>
          <Link
            href="/curated-shop"
            className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 transition-opacity hover:opacity-70"
          >
            View all frames
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.7fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {RECOMMENDED_FRAMES.map((frame) => (
              <FrameCard
                key={frame.id}
                frame={frame}
                liked={liked.has(frame.id)}
                onToggleLike={() => toggleLike(frame.id)}
              />
            ))}
          </div>
          <PersonalityCard />
        </div>
      </Container>
    </section>
  );
}
