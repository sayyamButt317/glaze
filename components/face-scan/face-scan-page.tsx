import { FaceScanAnalysis } from "@/components/face-scan/face-scan-analysis";
import { FaceScanHero } from "@/components/face-scan/face-scan-hero";
import { FaceScanHowItWorks } from "@/components/face-scan/face-scan-how-it-works";
import { FaceScanPrivacyBanner } from "@/components/face-scan/face-scan-privacy-banner";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

export function FaceScanPageView() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <SiteHeader variant="scan" />
      <main>
        <FaceScanHero />
        <FaceScanHowItWorks />
        <FaceScanAnalysis />
        <FaceScanPrivacyBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
