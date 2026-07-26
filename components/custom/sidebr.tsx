"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  ChevronDown,
  Menu,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  ADMIN_NAV_ITEMS,
  DAILY_SUMMARY,
  type DailySummaryItem,
} from "@/lib/admin/nav";

export const SIDEBAR_WIDTH = 272;

type SidebarLayoutContextValue = {
  contentOffset: number;
  setContentOffset: (offset: number) => void;
};

const SidebarLayoutContext = createContext<SidebarLayoutContextValue>({
  contentOffset: SIDEBAR_WIDTH,
  setContentOffset: () => {},
});

export function SidebarLayoutProvider({ children }: { children: ReactNode }) {
  const [contentOffset, setContentOffset] = useState(SIDEBAR_WIDTH);

  return (
    <SidebarLayoutContext.Provider value={{ contentOffset, setContentOffset }}>
      {children}
    </SidebarLayoutContext.Provider>
  );
}

export function useSidebarLayout() {
  return useContext(SidebarLayoutContext);
}

function isRouteActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function TrendIcon({ trend }: { trend: DailySummaryItem["trend"] }) {
  if (trend === "warn") {
    return <TrendingUp className="size-3 text-amber-600" />;
  }
  if (trend === "down") {
    return <TrendingDown className="size-3 text-rose-500" />;
  }
  return <TrendingUp className="size-3 text-emerald-600" />;
}

function DailySummaryCard() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-3.5">
      <p className="mb-3 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
        Daily Summary
      </p>
      <ul className="space-y-2.5">
        {DAILY_SUMMARY.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-2">
            <span className="text-sm text-neutral-600">{item.label}</span>
            <span className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-neutral-900">
                {item.value}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-0.5 text-xs font-medium",
                  item.trend === "warn"
                    ? "text-amber-600"
                    : item.trend === "down"
                      ? "text-rose-500"
                      : "text-emerald-600",
                )}
              >
                <TrendIcon trend={item.trend} />
                {item.change}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col gap-1 overflow-y-auto pr-1">
      {ADMIN_NAV_ITEMS.map((item) => {
        const active = isRouteActive(pathname, item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-full px-3 py-2.5 text-sm font-medium transition-colors",
              active
                ? "bg-neutral-900 text-white shadow-sm"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
            )}
          >
            <Icon className="size-4 shrink-0" />
            <span className="flex-1">{item.label}</span>
            {item.badge ? (
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                  active
                    ? "bg-white/15 text-white"
                    : "bg-neutral-100 text-neutral-600",
                )}
              >
                {item.badge}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarBrand() {
  return (
    <div className="mb-6 flex items-baseline gap-2 px-1">
      <span className="text-xl font-semibold tracking-tight text-neutral-900">
        GLAZE
      </span>
      <span className="text-sm font-medium text-[#C08B5C]">Admin</span>
    </div>
  );
}

function SidebarUser() {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 text-left transition-colors hover:bg-neutral-50"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
        AU
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold text-neutral-900">
          Admin User
        </span>
        <span className="block truncate text-xs text-neutral-500">
          Super Admin
        </span>
      </span>
      <ChevronDown className="size-4 shrink-0 text-neutral-400" />
    </button>
  );
}

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <SidebarBrand />
      <SidebarNav onNavigate={onNavigate} />
      <div className="mt-4 space-y-3">
        <DailySummaryCard />
        <SidebarUser />
      </div>
    </div>
  );
}

export default function Sidebar() {
  const { setContentOffset } = useSidebarLayout();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setContentOffset(SIDEBAR_WIDTH);
  }, [setContentOffset]);

  return (
    <>
      <aside
        className="fixed inset-y-0 left-0 z-40 hidden w-[272px] border-r border-neutral-200 bg-white p-5 md:flex"
        style={{ width: SIDEBAR_WIDTH }}
      >
        <SidebarBody />
      </aside>

      <div className="md:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            className="fixed top-4 left-4 z-50 inline-flex size-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-900 shadow-sm"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[280px] border-r border-neutral-200 bg-white p-5"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SidebarBody onNavigate={() => setMobileOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
