import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  LayoutDashboard,
  Megaphone,
  Package,
  Receipt,
  Settings,
  ShoppingBag,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

export type AdminNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
  { label: "Overview", href: "/admin/overview", icon: LayoutDashboard },
  { label: "Orders", href: "/admin/orders", icon: ShoppingBag, badge: "124" },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Inventory", href: "/admin/inventory", icon: Boxes },
  { label: "Customers", href: "/admin/customers", icon: Users, badge: "1.2K" },
  { label: "Prescriptions", href: "/admin/prescriptions", icon: Receipt },
  { label: "AI Insights", href: "/admin/insights", icon: Sparkles },
  { label: "Reviews", href: "/admin/reviews", icon: Star, badge: "98" },
  { label: "Marketing", href: "/admin/marketing", icon: Megaphone },
  { label: "Settings", href: "/admin/setting", icon: Settings },
];

export type DailySummaryItem = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "warn";
};

export const DAILY_SUMMARY: DailySummaryItem[] = [
  { label: "Orders", value: "142", change: "18%", trend: "up" },
  { label: "Revenue", value: "PKR 1.85M", change: "12%", trend: "up" },
  { label: "New Customers", value: "36", change: "8%", trend: "up" },
  { label: "Low Stock Items", value: "7", change: "2", trend: "warn" },
];
