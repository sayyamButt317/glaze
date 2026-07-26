import type { Metadata } from "next";
import { FitGuidePageView } from "@/components/fit-guide/fit-guide-page";

export const metadata: Metadata = {
  title: "Fit Guide",
  description:
    "Find your perfect frame size with AI-powered fit analysis for face shape, bridge, lens width, and temple length.",
};

export default function FitGuidePage() {
  return <FitGuidePageView />;
}
