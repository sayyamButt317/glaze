import type { LucideIcon } from "lucide-react";
import {
  Brain,
  CloudOff,
  Eye,
  Glasses,
  Lock,
  MoveHorizontal,
  Palette,
  ScanFace,
  ShieldCheck,
  UserRound,
} from "lucide-react";

export type FaceScanStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const FACE_SCAN_STEPS: FaceScanStep[] = [
  {
    title: "Scan Your Face",
    description: "Use your camera to scan your face in seconds.",
    icon: ScanFace,
  },
  {
    title: "AI Analyzes",
    description: "Our AI analyzes 100+ facial data points instantly.",
    icon: Brain,
  },
  {
    title: "Get Perfect Matches",
    description: "See frames that match your style, features and personality.",
    icon: Glasses,
  },
];

export type AnalysisTrait = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const ANALYSIS_TRAITS: AnalysisTrait[] = [
  {
    title: "Face Shape",
    description: "Detects your face shape (Oval, Round, Square, etc.)",
    icon: UserRound,
  },
  {
    title: "Face Width",
    description: "Measures proportions for the right frame width.",
    icon: MoveHorizontal,
  },
  {
    title: "Nose Width",
    description: "Finds bridges that sit comfortably on your nose.",
    icon: ScanFace,
  },
  {
    title: "Eye Distance",
    description: "Aligns lenses with your natural eye spacing.",
    icon: Eye,
  },
  {
    title: "Jawline",
    description: "Balances frame shapes with your jaw structure.",
    icon: Glasses,
  },
  {
    title: "Skin Tone",
    description: "Suggests colors that complement your complexion.",
    icon: Palette,
  },
];

export type PrivacyPoint = {
  label: string;
  icon: LucideIcon;
};

export const PRIVACY_POINTS: PrivacyPoint[] = [
  { label: "No Data Stored", icon: CloudOff },
  { label: "No Data Shared", icon: ShieldCheck },
  { label: "You're in Control", icon: Lock },
];
