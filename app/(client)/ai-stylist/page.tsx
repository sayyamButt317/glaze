import type { Metadata } from "next";
import { AiStylistPageView } from "@/components/ai-stylist/ai-stylist-page";

export const metadata: Metadata = {
  title: "AI Style Advisor",
  description:
    "Your personal eyewear stylist. Take the style quiz and get AI frame recommendations matched to your lifestyle and look.",
};

export default function AiStylistPage() {
  return <AiStylistPageView />;
}
