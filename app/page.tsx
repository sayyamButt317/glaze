import type { Metadata } from "next";
import { HomePage } from "@/components/marketing/home-page";

export const metadata: Metadata = {
  title: "GLAZE | AI-Powered Eyewear",
  description:
    "Find frames made for you with AI face scan, virtual try-on, and premium eyewear crafted to perfection.",
};

export default function Home() {
  return <HomePage />;
}
