import { FitGuideHero } from "@/components/fit-guide/fit-guide-hero";
import { FitGuidePrivacy } from "@/components/fit-guide/fit-guide-privacy";
import { FitScoreSection } from "@/components/fit-guide/fit-score-section";
import { MeasurementCards } from "@/components/fit-guide/measurement-cards";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

export function FitGuidePageView() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <SiteHeader />
      <main>
        <FitGuideHero />
        <MeasurementCards />
        <FitScoreSection />
        <FitGuidePrivacy />
      </main>
      <SiteFooter />
    </div>
  );
}
