import type { LucideIcon } from "lucide-react";
import {
  Aperture,
  ArrowRight,
  BadgeCheck,
  Boxes,
  Camera,
  Glasses,
  Package,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  hasMenu?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Shop", href: "/curated-shop", hasMenu: true },
  { label: "Prescription", href: "/prescription" },
  { label: "Sunglasses", href: "/sunglasses" },
  { label: "AI Try-On", href: "/virtual-try" },
  { label: "AI Style Advisor", href: "/ai-stylist" },
  { label: "Explore", href: "/smart-search", hasMenu: true },
  { label: "About", href: "/about" },
];

export type TrustStat = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export const TRUST_STATS: TrustStat[] = [
  { value: "25,000+", label: "Happy Customers", icon: Users },
  { value: "98%", label: "AI Fit Accuracy", icon: ScanFace },
  { value: "500+", label: "Premium Frames", icon: Glasses },
  { value: "4.9/5", label: "Customer Rating", icon: Star },
];

export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  visual: "scan" | "tryon" | "advisor";
};

export const FEATURES: FeatureItem[] = [
  {
    id: "scan",
    title: "AI Face Scan",
    description:
      "Map your face shape, proportions, and style cues in seconds with precision AI.",
    href: "/face-scan",
    visual: "scan",
  },
  {
    id: "tryon",
    title: "Virtual Try-On",
    description:
      "See frames on your face instantly with AR try-on across phone and desktop.",
    href: "/virtual-try",
    visual: "tryon",
  },
  {
    id: "advisor",
    title: "Style Advisor",
    description:
      "Get curated recommendations that match your look, lifestyle, and lens needs.",
    href: "/style-advisor",
    visual: "advisor",
  },
];

export type CategoryItem = {
  id: string;
  title: string;
  href: string;
  tone: string;
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: "rx",
    title: "Prescription Glasses",
    href: "/prescription",
    tone: "from-neutral-200 to-neutral-100",
  },
  {
    id: "sun",
    title: "Sunglasses",
    href: "/sunglasses",
    tone: "from-stone-300 to-stone-100",
  },
  {
    id: "blue",
    title: "Blue Light",
    href: "/blue-light",
    tone: "from-sky-200 to-slate-100",
  },
  {
    id: "lux",
    title: "Luxury Collection",
    href: "/luxury",
    tone: "from-amber-100 to-neutral-100",
  },
  {
    id: "min",
    title: "Minimal Designs",
    href: "/curated-shop",
    tone: "from-zinc-200 to-white",
  },
  {
    id: "ltd",
    title: "Limited Edition",
    href: "/best-sellers",
    tone: "from-neutral-800 to-neutral-600",
  },
];

export type StepItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const HOW_IT_WORKS: StepItem[] = [
  {
    title: "AI Scan",
    description: "We analyze your face shape and proportions.",
    icon: ScanFace,
  },
  {
    title: "Find Your Match",
    description: "AI recommends frames tailored to you.",
    icon: Sparkles,
  },
  {
    title: "Try Virtually",
    description: "See how they look before you buy.",
    icon: Camera,
  },
  {
    title: "Order & Enjoy",
    description: "Premium glasses delivered to your door.",
    icon: Package,
  },
];

export type BenefitItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const BENEFITS: BenefitItem[] = [
  {
    title: "Premium Materials",
    description: "Acetate, titanium, and hand-finished frames.",
    icon: BadgeCheck,
  },
  {
    title: "AI Powered",
    description: "Fit and style guidance built into every step.",
    icon: Aperture,
  },
  {
    title: "Prescription Ready",
    description: "Upload your Rx and we’ll handle the rest.",
    icon: Glasses,
  },
  {
    title: "30-Day Returns",
    description: "Love them or send them back, no stress.",
    icon: ShieldCheck,
  },
  {
    title: "Luxury Packaging",
    description: "Unboxing designed to feel like a gift.",
    icon: Boxes,
  },
  {
    title: "Fast Delivery",
    description: "Tracked shipping across Pakistan.",
    icon: Truck,
  },
];

export type ProductItem = {
  id: string;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  match: number;
  tone: string;
};

export const BEST_SELLERS: ProductItem[] = [
  {
    id: "1",
    name: "Apex Black",
    price: "PKR 8,500",
    rating: 4.9,
    reviews: 235,
    match: 98,
    tone: "bg-neutral-900",
  },
  {
    id: "2",
    name: "Orbit Clear",
    price: "PKR 6,200",
    rating: 4.8,
    reviews: 182,
    match: 96,
    tone: "bg-stone-200",
  },
  {
    id: "3",
    name: "Nova Gold",
    price: "PKR 14,500",
    rating: 4.9,
    reviews: 146,
    match: 94,
    tone: "bg-amber-200",
  },
  {
    id: "4",
    name: "Pulse Blue",
    price: "PKR 7,800",
    rating: 4.7,
    reviews: 210,
    match: 97,
    tone: "bg-sky-800",
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Frames", href: "/curated-shop" },
      { label: "Sunglasses", href: "/sunglasses" },
      { label: "Blue Light", href: "/blue-light" },
      { label: "Best Sellers", href: "/best-sellers" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Order Tracking", href: "/order-tracking" },
      { label: "Returns", href: "/returns" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Visit Glaze", href: "/visit-glaze" },
      { label: "Style Advisor", href: "/style-advisor" },
      { label: "Gift Cards", href: "/gift" },
    ],
  },
] as const;

export { ArrowRight };
