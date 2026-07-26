"use client";

import { Bell, Search } from "lucide-react";

type AdminHeaderProps = {
  searchPlaceholder?: string;
};

export function AdminHeader({
  searchPlaceholder = "Search products, orders, customers…",
}: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-neutral-200/80 bg-[#F7F7F5]/90 px-4 py-3 backdrop-blur-md sm:px-6">
      <div className="relative mx-auto w-full max-w-xl flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="search"
          placeholder={searchPlaceholder}
          className="h-11 w-full rounded-full border border-neutral-200 bg-white pr-4 pl-10 text-sm text-neutral-800 outline-none transition-shadow placeholder:text-neutral-400 focus:border-neutral-300 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
        />
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          <Bell className="size-4" />
          <span className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
            6
          </span>
        </button>

        <button
          type="button"
          aria-label="Account"
          className="flex size-10 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white"
        >
          AU
        </button>
      </div>
    </header>
  );
}
