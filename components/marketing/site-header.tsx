"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ChevronDown,
  Heart,
  Menu,
  ScanLine,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { Container } from "@/components/marketing/container";
import { NAV_LINKS } from "@/lib/marketing/home-data";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  variant?: "default" | "scan" | "advisor";
};

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const showScanCta = variant === "scan" || variant === "advisor";
  const showUtilities = variant !== "scan";

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <Link
          href="/"
          className="text-xl font-semibold tracking-[0.18em] text-neutral-950"
        >
          GLAZE
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative inline-flex items-center gap-1 py-1 text-sm font-medium transition-colors",
                  active
                    ? "text-neutral-950"
                    : "text-neutral-600 hover:text-neutral-950",
                )}
              >
                {link.label}
                {link.hasMenu ? (
                  <ChevronDown className="size-3.5 opacity-60" />
                ) : null}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[#C08B5C]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {showScanCta ? (
            <Link
              href="/face-scan"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-neutral-950 px-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:px-4"
            >
              <ScanLine className="size-4" />
              <span className="hidden sm:inline">Start Scan</span>
            </Link>
          ) : null}

          {showUtilities
            ? [
                { icon: Search, label: "Search", href: "/smart-search" },
                { icon: Heart, label: "Wishlist", href: "/saved-frames" },
                { icon: User, label: "Account", href: "/my-glaze" },
                { icon: ShoppingBag, label: "Bag", href: "/bag", badge: 2 },
              ].map(({ icon: Icon, label, href, badge }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="relative flex size-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100"
                >
                  <Icon className="size-[18px]" />
                  {badge ? (
                    <span className="absolute top-1 right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-neutral-950 px-1 text-[10px] font-semibold text-white">
                      {badge}
                    </span>
                  ) : null}
                </Link>
              ))
            : null}

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "flex size-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100",
              "xl:hidden",
            )}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-neutral-200 bg-white transition-[max-height,opacity] duration-300 xl:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-3 py-3 text-sm font-medium hover:bg-neutral-50",
                isActivePath(pathname, link.href)
                  ? "bg-neutral-50 text-neutral-950"
                  : "text-neutral-700",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
