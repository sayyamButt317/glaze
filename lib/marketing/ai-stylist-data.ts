import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Briefcase,
  Check,
  CircleDashed,
  Palette,
  ScanFace,
  Shirt,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";

export type LifestyleOption = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export const LIFESTYLE_OPTIONS: LifestyleOption[] = [
  { id: "professional", label: "Professional", icon: Briefcase },
  { id: "minimal", label: "Minimal", icon: CircleDashed },
  { id: "weekend", label: "Weekend", icon: Sun },
  { id: "bold", label: "Bold", icon: Zap },
];

export type QuizMatch = {
  name: string;
  match: number;
  tone: string;
};

export const QUIZ_MATCHES: QuizMatch[] = [
  { name: "Apex Black", match: 98, tone: "bg-neutral-900" },
  { name: "Titan Gold", match: 96, tone: "bg-amber-200" },
  { name: "Urban Tortoise", match: 94, tone: "bg-orange-900/80" },
];

export type AdvisorStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export const ADVISOR_STEPS: AdvisorStep[] = [
  {
    number: "01",
    title: "Lifestyle",
    description: "Tell us how you dress and spend your week.",
    icon: Briefcase,
    href: "#quiz",
  },
  {
    number: "02",
    title: "Face Shape",
    description: "Match frames to your proportions with AI.",
    icon: ScanFace,
    href: "/face-scan",
  },
  {
    number: "03",
    title: "Wardrobe",
    description: "Upload outfits so frames complement your look.",
    icon: Shirt,
    href: "/outfit-matching",
  },
  {
    number: "04",
    title: "Color Match",
    description: "Get tones that flatter your skin and style.",
    icon: Palette,
    href: "#recommendations",
  },
];

export type RecommendedFrame = {
  id: string;
  name: string;
  tags: string;
  price: string;
  match: number;
  tone: string;
};

export const RECOMMENDED_FRAMES: RecommendedFrame[] = [
  {
    id: "1",
    name: "Apex Black",
    tags: "Clean · Modern · Versatile",
    price: "PKR 8,500",
    match: 98,
    tone: "bg-neutral-900",
  },
  {
    id: "2",
    name: "Orbit Clear",
    tags: "Light · Soft · Everyday",
    price: "PKR 6,200",
    match: 96,
    tone: "bg-stone-200",
  },
  {
    id: "3",
    name: "Nova Gold",
    tags: "Bold · Luxe · Statement",
    price: "PKR 14,500",
    match: 94,
    tone: "bg-amber-200",
  },
];

export const STYLE_DNA_TAGS = [
  "Confident",
  "Modern",
  "Detail-Oriented",
  "Minimalist",
  "Professional",
  "Refined",
  "Versatile",
  "Clean",
] as const;

export const STYLE_DNA_SUMMARY =
  "You have a Modern Professional style with a Minimalist edge.";

export { ArrowUpRight, Check, Sparkles };
