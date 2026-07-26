import type { Metadata } from "next";
import { FaceScanPageView } from "@/components/face-scan/face-scan-page";

export const metadata: Metadata = {
  title: "AI Face Scan",
  description:
    "Let AI analyze your facial features and recommend frames that truly suit you. Private, on-device, and secure.",
};

export default function FaceScanPage() {
  return <FaceScanPageView />;
}
