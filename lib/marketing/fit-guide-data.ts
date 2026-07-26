import type { LucideIcon } from "lucide-react";
import {
  Check,
  CloudOff,
  Glasses,
  Lock,
  Scale,
  ScanFace,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

export type FaceShapeOption = {
  id: string;
  label: string;
  shape: "circle" | "oval" | "square" | "heart" | "diamond";
};

export const FACE_SHAPES: FaceShapeOption[] = [
  { id: "circle", label: "Circle", shape: "circle" },
  { id: "oval", label: "Oval", shape: "oval" },
  { id: "square", label: "Square", shape: "square" },
  { id: "heart", label: "Heart", shape: "heart" },
  { id: "diamond", label: "Diamond", shape: "diamond" },
];

export type BridgeOption = {
  id: string;
  label: string;
  width: "wide" | "medium" | "narrow";
};

export const BRIDGE_OPTIONS: BridgeOption[] = [
  { id: "wide", label: "Wide", width: "wide" },
  { id: "medium", label: "Medium", width: "medium" },
  { id: "narrow", label: "Narrow", width: "narrow" },
];

export type FitMetric = {
  id: string;
  title: string;
  description: string;
  value: number;
  icon: LucideIcon;
};

export const FIT_METRICS: FitMetric[] = [
  {
    id: "comfort",
    title: "Comfort",
    description: "How naturally the frames sit on your face.",
    value: 98,
    icon: Check,
  },
  {
    id: "balance",
    title: "Balance",
    description: "Proportion between frame and facial width.",
    value: 97,
    icon: Scale,
  },
  {
    id: "coverage",
    title: "Coverage",
    description: "Lens area aligned with eye placement.",
    value: 96,
    icon: Glasses,
  },
  {
    id: "style",
    title: "Style Match",
    description: "How well the look complements your features.",
    value: 99,
    icon: Sparkles,
  },
];

export const FIT_HIGHLIGHTS = [
  "High comfort",
  "Balanced fit",
  "Optimal coverage",
  "Great style match",
] as const;

export type PrivacyFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const FIT_PRIVACY_FEATURES: PrivacyFeature[] = [
  {
    title: "Encrypted",
    description: "End-to-end encryption keeps your data safe.",
    icon: ShieldCheck,
  },
  {
    title: "No Storage",
    description: "We don't store or keep your face data.",
    icon: CloudOff,
  },
  {
    title: "You're in Control",
    description: "Delete your data or update permissions anytime.",
    icon: Lock,
  },
];

export const MEASUREMENT_SUMMARY = {
  faceShape: "oval",
  bridge: "medium",
  lensWidthMm: 52,
  templeLengthMm: 145,
  fitScore: 98,
} as const;

export { ScanFace, UserRound };
